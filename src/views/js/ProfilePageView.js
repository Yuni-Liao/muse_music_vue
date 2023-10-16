// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

import FolBtnBig from "@/components/FolBtnBig.vue";
import PlayBtnBig from "@/components/PlayBtnBig.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import player from "@/components/player.vue";
import Typed from "@/components/Typed.vue";

export default {
  components: {
    FolBtnBig,
    PlayBtnBig,
    AddSlBtn,
    AddFavBtn,
    player,
    Swiper,
    SwiperSlide,
    Typed,
  },

  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      login_mem_id: "",
      pageMemid: 0,
      //swiper
      modules: [Scrollbar],
      showCountUp: false,
      tabtype: 1,
      // 簡介顯示更多
      introline: 4,
      isReadmoreBtn: Boolean,
      isReadMore: false,
      //歌曲顯示更多
      songnum: 5,
      isShowMoreSong: false,
      memData: {}, //會員資料，物件
      albData: [],
      songData: [],
      slData: [],
      playerId: "", //播放器使用
      AllSlSong: "",
      typeshow: false,
      weatherLoc: "",
      weatherRShow: false,
      weather: {
        result: "", //天氣結果
        temp: "", //溫度
        resultImg: "noweather.png",
      },
      weatherSong: {
        s_img: "weather.jpg",
      },
      weatherNoSong: {
        isNotfind: false,
        msg: "推薦歌曲",
      },
      //活動
      act: [
        {
          date: "2023/8/1",
          content:
            "月色好美，有了一段新旋律，趕緊拿出紙和筆記下，期待與你們分享!",
          num: 633,
        },
        {
          date: "2023/7/25",
          content: "8/23晚上8:00 信義區新光三越A11前，不見不散! 期待看到你們✨",
          num: 358,
        },
        {
          date: "2023/6/23",
          content: "剛剛吃了火鍋🥘🥘🥘，好飽好睏! 晚上開直播聊聊天消化",
          num: 103,
        },
        {
          date: "2023/5/7",
          content:
            "剛寫了一段歌詞，猜猜是甚麼主題~ 按讚100明天晚上開直播小唱一段❤️",
          num: 2343,
        },
        {
          date: "2023/2/14",
          content: "情人節快樂，各位都是我的情人~~~ ❤️❤️❤️",
          num: 2138,
        },
      ],
    };
  },
  mounted() {
    this.pageMemid = this.$route.params.memid;
    this.login_mem_id = localStorage.getItem("mem_id");

    //是否顯示"顯示更多"按鈕
    const readmoreBtn = () => {
      let itlSH = this.$refs.itl.scrollHeight;
      if (itlSH > 54) {
        this.isReadmoreBtn = true;
      } else {
        this.isReadmoreBtn = false;
      }
    };

    //fetch 會員資料
    if (this.pageMemid) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getMemDetail.php?memid=${this.pageMemid}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.memData = res))
        .then(() => {
          readmoreBtn();
          this.showCountUp = true;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    //fetch 會員專輯
    if (this.pageMemid) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileAlbum.php?memid=${this.pageMemid}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.albData = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }
    //fetch 會員歌曲
    if (this.pageMemid) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileSong.php?memid=${this.pageMemid}&stat=1`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.songData = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    //fetch 會員公開歌單
    if (this.pageMemid) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfilePublicSonglist.php?memid=${this.pageMemid}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          this.slData = res;
          this.fetchSlSong();
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    // setTimeout(() => {
    //   readmoreBtn();
    // }, 300);
    // setTimeout(() => {
    //   this.showCountUp = true;
    // }, 300);
  },
  computed: {},
  methods: {
    changTab(num) {
      this.tabtype = num;
      if (num == 0) {
        setTimeout(() => {
          this.typeshow = true;
        }, 100);
      }
    },
    //歌單撥放器使用
    fetchSlSong() {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getAllSlSong.php`
      );
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.AllSlSong = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
    fetchWeather() {
      if (this.weatherLoc == "") {
        alert("請選擇所在地點");
      } else {
        const AUTHORIZATION_KEY = "CWA-4428B752-EDDD-4E1D-98C9-8E6999C2685A";
        const LOCATION_NAME = this.weatherLoc;
        //const weatherResult =
        fetch(
          `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.weather.result =
              data.records.location[0].weatherElement[20].elementValue; //天氣結果
            this.weather.temp =
              data.records.location[0].weatherElement[3].elementValue; //溫度
          })
          .then(() => {
            if (this.weather.result == "陰") {
              this.weather.resultImg = "rainy.png";
              this.findWeatherSong(14);
            } else if (this.weather.result == "晴") {
              this.weather.resultImg = "sun.png";
              this.findWeatherSong(19);
            } else if (this.weather.result == "多雲") {
              this.weather.resultImg = "cloud.png";
              this.findWeatherSong(13);
            }
          });
      }
    },
    findWeatherSong(mcatnum) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getWeatherSong.php?memid=${this.pageMemid}&mcatid=${mcatnum}`
      );
      fetch(apiURL)
        .then((res) => res.json())
        // .then((res) => (this.weatherSong = res))
        .then((res) => {
          if (res == "") {
            this.weatherSong.s_name = this.songData[0].s_name;
            this.weatherSong.s_img = this.songData[0].s_img;
            this.weatherSong.s_id = this.songData[0].s_id;
            this.weatherSong.mcat_name = "";
            this.weatherNoSong.isNotfind = true;
            this.weatherNoSong.msg = "沒有找到合適歌曲　但這首歌也很好聽!";
          } else {
            this.weatherSong = res;
          }
          this.weatherRShow = true;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
    //切換簡介顯示內容
    readmore() {
      this.isReadMore = !this.isReadMore;
    },
    //轉換K單位
    changeNum(num) {
      //let nnum = Number(num);
      if (num > 1000) {
        return num / 1000;
      } else {
        let numm = parseInt(num);
        return numm;
      }
    },
    //顯示更多歌曲
    showMoreSong() {
      if (this.songnum >= this.songData.length) {
        this.isShowMoreSong = !this.isShowMoreSong;
        this.songnum = 5;
      } else {
        this.songnum += 5;
        if (this.songnum >= this.songData.length) {
          this.isShowMoreSong = !this.isShowMoreSong;
        }
      }
    },
    //播放器使用------------------------------------
    openPlayer(sid) {
      this.allSid = [sid];
      this.$refs.player.putallsong();
      this.playerId = sid;
      this.$nextTick(() => {
        this.$refs.player.playMusic();
      });
    },
    async openPlayerSl(slid) {
      await this.$refs.player.putallsong();

      let m = this.getSIdListBySlId(slid);
      this.allSid = m;
      this.playerId = m[0];

      this.$nextTick(() => {
        this.$refs.player.playMusic();
      });
    },
    //查詢歌單歌曲，回傳一陣列
    getSIdListBySlId(slId) {
      for (let i = 0; i < this.AllSlSong.length; i++) {
        if (this.AllSlSong[i].sl_id === slId) {
          return this.AllSlSong[i].s_id_list_all;

          //let m = this.AllSlSong[i].s_id_list_all;
          // alert(m);
        }
      }
      // 若未找到匹配的sl_id，則回傳一個空陣列
      this.allSid = [];
    },
    changeSId(newSId) {
      // 切換上下首--使用從子組件接收的新 s_id 更新 s_id prop
      this.playerId = newSId;
    },
    //頁面切換----------------------
    gotosinglealbum(abid) {
      let aa = this.$router.push({
        name: "singlealbum",
        params: {
          salid: abid,
        },
      });
    },
    gotosinglemusic(sid) {
      this.$router.push({
        name: "singlemusic",
        params: {
          sid,
        },
      });
    },
    gotosonglist(slid) {
      // this.$router.push("/singlesonglist");
      this.$router.push({
        name: "singlesonglist",
        params: {
          slid,
        },
      });
    },
    like(e, index) {
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
        this.act[index].num--;
      } else {
        e.target.classList.add("active");
        this.act[index].num++;
      }
    },
  },
};

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

export default {
  components: {
    FolBtnBig,
    PlayBtnBig,
    AddSlBtn,
    AddFavBtn,
    player,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      login_mem_id: 1, //這個之後要再改
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

    //fetch 個人主頁會員資料
    const fetchProfileMemData = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getMemDetail.php?memid=${this.pageMemid}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.memData = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    //fetch 會員專輯
    const fetchalbData = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileAlbum.php?memid=${this.pageMemid}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.albData = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    //fetch 會員歌曲
    const fetchsongData = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileSong.php?memid=${this.pageMemid}&stat=1`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.songData = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    //fetch 會員公開歌單
    const fetchslData = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfilePublicSonglist.php?memid=${this.pageMemid}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.slData = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };

    //執行fetch
    fetchProfileMemData();
    fetchslData();
    fetchalbData();
    fetchsongData();

    //是否顯示"顯示更多"按鈕
    const readmoreBtn = () => {
      let itlSH = this.$refs.itl.scrollHeight;
      if (itlSH > 54) {
        this.isReadmoreBtn = true;
      } else {
        this.isReadmoreBtn = false;
      }
    };

    setTimeout(() => {
      readmoreBtn();
    }, 300);
    setTimeout(() => {
      this.showCountUp = true;
    }, 300);
  },
  computed: {},
  methods: {
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
    openPlayer() {
      this.$refs.player.playMusic();
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

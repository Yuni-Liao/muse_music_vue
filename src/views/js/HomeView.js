import IndexPlayer from "@/components/IndexPlayer.vue";
import MuseBoy from "@/components/MuseBoy.vue";
import Typed from "@/components/Typed.vue";
import player from "@/components/player.vue";

//引入swiper-------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
//引入viewUI Grid系統-------------------------
import { Grid, GridItem } from "view-ui-plus";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  EffectFade,
  EffectCards,
} from "swiper/modules";
// -----------------------------------

export default {
  components: {
    Swiper,
    SwiperSlide,
    Grid,
    GridItem,
    MuseBoy,
    Typed,
    player,
    IndexPlayer,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      // 音樂測驗換下一頁 - 廖妍榛
      quesOne: false,
      quesTwo: false,
      quesThree: false,
      quesFour: false,
      quesFive: false,
      quesEnd: false,
      startMuz: false,
      // 倒數計時器
      timerValue: null,
      showWeekTopmusic: false,
      // 首頁頂部Banner - 廖妍榛
      topBanner: [
        {
          img: "",
          link: "",
        },
      ], // 存放輪播圖的空陣列

      // 本週熱門歌曲輪播 - 黃珮菁
      SongRank: [],
      // 本週熱門專輯 -廖妍榛
      albumRank: [], // 存放本週熱門專輯的空陣列

      // 情緒歌單測驗題 - 廖妍榛
      ques: [
        {
          title: "今天星期一，鬧鐘一響，醒來的你想法是什麼？",
          ans: [
            "全新的一週，動力滿滿活力滿滿！",
            "好累，好想繼續睡",
            "沒有特別感受，腦袋空空",
          ],
        },
        {
          title: "午休做了個好長的夢，下列哪個是你希望做的夢?",
          ans: [
            "在酒吧和約會對象渡過火辣的夜晚",
            "和初戀相遇，以朋友的身份互相問候",
            "努力好久，終於開了間夢想的咖啡廳！",
          ],
        },
        {
          title: "下午公司團購下午茶，哪一個是你會想點的?",
          ans: [
            "溫暖帶點甜的布朗尼搭配鍋煮奶茶",
            "大人才懂得的苦澀回甘咖啡",
            "清爽的綠茶搭配剛出爐的司康",
          ],
        },
        {
          title: "用餐時,突然出現上空辣妹、猛男,你希望他和你說什麼 ?",
          ans: [
            "나랑 사귈래？ (要跟我交往嗎？)",
            "Do you want to watch Netflix and chill?",
            "我愛你，每一天",
          ],
        },
        {
          title: "晚上睡前希望挑哪一部電影陪伴你一天的結束呢?",
          ans: ["鐵達尼號", "再見可魯", "當男人戀愛時"],
        },
      ],
      // swiper
      modules: [Autoplay, EffectCoverflow, Pagination, EffectFade, EffectCards],
    };
  },
  methods: {
    gotosinglemusic(sid) {
      this.$router.push({
        name: "singlemusic",
        params: {
          sid,
        },
      });
    },
    openplayer() {
      // alert("呼叫懸浮播放器");
      this.$refs.player.playMusic();
    },
    //各題音樂測驗按鈕 - 廖妍榛
    gameStart() {
      this.quesOne = true;
    },
    nextQuesTwo() {
      this.quesTwo = true;
    },
    nextQuesThree() {
      this.quesThree = true;
    },
    nextQuesFour() {
      this.quesFour = true;
    },
    nextQuesFive() {
      this.quesFive = true;
    },
    endBtn() {
      this.quesEnd = true;
    },
    startMuzBtn() {
      this.startMuz = true;
    },
    startTimer() {
      //  倒數計時 2 秒換下一頁
      const intervalId = setInterval(() => {
        const findMuz = document.getElementById("findUrMuz");
        if (findMuz) {
          this.timerValue++;
          if (this.timerValue === 3) {
            this.startMuz = true;
          }
        }
      }, 2000);
      this.intervalId = intervalId;
    },
    turnMusic() {
      const audio = this.$refs.myMuz;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
  },
  mounted() {
    //fetch 本週熱門歌曲
    const fetchSongRank = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getRankSong.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.SongRank = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchSongRank();
    this.startTimer();
    // fetch 本週熱門專輯 - 廖妍榛
    const fetchAlbumRank = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getIndexPopularAlbum.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.albumRank = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchAlbumRank();
    // fetch 首頁輪播圖 - 廖妍榛
    const fetchCarousel = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getIndexBanner.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          this.topBanner = res;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchCarousel();

    setTimeout(() => {
      this.showWeekTopmusic = true;
    }, 100);
  },
  beforeUnmount() {
    // 清除計時器
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  },
};

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
      // 首頁頂部Banner - 廖妍榛
      topBanner: [{
        img: '',
      }], // 存放輪播圖的空陣列

      // 本週熱門歌曲輪播 - 黃珮菁
      songs: [
        {
          sid: 1,
          title: "宇宙飛行1",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 2,
          title: "宇宙飛行2",
          image: "index_grid_05.png",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 3,
          title: "宇宙飛行3",
          image: "index_grid_08.png",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 4,
          title: "宇宙飛行4",
          image: "index_grid_06.png",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 5,
          title: "宇宙飛行5",
          image: "index_grid_04.png",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 6,
          title: "宇宙飛行6",
          image: "index_grid_03.png",
          songLink: "/shopProd/1",
          singer: "桌子樂團7",
          views: 0,
        },
        {
          sid: 7,
          title: "宇宙飛行7",
          image: "song01.jpg",
          songLink: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 8,
          title: "宇宙飛行8",
          image: "index_grid_05.png",
          songLink: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 8,
          title: "宇宙飛行9",
          image: "index_grid_02.png",
          songLink: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 9,
          title: "宇宙飛行10",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
      ],

      // 本週熱門專輯 -廖妍榛
      a: [
        {
          image: [
            "index_grid_01.png",
            "index_grid_01.png",
            "index_grid_01.png",
            "index_grid_01.png",
            "index_grid_01.png",
            "index_grid_01.png",
            "index_grid_01.png",
            "index_grid_01.png",
            "index_grid_01.png",
          ],
          name: [
            "RockYou",
            "RockYou",
            "RockYou",
            "RockYou",
            "RockYou",
            "RockYou",
            "RockYou",
            "RockYou",
            "RockYou",
          ],
        },
      ],
      album: [
        {
          ranking: "1",
          alb: "Aden Scott",
          name: "RockYou",
          image: "index_grid_01.png",
        },
        {
          ranking: "2",
          alb: "桌子樂團",
          name: "藍色",
          image: "index_grid_02.png",
        },
        {
          alb: "東西肯恩",
          ranking: "3",
          name: "LOVE",
          image: "index_grid_03.png",
        },
        {
          alb: "溫室花朵",
          ranking: "4",
          name: "Faded",
          image: "index_grid_04.png",
        },
        {
          alb: "潛水大象",
          ranking: "5",
          name: "有個念頭",
          image: "index_grid_05.png",
        },
        {
          alb: "Apple Jump",
          ranking: "6",
          name: "作夢的顏色",
          image: "index_grid_06.png",
        },
        {
          alb: "消防車",
          ranking: "7",
          name: "花火",
          image: "index_grid_07.png",
        },
        {
          alb: "榕樹幫",
          ranking: "8",
          name: "你看不見",
          image: "index_grid_08.png",
        },
        {
          alb: "Bye Bye Lucy",
          ranking: "9",
          name: "芭比",
          image: "index_grid_09.png",
        },
      ],

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
        query: {
          q: sid,
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
    this.startTimer();
    //先檢查資料格式是否符合DB規則
    const url = `http://localhost/muse_music/public/api/postIndexBanner.php`;
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(url, {
      method: "POST",
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("取得 data 失敗");
        }
      })
      .then((json) => {
        this.topBanner = json;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
  beforeUnmount() {
    // 清除計時器
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  },
};

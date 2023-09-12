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
  data() {
    return {
      // 首頁頂部Banner - 廖妍榛
      topBanner: [
        {
          image: "index_topbanner_01.jpg",
        },
        {
          image: "song01.jpg",
        },
        {
          image: "index_topbanner_01.jpg",
        },
        {
          image: "song01.jpg",
        },
      ],
      // 新歌推薦輪播、本週熱門歌曲輪播 - 黃珮菁
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
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 3,
          title: "宇宙飛行3",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 4,
          title: "宇宙飛行4",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 5,
          title: "宇宙飛行5",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 6,
          title: "宇宙飛行6",
          image: "song01.jpg",
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
          image: "song01.jpg",
          songLink: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          sid: 8,
          title: "宇宙飛行9",
          image: "song01.jpg",
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
          alb: "專輯．Aden Scott",
          name: "RockYou",
          image: "index_grid_01.png",
        },
        {
          ranking: "2",
          alb: "專輯．桌子樂團",
          name: "藍色",
          image: "index_grid_02.png",
        },
        {
          alb: "專輯．東西肯恩",
          ranking: "3",
          name: "LOVE",
          image: "index_grid_03.png",
        },
        {
          alb: "專輯．溫室花朵",
          ranking: "4",
          name: "Faded",
          image: "index_grid_04.png",
        },
        {
          alb: "專輯．潛水大象",
          ranking: "5",
          name: "有個念頭",
          image: "index_grid_05.png",
        },
        {
          alb: "專輯．Apple Jump",
          ranking: "6",
          name: "作夢的顏色",
          image: "index_grid_06.png",
        },
        {
          alb: "專輯．消防車",
          ranking: "7",
          name: "花火",
          image: "index_grid_07.png",
        },
        {
          alb: "專輯．榕樹幫",
          ranking: "8",
          name: "你看不見",
          image: "index_grid_08.png",
        },
        {
          alb: "專輯．Bye Bye Lucy",
          ranking: "9",
          name: "芭比",
          image: "index_grid_09.png",
        },
      ],

      // 情緒歌單測驗題 - 廖妍榛
      ques: [
        {
          title: "Q: 今天是星期一，鬧鐘一響，剛醒來你的想法是什麼？",
          ans: [
            "全新的一週，動力滿滿活力滿滿！",
            "好累，好想繼續睡",
            "沒有特別感受，腦袋空空",
          ],
        },
        {
          title: "Q: 午休做了個好長的夢，下列哪個是你希望做的夢?",
          ans: [
            "在酒吧和約會對象渡過火辣的夜晚",
            "和美好的初戀相遇，以朋友的身份互相問候",
            "努力好久，終於開了間夢想的咖啡廳！",
          ],
        },
        {
          title: "Q: 下午公司團購下午茶，哪一個是你會想點的?",
          ans: [
            "溫暖帶點甜的布朗尼搭配鍋煮奶茶",
            "大人才懂得的苦澀回甘咖啡",
            "清爽的綠茶搭配剛出爐的司康",
          ],
        },
        {
          title: "Q: 晚餐時,遇見上空辣妹、猛男,你希望他和你說什麼 ?",
          ans: [
            "나랑 사귈래？ (要跟我交往嗎？)",
            "Do you want to watch Netflix and chill?",
            "我愛你，每一天",
          ],
        },
        {
          title: "Q: 晚上睡前希望挑哪一部電影陪伴你一天的結束呢?",
          ans: ["鐵達尼號", "再見可魯", "當男人戀愛時"],
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Grid,
    GridItem,
  },
  methods: {
    gotosinglemusic() {
      this.$router.push({
        name: "singlemusic",
        query: {
          q: this.songs.ssid, //???
        },
      });
    },
    playmusic() {
      alert("呼叫懸浮播放器");
    },
  },
  setup() {
    return {
      modules: [Autoplay, EffectCoverflow, Pagination, EffectFade, EffectCards],
    };
  },
};

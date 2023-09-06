//引入swiper-------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// -----------------------------------

export default {
  data() {
    return {
      songs: [
        {
          title: "宇宙飛行1",
          image: "muse_logo.png",
          link: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行2",
          image: "muse_logo.png",
          link: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行3",
          image: "muse_logo.png",
          link: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行4",
          image: "muse_logo.png",
          link: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行5",
          image: "muse_logo.png",
          link: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行6",
          image: "muse_logo.png",
          songLink: "https://tw.yahoo.com",
          singer: "桌子樂團7",
          views: 0,
        },
        {
          title: "宇宙飛行8",
          image: "muse_logo.png",
          songLink: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行9",
          image: "muse_logo.png",
          songLink: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行10",
          image: "muse_logo.png",
          link: "https://tw.yahoo.com",
          singer: "桌子樂團",
          views: 0,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};

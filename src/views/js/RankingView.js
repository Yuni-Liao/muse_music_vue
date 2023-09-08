//引入swiper -------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

// -----------------------------------

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination],
    };
  },
  data() {
    return {
      weekTopSongs: [
        {
          title: "宇宙飛行1",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行2",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行3",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行4",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行5",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行6",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行7",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行8",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行9",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
        {
          title: "宇宙飛行10",
          image: "song01.jpg",
          link: "/shopProd/1",
          // micsrc:"",
          singer: "桌子樂團",
          views: 0,
        },
      ],
    };
  },
  computed: {
    firstFiveSongs() {
      return this.weekTopSongs.slice(0, 5);
    },
    lastFiveSongs() {
      const total = this.weekTopSongs.length;
      return this.weekTopSongs.slice(total - 5, total);
    },
  },
};

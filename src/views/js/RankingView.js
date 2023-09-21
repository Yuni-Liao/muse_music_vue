//引入swiper -------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

// -----------------------------------
import player from '@/components/player.vue';
import AddFavBtn from '@/components/AddFavBtn.vue';
import AddSlBtn from '@/components/AddSlBtn.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    player,
    AddFavBtn,
    AddSlBtn,
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination],
    };
  },
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      weekTopSongs: [
        {
          order: 1,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 2,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 3,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 4,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 5,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 6,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 7,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 8,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 9,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 10,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
      ],
      topAlbums: [
        {
          order: 1,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 2,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 3,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 4,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 5,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 6,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 7,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 8,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 9,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 10,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },

      ],
      topSongList: [
        {
          order: 1,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 2,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 3,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 4,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 5,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 6,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 7,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 8,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 9,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
        {
          order: 10,
          title: "宇宙飛行",
          image: "song01.jpg",
          link: "/shopProd/1",
          singer: "桌子樂團",
          views: 0,
        },
      ],

    };
  },
  computed: {
    weekFirstFiveSongs() {
      return this.weekTopSongs.slice(0, 5);
    },
    weekLastFiveSongs() {
      const total = this.weekTopSongs.length;
      return this.weekTopSongs.slice(total - 5, total);
    },
    albumsFirstFiveSongs() {
      return this.topAlbums.slice(0, 5);
    },
    albumsLastFiveSongs() {
      const total = this.topAlbums.length;
      return this.topAlbums.slice(total - 5, total);
    },
    songListFirstFiveSongs() {
      return this.topSongList.slice(0, 5);
    },
    songListLastFiveSongs() {
      const total = this.topSongList.length;
      return this.topSongList.slice(total - 5, total);
    },
  },
  methods: {
    hearted(item) {
      item.hearted = !item.hearted;
    },
    plused(item) {
      item.plused = !item.plused;
    },

    followed(item) {
      item.followed = !item.followed;
    }
  },
};

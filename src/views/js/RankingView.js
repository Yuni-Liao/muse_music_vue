//引入swiper -------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

// -----------------------------------
import player from "@/components/player.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import FolBtnBig from "@/components/FolBtnBig.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    player,
    AddFavBtn,
    AddSlBtn,
    FolBtnBig,
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

      SongRank: [],
      albumRank: [],
      SLRank: [],
    };
  },
  methods: {
    openPlayer() {
      this.$refs.player.playMusic();
    },
    gotosinglemusic(sid) {
      this.$router.push({
        name: "singlemusic",
        params: {
          sid,
        },
      });
    },
    gotosinglealbum(abid) {
      let aa = this.$router.push({
        name: "singlealbum",
        params: {
          salid: abid,
        },
      });
    },
    gotosonglist(slid) {
      this.$router.push({
        name: "singlesonglist",
        params: {
          slid,
        },
      });
    },
    gotosinger(memid) {
      this.$router.push({
        name: "profilepage",
        params: {
          memid,
        },
      });
    },
  },
  mounted() {
    const fetchSongRank = () => {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getRankSong.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          this.SongRank = res;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchSongRank();

    const fetchAlbumRank = () => {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getRankAlbum.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.albumRank = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchAlbumRank();

    const fetchSLRank = () => {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getRankSL.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.SLRank = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchSLRank();
  },
};

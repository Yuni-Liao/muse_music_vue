import PlayBtnBig from "@/components/PlayBtnBig.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import FolBtnBig from "@/components/FolBtnBig.vue";
import player from "@/components/player.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";

export default {
  components: { PlayBtnBig, ShareBtn, FolBtnBig, player, AddSlBtn },
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //more 顯示狀態
      morecurrent: -1,
      //isAddSlOpen: false,
      songlist: [], //歌單資訊 (fetch)
      slSongs: [], //歌單歌曲 (fetch)
    };
  },
  methods: {
    //切換 more 開啟
    showtoggle(e, index) {
      // console.log(e.target.nextElementSibling);
      if (e.target.nextElementSibling.classList.contains("show")) {
        this.morecurrent = -1;
      } else {
        this.morecurrent = index;
      }
    },
    //關閉 more
    closemore(e) {
      this.morecurrent = -1;
    },
    openPlayer() {
      this.$refs.player.playMusic();
    },
    share(e) {
      alert(`分享歌曲，歌曲ID${e}`);
    },
    addFav(e) {
      alert(`歌曲ID${e}，加入我的最愛`);
    },
    addSonglist(index) {
      // alert(`歌曲ID${e}，加入我的歌單`);
      // this.isAddSlOpen = true;
      // console.log(this.isAddSlOpen);
      this.$refs.AddSl[index].openAddSl();
      //console.log(this.$refs.AddSl[index]);
    },
    //頁面切換--------------
    gotosinglemusic(sid) {
      this.$router.push({
        name: "singlemusic",
        params: {
          sid,
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
    gotosinglealbum(abid) {
      this.$router.push({
        name: "singlealbum",
        params: {
          abid,
        },
      });
    },
  },
  mounted() {
    this.pageslid = parseInt(this.$route.params.slid);
    // fetch歌單資訊
    const fetchSonglistDetail = () => {
      const slid = this.$route.params.slid;
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getSonglistDetail.php?slid=${slid}`
      );
      fetch(apiURL)
        .then(async (response) => {
          this.songlist = await response.json();
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };

    // fetch歌單歌曲資訊
    const fetchSonglistSong = () => {
      const slid = this.$route.params.slid;
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getSonglistSong.php?slid=${slid}`
      );
      fetch(apiURL)
        .then(async (response) => {
          this.slSongs = await response.json();
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };

    //執行fetch
    fetchSonglistDetail();
    fetchSonglistSong();

    //建立事件聆聽:點空白處關閉
    document.addEventListener("click", this.closemore, true);
  },
  beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    document.removeEventListener("click", this.closemore);
  },
};

import PlayBtnBig from "@/components/PlayBtnBig.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import FolBtnBig from "@/components/FolBtnBig.vue";
import player from "@/components/player.vue";

export default {
  components: { PlayBtnBig, ShareBtn, FolBtnBig, player },
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      morecurrent: -1,
      songlists: {
        slid: 2,
        memid: 2,
        creator: "George Makridis, Hannah Hampton",
        creatorimg: "singerPic.png",
        slname: "wake up with George",
        songnum: 5,
        sharenum: 121,
        folnum: 99,
        public: false,
        //歌單封面照片抓第一首歌曲的圖片
      },

      songs: [
        {
          id: 1,
          image: "songPic.png",
          name: "Fly Like",
          album: "albumname1",
          albumid: 1,
          singer: "Lisa",
          singerid: 1,
          time: "03:00",
        },
        {
          id: 2,
          image: "othaersong2.png",
          name: "Tired",
          album: "albumname2",
          albumid: 2,
          singer: "Rose",
          singerid: 2,
          time: "03:00",
        },
        {
          id: 3,
          image: "othaersong3.png",
          name: "Want To Go To Go To Go HomeWant To Go HomeWant To Go Home",
          album: "",
          albumid: 3,
          singer: "Apple Apple",
          singerid: 3,
          time: "03:00",
        },
        {
          id: 4,
          image: "othaersong1.png",
          name: "Sleep",
          album: "albumname4",
          albumid: 4,
          singer: "Cat Dog",
          singerid: 4,
          time: "03:00",
        },
        {
          id: 5,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 6,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 7,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 8,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 9,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 10,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 11,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 12,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 13,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 14,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          albumid: 5,
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
        {
          id: 15,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          singerid: 5,
          time: "03:00",
        },
      ],
    };
  },
  computed: {
    //歌單封面照片抓第一首歌曲的圖片 (注意畫質)
    chooseCoverImg() {
      return this.songs[0].image;
    },
  },
  methods: {
    //選單 顯示隱藏
    showtoggle(e, index) {
      // console.log(e.target.nextElementSibling);
      if (e.target.nextElementSibling.classList.contains("show")) {
        this.morecurrent = -1;
      } else {
        this.morecurrent = index;
      }
    },
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
    addSonglist(e) {
      alert(`歌曲ID${e}，加入我的歌單`);
    },
    //頁面切換--------------
    gotosinglemusic(sid) {
      this.$router.push({
        name: "singlemusic",
        query: {
          q: sid,
        },
      });
    },
    gotosinger(memid) {
      this.$router.push({
        name: "profilepage",
        query: {
          q: memid,
        },
      });
    },
    gotosinglealbum(abid) {
      this.$router.push({
        name: "singlealbum",
        query: {
          q: abid,
        },
      });
    },
  },
  mounted() {
    //建立事件聆聽:點空白處關閉
    document.addEventListener("click", this.closemore, true);
  },
  beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    document.removeEventListener("click", this.closemore);
  },
};

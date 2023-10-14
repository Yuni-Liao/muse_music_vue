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
      login_mem_id: "",
      showDelSl: false, //顯示刪除歌單按鈕和移除歌單按鈕
      playerId: "", //播放器使用
      allSid: [],//存放所有歌曲的id
    };
  },
  methods: {
    //播放器使用------------------------------------------------------------------
    openPlayer(sid) {
      this.playerId = sid;
      this.$nextTick(() => {
        this.$refs.player.playMusic();
      })
    },
    changeSId(newSId) {
      // 切換上下首--使用從子組件接收的新 s_id 更新 s_id prop
      this.playerId = newSId;
    },
    //切換 more 開啟------------------------------------------------------------------
    showtoggle(e, index) {
      // console.log(e.target.nextElementSibling);
      if (e.target.nextElementSibling.classList.contains("show")) {
        this.morecurrent = -1;
      } else {
        this.morecurrent = index;
      }
    },
    //關閉 more------------------------------------------------------------------
    closemore(e) {
      this.morecurrent = -1;
    },
    share(e) {
      alert(`分享歌曲，歌曲ID${e}`);
    },
    addFav(e) {
      alert(`歌曲ID${e}，加入我的最愛`);
    },
    //將歌加入歌單------------------------------------------------------------------
    addSonglist(index) {
      // alert(`歌曲ID${e}，加入我的歌單`);
      // this.isAddSlOpen = true;
      // console.log(this.isAddSlOpen);
      this.$refs.AddSl[index].openAddSl();
      //console.log(this.$refs.AddSl[index]);
    },
    //刪除歌單------------------------------------------------------------------
    deleSl() {
      if (this.showDelSl == true) {
        let confirm = window.confirm(`確定刪除歌單?`);
        if (confirm == true) {
          const slid = this.songlist.sl_id;
          const apiURL = new URL(
            `${this.$store.state.phpPublicPath}deleSl.php?slid=${slid}`
          );
          fetch(apiURL)
            .then((res) => res.json())
            .then(() => {
              this.$router.push({
                name: "mysonglist",
              });
            })
            .catch((error) => {
              console.error("發生錯誤:", error);
            });
        }
      }
    },
    //將歌移除歌單------------------------------------------------------------------
    delSongfromSl(sid, sname) {
      let confirm = window.confirm(`確定要將 ${sname} 移除此歌單?`);
      if (confirm == true) {
        const slid = this.songlist.sl_id;
        const apiURL = new URL(
          `${this.$store.state.phpPublicPath}deleSongFromSl.php?sid=${sid}&slid=${slid}`
        );
        fetch(apiURL)
          .then((res) => res.json())
          .then((res) => location.reload())
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      }
    },
    //頁面切換------------------------------------------------------------------
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
          salid: abid,
        },
      });
    },
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");

    // fetch歌單資訊------------------------------------------------------------------
    const slid = this.$route.params.slid;
    if (slid) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getSonglistDetail.php?slid=${slid}`
      );
      fetch(apiURL)
        .then(async (response) => {
          this.songlist = await response.json();
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    // fetch歌單歌曲資訊------------------------------------------------------------------

    if (slid) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getSonglistSong.php?slid=${slid}`
      );
      fetch(apiURL)
        .then(async (response) => {
          this.slSongs = await response.json();
          this.allSid = this.slSongs.map((slSongs) => slSongs.s_id);
          // console.log("此專輯歌曲的s_id:",this.allSid);

        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    //判斷是否已登入，歌單擁有者是否為登入會員
    setTimeout(() => {
      //console.log(this.login_mem_id, this.songlist.creater_id);
      if (
        this.login_mem_id != undefined &&
        this.login_mem_id == this.songlist.creater_id
      ) {
        this.showDelSl = true;
      }
    }, 300);

    //建立事件聆聽:點空白處關閉
    document.addEventListener("click", this.closemore, true);
  },
  beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    document.removeEventListener("click", this.closemore);
  },
  computed: {
    //如果 slSongs 有數據，他才會顯示，否則不會顯示
    showLastButton() {
        return this.slSongs.length > 0;
    },
},
};

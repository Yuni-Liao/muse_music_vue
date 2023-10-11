import PlayBtnBig from "@/components/PlayBtnBig.vue";
import NewSl from "@/components/NewSl.vue";
import player from "@/components/player.vue";

export default {
  components: { PlayBtnBig, NewSl, player },
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      login_mem_id: "", //這個之後要再改
      morecurrent: -1,
      currentType: 0, //0,1,2
      isNewSlOpen: false,
      Myallsonglists: [],
    };
  },
  computed: {
    choosecreator() {
      // 使用 Array.filter() 過濾 memid 為 1 的資料
      return this.Myallsonglists.filter((item, index, array) => {
        if (this.currentType === 0) return true;
        if (this.currentType === 1) return item.creater_id == this.login_mem_id;
        return item.creater_id != this.login_mem_id;
      });
    },
  },
  methods: {
    //更多選單 顯示隱藏
    showtoggle(e, index) {
      if (e.target.nextElementSibling.classList.contains("show")) {
        this.morecurrent = -1;
      } else {
        this.morecurrent = index;
      }
    },
    // togglelayout(e) {
    //   if (e.target.nextElementSibling.classList.contains("hidden")) {
    //     e.target.nextElementSibling.classList.remove("hidden");
    //   } else {
    //     e.target.nextElementSibling.classList.add("hidden");
    //   }
    // },
    gotosonglist(slid) {
      // this.$router.push("/singlesonglist/:slid");
      this.$router.push({
        name: "singlesonglist",
        params: {
          slid: slid,
        },
      });
    },
    //刪除歌單------------------------------------------------------------------
    deleSl(slid) {
      let confirm = window.confirm(`確定刪除歌單?`);
      if (confirm == true) {
        const apiURL = new URL(
          `${this.$store.state.phpPublicPath}deleSl.php?slid=${slid}`
        );
        fetch(apiURL)
          .then((res) => res.json())
          .then(() => location.reload())
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      }
    },
    unfolsonglist(index, slid) {
      this.Myallsonglists.splice(index, 1);
      alert(`取消追蹤歌單，歌單編號:${slid}`);
    },
    closemore(e) {
      this.morecurrent = -1;
    },
    isNewSlOpenupdate(val) {
      this.isNewSlOpen = val;
      // alert("已新增一個新歌單");
    },
    openplayer() {
      // alert("呼叫懸浮播放器");
      this.$refs.player.playMusic();
    },
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");
    if (this.login_mem_id == undefined) {
      alert("使用會員功能，請先進行登入");
      this.$router.push({
        name: "login",
      });
    } else {
      const loginMemId = this.login_mem_id;

      // fetch我的歌單(含追蹤創建及追蹤)
      if (loginMemId) {
        const apiURL = new URL(
          `http://localhost/muse_music/public/api/getMyAllsonglists.php?loginMemId=${loginMemId}`
        );
        let Myallsonglist;
        fetch(apiURL)
          .then((res) => res.json())
          .then((res) => {
            Myallsonglist = res;
            //根據創建日期排序
            this.Myallsonglists = Myallsonglist.sort(function (a, b) {
              return a.update_date < b.update_date ? 1 : -1;
            });
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      }

      //建立事件聆聽:點空白處關閉
      document.addEventListener("click", this.closemore, true);
    }
  },
  beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    document.removeEventListener("click", this.closemore);
  },
};

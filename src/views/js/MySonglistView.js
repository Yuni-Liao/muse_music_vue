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
      login_mem_id: 1,
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
        return item.creater_id !== this.login_mem_id;
      });
    },
  },
  methods: {
    // 獲取我的歌單(含追蹤創建及追蹤)
    fetchMyallsonglist() {
      const loginMemId = this.login_mem_id;
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getMyAllsonglists.php?loginMemId=${loginMemId}`
      );
      let Myallsonglist;
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          Myallsonglist = res;
          this.Myallsonglists = Myallsonglist.sort(function (a, b) {
            return a.update_date < b.update_date ? 1 : -1;
          });
          console.log(this.Myallsonglists);
        });

      //根據創建日期排序;
      // this.Myallsonglists = Myallsonglist.sort(function (a, b) {
      //   return a.update_date < b.update_date ? 1 : -1;
      // });
    },

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
    deletesonglist(index, slid) {
      this.Myallsonglists.splice(index, 1);
      alert(`刪除歌單，歌單編號:${slid}`);
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
    //建立事件聆聽:點空白處關閉
    document.addEventListener("click", this.closemore, true);
    // 獲取我的歌單(含追蹤創建及追蹤)
    this.fetchMyallsonglist();
  },
  beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    document.removeEventListener("click", this.closemore);
  },
};

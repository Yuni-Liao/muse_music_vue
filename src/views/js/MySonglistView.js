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
      morecurrent: -1,
      currentType: 0, //0,1,2
      isNewSlOpen: false,
      songlists: [
        {
          slid: 1,
          slname: "我的早晨歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 2,
          slname: "亨利的早晨歌單",
          image: "songPic.png",
          memid: 2,
          creator: "亨利",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 3,
          slname: "大衛的早晨歌單",
          image: "songPic.png",
          memid: 3,
          creator: "大衛",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 4,
          slname: "我的睡前歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 5,
          slname: "我的假日歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: true,
        },
        {
          slid: 6,
          slname: "我的早晨歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 7,
          slname: "亨利的早晨歌單",
          image: "songPic.png",
          memid: 2,
          creator: "亨利",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 8,
          slname: "大衛的早晨歌單",
          image: "songPic.png",
          memid: 3,
          creator: "大衛",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 9,
          slname: "我的睡前歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: false,
        },
        {
          slid: 10,
          slname: "我的假日歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: true,
        },
      ],
    };
  },
  computed: {
    choosecreator() {
      // 使用 Array.filter() 過濾 memid 為 1 的資料
      return this.songlists.filter((item, index, array) => {
        if (this.currentType === 0) return true;
        if (this.currentType === 1) return item.memid == 1;
        return item.memid !== 1;
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
      // this.$router.push("/singlesonglist");
      this.$router.push({
        name: "singlesonglist",
        query: {
          q: slid,
        },
      });
    },
    deletesonglist(index, slid) {
      this.songlists.splice(index, 1);
      alert(`刪除歌單，歌單編號:${slid}`);
    },
    unfolsonglist(index, slid) {
      this.songlists.splice(index, 1);
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
  },
  beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    document.removeEventListener("click", this.closemore);
  },
};

import PlayBtnBig from "@/components/PlayBtnBig.vue";
import MoreBtn from "@/components/MoreBtn.vue";

export default {
  // emits: ["visibleChange"],
  components: { PlayBtnBig, MoreBtn },
  data() {
    return {
      dataaa: new Boolean(),
      currentType: 0, //0,1,2
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
    // togglelayout(e) {
    //   if (e.target.nextElementSibling.classList.contains("hidden")) {
    //     e.target.nextElementSibling.classList.remove("hidden");
    //   } else {
    //     e.target.nextElementSibling.classList.add("hidden");
    //   }
    // },
    // visibleChange(val) {
    //   this.dataaa = val;
    //   console.log(this.dataaa);
    // },
    gotosonglist() {
      // this.$router.push("/singlesonglist");
      this.$router.push({
        name: "singlesonglist",
        query: {
          q: 1,
        },
      });
    },
    deletesonglist() {
      alert("刪除歌單");
    },
    unfolsonglist() {
      alert("取消追蹤歌單");
    },
    addnewsonglist() {
      alert("新增一個新歌單");
    },
  },
};

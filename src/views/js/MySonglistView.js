import PlayBtnBig from "@/components/PlayBtnBig.vue";

export default {
  components: { PlayBtnBig },
  data() {
    return {
      isVisible: true, //初始狀態為隱藏
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
          public: 0,
        },
        {
          slid: 2,
          slname: "亨利的早晨歌單",
          image: "songPic.png",
          memid: 2,
          creator: "亨利",
          playnum: 0,
          songnum: 123,
          public: 0,
        },
        {
          slid: 3,
          slname: "大衛的早晨歌單",
          image: "songPic.png",
          memid: 3,
          creator: "大衛",
          playnum: 0,
          songnum: 123,
          public: 0,
        },
        {
          slid: 4,
          slname: "我的睡前歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: 0,
        },
        {
          slid: 5,
          slname: "我的假日歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: 1,
        },
        {
          slid: 6,
          slname: "我的早晨歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: 0,
        },
        {
          slid: 7,
          slname: "亨利的早晨歌單",
          image: "songPic.png",
          memid: 2,
          creator: "亨利",
          playnum: 0,
          songnum: 123,
          public: 0,
        },
        {
          slid: 8,
          slname: "大衛的早晨歌單",
          image: "songPic.png",
          memid: 3,
          creator: "大衛",
          playnum: 0,
          songnum: 123,
          public: 0,
        },
        {
          slid: 9,
          slname: "我的睡前歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: 0,
        },
        {
          slid: 10,
          slname: "我的假日歌單",
          image: "songPic.png",
          memid: 1,
          creator: "我",
          playnum: 0,
          songnum: 123,
          public: 1,
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
    togglelayout() {
      // 切換 isLVisible 的值，以顯示/隱藏 Layout
      this.isVisible = !this.isVisible;
    },
  },
};
import FolBtnBig from "@/components/FolBtnBig.vue";
import PlayBtnBig from "@/components/PlayBtnBig.vue";

export default {
  components: { FolBtnBig, PlayBtnBig },
  data() {
    return {
      tabtype: 2, //0,1,2
      mem: {
        memid: 1,
        memname: "Anonymous",
        loc: "桃園市",
        intro:
          "桃園人，喜歡古典樂，最近嘗試個人創作，將古典樂結合搖滾，如果各位還喜歡，請追蹤我會不定時更新創作，謝謝支持~~~",
        songcount: 23,
        fans: 1264,
        follower: 10,
        coverimg: "coverimage.jpg",
      },
      //要注意撈來的資料有沒有包含public: false!!!!!
      songlists: [
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
  computed: {},
  methods: {
    gotosonglist() {
      // this.$router.push("/singlesonglist");
      this.$router.push({
        name: "singlesonglist",
        query: {
          q: 1,
        },
      });
    },
  },
};

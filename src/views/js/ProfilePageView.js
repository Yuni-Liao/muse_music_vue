import FolBtnBig from "@/components/FolBtnBig.vue";
import PlayBtnBig from "@/components/PlayBtnBig.vue";

export default {
  components: { FolBtnBig, PlayBtnBig },
  data() {
    return {
      isReadmoreBtn: Boolean,
      isReadMore: false,
      tabtype: 2,
      introline: 4,
      mem: {
        memid: 1,
        memname: "Anonymous",
        loc: "桃園市",
        // intro:
        //  "桃園人，喜歡古典樂，最近嘗試個人創作，將古典樂結合搖滾，如果各位還喜歡，請追蹤我會不定時更新創作，謝謝支持~~~",
        intro:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque, cupiditate ea odit, laboriosam omnis officiis soluta excepturi placeat deleniti harum consequatur explicabo qui enim? Odio expedita libero fugiat ab eligendi atque eos exercitationem dignissimos, alias quo consectetur iste, ipsa aliquid tempora iusto unde cupiditate quibusdam sequi totam facilis. Impedit obcaecati fuga, ut tempora ducimus assumenda, repudiandae ea accusamus placeat adipisci inventore! Minus alias soluta tempore quis? Eligendi autem ipsa reiciendis adipisci minima necessitatibus cumque dolor quos, sunt cum possimus earum dolore at officiis esse amet odit aliquid neque harum commodi consequuntur fugiat sapiente iste? Quo, quia! In, veritatis facere.",
        songcount: 12,
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
  mounted() {
    this.readmoreBtn();
  },
  computed: {},
  methods: {
    //是否顯示"顯示更多"按鈕
    readmoreBtn() {
      let itlSH = this.$refs.itl.scrollHeight;
      console.log(itlSH);
      if (itlSH > 54) {
        this.isReadmoreBtn = true;
      } else {
        this.isReadmoreBtn = false;
      }
    },
    //切換簡介顯示內容
    readmore() {
      this.isReadMore = !this.isReadMore;
    },
    gotosonglist() {
      // this.$router.push("/singlesonglist");
      this.$router.push({
        name: "singlesonglist",
        query: {
          q: 1,
        },
      });
    },

    //轉換K單位
    changeNum(num) {
      if (num > 1000) {
        let knum = num / 1000;
        return knum;
      } else {
        return num;
      }
    },
  },
};

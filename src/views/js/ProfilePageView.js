// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

import FolBtnBig from "@/components/FolBtnBig.vue";
import PlayBtnBig from "@/components/PlayBtnBig.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";

export default {
  components: {
    FolBtnBig,
    PlayBtnBig,
    AddSlBtn,
    AddFavBtn,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      //swiper
      modules: [Scrollbar],

      isReadmoreBtn: Boolean,
      isReadMore: false,
      tabtype: 1,
      introline: 4,
      //會員資料
      mem: {
        memid: 1,
        memname: "Anonymous",
        loc: "桃園市",
        //intro:
        //  "桃園人，喜歡古典樂，最近嘗試個人創作，將古典樂結合搖滾，如果各位還喜歡，請追蹤我會不定時更新創作，謝謝支持~~~",
        intro:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque, cupiditate ea odit, laboriosam omnis officiis soluta excepturi placeat deleniti harum consequatur explicabo qui enim? Odio expedita libero fugiat ab eligendi atque eos exercitationem dignissimos, alias quo consectetur iste, ipsa aliquid tempora iusto unde cupiditate quibusdam sequi totam facilis. Impedit obcaecati fuga, ut tempora ducimus assumenda, repudiandae ea accusamus placeat adipisci inventore! Minus alias soluta tempore quis? Eligendi autem ipsa reiciendis adipisci minima necessitatibus cumque dolor quos, sunt cum possimus earum dolore at officiis esse amet odit aliquid neque harum commodi consequuntur fugiat sapiente iste? Quo, quia! In, veritatis facere.",
        songcount: 12,
        fans: 1264,
        follower: 10,
        coverimg: "coverimage.jpg",
        profileimg: "profileimage.jpg",
      },
      // 專輯資料
      album: [
        {
          id: 1,
          bannerPic: "banner_albumPic1.png",
          singer: "George Makridis, Hannah Hampton",
          singerPage: "/profilepage",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          albumName: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          played: "2,855",
          shared: "39",
          mcatid: ["日語流行", "搖滾", "派對"],
        },
        {
          id: 2,
          bannerPic: "banner_albumPic1.png",
          singer: "George Makridis, Hannah Hampton",
          singerPage: "/profilepage",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          albumName: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          played: "2,855",
          shared: "39",
          mcatid: ["日語流行"],
        },
        {
          id: 3,
          bannerPic: "banner_albumPic1.png",
          singer: "George Makridis, Hannah Hampton",
          singerPage: "/profilepage",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          albumName: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          played: "2,855",
          shared: "39",
          mcatid: ["日語流行", "搖滾", "派對", "輕鬆", "更多類別"],
        },
        {
          id: 5,
          bannerPic: "banner_albumPic1.png",
          singer: "George Makridis, Hannah Hampton",
          singerPage: "/profilepage",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          albumName: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          played: "2,855",
          shared: "39",
          mcatid: ["日語流行", "搖滾", "派對"],
        },
        {
          id: 5,
          bannerPic: "banner_albumPic1.png",
          singer: "George Makridis, Hannah Hampton",
          singerPage: "/profilepage",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          albumName: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          played: "2,855",
          shared: "39",
          mcatid: ["日語流行", "搖滾", "派對"],
        },
      ],
      //歌曲資料
      songs: [
        {
          id: 1,
          songPic: "songPic.png",
          bannerPic: "banner_songPic1.png",
          songName: "Say It 1",
          singer: "George Makridis, Hannah Hampton",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          album: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          songInf:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
          type1: "西洋語系",
          type2: "嘻哈",
          type3: "派對",
          time: "03:58",
          played: "5,223",
          liked: "68",
          shared: "39",
        },
        {
          id: 2,
          songPic: "songPic2.png",
          bannerPic: "banner_songPic1.png",
          songName: "Say It 2",
          singer: "George Makridis, Hannah Hampton",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          album: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          songInf:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
          type1: "西洋語系",
          type2: "嘻哈",
          type3: "派對",

          time: "03:58",
          played: "5,223",
          liked: "68",
          shared: "39",
        },
        {
          id: 3,
          songPic: "songPic3.png",
          bannerPic: "banner_songPic1.png",
          songName:
            "Say It3Say It3Say It3Say It3Say It3Say It3Say It3Say It3Say It3Say It3Say It3Say It3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quod cupiditate minima tempora ex iste, quasi in, ipsum expedita blanditiis ullam? A neque non maxime ducimus ipsum culpa? Quidem eum beatae debitis aspernatur, eveniet incidunt cupiditate sit earum neque inventore dolores tempora labore architecto animi obcaecati minus qui facilis non.",
          singer: "George Makridis, Hannah Hampton",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          album: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          songInf:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
          type1: "西洋語系",
          type2: "嘻哈",
          type3: "派對",
          time: "03:58",
          played: "5,223",
          liked: "68",
          shared: "39",
        },
        {
          id: 4,
          songPic: "songPic3.png",
          bannerPic: "banner_songPic1.png",
          songName: "Say It4",
          singer: "George Makridis, Hannah Hampton",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          album: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          songInf:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
          type1: "西洋語系",
          type2: "嘻哈",
          type3: "派對",
          time: "03:58",
          played: "5,223",
          liked: "68",
          shared: "39",
        },
        {
          id: 5,
          songPic: "songPic2.png",
          bannerPic: "banner_songPic1.png",
          songName: "Say It5",
          singer: "George Makridis, Hannah Hampton",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          album: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          songInf:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
          type1: "西洋語系",
          type2: "嘻哈",
          type3: "派對",
          time: "03:58",
          played: "5,223",
          liked: "68",
          shared: "39",
        },
        {
          id: 6,
          songPic: "songPic.png",
          bannerPic: "banner_songPic1.png",
          songName: "Say It6",
          singer: "George Makridis, Hannah Hampton",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          album: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          songInf:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
          type1: "西洋語系",
          type2: "嘻哈",
          type3: "派對",
          time: "03:58",
          played: "5,223",
          liked: "68",
          shared: "39",
        },
        {
          id: 7,
          songPic: "songPic2.png",
          bannerPic: "banner_songPic1.png",
          songName: "Say It7",
          singer: "George Makridis, Hannah Hampton",
          singerPic: "singerPic.png",
          albumPic: "albumPic.png",
          album: "Countlary",
          date: "2023-08-22",
          albumInf:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
          songInf:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
          type1: "西洋語系",
          type2: "嘻哈",
          type3: "派對",
          time: "03:58",
          played: "5,223",
          liked: "68",
          shared: "39",
        },
      ],
      // 歌單資料
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
    //是否顯示"顯示更多"按鈕
    const readmoreBtn = () => {
      let itlSH = this.$refs.itl.scrollHeight;
      //console.log(itlSH);
      if (itlSH > 54) {
        this.isReadmoreBtn = true;
      } else {
        this.isReadmoreBtn = false;
      }
    };
    readmoreBtn();
  },
  computed: {},
  methods: {
    //切換簡介顯示內容
    readmore() {
      this.isReadMore = !this.isReadMore;
    },
    gotosinglealbum(abid) {
      this.$router.push({
        name: "singlealbum",
        query: {
          q: abid,
        },
      });
    },
    gotosinglemusic(sid) {
      this.$router.push({
        name: "singlemusic",
        query: {
          q: sid,
        },
      });
    },
    gotosonglist(slid) {
      // this.$router.push("/singlesonglist");
      this.$router.push({
        name: "singlesonglist",
        query: {
          q: slid,
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
    playmusic() {
      alert("呼叫懸浮播放器");
    },
  },
};

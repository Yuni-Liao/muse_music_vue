import PlayBtnBig from "@/components/PlayBtnBig.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import FolBtnBig from "@/components/FolBtnBig.vue";

export default {
  components: { PlayBtnBig, ShareBtn, FolBtnBig },
  data() {
    return {
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
        //歌單封面照片抓第一首歌曲的圖片 (注意畫質)
      },

      songs: [
        {
          id: 1,
          image: "songPic.png",
          name: "Fly Like",
          album: "albumname1",
          singer: "Lisa",
          time: "03:00",
        },
        {
          id: 2,
          image: "othaersong2.png",
          name: "Tired",
          album: "albumname2",
          singer: "Rose",
          time: "03:00",
        },
        {
          id: 3,
          image: "othaersong3.png",
          name: "Want To Go To Go To Go HomeWant To Go HomeWant To Go Home",
          album: "",
          singer: "Apple Apple",
          time: "03:00",
        },
        {
          id: 4,
          image: "othaersong1.png",
          name: "Sleep",
          album: "albumname4",
          singer: "Cat Dog",
          time: "03:00",
        },
        {
          id: 5,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 6,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 7,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 8,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 9,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 10,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 11,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 12,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 13,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 14,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
        {
          id: 15,
          image: "othaersong2.png",
          name: "Bed",
          album: "albumname1",
          singer: "Ruby",
          time: "03:00",
        },
      ],
    };
  },
  computed: {
    chooseCoverImg() {
      return this.songs[0].image;
    },
  },
  methods: {},
};

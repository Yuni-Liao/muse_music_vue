import AddSongtoAlbum from "@/components/AddSongtoAlbum.vue";
export default {
  components: { AddSongtoAlbum },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isAddSongOpen: false,
      editalbuminfo: "",
      editalbumname: "",
      privacy: "公開",
      albumData: {},
      album: {
        editalbumname: "愛",
        editalbuminfo:
          "愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。專輯的第一首單曲《逐夢的翅膀》以輕快的節奏和韻律，講述著一段追逐夢想的愛情故事。歌詞中描繪了主人公們攜手共同追求夢想的場景，勾勒出愛情的堅韌和力量。專輯的高潮之一是歌曲《愛的軌跡》。這首歌以深情的鋼琴伴奏和壯闊的管弦樂編排，講述了一段跨越時空的愛情故事。",
        privacy: "公開",
      },
      albumSongsData: [],
      songs: [
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          isChecked: true,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
          isChecked: true,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          isChecked: true,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
          isChecked: true,
        },
      ],
      selectedCount: 4,
    };
  },
  methods: {
    isAddSongOpenupdate(val) {
      this.isAddSongOpen = val;
    },
    NewDataupdate(val) {
      // console.log(val);
      for (let i = 0; i < val.length; i++) {
        this.songs.unshift(val[i]);
      }
      //console.log(this.songs);
    },
  },
  mounted() {
    const putAlbumData = () => {
      const obj = {};
      obj.alb_id = this.$route.query.alb_id;
      obj.alb_img = this.$route.query.alb_img;
      obj.alb_name = this.$route.query.alb_name;
      obj.alb_intro = this.$route.query.alb_intro;
      this.albumData = obj;
    };
    // fetch 專輯歌曲資訊 songs:[]
    const fetchAlbumSong = () => {
      const salid = this.albumData.alb_id;
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getSingleAlbumSong.php?salid=${salid}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            res[i].isChecked = true;
          }
          this.albumSongsData = res;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    putAlbumData();
    fetchAlbumSong();
  },
};

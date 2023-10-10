import AddSongtoAlbum from "@/components/AddSongtoAlbum.vue";

export default {
  components: { AddSongtoAlbum },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isAddSongOpen: false,
      login_mem_id: 1, //這個之後要再改
      albumData: {
        alb_img: "1.jpg",
        alb_name: "",
        alb_intro: "",
      }, //專輯的詳細資料
      albumSongsData: [], //專輯內原有的歌曲資料
      allsong: [], //用於渲染
      noAlbumsongs: [], //沒有專輯的歌曲資料
    };
  },
  methods: {
    isAddSongOpenupdate(val) {
      this.isAddSongOpen = val;
    },
    NewDataupdate(val) {
      this.noAlbumsongs = val;
      // this.allsong = [...this.noAlbumsongs, ...this.albumSongsData];
      this.allsong = [
        ...this.noAlbumsongs.filter((item) => item.isChecked === true),
        ...this.albumSongsData,
      ];
    },
  },
  mounted() {
    // fetch 該會員未有專輯id的歌曲 ( 表示可以被加入專輯中 ) ，放入 noAlbumsongs 中
    const memid = this.login_mem_id;
    const apiURL = new URL(
      `http://localhost/muse_music/public/api/getNoAlbumsong.php?memid=${memid}`
    );
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          res[i].isChecked = false;
        }
        this.noAlbumsongs = res;
      })
      .catch((error) => {
        console.error("發生錯誤:", error);
      });
  },
};

import AddSongtoAlbum from "@/components/AddSongtoAlbum.vue";
export default {
  components: { AddSongtoAlbum },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isAddSongOpen: false,
      login_mem_id: 1, //這個之後要再改
      albumData: {}, //專輯的詳細資料
      albumSongsData: [], //專輯內原有的歌曲資料
      allsong: [], //用於渲染
      NoAlbumsongs: [], //沒有專輯的歌曲資料
    };
  },
  watch() {},
  methods: {
    isAddSongOpenupdate(val) {
      this.isAddSongOpen = val;
    },
    NewDataupdate(val) {
      this.NoAlbumsongs = val;
      // this.allsong = [...this.NoAlbumsongs, ...this.albumSongsData];
      this.allsong = [
        ...this.NoAlbumsongs.filter((item) => item.isChecked === true),
        ...this.albumSongsData,
      ];
    },
  },
  mounted() {
    //專輯資料賦值，放入 albumData 中
    const obj = {};
    obj.alb_id = this.$route.query.alb_id;
    obj.alb_img = this.$route.query.alb_img;
    obj.alb_name = this.$route.query.alb_name;
    obj.alb_intro = this.$route.query.alb_intro;
    this.albumData = obj;

    // fetch 專輯原有的歌曲資訊，放入 albumSongsData 中
    const salid = this.albumData.alb_id;
    if (salid) {
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
          this.allsong = [...this.albumSongsData];
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }
    // fetch 該會員未有專輯id的歌曲 ( 表示可以被加入專輯中 ) ，放入 NoAlbumsongs 中
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
        this.NoAlbumsongs = res;
      })
      .catch((error) => {
        console.error("發生錯誤:", error);
      });
  },
};

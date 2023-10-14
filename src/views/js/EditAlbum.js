import AddSongtoAlbum from "@/components/AddSongtoAlbum.vue";
export default {
  components: { AddSongtoAlbum },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isAddSongOpen: false,
      login_mem_id: "",
      albumData: {}, //專輯的詳細資料
      albumSongsData: [], //專輯內原有的歌曲資料
      allsong: [], //用於渲染
      noAlbumsongs: [], //沒有專輯的歌曲資料
      updateimg: false,
      showimg: [], //用於顯示
    };
  },
  watch() {},
  methods: {
    //照片及時更換
    coverImgChange(e) {
      let file = e.target.files[0];
      this.albumData.alb_img = file;
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.changeimg);
    },

    changeimg(e) {
      this.showimg = e.target.result;
      this.updateimg = true;
    },

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
    submit() {
      //編輯專輯歌曲 & 未有歌曲做新增(在該歌曲資訊中 update 上 alb_id 的值) & 已有歌曲做刪除(alb_id set null)------
      const selectedAddSongs = this.noAlbumsongs
        .filter((obj) => obj.isChecked === true)
        .map((obj) => obj.id);

      const selectedDelSongs = this.albumSongsData
        .filter((obj) => obj.isChecked === false)
        .map((obj) => obj.id);

      const url = `${this.$store.state.phpPublicPath}editAlbumAndsong.php`;
      let headers = {
        Accept: "application/json",
      };

      const formData = new FormData();
      formData.append("alb_id", this.albumData.alb_id);
      formData.append("alb_img", this.albumData.alb_img); //圖片檔案
      formData.append("alb_name", this.albumData.alb_name);
      formData.append("alb_intro", this.albumData.alb_intro);
      formData.append("selectedAddSongs", JSON.stringify(selectedAddSongs));
      formData.append("selectedDelSongs", JSON.stringify(selectedDelSongs));

      fetch(url, {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            alert(data.msg); // 显示错误消息
          } else {
            alert("編輯完成");
            window.location.reload();
            window.location.href = "/home/profilepageedit";
          }
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
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

    this.login_mem_id = localStorage.getItem("mem_id");

    if (this.login_mem_id != undefined) {
      // fetch 專輯原有的歌曲資訊，放入 albumSongsData 中
      const salid = this.albumData.alb_id;
      if (salid) {
        const apiURL = new URL(
          `${this.$store.state.phpPublicPath}getSingleAlbumSong.php?salid=${salid}`
        );

        fetch(apiURL)
          .then((res) => res.json())
          .then((res) => {
            //把陣列中每個物件都添加 isChecked
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

      // fetch 該會員未有 alb_id 的歌曲 ( 表示可以被加入專輯中 ) ，放入 noAlbumsongs 中
      const memid = this.login_mem_id;
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getNoAlbumsong.php?memid=${memid}`
      );
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          //把陣列中每個物件都添加 isChecked
          for (let i = 0; i < res.length; i++) {
            res[i].isChecked = false;
          }
          this.noAlbumsongs = res;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    } else {
      alert("使用會員功能，請先進行登入");
      this.$router.push({
        name: "login",
      });
    }
  },
};

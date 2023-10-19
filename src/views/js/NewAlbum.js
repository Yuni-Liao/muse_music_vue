import AddSongtoAlbum from "@/components/AddSongtoAlbum.vue";

export default {
  components: { AddSongtoAlbum },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isAddSongOpen: false,
      login_mem_id: "1",
      albumData: {
        alb_id: "",
        alb_img: "",
        alb_name: "",
        alb_intro: "",
      }, //專輯的詳細資料
      allsong: [], //用於渲染
      noAlbumsongs: [], //沒有專輯的歌曲資料
      updateimg: false,
      showimg: [], //用於顯示
    };
  },
  methods: {
    isAddSongOpenupdate(val) {
      this.isAddSongOpen = val;
    },
    NewDataupdate(val) {
      this.noAlbumsongs = val;
      this.allsong = [
        ...this.noAlbumsongs.filter((item) => item.isChecked === true),
      ];
    },
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
    submit() {
      //新增專輯歌曲 & 未有歌曲做新增(在該歌曲資訊中 update 上 alb_id 的值) & 已有歌曲做刪除(alb_id set null)------
      const selectedAddSongs = this.noAlbumsongs
        .filter((obj) => obj.isChecked === true)
        .map((obj) => obj.id);

      //fetch 前先判斷欄位是否有填寫
      if (this.login_mem_id == undefined) {
        alert("使用會員功能，請先進行登入");
        this.$router.push({
          name: "login",
        });
      } else if (this.albumData.alb_name == "") {
        alert("請確認所需欄位均已填寫完畢");
      } else if (selectedAddSongs == 0) {
        alert("請至少選擇一首歌曲至專輯");
      } else {
        const url = `${this.$store.state.phpPublicPath}addAlbumAndsong.php`;
        let headers = {
          Accept: "application/json",
        };

        const formData = new FormData();
        formData.append("memid", this.login_mem_id);
        formData.append("alb_img", this.albumData.alb_img); //圖片檔案
        formData.append("alb_name", this.albumData.alb_name);
        formData.append("alb_intro", this.albumData.alb_intro);
        formData.append("selectedAddSongs", JSON.stringify(selectedAddSongs));

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
              alert("新增完成");
              window.location.reload();
              window.location.href = `${this.$store.state.linkPublicPath}home/profilepageedit`;
            }
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      }
    },
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");

    if (this.login_mem_id != undefined) {
      // fetch 該會員未有專輯id的歌曲 ( 表示可以被加入專輯中 ) ，放入 noAlbumsongs 中
      const memid = this.login_mem_id;
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getNoAlbumsong.php?memid=${memid}`
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
    }
  },
};

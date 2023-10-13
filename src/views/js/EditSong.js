export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      privacy: "公開",
      songData: {},
      updateimg: false,
      showimg: [], //用於顯示
    };
  },
  methods: {
    changeTab(tabNumber) {
      this.activeTab = tabNumber;
    }, //照片及時更換
    coverImgChange(e) {
      let file = e.target.files[0];
      this.songData.s_img = file;
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.changeimg);
    },

    changeimg(e) {
      this.showimg = e.target.result;
      this.updateimg = true;
    },
    editSong() {
      const url = `${this.$store.state.phpPublicPath}editSong.php`;
      let headers = {
        Accept: "application/json",
      };
      const formData = new FormData();
      formData.append("s_id", this.songData.s_id);
      formData.append("s_img", this.songData.s_img); //圖片檔案
      formData.append("s_name", this.songData.s_name);
      formData.append("s_intro", this.songData.s_intro);
      formData.append("show_stat", this.songData.show_stat);

      fetch(url, {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((data) => {
          if (data.error) {
            alert(data.msg); // 显示错误消息
          } else {
            alert("編輯完成");
            this.$router.push({
              path: "profilepageedit",
            });
          }
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
  },
  mounted() {
    //接值，把值放入 this.songData 中
    const obj = {};
    obj.s_id = this.$route.query.s_id;
    obj.s_img = this.$route.query.s_img;
    obj.s_name = this.$route.query.s_name;
    obj.s_intro = this.$route.query.s_intro;
    this.songData = obj;
  },
};

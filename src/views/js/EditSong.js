export default {
  data() {
    return {
      privacy: "公開",
      songData: {},
    };
  },
  methods: {
    changeTab(tabNumber) {
      this.activeTab = tabNumber;
    },
    editSong() {
      const url = `http://localhost/muse_music/public/api/editSong.php`;
      let headers = {
        Accept: "application/json",
      };
      const formData = new FormData();
      formData.append("s_id", this.songData.s_id);
      // formData.append("s_img", this.songData.s_img);
      formData.append("s_name", this.songData.s_name);
      formData.append("s_intro", this.songData.s_intro);
      formData.append("show_stat", this.songData.show_stat);

      fetch(url, {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("新增失敗");
          }
        })
        .then(() => {
          this.$router.push({
            name: "profilepageedit",
          });
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
  },
  mounted() {
    //接值，把值放入 this.songData 中
    const putSongData = () => {
      const obj = {};
      obj.s_id = this.$route.query.s_id;
      obj.s_img = this.$route.query.s_img;
      obj.s_name = this.$route.query.s_name;
      obj.s_intro = this.$route.query.s_intro;
      obj.show_stat = this.$route.query.show_stat;
      this.songData = obj;
    };
    putSongData();
  },
};

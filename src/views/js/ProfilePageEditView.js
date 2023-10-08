export default {
  // 重推again
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      activeTab: 1,
      currentStep: 0,
      login_mem_id: 1, //這個之後要再改
      member: {
        coverimgURL: require(`/public/dataimage/member/1-2.jpg`),
        profileImgURL: require(`/public/dataimage/member/1-1.jpg`),
        name: "Anonyous",
        introduction:
          "桃園人，喜歡古典樂，最近嘗試個人創作，將古典樂結合搖滾，如果各位還喜歡，請追蹤我會不定時更新創作，謝謝支持~~~",
        location: "",
        socialMedia: "",
        privacy: "公開",
      },
      profileSongs: [],
      profileAlbums: [],
    };
  },
  methods: {
    changeTab(tabNumber) {
      this.activeTab = tabNumber;
    }, //封面相片
    coverImgChange(e) {
      let file = e.target.files[0];
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.coverloadImage);
    },
    coverloadImage(e) {
      this.member.coverimgURL = e.target.result;
    },
    //頭貼相片
    profileImgChange(e) {
      let file = e.target.files[0];
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.profileloadImage);

      //再加FormData
      const fd = new FormData();
      fd.append("member_imageURL", file);
      fetch("http://localhost/muse_music/public/api/getProfileDetail.php", {
        method: "POST",
        body: fd,
      });
    },
    profileloadImage(e) {
      this.member.profileImgURL = e.target.result;
    },
    editSong(s_id, s_img, s_name, s_intro, show_stat) {
      this.$router.push({
        name: "editsong",
        query: {
          s_id,
          s_img,
          s_name,
          s_intro,
          show_stat,
        },
      });
    },
    editalbum(alb_id, alb_img, alb_name, alb_intro) {
      this.$router.push({
        name: "editalbum",
        query: {
          alb_id,
          alb_img,
          alb_name,
          alb_intro,
        },
      });
    },
  },
  mounted() {
    //fetch 會員歌曲
    const fetchSongData = () => {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getProfileSong.php?memid=${this.login_mem_id}&stat=0`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.profileSongs = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    //fetch 會員專輯
    const fetchAlbumData = () => {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getProfileAlbum.php?memid=${this.login_mem_id}`
      );
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.profileAlbums = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchSongData();
    fetchAlbumData();
  },
};

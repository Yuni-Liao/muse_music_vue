export default {
  // 重推again
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      activeTab: 1,
      currentStep: 0,
      member: [
        {
          cover_pic: "",
          mem_pic: "",
          mem_name: "",
          intro: "",
          county: "",
          social_media: "",
        },
      ],
      profileSongs: [],
      profileAlbums: [],
      login_mem_id: 1,
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
      this.member.cover_pic = e.target.result;
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

    // 個人檔案 - 編輯
    saveBtn() {
      const url = `${this.$store.state.phpPublicPath}editProfileData.php`;
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const dataToSend = {
        mem_name: this.member[0].mem_name,
        intro: this.member[0].intro,
        county: this.member[0].county,
        social_media: this.member[0].social_media,
        mem_id: this.member[0].mem_id,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("編輯失敗");
          }
        })
        // .then(() => {
        //   window.location.reload();
        // })
        .catch((error) => {
          console.log(error.message);
        });
      console.log(dataToSend);
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
    //fetch 會員基本資料
    const fetchMemberInfo = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileDetail.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.member = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchMemberInfo();

    // //fetch 會員歌曲
    const fetchSongData = () => {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileSong.php?memid=${this.login_mem_id}&stat=0`
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
        `${this.$store.state.phpPublicPath}getProfileAlbum.php?memid=${this.login_mem_id}`
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

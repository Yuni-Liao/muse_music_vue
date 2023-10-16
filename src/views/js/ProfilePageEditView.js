import player from "@/components/player.vue";

export default {
  components: { player },
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
      login_mem_id: "",
      profileSongs: [],
      profileAlbums: [],
      searchsong: "",
      searchalbum: "",
      playerId: "", //播放器使用
    };
  },
  computed: {
    //歌曲搜尋------------------------------------------------------------------
    //https://hackmd.io/@Zihyin/B1SwD-Gmq
    filterprofileSongs() {
      const strArr = this.searchsong.split(" "); // 以空白格切分字串
      const arr = [];
      // 比對字串
      strArr.forEach((str) => {
        this.profileSongs.forEach((item) => {
          if (item.s_name.includes(str) || item.s_intro.includes(str)) {
            arr.push(item);
          }
        });
      });
      // 如果輸入兩個關鍵字就會出現重複的資料，所以需要刪除重複資料。
      // 過濾出重複的元素
      return [...new Set(arr)];
    },

    //專輯搜尋------------------------------------------------------------------
    filterprofileAlbum() {
      const strArr = this.searchalbum.split(" "); // 以空白格切分字串
      const arr = [];
      // 比對字串
      strArr.forEach((str) => {
        this.profileAlbums.forEach((item) => {
          if (item.alb_name.includes(str) || item.alb_intro.includes(str)) {
            arr.push(item);
          }
        });
      });
      // 如果輸入兩個關鍵字就會出現重複的資料，所以需要刪除重複資料。
      // 過濾出重複的元素
      return [...new Set(arr)];
    },
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
      // 1016 - 廖妍榛
      const url = `${this.$store.state.phpPublicPath}editProfileData.php`;
      const formData = new FormData();
      formData.append("mem_name", this.member[0].mem_name);
      formData.append("intro", this.member[0].intro);
      formData.append("county", this.member[0].county);
      formData.append("social_media", this.member[0].social_media);
      formData.append("mem_id", this.member[0].mem_id);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            // return response.json();
          } else {
            throw new Error("編輯失敗");
          }
        })
        // .then(() => {
        //   // alert(json);
        //   window.location.reload();
        // })
        .catch((error) => {
          console.log(error.message);
        });
      ////////////////////////////
      // 以下是原本的 - 廖妍榛
      // const url = `${this.$store.state.phpPublicPath}editProfileData.php`;
      // let headers = {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      // };
      // const dataToSend = {
      //   mem_name: this.member[0].mem_name,
      //   intro: this.member[0].intro,
      //   county: this.member[0].county,
      //   social_media: this.member[0].social_media,
      //   mem_id: this.member[0].mem_id,
      // };

      // fetch(url, {
      //   method: "POST",
      //   headers: headers,
      //   body: JSON.stringify(dataToSend),
      // })
      //   .then((response) => {
      //     if (response.ok) {
      //       return response.json();
      //     } else {
      //       throw new Error("編輯失敗");
      //     }
      //   })
      //   // .then(() => {
      //   //   window.location.reload();
      //   // })
      //   .catch((error) => {
      //     console.log(error.message);
      //   });
      // console.log(dataToSend);
    },
    //編輯歌曲------------------------------------------------------------------
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
    //編輯專輯------------------------------------------------------------------
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
    //播放器使用------------------------------------------------------------------
    openPlayer(sid) {
      this.playerId = sid;
      this.$refs.player.playMusic(this.playerId);
    },
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");
    if (this.login_mem_id) {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getProfileDetail.php?mem_id=${this.login_mem_id}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.member = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    // Fetch 會員資料
    // const fetchMemberInfo = () => {
    //   const apiURL = new URL(
    //     `http://localhost/muse_music/public/api/getProfileDetail.php?mem_id=${this.login_mem_id}`
    //   );

    //   fetch(apiURL)
    //     .then((res) => res.json())
    //     .then((res) => (this.member = res))
    //     .catch((error) => {
    //       console.error("發生錯誤:", error);
    //     });
    // };
    // fetchMemberInfo();

    if (this.login_mem_id) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileSong.php?memid=${this.login_mem_id}&stat=0`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.profileSongs = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    // // Fetch 歌曲資訊
    // const fetchSongData = () => {
    //   const apiURL = new URL(
    //     `${this.$store.state.phpPublicPath}getProfileSong.php?memid=${this.login_mem_id}&stat=0`
    //   );

    //   fetch(apiURL)
    //     .then((res) => res.json())
    //     .then((res) => (this.profileSongs = res))
    //     .catch((error) => {
    //       console.error("發生錯誤:", error);
    //     });
    // };

    if (this.login_mem_id) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileAlbum.php?memid=${this.login_mem_id}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.profileAlbums = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

    // const fetchAlbumData = () => {
    //   const apiURL = new URL(
    //     `${this.$store.state.phpPublicPath}getProfileAlbum.php?memid=${this.login_mem_id}`
    //   );

    //   fetch(apiURL)
    //     .then((res) => res.json())
    //     .then((res) => (this.profileAlbums = res))
    //     .catch((error) => {
    //       console.error("發生錯誤:", error);
    //     });
    // };

    // fetchSongData();
    // fetchAlbumData();
  },
};

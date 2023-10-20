import player from "@/components/player.vue";
import { Submit } from "view-ui-plus";

export default {
  components: { player },
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      login_mem_id: "",
      activeTab: 1, //1編輯個人主頁 2音樂上傳 3歌曲管理 4專輯管理
      //currentStep: 0,
      //編輯個人主頁------
      member: [
        {
          mem_id: "",
          cover_pic: "",
          mem_pic: "",
          mem_aka: "",
          intro: "",
          county: "",
          social_media: "",
          src: "", // 暫存
          coverSrc: "", // 暫存
        },
      ],
      //歌曲上傳------
      updateimg: false,
      showimg: "", //用於顯示
      newsong: {
        s_name: "",
        s_img: "",
        s_intro: "",
        s_src: "",
        s_src_name: "", //用於顯示
        s_lyrics: "",
        s_length: "",
      },
      //歌曲管理------
      searchsong: "",
      profileSongs: [],
      //專輯管理------
      searchalbum: "",
      profileAlbums: [],
      //播放器使用------
      playerId: "",
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
    },
    //頁面切換----------------------
    gotosinglemusic(sid) {
      this.$router.push({
        name: "singlemusic",
        params: {
          sid,
        },
      });
    },
    gotosinglealbum(abid) {
      let aa = this.$router.push({
        name: "singlealbum",
        params: {
          salid: abid,
        },
      });
    },
    //編輯個人主頁------------------------------------------------------------------

    //更新背景圖片------------------------------------------------------------------
    coverImgChange(e) {
      let that = this;
      let coverPic = e.target.files[0];
      if (!coverPic || !window.FileReader) return;
      let reader = new FileReader();
      reader.readAsDataURL(coverPic);

      reader.onloadend = function () {
        that.member[0].coverSrc = this.result;
        that.member[0].cover_pic = coverPic.name;
        console.log(this.result);
      };
      const cover_pic = new FormData();
      cover_pic.append("cover_pic", coverPic);
      cover_pic.append("mem_id", this.member[0].mem_id);
      fetch(`${this.$store.state.phpPublicPath}editProfileCover.php`, {
        method: "POST",
        body: cover_pic,
      })
        .then((response) => {
          if (response.ok) {
            alert("背景更新成功");
          } else {
            throw new Error("編輯失敗");
          }
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    coverloadImage(e) {
      this.member.cover_pic = e.target.result;
    },

    //更新大頭貼------------------------------------------------------------------
    profileImgChange(e) {
      let that = this;
      let files = e.target.files[0];
      if (!files || !window.FileReader) return;
      let reader = new FileReader();
      reader.readAsDataURL(files);

      reader.onloadend = function () {
        that.member[0].src = this.result;
        that.member[0].mem_pic = files.name;
        console.log(this.result);
      };

      const mem_pic = new FormData();
      mem_pic.append("mem_pic", files);
      mem_pic.append("mem_id", this.member[0].mem_id);
      console.log(files);
      fetch(`${this.$store.state.phpPublicPath}editProfilePic.php`, {
        method: "POST",
        body: mem_pic,
      })
        .then((response) => {
          if (response.ok) {
            alert("大頭貼更新成功");
          } else {
            throw new Error("編輯失敗");
          }
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    // 個人檔案 - 編輯
    saveBtn() {
      // const formData = new FormData();
      // formData.append("mem_aka", this.member[0].mem_aka);
      // formData.append("intro", this.member[0].intro);
      // formData.append("county", this.member[0].county);
      // formData.append("social_media", this.member[0].social_media);
      // formData.append("mem_id", this.member[0].mem_id);
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const dataToSend = {
        mem_aka: this.member[0].mem_aka,  // 请注意这里应该是 this.member，而不是 this.memeber
        intro: this.member[0].intro,
        county: this.member[0].county,
        social_media: this.member[0].social_media,
        mem_id: this.member[0].mem_id,
      };

      fetch(`${this.$store.state.phpPublicPath}editProfileData.php`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response.json();  // 返回 JSON 数据
          } else {
            throw new Error("編輯失敗");
          }
        })
        .then((json) => {  // 这里应该是 json，而不是未定义的变量
          alert("編輯成功"); // 显示成功消息
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    //歌曲上傳歌曲------------------------------------------------------------------
    //歌曲封面上傳
    SongImgChange(e) {
      let file = e.target.files[0];
      this.newsong.s_img = file;
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.changeimg);
    },
    //歌曲封面即時更換
    changeimg(e) {
      this.showimg = e.target.result;
      this.updateimg = true;
    },
    SongSrcChange(e) {
      let file = e.target.files[0];
      this.newsong.s_src = file;
      this.newsong.s_src_name = file.name;
      //抓取音樂長度-------------------------------------
      const audioFile = e.target.files[0];
      audioPlayer.src = URL.createObjectURL(audioFile);
      audioPlayer.load();
      audioPlayer.addEventListener("loadedmetadata", this.uploadSonglength);
    },
    uploadSonglength() {
      // 获取音频持续时间（以秒为单位）
      const durationInSeconds = audioPlayer.duration;

      // 可以将其转换为更友好的格式，例如分钟和秒
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = Math.round(durationInSeconds % 60);
      let timee = "";
      timee = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
      this.newsong.s_length = timee;
    },
    uploadSong() {
      //新增歌曲(含上傳圖片及音檔)------

      //把 class 名稱為 scat 且有被勾選的，放入 scatselected 陣列
      //請注意! 其他元素 class 避免命名為 scat
      const scatselected = [];
      const checkboxes = document.querySelectorAll(".scat:checked");
      checkboxes.forEach((checkbox) => {
        scatselected.push(checkbox.value);
      });
      const language = document.querySelectorAll(
        'input[name="language"]:checked'
      );

      // fetch 前先判斷欄位是否有填寫
      if (this.login_mem_id == undefined) {
        alert("使用會員功能，請先進行登入");
        this.$router.push({
          name: "login",
        });
      } else if (this.newsong.s_name == "") {
        alert("請確認所需欄位均已填寫完畢");
      } else if (this.newsong.s_src == "") {
        alert("請上傳歌曲音檔");
      } else if (language.length < 1) {
        alert("請選擇歌曲語系");
      } else {
        const url = `${this.$store.state.phpPublicPath}addNewSong.php`;
        let headers = {
          Accept: "application/json",
        };

        //fetch-------------------------------------
        const formData = new FormData();
        formData.append("memid", this.login_mem_id);
        formData.append("s_src", this.newsong.s_src); //音樂檔案
        formData.append("s_img", this.newsong.s_img); //圖片檔案
        formData.append("s_name", this.newsong.s_name);
        formData.append("s_intro", this.newsong.s_intro);
        formData.append("s_length", this.newsong.s_length);
        console.log(this.newsong.s_length);
        formData.append("scatselected", JSON.stringify(scatselected));

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
    changeSId() { }, //避免播放器報錯用
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");
    if (this.login_mem_id) {
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileDetail.php?mem_id=${this.login_mem_id}`
      );
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.member = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    }

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
  },
};

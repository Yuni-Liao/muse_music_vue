// import axios from 'axios';
export default {
  // 重推again
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      activeTab: 1,
      currentStep: 0,
      member: {
        mem_id: 1,
        coverimgURL: require(`/public/dataimage/member/1-2.jpg`),
        profileImgURL: require(`/public/dataimage/member/1-1.jpg`),
        name: "",
        introduction: "",
        county: "",
        socialMedia: "",
        privacy: "",
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

    updateMemberData(updatedData) {
      // 將更新後的會員資料設置到 member 數據中
      this.member = updatedData;
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

    //fetch 會員基本資料
    fetch('http://localhost/muse_music/public/api/getProfileDetail.php?mem_id=1')
      // axios.get('http://localhost/muse_music/public/api/getProfileDetail.php?mem_id=1')
      // .then(response => response.json())
      .then(response => {
        // const data = response.data;
        const data = response;
        const locations = [
          "基隆市",
          "台北市",
          "新北市",
          "桃園市",
          "新竹市",
          "新竹縣",
          "苗栗縣",
          "台中市",
          "彰化縣",
          "南投縣",
          "雲林縣",
          "嘉義市",
          "嘉義縣",
          "台南市",
          "高雄市",
          "屏東縣",
          "台東縣",
          "花蓮縣",
          "宜蘭縣",
          "澎湖縣",
          "金門縣",
          "連江縣"
        ];

        // 以陣列方式顯示縣市
        this.member.location = locations[10];
        this.member.name = data.name;
        this.member.introduction = data.introduction;
        this.member.county = data.county;
        this.member.socialMedia = data.socialMedia;
        this.member.privacy = data.privacy;
      })
      .catch(error => {
        console.error('獲取資料庫失敗:', error);
      });

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

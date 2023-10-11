export default {
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      searchdata: "",
      columns: [
        {
          title: "#",
          key: "no",
          width: 80,
          align: "center",
        },
        {
          title: "歌曲編號",
          key: "s_id",
          width: 100,
          align: "center",
        },
        {
          title: "提交時間",
          key: "s_length",
          width: 160,
          align: "center",
        },
        {
          title: "歌曲名稱",
          key: "s_name",
          width: 250,
          align: "center",
        },
        {
          title: "歌曲長度",
          key: "s_length",
          width: 100,
          align: "center",
        },
        {
          title: "會員帳號",
          key: "mem_acc",
          width: 200,
          align: "center",
        },
        {
          title: "操作",
          slot: "reviewBtn",
          width: 100,
          align: "center",
        },
      ], //待審核歌曲
      data: [],
      editBox: false,
      //編輯彈窗中的歌曲資訊
      editItem: {
        no: "",
        s_id: "",
        s_name: "",
        s_src: "",
      },
      //編輯彈窗中，該歌的歌曲類別
      editSongCat: [],
      isplay: false,
    };
  },
  mounted() {
    //fetch 待審核歌曲資料
    const fetchReviewSong = () => {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getReviewSong.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          //把陣列中每個物件都添加編號
          for (let i = 0; i < res.length; i++) {
            res[i].no = i + 1;
          }
          this.data = res;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchReviewSong();
  },
  methods: {
    editBtn(e) {
      this.editBox = true;
      this.editItem.no = e.no;
      this.editItem.s_id = e.s_id;
      this.editItem.s_name = e.s_name;
      this.editItem.s_src = e.s_src;

      //取得歌曲類別

      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getSongReviewSongCat.php?s_id=${e.s_id}`
      );
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          this.editSongCat = res.map((item) => item[0]);
          //console.log(this.editSongCat)
          this.editSongCat.forEach((id) => {
            const checkbox = document.querySelector(
              `input[name="songcat" ][value="${id}"]`
            );
            if (checkbox) {
              checkbox.checked = true;
            }
          });
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
    play() {
      let audioElement = document.querySelector("#myAudio");
      audioElement.play();
      this.isplay = true;
    },
    pause() {
      let audioElement = document.querySelector("#myAudio");
      audioElement.pause();
      this.isplay = false;
    },
    songReviewSearchBtn() {
      alert("搜尋歌曲");
    },
    //點擊空白處關閉彈窗
    closeBtn(e) {
      if (e.target.classList.contains("editwrap")) {
        this.isplay = false;
        this.editBox = false;
      }
    },
    approve() {
      // 獲取所有已選擇的歌單的 sl_id
      const selectedSongCats = Array.from(
        document.querySelectorAll("input[name='songcat']:checked")
      ).map((check) => check.value);
      console.log(selectedSongCats);
      if (selectedSongCats) {
        const url = `${this.$store.state.phpPublicPath}postReviewSong.php`;
        let headers = {
          Accept: "application/json",
        };

        const formData = new FormData();
        formData.append("s_id", this.albumData.alb_id);
        formData.append("reviewtype", 1);
        formData.append("selectedSongCats", JSON.stringify(selectedSongCats));

        fetch(url, {
          method: "POST",
          headers: headers,
          body: formData,
        })
          .then((response) => {
            return response.json();
          })
          .then(() => {
            // this.$router.push({
            //   name: "profilepageedit",
            // });
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      } else {
        alert("不可無歌曲類別");
      }
    },
    reject() {
      alert("駁回");
    },
  },
};

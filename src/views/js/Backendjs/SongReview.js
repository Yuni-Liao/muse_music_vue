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
  computed: {
    //歌曲搜尋
    //https://hackmd.io/@Zihyin/B1SwD-Gmq
    filterdata() {
      const strArr = this.searchdata.split(" "); // 以空白格切分字串
      const arr = [];
      // 比對字串
      strArr.forEach((str) => {
        this.data.forEach((item) => {
          if (item.s_name.includes(str) || item.s_id.includes(str)) {
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
      // 獲取所有已選擇的song_cat
      const selectedSongCats = Array.from(
        document.querySelectorAll("input[name='songcat']:checked")
      ).map((check) => check.value);

      if (selectedSongCats) {
        const url = `${this.$store.state.phpPublicPath}postReviewSong.php`;
        let headers = {
          Accept: "application/json",
        };

        const formData = new FormData();
        formData.append("s_id", this.editItem.s_id);
        formData.append("reviewtype", 1);
        formData.append("selectedSongCats", JSON.stringify(selectedSongCats));

        fetch(url, {
          method: "POST",
          headers: headers,
          body: formData,
        })
          .then((res) => {
            if (res.error) {
              alert(res.msg); // 显示错误消息
            } else {
              alert("歌曲審核通過");
              window.location.reload();
              //window.location.href = `${this.$store.state.publicURL}/home/profilepageedit`;
            }
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      } else {
        alert("不可無歌曲類別");
      }
    },
    reject() {
      // 獲取所有已選擇的song_cat
      const selectedSongCats = Array.from(
        document.querySelectorAll("input[name='songcat']:checked")
      ).map((check) => check.value);

      if (selectedSongCats) {
        const url = `${this.$store.state.phpPublicPath}postReviewSong.php`;
        let headers = {
          Accept: "application/json",
        };

        const formData = new FormData();
        formData.append("s_id", this.editItem.s_id);
        formData.append("reviewtype", 2);
        formData.append("selectedSongCats", JSON.stringify(selectedSongCats));

        fetch(url, {
          method: "POST",
          headers: headers,
          body: formData,
        })
          .then((res) => {
            if (res.error) {
              alert(res.msg); // 显示错误消息
            } else {
              alert("歌曲駁回");
              window.location.reload();
              //window.location.href = `${this.$store.state.linkPublicPath}backend/songreview`;
            }
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      } else {
        alert("不可無歌曲類別");
      }
    },
  },
};

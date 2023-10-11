import AddSongtoAlbum from "@/components/AddSongtoAlbum.vue";

export default {
  components: { AddSongtoAlbum },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isAddSongOpen: false,
      login_mem_id: 1, //這個之後要再改
      albumData: {
        alb_id: "",
        alb_img: "1.jpg",
        alb_name: "",
        alb_intro: "",
      }, //專輯的詳細資料
      allsong: [], //用於渲染
      noAlbumsongs: [], //沒有專輯的歌曲資料
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

    submit() {
      const selectedAddSongs = this.noAlbumsongs
        .filter((obj) => obj.isChecked === true)
        .map((obj) => obj.id);

      if (selectedAddSongs != 0) {
        //新增專輯歌曲------
        const url = `http://localhost/muse_music/public/api/addNewAlbum.php`;
        let headers = {
          Accept: "application/json",
        };
        const formData = new FormData();
        formData.append("alb_name", this.albumData.alb_name);
        formData.append("alb_intro", this.albumData.alb_intro);
        formData.append("alb_img", this.albumData.alb_img);
        formData.append("memid", this.login_mem_id);

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
          .then((response) => {
            //把專輯編號填上
            this.albumData.alb_id = response;

            //未有歌曲做新增(在該歌曲資訊中 update 上 alb_id 的值)------
            const url = `http://localhost/muse_music/public/api/editSongofAlbum.php`;
            let headers = {
              Accept: "application/json",
            };
            const formData = new FormData();
            formData.append("acttype", "1"); //PHP做新增動作
            formData.append("alb_id", this.albumData.alb_id);
            formData.append("selectedSongs", JSON.stringify(selectedAddSongs));
            fetch(url, {
              method: "POST",
              headers: headers,
              body: formData,
            })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("新增歌曲失敗");
                }
              })
              .catch((error) => {
                console.error("發生錯誤:", error);
              });
          })
          .then(() => {
            //頁面跳轉
            this.$router.push({
              name: "profilepageedit",
            });
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      } else {
        alert("請新增至少一首歌曲至專輯");
      }
    },
  },
  mounted() {
    // fetch 該會員未有專輯id的歌曲 ( 表示可以被加入專輯中 ) ，放入 noAlbumsongs 中
    const memid = this.login_mem_id;
    const apiURL = new URL(
      `http://localhost/muse_music/public/api/getNoAlbumsong.php?memid=${memid}`
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
  },
};

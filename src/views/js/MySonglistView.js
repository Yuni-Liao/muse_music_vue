import PlayBtnBig from "@/components/PlayBtnBig.vue";
import NewSl from "@/components/NewSl.vue";
import player from "@/components/player.vue";

export default {
  components: { PlayBtnBig, NewSl, player },
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      login_mem_id: "",
      morecurrent: -1,
      currentType: 0, //0,1,2
      isNewSlOpen: false,
      Myallsonglists: [],
      playerId: "", //播放器使用
      allSid: [], //存放所有歌曲的id，播放器使用
      AllSlSong: "",
    };
  },
  computed: {
    choosecreator() {
      // 使用 Array.filter() 過濾 memid 為 1 的資料
      return this.Myallsonglists.filter((item, index, array) => {
        if (this.currentType === 0) return true;
        if (this.currentType === 1) return item.creater_id == this.login_mem_id;
        return item.creater_id != this.login_mem_id;
      });
    },
  },
  methods: {
    //播放器使用------------------------------------------------------------------
    async openPlayer(slid) {
      await this.$refs.player.putallsong();

      let m = this.getSIdListBySlId(slid);
      this.allSid = m;
      this.playerId = m[0];

      this.$nextTick(() => {
        this.$refs.player.playMusic();
      });
    },
    //查詢歌單歌曲，回傳一陣列
    getSIdListBySlId(slId) {
      for (let i = 0; i < this.AllSlSong.length; i++) {
        if (this.AllSlSong[i].sl_id === slId) {
          return this.AllSlSong[i].s_id_list_all;

          //let m = this.AllSlSong[i].s_id_list_all;
          // alert(m);
        }
      }
      // 若未找到匹配的sl_id，則回傳一個空陣列
      this.allSid = [];
    },
    changeSId(newSId) {
      // 切換上下首--使用從子組件接收的新 s_id 更新 s_id prop
      this.playerId = newSId;
    },
    //更多選單------------------------------------------------------------------
    //更多選單 顯示隱藏
    showtoggle(e, index) {
      if (e.target.nextElementSibling.classList.contains("show")) {
        this.morecurrent = -1;
      } else {
        this.morecurrent = index;
      }
    },
    // togglelayout(e) {
    //   if (e.target.nextElementSibling.classList.contains("hidden")) {
    //     e.target.nextElementSibling.classList.remove("hidden");
    //   } else {
    //     e.target.nextElementSibling.classList.add("hidden");
    //   }
    // },
    closemore(e) {
      this.morecurrent = -1;
    },
    gotosonglist(slid) {
      // this.$router.push("/singlesonglist/:slid");
      this.$router.push({
        name: "singlesonglist",
        params: {
          slid: slid,
        },
      });
    },
    //刪除歌單------------------------------------------------------------------
    deleSl(slid) {
      let confirm = window.confirm(`確定刪除歌單?`);
      if (confirm == true) {
        const apiURL = new URL(
          `${this.$store.state.phpPublicPath}deleSl.php?slid=${slid}`
        );
        fetch(apiURL)
          .then((res) => res.json())
          .then(() => location.reload())
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      }
    },
    //取消追蹤歌單
    unfolsonglist(slid) {
      // this.Myallsonglists.splice(index, 1);
      // alert(`取消追蹤歌單，歌單編號:${slid}`);
      if (this.login_mem_id == undefined) {
        // 先判斷是否有登入
        alert("使用會員功能，請先進行登入");
        this.$router.push({
          name: "login",
        });
      } else {
        const url = `${this.$store.state.phpPublicPath}postFol.php`;
        let headers = {
          Accept: "application/json",
        };
        const formData = new FormData();
        formData.append("mem_id", this.login_mem_id);
        formData.append("fol_id", slid);
        formData.append("fol_type", 0); // 0追蹤歌單, 1追蹤創作者, 2追蹤音樂快訊
        formData.append("is_fol", true); //布林值

        fetch(url, {
          method: "POST",
          headers: headers,
          body: formData,
        })
          .then((data) => {
            if (data.error) {
              alert(data.msg); // 显示错误消息
            } else {
              let localStoragename = "sl_fol";
              let existingValue = localStorage.getItem(`${localStoragename}`);
              let updatedValue;
              // 将值拆分为数组，以逗号作为分隔符
              existingValue = existingValue.split(",");
              // 要删除的值
              let valueToRemove = slid;
              // 使用 filter 方法从数组中删除特定的值
              let updatedexistingValue = existingValue.filter(
                (item) => item !== valueToRemove
              );
              // 将数组重新组合为字符串，以逗号作为分隔符
              updatedValue = updatedexistingValue.join(",");
              localStorage.setItem(`${localStoragename}`, updatedValue);

              localStorage.setItem(`${localStoragename}`, updatedValue);
            }
          })
          .then(() => location.reload())
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      }
    },
    isNewSlOpenupdate(val) {
      this.isNewSlOpen = val;
      // alert("已新增一個新歌單");
    },
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");
    if (this.login_mem_id == undefined) {
      alert("使用會員功能，請先進行登入");
      this.$router.push({
        name: "login",
      });
    } else {
      const loginMemId = this.login_mem_id;

      // fetch我的歌單(含追蹤創建及追蹤)

      const apiURL1 = new URL(
        `${this.$store.state.phpPublicPath}getMyAllsonglists.php?loginMemId=${loginMemId}`
      );
      let Myallsonglist;
      fetch(apiURL1)
        .then((res) => res.json())
        .then((res) => {
          Myallsonglist = res;
          //根據創建日期排序
          this.Myallsonglists = Myallsonglist.sort(function (a, b) {
            return a.update_date < b.update_date ? 1 : -1;
          });
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });

      // fetch我的歌單歌曲

      const apiURL2 = new URL(
        `${this.$store.state.phpPublicPath}getAllSlSong.php`
      );
      fetch(apiURL2)
        .then((res) => res.json())
        .then((res) => (this.AllSlSong = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });

      //建立事件聆聽:點空白處關閉
      document.addEventListener("click", this.closemore, true);
    }
  },
  beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    document.removeEventListener("click", this.closemore);
  },
};

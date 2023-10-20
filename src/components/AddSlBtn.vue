<template>
  <button id="AddSlBtn" @click="openAddSl()">
    <fontAwesome class="i" :icon="['fa', 'plus']" />
  </button>
  <div class="AddSl_close" v-if="isAddSlOpen" @click.stop="closeAddSl($event)">
    <div id="AddSl">
      <form action="">
        <div class="AddSltitle">
          <span>加入歌單</span>
          <button class="addNewSl" type="button" @click="addNewSl()">
            <fontAwesome class="i" :icon="['fa', 'plus']" />
          </button>
        </div>
        <ul class="AddSlList">
          <li v-for="(item, index) in slData" class="AddSlListopt">
            <label class="checkboxLabel">
              <input type="checkbox" name="slid" :value="item.sl_id" />
              <fontAwesome class="i" :icon="['fa', 'fa-check']" />
            </label>
            <span class="AddSlslname">{{ item.sl_name }}</span>
            <span class="AddSlpublic">
              <fontAwesome
                v-if="item.public == 1"
                class="i"
                :icon="['fa', 'lock-open']" />
              <fontAwesome v-else class="i" :icon="['fa', 'lock']"
            /></span>
          </li>
        </ul>
        <div class="AddSlsubmit">
          <button @click.prevent="addSongtoSl()">
            <fontAwesome class="i" :icon="['fa', 'fa-check']" />完成
          </button>
        </div>
      </form>
    </div>
  </div>

  <NewSl
    v-if="isNewSlOpen"
    @isNewSlOpenupdate="isNewSlOpenupdate"
    :btntype="1"
  ></NewSl>
</template>
<script>
import NewSl from "@/components/NewSl.vue";
export default {
  props: {
    addSlSid: [String, Number],
    // isAddSlOpen: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  components: { NewSl },
  name: "AddSlBtn",
  data() {
    return {
      isAddSlOpen: false,
      isNewSlOpen: false,
      login_mem_id: "",

      //撈取該會員的歌單清單
      slData: [],
    };
  },
  computed: {
    // AddSlBtnStyle() {
    //   return {
    //     color: this.isAddSlBtn ? "#FE1C6C" : "#252525",
    //   };
    // },
  },
  methods: {
    fetchAllSonlist() {
      if (this.login_mem_id != undefined) {
        //fetch我的歌單(僅我創建的)

        const loginMemId = this.login_mem_id;
        const apiURL = new URL(
          `${this.$store.state.phpPublicPath}getMyCreateSonglists.php?loginMemId=${loginMemId}`
        );
        fetch(apiURL)
          .then((res) => res.json())
          .then((res) => {
            this.slData = res;
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      }
    },
    openAddSl() {
      if (this.login_mem_id == undefined) {
        alert("使用會員功能，請先進行登入");
        this.$router.push({
          name: "login",
        });
      } else {
        this.isAddSlOpen = true;
      }
    },
    //關閉加入歌單彈窗 (點擊空白處)
    closeAddSl(e) {
      if (e.target.classList.contains("AddSl_close")) {
        this.isAddSlOpen = false;
      }
    },
    //加入歌單動作
    addSongtoSl() {
      // 獲取所有已選擇的歌單的 sl_id
      const selectedSls = Array.from(
        document.querySelectorAll("input[name='slid']:checked")
      ).map((checkSl) => checkSl.value);
      //console.log(selectedSls);

      // 如果沒有選擇歌單，則alert提示
      if (selectedSls.length != 0) {
        const url = `${this.$store.state.phpPublicPath}addSongtoSl.php`;
        let headers = {
          Accept: "application/json",
        };
        const formData = new FormData();
        formData.append("s_id", this.addSlSid);
        formData.append("selectedSls", JSON.stringify(selectedSls));
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
            this.isAddSlOpen = false;
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
      } else {
        alert("請選擇歌單名稱");
        return;
      }
    },

    //與新增歌單相關-------------------------------------------------

    //打開新增歌單彈窗
    addNewSl() {
      this.isAddSlOpen = false;
      this.isNewSlOpen = true;
    },
    //關閉新增歌單彈窗(接子組件值)
    async isNewSlOpenupdate(val) {
      await this.fetchAllSonlist();
      this.isNewSlOpen = val;
      this.isAddSlOpen = true;
    },
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");
    //判斷是否登入
    this.fetchAllSonlist();
  },
};
</script>

<style scoped lang="scss">
#AddSlBtn {
  @include music_btn_circle(35px);
  &:hover {
    color: $pink;
  }
}

.AddSl_close {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 300;
  background-color: $tp;

  #AddSl {
    width: 400px;
    @media screen and (max-width: 800px) {
      width: 350px;
      background-color: #2b2b2bf6;
    }
    // 水平垂直置中
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // background-color: #000000ee;
    background-color: #2b2b2bee;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    color: $white;
    padding: 0 30px;
    box-shadow: 0px 0px 50px #00000030;
    .AddSltitle {
      height: 70px;
      display: flex;
      justify-content: space-between;
      padding-top: 30px; //保留歌單內容與title的空間
      align-items: baseline;
      span {
        font-size: $default;
      }
      .addNewSl {
        @include btnBgNone;
        color: $white;
        margin-right: 10px;
        .i {
          font-size: $default;
        }
      }
      .addNewSl:hover .i {
        color: $green;
      }
    }
    .AddSlList {
      height: 220px;
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: 20px;
      .AddSlListopt {
        margin: 20px 0;
        display: flex;
        align-items: center;
        .checkboxLabel {
          position: relative;
          margin-right: 20px;
          padding-top: 2px;
          input[type="checkbox"] {
            cursor: pointer;
            vertical-align: sub;
            color: $white;
            width: 23px;
            height: 23px;
            border-radius: 50%;
            /*清除預設樣式*/
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            border: 2px solid #ffffff80;
          }
          .i {
            position: absolute;
            z-index: 10;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            font-size: 12px;
            color: $green;
            margin: 0;
            opacity: 0;
            pointer-events: none;
          }
          input[type="checkbox"]:hover,
          input[type="checkbox"]:checked {
            border: 2px solid $green;
          }
          input[type="checkbox"]:checked ~ .i {
            opacity: 1;
          }
        }
        .AddSlslname {
          flex-grow: 1;
          text-align: start;
        }
        .AddSlpublic {
          text-align: left;
          width: 20px;
          .i {
            color: $pink;
          }
        }
      }
    }
    //滾軸樣式
    .AddSlList::-webkit-scrollbar {
      width: 5px;
      background-color: #252525;
      border-radius: 10px;
    }
    .AddSlList::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #ffffff20;
    }
    .AddSlsubmit {
      width: 100%;
      height: 70px;
      margin-top: 20px; //保留歌單內容與按鈕的空間
      border-top: 1px solid #ffffff80;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      button {
        position: relative;
        left: -15px;
        margin: auto;

        @include btnBgNone;
        font-size: $default;
        color: $white;
        .i {
          margin-right: 20px;
        }
      }
      button:hover {
        color: $green;
      }
    }
  }
}
</style>

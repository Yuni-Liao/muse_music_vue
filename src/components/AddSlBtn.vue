<template>
  <button id="AddSlBtn" @click="isAddSlOpen = true">
    <fontAwesome class="i" :icon="['fa', 'plus']" :style="AddSlBtnStyle" />
  </button>

  <div id="AddSl" v-if="isAddSlOpen">
    <form action="">
      <div class="title">
        <span>加入歌單</span>
        <button class="addNewSl" type="button" @click="addNewSl()">
          <fontAwesome class="i" :icon="['fa', 'plus']" />
        </button>
      </div>
      <ul>
        <li v-for="(item, index) in slData" class="opt">
          <label class="checkboxLabel">
            <input type="checkbox" name="slid" :value="item.sl_id" />
            <fontAwesome class="i" :icon="['fa', 'fa-check']" />
          </label>
          <span class="slname">{{ item.sl_name }}</span>
          <span class="public">
            <fontAwesome
              v-if="item.public == 1"
              class="i"
              :icon="['fa', 'lock-open']" />
            <fontAwesome v-else class="i" :icon="['fa', 'lock']"
          /></span>
        </li>
      </ul>
      <div class="submit">
        <button type="button" @click="closeAddSl()">
          <fontAwesome class="i" :icon="['fa', 'fa-check']" />完成
        </button>
      </div>
    </form>
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
      isAddSlBtn: false,
      isAddSlOpen: false,
      isNewSlOpen: false,
      login_mem_id: 1, //這個之後要再改

      //撈取該會員的歌單清單
      slData: [],
    };
  },
  computed: {
    AddSlBtnStyle() {
      return {
        color: this.isAddSlBtn ? "#FE1C6C" : "#252525",
      };
    },
  },
  methods: {
    //fetch我的歌單(含追蹤創建及追蹤)
    fetchMyallsonglist() {
      const loginMemId = this.login_mem_id;
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getMyAllsonglists.php?loginMemId=${loginMemId}`
      );
      let Myallsonglist;
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => {
          Myallsonglist = res;
          //根據創建日期排序
          this.slData = Myallsonglist.sort(function (a, b) {
            return a.update_date < b.update_date ? 1 : -1;
          });
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
    addNewSl() {
      this.isAddSlOpen = false;
      this.isNewSlOpen = true;
    },
    closeAddSl() {
      this.isAddSlOpen = false;
      console.log(this.addSlSid);
    },
    isNewSlOpenupdate(val) {
      this.isNewSlOpen = val;
      this.isAddSlOpen = true;
      this.fetchMyallsonglist();
    },
    openAddSl() {
      this.isAddSlOpen = true;
    },
  },
  mounted() {
    // 執行fetch
    this.fetchMyallsonglist();
  },
};
</script>

<style scoped lang="scss">
#AddSlBtn {
  @include music_btn_circle(35px);
}
#AddSl {
  width: 400px;
  @media screen and (max-width: 800px) {
    width: 350px;
    background-color: #2b2b2bf6;
  }
  // 水平垂直置中
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;

  // background-color: #000000ee;
  background-color: #2b2b2bee;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  color: $white;
  padding: 0 30px;
  box-shadow: 0px 0px 50px #00000030;
  .title {
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
  ul {
    height: 220px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 20px;
    .opt {
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
      .slname {
        flex-grow: 1;
        text-align: start;
      }
      .public {
        text-align: left;
        width: 20px;
        .i {
          color: $pink;
        }
      }
    }
  }
  //滾軸樣式
  ul::-webkit-scrollbar {
    width: 5px;
    background-color: #252525;
    border-radius: 10px;
  }
  ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ffffff20;
  }
  .submit {
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
</style>

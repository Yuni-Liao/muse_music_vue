<template>
  <button
    id="FolBtnBig"
    class="obj_Rounded"
    :class="{ active: isFol }"
    @click="toggleFol()"
  >
    <fontAwesome v-show="!isFol" class="i" :icon="['fa', 'plus']" />
    {{ isFol ? " 已追蹤 " : "追蹤" }}
  </button>
</template>
<script>
export default {
  name: "FolBtnBig",
  props: ["functype", "folnum"],
  //functype: 0追蹤歌單, 1追蹤創作者, 2追蹤音樂快訊
  data() {
    return {
      isFol: "",
      folList: [],
      login_mem_id: "",
    };
  },
  watch: {
    folnum: {
      immediate: true, // 立即执行一次
      handler(newVal, oldVal) {
        this.BtnShow();
      },
    },
  },
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");

    if (this.functype == 0) {
      this.folList = localStorage.getItem("sl_fol").split(",");
    } else if (this.functype == 1) {
      this.folList = localStorage.getItem("cre_fol").split(",");
    } else if (this.functype == 2) {
      this.folList = localStorage.getItem("news_fol").split(",");
    }

    //追蹤歌單處理
  },
  methods: {
    //最初判斷追蹤按鈕顯示
    BtnShow() {
      if (this.folList.includes(this.folnum)) {
        this.isFol = true;
      } else {
        this.isFol = false;
      }
    },
    toggleFol() {
      if (this.login_mem_id == undefined) {
        // 先判斷是否有登入

        alert("使用會員功能，請先進行登入");
        this.$router.push({
          name: "login",
        });
      } else {
        //歌單追蹤功能--------------------------
        // if (this.functype === 0) {
        const url = `${this.$store.state.phpPublicPath}postFol.php`;
        let headers = {
          Accept: "application/json",
        };
        const formData = new FormData();
        formData.append("mem_id", this.login_mem_id);
        formData.append("fol_id", this.folnum);
        formData.append("fol_type", this.functype); // 0追蹤歌單, 1追蹤創作者, 2追蹤音樂快訊
        formData.append("is_fol", this.isFol); //布林值

        fetch(url, {
          method: "POST",
          headers: headers,
          body: formData,
        })
          .then((data) => {
            if (data.error) {
              alert(data.msg); // 显示错误消息
            } else {
              let localStoragename;
              if (this.functype === 0) {
                localStoragename = "sl_fol";
              } else if (this.functype === 1) {
                localStoragename = "cre_fol";
              } else if (this.functype === 2) {
                localStoragename = "news_fol";
              }

              let existingValue = localStorage.getItem(`${localStoragename}`);
              let updatedValue;
              if (this.isFol) {
                // 将值拆分为数组，以逗号作为分隔符
                existingValue = existingValue.split(",");

                // 要删除的值
                let valueToRemove = this.folnum;

                // 使用 filter 方法从数组中删除特定的值
                let updatedexistingValue = existingValue.filter(
                  (item) => item !== valueToRemove
                );

                // 将数组重新组合为字符串，以逗号作为分隔符
                updatedValue = updatedexistingValue.join(",");
                localStorage.setItem(`${localStoragename}`, updatedValue);
                this.isFol = !this.isFol;
              } else {
                // 2. 将新值 "20" 追加到获得的值
                let newValueToAppend = this.folnum; // 你要追加的新值
                updatedValue = existingValue
                  ? `${existingValue},${newValueToAppend}`
                  : newValueToAppend;

                // 3. 将更新后的值重新存储回 localStorage
                localStorage.setItem(`${localStoragename}`, updatedValue);
                this.isFol = !this.isFol;
              }
              localStorage.setItem(`${localStoragename}`, updatedValue);
              this.folList = localStorage
                .getItem(`${localStoragename}`)
                .split(",");
            }
          })
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
        // } else if (this.functype === 1) {
        //   //創作者追蹤功能 (有餘力再寫)--------------------------

        //   if (this.isFol) {
        //     this.isFol = !this.isFol;
        //     //測試用，以下撰寫功能
        //     alert("取消追蹤創作者");
        //   } else {
        //     this.isFol = !this.isFol;
        //     //測試用，以下撰寫功能
        //     alert("追蹤創作者");
        //   }
        // } else if (this.functype === 2) {
        //   //音樂快訊追蹤功能 (有餘力再寫)--------------------------

        //   if (this.isFol) {
        //     this.isFol = !this.isFol;
        //     //測試用，以下撰寫功能
        //     alert("取消追蹤音樂快訊");
        //   } else {
        //     this.isFol = !this.isFol;
        //     //測試用，以下撰寫功能
        //     alert("追蹤音樂快訊");
        //   }
        //   }
      }
    },
  },
};
</script>

<style scoped lang="scss">
#FolBtnBig {
  @include btnColor($green, false, false);
  font-size: 14px;
  padding: 4px 13px;
}

#FolBtnBig.active {
  @include btnColor($green, true, false);
  background-color: transparent;
}
</style>

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
//還沒寫完，還要從父取值去控制按鈕功能

export default {
  name: "FolBtnBig",
  data() {
    return {
      isFol: false,
      functype: 2, //0追蹤歌單, 1追蹤創作者, 2追蹤音樂快訊
    };
  },
  methods: {
    toggleFol() {
      //歌單追蹤功能--------------------------
      if (this.functype === 0) {
        if (this.isFol) {
          this.isFol = !this.isFol;
          //測試用，以下撰寫功能
          alert("取消追蹤歌單");
        } else {
          this.isFol = !this.isFol;
          //測試用，以下撰寫功能
          alert("追蹤歌單");
        }
      }
      //創作者追蹤功能--------------------------
      else if (this.functype === 1) {
        if (this.isFol) {
          this.isFol = !this.isFol;
          //測試用，以下撰寫功能
          alert("取消追蹤創作者");
        } else {
          this.isFol = !this.isFol;
          //測試用，以下撰寫功能
          alert("追蹤創作者");
        }
      }
      //音樂快訊追蹤功能--------------------------
      else if (this.functype === 2) {
        if (this.isFol) {
          this.isFol = !this.isFol;
          //測試用，以下撰寫功能
          alert("取消追蹤音樂快訊");
        } else {
          this.isFol = !this.isFol;
          //測試用，以下撰寫功能
          alert("追蹤音樂快訊");
        }
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

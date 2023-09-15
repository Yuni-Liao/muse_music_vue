<template>
  <button id="AddSlBtn" @click="toggleAddSlBtn()">
    <fontAwesome :icon="['fa', 'plus']" :style="AddSlBtnStyle" />
  </button>
</template>
<script>
export default {
  name: "AddSlBtn",
  data() {
    return {
      isAddSlBtn: false,
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
    toggleAddSlBtn() {
      this.isAddSlBtn = !this.isAddSlBtn;
      // 這邊再補上加到歌單的後續操作
    },
  },
};
</script>

<style scoped lang="scss">
#AddSlBtn {
  @include music_btn_circle(35px);
}
</style>

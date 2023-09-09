<template>
  <button id="ShareBtn" @click="ShareBtn()">
    <fontAwesome :icon="['fa', 'share']" style="color: #252525" />
  </button>
</template>
<script>
export default {
  name: "ShareBtn",
  methods: {
    ShareBtn() {
      // 此處撰寫功能code，測試用內容可清除
      alert("分享");
    },
  },
};
</script>

<style scoped lang="scss">
#ShareBtn {
  @include music_btn_circle(35px);
}
</style>

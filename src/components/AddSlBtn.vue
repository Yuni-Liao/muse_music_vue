<template>
  <button id="AddSlBtn" @click="AddSlBtn()">
    <fontAwesome :icon="['fa', 'plus']" style="color: #252525" />
  </button>
</template>
<script>
export default {
  name: "AddSlBtn",
  methods: {
    AddSlBtn() {
      // 此處撰寫功能code，測試用內容可清除
      alert("加入歌單");
    },
  },
};
</script>

<style scoped lang="scss">
#AddSlBtn {
  @include music_btn_circle(35px);
}
</style>

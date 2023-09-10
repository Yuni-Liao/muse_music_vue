<template>
  <button id="AddFavBtn" @click="AddFavBtn()">
    <fontAwesome :icon="['fa', 'heart']" style="color: #252525" />
  </button>
</template>
<script>
export default {
  name: "AddFavBtn",
  methods: {
    AddFavBtn() {
      // 此處撰寫功能code，測試用內容可清除
      alert("家入我的最愛");
    },
  },
};
</script>

<style scoped lang="scss">
#AddFavBtn {
  @include music_btn_circle(35px);
}
</style>

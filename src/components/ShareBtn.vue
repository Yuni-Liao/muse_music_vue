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

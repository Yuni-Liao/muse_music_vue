<template>
  <button id="PlayBtnBig" @click="playsong">
    <fontAwesome :icon="['fa', 'play']" size="xl" style="color: #252525" />
  </button>
</template>

<script>
export default {
  name: "PlayBtnBig",
  methods: {
    playsong() {
      // 此處撰寫功能code，測試用內容可清除
      // alert("播放歌單/專輯");
      
    },
  },
};
</script>

<style scoped lang="scss">
#PlayBtnBig {
  @include music_btn_circle(55px);
}
</style>

<template>
  <button id="PlayBtnBig" @click="playsong">
    <fontAwesome :icon="['fa', 'play']" />
  </button>
</template>

<script>
export default {
  name: "PlayBtnBig",
  methods: {
    playsong() {
      alert("播放歌單/專輯");
    },
  },
};
</script>

<style scoped>
#PlayBtnBig {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #ffffff;
  border-radius: 50%;
}
</style>

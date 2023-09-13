<template>
  <button
    id="FolBtnBig"
    class="obj_Rounded"
    :class="{ active: isFol }"
    @click="toggleFol()"
  >
    <fontAwesome class="i" :icon="['fa', 'plus']" /> 追蹤
  </button>
</template>
<script>
export default {
  name: "FolBtnBig",
  data() {
    return {
      isFol: false,
      functype: 0, //0追蹤歌單, 1追蹤創作者, 2追蹤音樂快訊
    };
  },
  computed: {
    // AddSlBtnStyle() {
    //   return {
    //     color: this.toggleFol ? "red" : "#252525",
    //   };
    // },
  },
  methods: {
    toggleFol() {
      this.isFol = !this.isFol;
      console.log(this.isFol);
    },
  },
};
</script>

<style scoped lang="scss">
#FolBtnBig {
  @include btnColor($green, false);
  color: #ffffff;
  font-size: $default;
  i {
    display: none;
  }
}
#FolBtnBig.active {
  @include btnColor($green);
  background-color: transparent;
}
</style>

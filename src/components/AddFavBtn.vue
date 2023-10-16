<template>
  <button id="AddFavBtn" @click="toggleFavorite">
    <fontAwesome class="i" :icon="['fa', 'heart']" :style="favButtonStyle" />
  </button>
</template>

<script>
export default {
  name: "AddFavBtn",
  data() {
    return {
      isFavorited: false,
    };
  },
  computed: {
    favButtonStyle() {
      return {
        color: this.isFavorited ? "#FE1C6C" : "",
      };
    },
  },
  methods: {
    toggleFavorite() {
      this.isFavorited = !this.isFavorited;
      // 這邊再補上加到最爱的後續操作
    },
  },
};
</script>

<style scoped lang="scss">
#AddFavBtn {
  @include music_btn_circle(35px);
}
#AddFavBtn:hover > .i {
  color: $pink;
}
</style>

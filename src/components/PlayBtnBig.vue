<template>
  <button id="PlayBtnBig">
    <fontAwesome :icon="['fa', 'play']" size="xl" style="color: #252525" />
  </button>
</template>

<script>
export default {
  name: "PlayBtnBig",
  methods: {},
};
</script>

<style scoped lang="scss">
#PlayBtnBig {
  @include music_btn_circle(55px);
}
</style>

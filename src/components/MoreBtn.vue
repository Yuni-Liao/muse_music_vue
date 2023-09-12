<template>
  <button id="MoreBtn" @click="visibleChange($event)">
    <fontAwesome :icon="['fa', 'ellipsis']" />
  </button>
</template>

<script>
export default {
  name: "MoreBtn",
  // data() {
  //   return {
  //     isVisible: false, //初始狀態為隱藏
  //   };
  // },
  methods: {
    visibleChange(e) {
      if (e.target.nextElementSibling.classList.contains("hidden")) {
        e.target.nextElementSibling.classList.remove("hidden");
      } else {
        e.target.nextElementSibling.classList.add("hidden");
      }
      console.log(e.target.nextElementSibling);
      // this.isVisible = !this.isVisible;
      // this.$emit("visibleChange", this.isVisible);
    },
  },
};
</script>

<style scoped lang="scss">
#MoreBtn {
  //去除button預設樣式
  background: transparent;
  border: none;
  color: #ffffff;
  .fa-ellipsis {
    pointer-events: none;
  }
}
#MoreBtn:hover .fa-ellipsis {
  color: $blue;
}
</style>

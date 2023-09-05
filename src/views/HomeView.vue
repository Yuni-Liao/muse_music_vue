<template>
  <div class="index">
    <h1>Hi 首頁~~中間是主要內容區塊喔~</h1>
    <!-- <HelloWorld msg="Welcome~~" /> -->

    <fontAwesome :icon="['fa', 'lock-open']" />
    <fontAwesome :icon="['fa', 'lock']" />
    <fontAwesome :icon="['fa', 'cake-candles']" />
  </div>
</template>

<!-- <script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      value: 0
    }
  },
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->


<style scoped lang="scss">
@import "~@/assets/scss/page/index.scss";
</style>
<script src="./js/HomeView"></script>

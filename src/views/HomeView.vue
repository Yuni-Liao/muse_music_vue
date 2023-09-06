<template>
  <!-- <div class="login">
    1234
  </div> -->
  <!-- 輪播區開始 -->
  <Carousel class="index_carousel" autoplay v-model="value" loop>
    <CarouselItem>
      <div class="index_carousel_item">1</div>
    </CarouselItem>
    <CarouselItem>
      <div class="index_carousel_item">2</div>
    </CarouselItem>
    <CarouselItem>
      <div class="index_carousel_item">3</div>
    </CarouselItem>
    <CarouselItem>
      <div class="index_carousel_item">4</div>
    </CarouselItem>
  </Carousel>
  <!-- 輪播區結束 -->
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

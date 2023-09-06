<template>
  <div class="ranking">
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="0"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><p>section1</p> </swiper-slide>
      <swiper-slide><p>section2</p> </swiper-slide>
      <swiper-slide><p>section3</p> </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/ranking.scss";
</style>
<script src="./js/RankingView"></script>

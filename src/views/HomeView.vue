<template>
  <div class="index">
    <h1>Hi 首頁~~中間是主要內容區塊喔~</h1>
    <!-- <HelloWorld msg="Welcome~~" /> -->
    <!-- 
    <fontAwesome :icon="['fa', 'lock-open']" />
    <fontAwesome :icon="['fa', 'lock']" />
    <fontAwesome :icon="['fa', 'cake-candles']" /> -->

    <!--新歌推薦輪播 - 黃珮菁 -->

    <section class="index_newMusic">
      <h2>新歌推薦．New Rlease</h2>
      <swiper
        class="mySwiper"
        :initialSlide="4"
        :effect="'coverflow'"
        :slideToClickedSlide="false"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="2.5"
        :slidesPerGroup="1"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
      >
        <swiper-slide v-for="(item, index) in songs" :key="index">
          <router-link to="/shopProd/1">
            <div class="card">
              <img :src="require(`@/assets/image/index/${item.image}`)" />
              <div class="text">
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.singer }}<span>播放量{{ item.views }}</span>
                </p>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </section>

    <!--本週熱門歌曲輪播 - 黃珮菁 -->
    <section class="index_WeekTopusic">
      <h2>本週熱門歌曲．Popular Songs This Week</h2>
      <swiper
        class="mySwiper"
        :initialSlide="4"
        :effect="'coverflow'"
        :slideToClickedSlide="false"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="2.5"
        :slidesPerGroup="1"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
      >
        <swiper-slide v-for="(item, index) in songs" :key="index">
          <router-link to="/shopProd/1">
            <div class="card">
              <img :src="require(`@/assets/image/index/${item.image}`)" />
              <div class="text">
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.singer }}<span>播放量{{ item.views }}</span>
                </p>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </section>
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

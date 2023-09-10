<template>
  <!-- 頂部輪播區 -廖妍榛 -->
  <section class="index_topCarousel">
    <swiper class="topSwiper" :initialSlide="0" :modules="modules" :effect="'fade'" :pagination="{
      clickable: true,
    }" :autoplay="{ delay: 2500, disableOnInteraction: false }">
      <swiper-slide v-for="(item, index) in topBanner" :key="index">
        <img class="pic" :src="require(`/public/image/index/${item.image}`)" />
      </swiper-slide>
    </swiper>
  </section>

  <!-- 音樂謬思就是音樂的發生地 -廖妍榛 -->

  <div class="index_centerSlogn">
    <div class="index_centerH1">
      <h1>Making Waves</h1>
    </div>
    <div class="index_joinUs">
      <span></span>
    </div>
    <div class="index_centerP">
      <p>音樂謬思，就是音樂的發生地</p>
    </div>
  </div>

  <!--新歌推薦輪播 - 黃珮菁 -->
  <section class="index_newMusic">
    <h2>新歌推薦．New Rlease</h2>
    <swiper class="mySwiper" :initialSlide="4" :effect="'coverflow'" :slideToClickedSlide="false" :grabCursor="true"
      :centeredSlides="true" :slidesPerView="2.5" :slidesPerGroup="1" :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1.5,
        slideShadows: false,
      }" :pagination="{
  clickable: true,
}" :modules="modules">
      <swiper-slide v-for="(item, index) in songs" :key="index">
        <router-link to="/shopProd/1">
          <div class="card">
            <img :src="require(`/public/image/index/${item.image}`)" />
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
    <swiper class="mySwiper" :initialSlide="4" :effect="'coverflow'" :slideToClickedSlide="false" :grabCursor="true"
      :centeredSlides="true" :slidesPerView="2.5" :slidesPerGroup="1" :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1.5,
        slideShadows: false,
      }" :pagination="{
  clickable: true,
}" :modules="modules">
      <swiper-slide v-for="(item, index) in songs" :key="index">
        <router-link to="/shopProd/1">
          <div class="card">
            <img :src="require(`/public/image/index/${item.image}`)" />
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

  <!-- 本週熱門專輯 -廖妍榛 -->
  <section class="index_WeekTopAlbum">
    <h2>本週熱門專輯．Popular Album This Week</h2>
    <div class="index_albumBox">
      <Grid center square :border="false">
        <GridItem v-for="(item, index) in album" :key="index">
          <div class="imgbox"><img :src="require(`/public/image/index/${item.image}`)" />
            <span class="ranking">
              {{ item.ranking }}<br>
              <span class="name">{{ item.name }}<br>
                <span class="alb">{{ item.alb }}</span>
              </span>
            </span>
          </div>
        </GridItem>
      </Grid>
    </div>
  </section>

  <!-- 專輯下方閃電線 -廖妍榛 -->
  <div class="hr">
    <img src="/image/index/index_lineBg.svg" alt="" />
  </div>

  <!-- 音樂轉盤 -廖妍榛 -->
  <section class="index_revolve">
    <h2>轉出你的音樂．Revolve</h2>
    <div class="step">
      <div class="pic">
        <img src="/image/index/index_revolveBook.svg" alt="選出你現在的情緒" />
        <div class="txt">
          <p>選出你現在的情緒</p>
        </div>
      </div>
      <div class="pic">
        <img src="/image/index/index_revolveCd.svg" alt="音樂旋轉挑選中" />
        <div class="txt">
          <p>音樂旋轉挑選中</p>
        </div>
      </div>
      <div class="pic">
        <img src="/image/index/index_revolveNote.svg" alt="轉出你的情緒音樂!" />
        <div class="txt">
          <p>屬於你的情緒音樂！</p>
        </div>
      </div>
    </div>
    <img class="index_loop" src="/image/index/index_revolveLoop.png" alt="音樂轉盤機器" />
  </section>

  <!-- 情緒歌單 -廖妍榛 -->
  <!-- 功能還在處理中 -->
  <section class="index_emo">
    <h2>情緒歌單．Find Your Emotion</h2>
    <swiper :effect="'cards'" :grabCursor="false" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, index) in ques" :key="index">
        <div class="index_emoQue">
          <p>{{ item.title }}</p>
          <div class="index_emoAns">
            <div class="index_input">
              <input type="radio" name="ans" />
              <span>{{ item.ans[0] }}</span>
            </div>
            <div class="index_input"><input type="radio" name="ans" />
              <span>{{ item.ans[1] }}</span>
            </div>
            <div class="index_input"><input type="radio" name="ans" />
              <span>{{ item.ans[2] }}</span>
            </div>
          </div>
          <button class="index_emoNext"><span>下一題</span>
            <fontAwesome :icon="['fa', 'angle-right']" />
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/index.scss";
</style>
<script src="./js/HomeView.js"></script>




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
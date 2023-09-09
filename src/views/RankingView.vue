<template>
  <div class="ranking">
    <swiper :direction="'vertical'" :slidesPerView="1" :spaceBetween="0" :mousewheel="true" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
      <swiper-slide>
        <div class="weekTopSongs">
          <section>
            <h2>當週單曲排行榜</h2>
          </section>
          <section class="ranking">
            <!-- 1-5名 -->
            <ol>
              <li v-for="(item, intex) in firstFiveSongs" :key="index">
                <img :src="require(`@/assets/image/index/${item.image}`)" alt="" />
                <!-- <button id="playBtn">PLAY</button> -->
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span>{{ item.views }}</span>
                  </p>
                  <div>
                    <button>愛</button>
                    <button>+</button>
                  </div>
                </div>
              </li>
            </ol>
            <!-- 6-10名 -->
            <ol>
              <li v-for="(item, intex) in lastFiveSongs" :key="index">
                <img :src="require(`@/assets/image/index/${item.image}`)" alt="" />
                <!-- <button>PLAY</button> -->
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span>{{ item.views }}</span>
                  </p>
                  <div>
                    <button>愛</button>
                    <button>+</button>
                  </div>
                </div>
              </li>
            </ol>
            <div>
              <button>前五</button>
              <button>後五</button>
            </div>
          </section>
        </div>
      </swiper-slide>
      <swiper-slide>
        <p>section2</p>
      </swiper-slide>
      <swiper-slide>
        <p>section3</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/ranking.scss";
</style>
<script src="./js/RankingView.js"></script>

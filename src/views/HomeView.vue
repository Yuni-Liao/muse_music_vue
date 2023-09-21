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

  <!--本週熱門歌曲輪播 - 黃珮菁 -->
  <section class="index_WeekTopmusic">
    <h2>本週熱門歌曲．Popular Songs This Week</h2>
    <swiper class="mySwiper" :initialSlide="4" :effect="slide" :slideToClickedSlide="false" :grabCursor="false"
      :centeredSlides="true" :breakpoints="{
        '414': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 5,
        },
      }" :slidesPerView="1" :slidesPerGroup="1" :speed="0.001" :autoplay="{
  delay: 4000,
  disableOnInteraction: false,
}" :modules="modules">
      <swiper-slide v-for="(item, sid) in songs" :key="sid">
        <div class="card">
          <img :src="require(`/public/image/index/${item.image}`)" @click="playmusic()" />
          <div class="text" @click="gotosinglemusic(item.sid)">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.singer }}<span>播放量{{ item.views }}</span>
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <!-- 本週熱門專輯 -廖妍榛 -->
  <section class="index_WeekTopAlbum">
    <h2>本週熱門專輯．Popular Album This Week</h2>
    <div class="index_albumBox">
      <Grid center square :border="false">
        <GridItem v-for="(item, index) in album" :key="index">
          <div class="imgbox">
            <img :src="require(`/public/image/index/${item.image}`)" />
            <span class="ranking">
              {{ item.ranking }}<br />
              <span class="name">{{ item.name }}<br />
                <span class="alb">{{ item.alb }}</span>
              </span>
            </span>
          </div>
        </GridItem>
      </Grid>
    </div>
  </section>

  <!-- 專輯下方閃電線 -廖妍榛 -->
  <!-- <div class="hr">
    <img src="/image/index/index_lineBg.svg" />
  </div> -->

  <div class="wave">
    <svg  width="1699" height="271" viewBox="0 0 1699 271" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; max-height: 100%;">
        <path d="M5.27764 199.464L147.14 123.465L284.676 177.219L383.117 133.267L508.459 159.401L623.839 85.5109L730.256 141.742L810.159 99.2665L922.26 126.455L1069.42 50.0344L1189.08 105.211L1249.5 35.6963L1353.27 92.1384L1451.44 19.6185L1594.93 72.8979L1689 19.6185" stroke="white" stroke-width="3" stroke-dasharray="0,0,0,1898.704833984375"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1000" dur="2.5s" values="0,0,0,1898.704833984375; 
                  0,949.3524169921875,949.3524169921875,0; 
                  1898.704833984375,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
        <path d="M6.11919 234.64L147.982 158.641L285.517 212.395L383.958 168.443L509.301 194.578L624.68 120.687L731.098 176.919L811.001 134.443L923.101 161.632L1070.26 85.211L1189.92 140.388L1250.35 70.8728L1354.12 127.315L1452.28 54.795L1595.78 108.074L1689.84 54.795" stroke="white" stroke-width="3" stroke-dasharray="0,0,0,1898.70458984375"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1000" dur="2.5s" values="0,0,0,1898.70458984375; 
                  0,949.352294921875,949.352294921875,0; 
                  1898.70458984375,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
        <path d="M11.1192 269.64L152.982 193.641L290.517 247.395L388.958 203.443L514.301 229.578L629.68 155.687L736.098 211.919L816.001 169.443L928.101 196.632L1075.26 120.211L1194.92 175.388L1255.35 105.873L1359.12 162.315L1457.28 89.795L1600.78 143.074L1694.84 89.795" stroke="white" stroke-width="3" stroke-dasharray="0,0,0,1898.7044677734375"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1000" dur="2.5s" values="0,0,0,1898.7044677734375; 
                  0,949.3522338867188,949.3522338867188,0; 
                  1898.7044677734375,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
    </svg>
  </div>

  <!-- 音樂轉盤 -廖妍榛 -->
  <!-- 功能還在處理中 -->
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
    <div class="index_dj">
      <div class="index_dj_box">
        <div class="dj_left">
          <div class="song_info">
            <div class="song_title">
              <fontAwesome :icon="['fa', 'music']" />
              <span>第一首歌</span>
            </div>
            <div class="timebox">
              <span class="song_time">03:30:02</span>
              <fontAwesome :icon="['fa', 'fa-clock']" />
            </div>
          </div>
          <div class="plate" id="plate_left">
            <span></span>
          </div>
          <div class="dj_buttons">
            <button class="button prev obj_Radius">
              <fontAwesome :icon="['fa', 'fa-backward-step']" />
            </button>
            <button class="button play obj_Radius">
              <fontAwesome :icon="['fa', 'fa-play']" />
            </button>
            <button class="button pause obj_Radius">
              <fontAwesome :icon="['fa', 'fa-pause']" />
            </button>
            <button class="button stop obj_Radius">
              <fontAwesome :icon="['fa', 'fa-stop']" />
            </button>
            <button class="button next obj_Radius">
              <fontAwesome :icon="['fa', 'fa-step-forward']" />
            </button>
          </div>
        </div>
        <div class="dj_center">
          <div class="plates_vols">
            <div class="vol vol_left">
              <input class="left_vol obj_Radius" type="range" name="vol_left" id="volume_left" min="0" max="100" />
            </div>
            <div class="vol vol_right">
              <input class="right_vol obj_Radius" type="range" name="volume_right" id="volume_right" min="0" max="100" />
            </div>
          </div>
          <div class="vol vol_mix">
            <input class="mix_vol obj_Radius" type="range" name="volume_mix" id="volume_mix" min="0" max="100" />
          </div>
        </div>
        <div class="dj_right">
          <div class="song_info">
            <div class="song_title">
              <fontAwesome :icon="['fa', 'music']" />
              <span>第二首歌</span>
            </div>
            <div class="timebox">
              <span class="song_time">03:30:02</span>
              <fontAwesome :icon="['fa', 'fa-clock']" />
            </div>
          </div>
          <div class="plate" id="plate_right">
            <span></span>
          </div>
          <div class="dj_buttons">
            <button class="button prev obj_Radius">
              <fontAwesome :icon="['fa', 'fa-backward-step']" />
            </button>
            <button class="button play obj_Radius">
              <fontAwesome :icon="['fa', 'fa-play']" />
            </button>
            <button class="button pause obj_Radius">
              <fontAwesome :icon="['fa', 'fa-pause']" />
            </button>
            <button class="button stop obj_Radius">
              <fontAwesome :icon="['fa', 'fa-stop']" />
            </button>
            <button class="button next obj_Radius">
              <fontAwesome :icon="['fa', 'fa-step-forward']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 情緒歌單 -廖妍榛 -->
  <!-- 功能還在處理中 -->
  <section class="index_emo">
    <h2>情緒歌單．Find Your Emotion</h2>
  </section>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/index.scss";
</style>
<script src="./js/HomeView.js"></script>

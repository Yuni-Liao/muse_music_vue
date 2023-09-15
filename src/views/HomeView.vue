<template>
  <!-- 頂部輪播區 -廖妍榛 -->
  <section class="index_topCarousel">
    <swiper
      class="topSwiper"
      :initialSlide="0"
      :modules="modules"
      :effect="'fade'"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
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
    <swiper
      class="mySwiper"
      :initialSlide="4"
      :effect="slide"
      :slideToClickedSlide="false"
      :grabCursor="false"
      :centeredSlides="true"
      :slidesPerView="5"
      :slidesPerGroup="1"
      :speed="0.001"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide v-for="(item, sid) in songs" :key="sid">
        <div class="card">
          <img
            :src="require(`/public/image/index/${item.image}`)"
            @click="playmusic()"
          />
          <div class="text" @click="gotosinglemusic()">
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
              <span class="name"
                >{{ item.name }}<br />
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
    <img src="/image/index/index_lineBg.svg" />
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
              <input
                class="left_vol obj_Radius"
                type="range"
                name="vol_left"
                id="volume_left"
                min="0"
                max="100"
              />
            </div>
            <div class="vol vol_right">
              <input
                class="right_vol obj_Radius"
                type="range"
                name="volume_right"
                id="volume_right"
                min="0"
                max="100"
              />
            </div>
          </div>
          <div class="vol vol_mix">
            <input
              class="mix_vol obj_Radius"
              type="range"
              name="volume_mix"
              id="volume_mix"
              min="0"
              max="100"
            />
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
    <swiper
      :effect="'cards'"
      :grabCursor="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in ques" :key="index">
        <div class="index_emoQue">
          <p>{{ item.title }}</p>
          <div class="index_emoAns">
            <div class="index_input">
              <input type="radio" name="ans" />
              <span>{{ item.ans[0] }}</span>
            </div>
            <div class="index_input">
              <input type="radio" name="ans" />
              <span>{{ item.ans[1] }}</span>
            </div>
            <div class="index_input">
              <input type="radio" name="ans" />
              <span>{{ item.ans[2] }}</span>
            </div>
          </div>
          <button class="index_emoNext">
            <span>下一題</span>
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

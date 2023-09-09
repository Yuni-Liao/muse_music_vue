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
      <swiper-slide>
        <div class="weekTopSongs">
          <div class="weekTopTitle">
            <h1>當週單曲排行榜</h1>
            <section></section>
          </div>
          <section class="weekRanking">
            <!-- 1-5名 -->
           
            <ol >
              <li v-for="(item, intex) in weekFirstFiveSongs" :key="index" >
                <div class="order">{{item.order}}</div>
                <img :src="require(`@/assets/image/index/${item.image}`)" alt=""/>
                
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span><br>播放次數:{{ item.views }}次</span>
                  </p>
                </div>
                <div class="icon">
                  <img :src="require(`@/assets/image/icon/smallHeart.svg`)" alt="">
                  <img :src="require(`@/assets/image/icon/smallPlus.svg`)" alt="">
                </div>
              </li>
            </ol>
            <!-- 6-10名 -->
            <ol>
              <li v-for="(item, intex) in weekLastFiveSongs" :key="index">
                <div class="order">{{item.order}}</div>
                <img
                  :src="require(`@/assets/image/index/${item.image}`)"
                  alt=""
                />
                <!-- <button>PLAY</button> -->
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span><br>播放次數:{{ item.views }}次</span>
                  </p>
                </div>
                <div class="icon">
                  <img @click="hearted" :src="require(`@/assets/image/icon/smallHeart.svg`)" alt="">
                  <img @click="plused" :src="require(`@/assets/image/icon/smallPlus.svg`)" alt="">
                </div>
              </li>
            </ol>
          </section>
        </div>

        
      </swiper-slide>

      <swiper-slide>
        <div class="topAlbums">

          <div class="topAlbumsTitle">
            <h1>專輯排行榜</h1>
            <section></section>
          </div>
          <div class="topAlbumsRanking">
            <!-- 1-5名 -->
            
            <ol >
              <li v-for="(item, intex) in albumsFirstFiveSongs" :key="index" >
                <div class="order">{{item.order}}</div>
                <img :src="require(`@/assets/image/index/${item.image}`)" alt=""/>
                
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span><br>播放次數:{{ item.views }}次</span>
                  </p>
                </div>
                <div class="icon">
                  <img :src="require(`@/assets/image/icon/smallHeart.svg`)" alt="">
                  <img :src="require(`@/assets/image/icon/smallPlus.svg`)" alt="">
                </div>
              </li>
            </ol>
             <!-- 6-10名 -->
             <ol>
              <li v-for="(item, intex) in albumsLastFiveSongs" :key="index">
                <div class="order">{{item.order}}</div>
                <img
                  :src="require(`@/assets/image/index/${item.image}`)"
                  alt=""
                />
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span><br>播放次數:{{ item.views }}次</span>
                  </p>
                </div>
                <div class="icon">
                  <img :src="require(`@/assets/image/icon/smallHeart.svg`)" alt="">
                  <img :src="require(`@/assets/image/icon/smallPlus.svg`)" alt="">
                </div>
              </li>
            </ol>
          </div>
        </div>

      </swiper-slide>

      <swiper-slide>
        <div class="topSongList">
          <div class="topSongListTitle">
            <h1>歌單排行榜</h1>
            <section></section>
          </div>
          <div class="topSongListRanking">
            <!-- 1-5名 -->
            <ol >
              <li v-for="(item, intex) in songListFirstFiveSongs" :key="index" >
                <div class="order">{{item.order}}</div>
                <img :src="require(`@/assets/image/index/${item.image}`)" alt=""/>
                
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span><br>播放次數:{{ item.views }}次</span>
                  </p>
                </div>
                <div class="icon">
                  <img :src="require(`@/assets/image/icon/smallHeart.svg`)" alt="">
                  <img :src="require(`@/assets/image/icon/smallPlus.svg`)" alt="">
                </div>
              </li>
            </ol>
            <!-- 6-10名 -->
            <ol>
              <li v-for="(item, intex) in songListLastFiveSongs" :key="index">
                <div class="order">{{item.order}}</div>
                <img
                  :src="require(`@/assets/image/index/${item.image}`)"
                  alt=""
                />
                <div class="txt">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.singer }}<span><br>播放次數:{{ item.views }}次</span>
                  </p>
                </div>
                <div class="icon">
                  <img :src="require(`@/assets/image/icon/smallHeart.svg`)" alt="">
                  <img :src="require(`@/assets/image/icon/smallPlus.svg`)" alt="">
                </div>
              </li>
            </ol>
          </div>

        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/ranking.scss";
</style>
<script src="./js/RankingView.js"></script>

<template>
  <player ref="player"></player>
  <div class="ranking">
    <swiper :direction="'vertical'" :slidesPerView="1" :spaceBetween="0" :mousewheel="true" :modules="modules"
      class="mySwiper">
      <swiper-slide>
        <div class="weekTopSongs">
          <div class="weekTopTitle">
            <h1>當週單曲排行榜</h1>
            <section></section>
          </div>

          <div class="weekRanking">
            <ol >
              <li v-for="(item, index) in SongRank" :key="item.s_id" >
                {{ (index < 5 ? index + 1 : index - 4 + 5) }}.
                <div class="image">
                  <img  @click="openPlayer" :src="`${publicPath}dataimage/song/${item.s_img}`" alt=""/>
                  <div class="play" >
                    <fontAwesome @click="openPlayer" class="faPlay" :icon="['fa', 'play']" />
                  </div>
                </div>
                <div class="txt" @click="gotosinglemusic(item.s_id)">
                  <h3>{{ item.s_name }}</h3>
                  <p>
                    {{ item.mem_name }}<span><br>播放次數:&nbsp;{{ item.play_num }}&nbsp;次</span>
                  </p>
                </div>
                <div class="icon">
                  <AddFavBtn />
                  <AddSlBtn />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="topAlbums">
          <div class="topAlbumsTitle">
            <h1>專輯排行榜</h1>
            <section></section>
          </div>

          <div class="topAlbumsRanking">
            <ol>
              <li v-for="(item, index) in albumRank" :key="index">
                {{ (index < 5 ? index + 1 : index - 4 + 5) }}.
                <img @click="gotosinglealbum(item.alb_id)" :src="`${publicPath}dataimage/album/${item.alb_img}`" alt="專輯照片" />

                <div class="txt" @click="gotosinglealbum(item.alb_id)">
                    <h3>{{ item.alb_name }}</h3>
                    <p>
                      {{ item.mem_name }}<span><br>分享次數:&nbsp;{{item.share_num}}&nbsp;次</span>
                    </p>
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
          
            <ol>
              
              <li v-for="(item, index) in SLRank" :key="index">
                {{ (index < 5 ? index + 1 : index - 4 + 5) }}.
                <img @click.self.prevent="gotosonglist(item.sl_id)" :src="`${publicPath}dataimage/album/${item.sl_pic}`" alt="" />
                
                <div class="txt">
                  <h3 @click.self.prevent="gotosonglist(item.sl_id)">{{ item.sl_name }}</h3>
                  <p @click="gotosinger(item.creater_id)">
                    {{ item.creater_name }}<span><br>追蹤次數:&nbsp;{{ item.fol_num }}&nbsp;次</span>
                  </p>
                </div>
                
                <div class="follow_icon">
                  <FolBtnBig :functype="0" />
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
<script src="./js/RankingView.js" ></script>



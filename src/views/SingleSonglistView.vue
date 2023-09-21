<template>
  <player ref="player"></player>
  <div class="singlesonglist">
    <!-- 上方大圖 -->
    <section class="banner">
      <div class="overlay"></div>
      <img
        :src="require(`/public/image/SingleMusic/${chooseCoverImg}`)"
        alt="歌單封面照片"
      />
    </section>
    <!-- 以下是 1200px 內容區 -->
    <section class="inner">
      <div class="topInf">
        <div class="pic">
          <img
            :src="require(`/public/image/SingleMusic/${chooseCoverImg}`)"
            alt="歌單照片"
          />
        </div>
        <div class="slInf">
          <div class="sl">
            <p>歌單</p>
            <h1>{{ songlists.slname }}</h1>
          </div>
          <div class="iconBar">
            <div class="countArea">
              <div class="played">
                <p>追蹤</p>
                <p>{{ songlists.folnum }}</p>
              </div>
              <div class="shared">
                <fontAwesome :icon="['fa', 'share']" style="color: #fff" />
                <p>{{ songlists.sharenum }}</p>
              </div>
            </div>
            <div class="buttonArea">
              <FolBtnBig :functype="0"></FolBtnBig>
              <ShareBtn></ShareBtn>
              <PlayBtnBig></PlayBtnBig>
            </div>
          </div>
        </div>
      </div>
      <div class="mainInf">
        <div class="creatorInf">
          <div class="pic">
            <img
              :src="
                require(`/public/image/SingleMusic/${songlists.creatorimg}`)
              "
              alt="歌單擁有者頭像"
            />
          </div>
          <p class="creatorName" @click="gotosinger(songlists.singerid)">
            {{ songlists.creator }}
          </p>
        </div>
        <div class="detail">
          <div class="playList">
            <ol>
              <li class="title">
                <span class="idx">#</span>
                <span class="pic"></span>
                <h3>歌曲</h3>
                <span class="singer">創作者</span>
                <span class="album">專輯</span>
                <span class="time"
                  ><fontAwesome :icon="['fa', 'fa-clock']"
                /></span>
                <div class="moreWrap"></div>
              </li>
              <li v-for="(item, index) in songs" :key="item.id">
                <span class="idx">{{ index + 1 }}</span
                ><span class="pic"
                  ><img
                    :src="require(`/public/image/SingleMusic/${item.image}`)"
                  />
                  <div class="play" @click="openPlayer()">
                    <fontAwesome class="i" :icon="['fa', 'play']" />
                  </div>
                </span>

                <h3 v-line-clamp="2" @click="gotosinglemusic(item.sid)">
                  {{ item.name }}
                </h3>
                <span
                  v-line-clamp="2"
                  class="singer"
                  @click="gotosinger(item.singerid)"
                  >{{ item.singer }}</span
                ><span
                  v-line-clamp="2"
                  class="album"
                  @click="gotosinglealbum(item.albumid)"
                  >{{ item.album }}</span
                >
                <span class="time">{{ item.time }}</span>
                <div class="moreWrap">
                  <!-- 更多_按鈕 -->
                  <button class="moreBtn" @click="showtoggle($event, index)">
                    <fontAwesome class="i" :icon="['fa', 'ellipsis']" />
                  </button>
                  <!-- 更多_選項-->
                  <div class="more" :class="{ show: index === morecurrent }">
                    <div @click="share(item.id)">
                      <img src="../../public/image/icon/share.png" />
                      <p>分享</p>
                    </div>
                    <div class="addFav" @click="addFav(item.id)">
                      <img src="../../public/image/icon/addFav.png" />
                      <p>加入我的最愛</p>
                    </div>
                    <div class="addSl" @click="addSonglist(item.id)">
                      <img src="../../public/image/icon/addSl.png" />
                      <p>加入歌單</p>
                    </div>
                    <div class="readSong" @click="gotosinglemusic(item.id)">
                      <img
                        src="../../public/image/icon/eyeopen.png"
                        class="eyeopen"
                      />
                      <p>檢視歌曲</p>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/singlesonglist";
</style>
<script src="./js/SingleSonglistView"></script>

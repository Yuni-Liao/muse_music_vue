<template>
  <div class="profilepage">
    <section class="hd">
      <div
        class="cover-image"
        :style="{
          backgroundImage: `url(/image/SingleMusic/coverimage.jpg)`,
        }"
      >
        <!-- 圖片路徑待資料帶入後需調整  -->
        <div class="profile-container">
          <img src="@/assets/image/profileeditimage/profileimage.jpg" alt="" />
        </div>
        <div class="txt">
          <article class="intro">
            <h1>
              {{ mem.memname }}
              <FolBtnBig :functype="1"></FolBtnBig>
            </h1>
            <p class="loc">
              <fontAwesome class="i" :icon="['fa', 'location-dot']" />{{
                mem.loc
              }}
            </p>
            <p class="itl" :class="{ itlmore: isReadMore }" ref="itl">
              {{ mem.intro }}
            </p>
            <button
              class="readmoreBtn"
              v-if="isReadmoreBtn"
              @click="readmore()"
            >
              顯示更{{ isReadMore ? "少" : "多" }}
            </button>
          </article>
          <div class="fol">
            <div>
              <span v-if="mem.songcount > 1000">
                <CountUp
                  :end="changeNum(mem.songcount)"
                  :duration="3"
                  :decimals="1"
                >
                </CountUp>
                K
              </span>
              <CountUp v-else :end="mem.songcount" :duration="3" />
              <h4>音樂</h4>
            </div>
            <div>
              <span v-if="mem.fans > 1000">
                <CountUp :end="changeNum(mem.fans)" :duration="3" :decimals="1">
                </CountUp>
                K
              </span>
              <CountUp v-else :end="changeNum(mem.fans)" :duration="3" />
              <h4>粉絲</h4>
            </div>
            <div>
              <span v-if="mem.follower > 1000">
                <CountUp
                  :end="changeNum(mem.follower)"
                  :duration="3"
                  :decimals="1"
                >
                </CountUp>
                K
              </span>
              <CountUp v-else :end="mem.follower" :duration="3" />
              <h4>追蹤數</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <main>
      <!-- tab -->
      <div class="tabs">
        <button
          style="display: none"
          @click="tabtype = 0"
          class="tab"
          :class="{ active: tabtype == 0 }"
        >
          <h2>活動</h2>
        </button>
        <button
          @click="tabtype = 1"
          class="tab"
          :class="{ active: tabtype == 1 }"
        >
          <h2>音樂</h2>
        </button>
        <button
          @click="tabtype = 2"
          class="tab"
          :class="{ active: tabtype == 2 }"
        >
          <h2>公開歌單</h2>
        </button>
      </div>
      <div class="line"></div>
      <!-- 由tab切換之顯示內容 -->
      <!-- 活動 -->
      <section v-show="tabtype === 0" class="activity container">
        activity
      </section>
      <!-- 音樂 -->
      <section v-show="tabtype === 1" class="music container">
        <!-- 假如沒有專輯就不顯示專輯區塊 -->
        <div v-if="album.length > 0" class="album">
          <h3>專輯． Album</h3>
          <div class="content">
            <swiper
              class="mySwiper"
              :scrollbar="true"
              :modules="modules"
              :slidesPerView="1"
              :slidesPerGroup="1"
              :breakpoints="{
                '700': {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                '1024': {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
              }"
            >
              <!-- 單一專輯 -->
              <swiper-slide v-for="(item, index) in album" :key="item.id">
                <div class="card" @click="gotosinglealbum(item.id)">
                  <div class="pic">
                    <img
                      :src="
                        require(`/public/image/SingleAlbum/${item.albumPic}`)
                      "
                      :alt="item.songName"
                    />
                    <!-- <button></button> -->
                  </div>
                  <div class="txt">
                    <div class="inf">
                      <h4>{{ item.albumName }}</h4>
                      <span>{{ item.singer }}</span>
                      <span>{{ item.date }}</span>
                    </div>
                    <div class="tag" v-if="item.mcatid">
                      <fontAwesome class="i" :icon="['fa', 'tags']" />
                      <div>
                        <span
                          v-for="(tagitem, index) in item.mcatid.slice(0, 3)"
                          >{{ tagitem }}</span
                        >
                        <span v-if="item.mcatid.length > 3">... </span>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="song">
          <h3>所有歌曲． Songs</h3>
          <!-- 判斷是否有data -->
          <div v-if="songs.length === 0" class="nodata">
            {{ mem.memname }}目前沒有上傳歌曲
          </div>
          <div v-else class="content">
            <ol>
              <li
                v-for="(item, index) in songs.slice(0, songnum)"
                :key="item.id"
              >
                <span class="index">{{ index + 1 }}</span>
                <div class="pic">
                  <img
                    :src="require(`/public/image/SingleMusic/${item.songPic}`)"
                    :alt="item.songName"
                  />
                  <div class="play" @click="playmusic()">
                    <fontAwesome class="i" :icon="['fa', 'play']" />
                  </div>
                </div>
                <h4 v-line-clamp="2" @click="gotosinglemusic(item.id)">
                  {{ item.songName }}
                </h4>
                <span class="time">{{ item.time }}</span>
                <span> <AddSlBtn></AddSlBtn></span>
                <span> <AddFavBtn></AddFavBtn></span>
              </li>
              <button
                v-if="songs.length > 5"
                class="showmore"
                @click.prevent="showMoreSong()"
              >
                {{ isShowMoreSong ? "收起歌曲" : "顯示更多" }}
                <fontAwesome
                  v-show="isShowMoreSong === false"
                  :icon="['fa', 'angle-down']"
                  style="color: #fff"
                />
                <fontAwesome
                  v-show="isShowMoreSong === true"
                  :icon="['fa', 'angle-up']"
                  style="color: #fff"
                />
              </button>
            </ol>
          </div>
        </div>
      </section>
      <!-- 公開歌單 -->
      <section v-show="tabtype === 2" class="songlist container">
        <!-- 判斷是否有data -->
        <div v-if="songlists.length === 0" class="nodata">目前沒有公開歌單</div>
        <div
          v-else
          class="sl-list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
        >
          <div class="col" v-for="(item, index) in songlists" :key="item.slid">
            <!-- 單一歌單 -->
            <div
              class="sl-item"
              :style="{
                backgroundImage: `url(/image/SingleMusic/${item.image})`,
              }"
              @click.self.prevent="gotosonglist(item.slid)"
            >
              <div class="txt">
                <div>
                  <h4>
                    {{ item.slname }}
                  </h4>
                  <div>
                    <span>共有{{ item.songnum }}首歌</span>
                    <span>{{ item.creator }}</span>
                  </div>
                </div>
                <PlayBtnBig></PlayBtnBig>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/profilepage";
</style>
<script src="./js/ProfilePageView"></script>

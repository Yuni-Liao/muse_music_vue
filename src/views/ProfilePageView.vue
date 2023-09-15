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
              <FolBtnBig :functype="2"></FolBtnBig>
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
              v-show="isReadmoreBtn"
              @click="readmore()"
            >
              顯示更多
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
      <div class="tabs">
        <button
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
      <section v-show="tabtype === 0" class="activity">activity</section>
      <section v-show="tabtype === 1" class="music">music</section>
      <section v-show="tabtype === 2" class="songlist">
        <section class="container">
          <!-- 判斷是否有data -->
          <div class="nodata" v-if="songlists.length === 0">
            目前沒有公開歌單
          </div>
          <div
            v-else
            class="sl-list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
          >
            <div class="col" v-for="(item, index) in songlists">
              <!-- 單一歌單 -->
              <div
                class="sl-item"
                :style="{
                  backgroundImage: `url(/image/SingleMusic/${item.image})`,
                }"
                @click.self.prevent="gotosonglist()"
              >
                <div class="txt">
                  <div>
                    <h3>
                      {{ item.slname }}
                    </h3>
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
      </section>
    </main>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/profilepage";
</style>
<script src="./js/ProfilePageView"></script>

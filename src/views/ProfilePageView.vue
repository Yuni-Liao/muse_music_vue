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
              <FolBtnBig></FolBtnBig>
            </h1>
            <p><fontAwesome :icon="['fa', 'location-dot']" />{{ mem.loc }}</p>
            <p>{{ mem.intro }}</p>
          </article>
          <div class="fol">
            <div>
              <span>{{ mem.songcount }}</span>
              <h4>音樂</h4>
            </div>
            <div>
              <span>{{ mem.fans }}</span>
              <h4>粉絲</h4>
            </div>
            <div>
              <span>{{ mem.follower }}</span>
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
      <section v-if="tabtype === 0" class="activity">activity</section>
      <section v-else-if="tabtype === 1" class="music">music</section>
      <section v-else-if="tabtype === 2" class="songlist">songlist</section>
    </main>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/profilepage";
</style>
<script src="./js/ProfilePageView"></script>

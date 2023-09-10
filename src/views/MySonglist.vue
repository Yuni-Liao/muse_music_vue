<template>
  <div class="mysonglist">
    <section>
      <div class="hd">
        <h1>我的歌單</h1>
      </div>
      <div class="tabs">
        <button @click="currentType = 0" class="tab">
          <h2>全部</h2>
        </button>
        <button @click="currentType = 1" class="tab">
          <h2>由我建立</h2>
        </button>
        <button @click="currentType = 2" class="tab">
          <h2>我追蹤的</h2>
        </button>
      </div>
      <div class="line"></div>
    </section>
    <section class="container">
      <div class="sl-list row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        <div class="col" v-for="(item, index) in choosecreator" :key="slid">
          <div class="sl-item" :style="{
            backgroundImage: `url(/image/SingleMusic/${item.image})`,
          }">
            <!-- 更多選項 -->
            <button class="moreBtn" @click="togglelayout()">
              <fontAwesome :icon="['fa', 'ellipsis']" />
            </button>

            <div class="txt">
              <div>
                <h3>
                  {{ item.slname }}
                  <!-- 歌單擁有者是我且狀態為私人，則顯示鎖頭 -->
                  <span v-if="item.memid == 1 && item.public == 0">
                    <fontAwesome :icon="['fa', 'lock']" class="lock" />
                  </span>
                </h3>

                <div>
                  <span>共有{{ item.songnum }}首歌</span>
                  <span>{{ item.creator }}</span>
                </div>
              </div>
              <PlayBtnBig></PlayBtnBig>
            </div>
            <div class="more obj_Radius" :class="{ hidden: isVisible }">
              <ul>
                <!-- 歌單擁有者是我，則顯示刪除此歌單 -->
                <li v-if="item.memid == 1">刪除此歌單</li>
                <li v-else>取消追蹤此歌單</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/mysonglist.scss";
</style>
<script src="./js/MySonglistView.js"></script>

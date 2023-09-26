<template>
  <player ref="player"></player>
  <teleport to="body">
    <NewSl v-if="isNewSlOpen" @isNewSlOpenupdate="isNewSlOpenupdate"></NewSl>
  </teleport>
  <div class="mysonglist">
    <section>
      <div class="hd">
        <h1>我的歌單</h1>
        <!-- 新增歌單 -->
        <button class="newlistBtn" @click="isNewSlOpen = true">
          <fontAwesome :icon="['fa', 'plus']" />
        </button>
      </div>
      <div class="tabs">
        <button
          @click="currentType = 0"
          class="tab"
          :class="{ active: currentType == 0 }"
        >
          <h2>全部</h2>
        </button>
        <button
          @click="currentType = 1"
          class="tab"
          :class="{ active: currentType == 1 }"
        >
          <h2>由我建立</h2>
        </button>
        <button
          @click="currentType = 2"
          class="tab"
          :class="{ active: currentType == 2 }"
        >
          <h2>我追蹤的</h2>
        </button>
      </div>
      <div class="line"></div>
    </section>

    <section class="container">
      <!-- 判斷是否有data -->
      <div class="nodata" v-if="choosecreator.length === 0">目前沒有歌單</div>
      <div
        v-else
        class="sl-list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
      >
        <div
          class="col"
          v-for="(item, index) in choosecreator"
          :key="item.slid"
        >
          <!-- 單一歌單 -->
          <div
            class="sl-item"
            :style="{
              backgroundImage: `url(/image/SingleMusic/${item.image})`,
            }"
            @click.self.prevent="gotosonglist(item.slid)"
          >
            <!-- 更多_按鈕 -->
            <button class="moreBtn" @click="showtoggle($event, index)">
              <fontAwesome class="i" :icon="['fa', 'ellipsis']" />
            </button>

            <!-- 更多_選項 -->
            <div
              class="more obj_Radius"
              :class="{ show: index == morecurrent }"
            >
              <ul>
                <!-- 歌單擁有者是我，則顯示 刪除此歌單 -->
                <li
                  v-if="item.memid == 1"
                  @click="deletesonglist(index, item.slid)"
                >
                  刪除此歌單
                </li>
                <!-- 歌單擁有者非我，則顯示 取消追蹤此歌單 -->
                <li v-else @click="unfolsonglist(index, item.slid)">
                  取消追蹤此歌單
                </li>
              </ul>
            </div>

            <div class="txt">
              <div>
                <h3>
                  {{ item.slname }}
                  <!-- 歌單擁有者是我且狀態為私人，則顯示鎖頭 -->
                  <span v-if="item.memid == 1 && item.public == false"
                    ><fontAwesome :icon="['fa', 'lock']" class="lock"
                  /></span>
                </h3>

                <div>
                  <span>共有{{ item.songnum }}首歌</span>
                  <span>{{ item.creator }}</span>
                </div>
              </div>
              <PlayBtnBig @click="openplayer()"></PlayBtnBig>
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

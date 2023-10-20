<template>
  <player
    ref="player"
    :s_id="playerId"
    :allSid="allSid"
    @change-s-id="changeSId"
  ></player>
  <teleport to="body">
    <NewSl
      v-if="isNewSlOpen"
      :btntype="2"
      @isNewSlOpenupdate="isNewSlOpenupdate"
    ></NewSl>
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
          <!-- 假如歌單沒有歌曲，就設定預設圖片 -->
          <div
            v-if="item.sl_pic == null"
            class="sl-item"
            :style="{
              backgroundImage: `url(${publicPath}dataimage/song/pre.jpg)`,
            }"
            @click.self.prevent="gotosonglist(item.sl_id)"
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
                  v-if="item.creater_id == login_mem_id"
                  @click="deleSl(item.sl_id)"
                >
                  刪除此歌單
                </li>
                <!-- 歌單擁有者非我，則顯示 取消追蹤此歌單 -->
                <li v-else @click="unfolsonglist(index, item.sl_id)">
                  取消追蹤此歌單
                </li>
              </ul>
            </div>

            <div class="txt">
              <div>
                <h3>
                  {{ item.sl_name }}
                  <!-- 歌單擁有者是我且狀態為私人，則顯示鎖頭 -->
                  <span v-if="item.creater_id == login_mem_id"
                    ><fontAwesome
                      v-if="item.public == 0"
                      :icon="['fa', 'lock']"
                      class="lock"
                    />
                    <fontAwesome
                      v-else-if="item.public == 1"
                      :icon="['fa', 'lock-open']"
                      class="lock"
                    />
                  </span>
                </h3>

                <div>
                  <span>共有{{ item.song_count }}首歌</span>
                  <span v-line-clamp="1">{{ item.creater_name }}</span>
                </div>
              </div>
              <PlayBtnBig @click="openPlayer(item.sl_id)"></PlayBtnBig>
            </div>
          </div>

          <div
            v-else
            class="sl-item"
            :style="{
              backgroundImage: `url(${publicPath}dataimage/song/${item.sl_pic})`,
            }"
            @click.self.prevent="gotosonglist(item.sl_id)"
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
                  v-if="item.creater_id == login_mem_id"
                  @click="deleSl(item.sl_id)"
                >
                  刪除此歌單
                </li>
                <!-- 歌單擁有者非我，則顯示 取消追蹤此歌單 -->
                <li v-else @click="unfolsonglist(item.sl_id)">
                  取消追蹤此歌單
                </li>
              </ul>
            </div>

            <div class="txt">
              <div>
                <h3>
                  {{ item.sl_name }}
                  <!-- 歌單擁有者是我且狀態為私人，則顯示鎖頭 -->
                  <span
                    v-if="item.creater_id == login_mem_id && item.public == 0"
                    ><fontAwesome :icon="['fa', 'lock']" class="lock"
                  /></span>
                </h3>

                <div>
                  <span>共有{{ item.song_count }}首歌</span>
                  <span v-line-clamp="1">{{ item.creater_name }}</span>
                </div>
              </div>
              <PlayBtnBig @click="openPlayer(item.sl_id)"></PlayBtnBig>
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

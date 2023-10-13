<template>
  <player :s_id="playerId" @change-s-id="changeSId" ref="player"></player>
  <div class="singlesonglist">
    <!-- 上方大圖 -->
    <section class="banner">
      <div class="overlay"></div>
      <!-- 假如沒有歌單內沒有歌曲，則使用預設圖片 -->
      <img
        v-if="this.slSongs.length == 0"
        :src="`${publicPath}image/footer_background.jpg`"
        alt="歌單封面預設圖片"
      />
      <img
        v-else
        :src="`${publicPath}dataimage/song/${songlist.sl_pic}`"
        alt="歌單封面照片"
      />
    </section>
    <!-- 以下是 1200px 內容區 -->
    <section class="inner">
      <div class="topInf">
        <div class="pic">
          <img
            v-if="this.slSongs.length == 0"
            :src="`${publicPath}dataimage/song/pre.jpg`"
            alt="歌單預設圖片"
          />
          <img
            v-else
            :src="`${publicPath}dataimage/song/${songlist.sl_pic}`"
            alt="歌單照片"
          />
          <!-- :src="require(`/public/dataimage/song/${songlist.sl_pic}`)" -->
        </div>
        <div class="slInf">
          <div class="sl">
            <span>歌單</span>
            <h1>{{ songlist.sl_name }}</h1>
          </div>
          <div class="iconBar">
            <div class="countArea">
              <div class="played">
                <p>追蹤</p>
                <p>{{ songlist.fol_num }}</p>
              </div>
              <div class="shared">
                <p>
                  <fontAwesome :icon="['fa', 'share']" style="color: #fff" />
                </p>
                <p>{{ songlist.share_num }}</p>
              </div>
            </div>
            <div class="buttonArea">
              <button
                v-if="showDelSl"
                class="deleSlBtn"
                @click.prevent="deleSl()"
              >
                刪除歌單
              </button>
              <FolBtnBig v-if="showDelSl == false" :functype="0"></FolBtnBig>
              <ShareBtn></ShareBtn>
              <PlayBtnBig @click="openPlayer()"></PlayBtnBig>
            </div>
          </div>
        </div>
      </div>
      <div class="mainInf">
        <div class="creatorInf">
          <div class="pic">
            <img
              :src="`${publicPath}dataimage/member/${songlist.creater_pic}`"
              alt="歌單擁有者頭像"
            />
            <!-- :src="require(`/public/dataimage/member/${songlist.creater_pic}`)" -->
          </div>
          <p class="creatorName" @click="gotosinger(songlist.creater_id)">
            {{ songlist.creater_name }}
          </p>
        </div>
        <div class="detail">
          <div class="playList">
            <div class="nodata" v-if="this.slSongs.length == 0">
              此歌單無新增歌曲
            </div>
            <ol v-else>
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
              <li v-for="(item, index) in slSongs" :key="item.id">
                <span class="idx">{{ index + 1 }}</span
                ><span class="pic">
                  <img :src="`${publicPath}dataimage/song/${item.s_img}`" />
                  <!-- :src="require(`/public/image/SingleMusic/${item.image}`)" -->
                  <div class="play" @click="openPlayer(item.s_id)">
                    <fontAwesome class="i" :icon="['fa', 'play']" />
                  </div>
                </span>
                <AddSlBtn ref="AddSl" :addSlSid="item.s_id"></AddSlBtn>
                <h3 v-line-clamp="2" @click="gotosinglemusic(item.s_id)">
                  {{ item.s_name }}
                </h3>
                <span
                  v-line-clamp="1"
                  class="singer"
                  @click="gotosinger(item.singer_id)"
                  >{{ item.singer }}</span
                ><span
                  v-line-clamp="1"
                  class="album"
                  @click="gotosinglealbum(item.alb_id)"
                  >{{ item.alb_name }}</span
                >
                <span class="time">{{ item.s_length }}</span>
                <div class="moreWrap">
                  <!-- 更多_按鈕 -->
                  <button class="moreBtn" @click="showtoggle($event, index)">
                    <fontAwesome class="i" :icon="['fa', 'ellipsis']" />
                  </button>
                  <!-- 更多_選項-->
                  <div class="more" :class="{ show: index === morecurrent }">
                    <div @click="share(item.s_id)">
                      <img src="../../public/image/icon/share.png" />
                      <p>分享</p>
                    </div>
                    <div class="addFav" @click="addFav(item.s_id)">
                      <img src="../../public/image/icon/addFav.png" />
                      <p>加入我的最愛</p>
                    </div>
                    <div class="addSl" @click="addSonglist(index)">
                      <img src="../../public/image/icon/addSl.png" />
                      <p>加入歌單</p>
                    </div>
                    <!-- 當已登入，且登入會員與歌單創作者相同，才顯示移除歌單按鈕 -->
                    <div
                      v-if="showDelSl"
                      @click="delSongfromSl(item.s_id, item.s_name)"
                    >
                      <div class="img">
                        <fontAwesome class="i" :icon="['fa', 'fa-minus']" />
                      </div>
                      <p>移除歌單</p>
                    </div>
                    <div class="readSong" @click="gotosinglemusic(item.s_id)">
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

<template>
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
          <p class="creatorName">{{ songlists.creator }}</p>
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
                /></span>

                <h3 v-line-clamp="2">{{ item.name }}</h3>
                <span v-line-clamp="2" class="singer">{{ item.singer }}</span
                ><span v-line-clamp="2" class="album">{{ item.album }}</span>
                <span class="time">{{ item.time }}</span>
                <div class="moreWrap">
                  <!-- 更多_按鈕 -->
                  <button class="moreBtn" @click="showtoggle($event, index)">
                    <fontAwesome class="i" :icon="['fa', 'ellipsis']" />
                  </button>
                  <!-- 更多_選項 -->
                  <div class="more" :class="{ show: index == morecurrent }">
                    <button class="close" @click="closeMoreBtn(albumItem)">
                      <fontAwesome
                        :icon="['fa', 'fa-xmark']"
                        style="color: #ffffff"
                      />
                    </button>
                    <router-link to="">
                      <img src="../../public/image/icon/share.png" />
                      <p>分享</p>
                    </router-link>
                    <router-link to="" class="addFav">
                      <img src="../../public/image/icon/addFav.png" />
                      <p>加入我的最愛</p>
                    </router-link>
                    <router-link to="" class="addSl">
                      <img src="../../public/image/icon/addSl.png" />
                      <p>加入歌單</p>
                    </router-link>
                    <router-link to="" class="readSong">
                      <img
                        src="../../public/image/icon/eyeopen.png"
                        class="eyeopen"
                      />
                      <p>檢視歌曲</p>
                    </router-link>
                  </div>
                </div>
              </li>
            </ol>
            <!-- <table class="musicTable">
              <thead>
                <tr class="playListHeader">
                  <th></th>
                  <th></th>
                  <th>歌曲</th>
                  <th></th>
                  <th>時長</th>
                  <th>創作者</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(albumItem, albumIndex) in songs"
                  :key="albumIndex"
                  class="songArea"
                >
                  <td class="id">{{ albumItem.id }}</td>
                  <td class="pic">
                    <router-link to="/singlemusic">
                      <img
                        :src="
                          require(`/public/image/SingleMusic/${albumItem.albumPic}`)
                        "
                        alt="albumItem.name"
                      />
                    </router-link>
                  </td>
                  <td class="name">
                    <router-link to="/singlemusic">{{
                      albumItem.name
                    }}</router-link>
                  </td>
                  <td class="singer">
                    <router-link to="/profilepage">{{
                      albumItem.singer
                    }}</router-link>
                  </td>
                  <td class="time">{{ albumItem.time }}</td>
                  <td class="btnArea">
                    <AddFavBtn></AddFavBtn>
                    <AddSlBtn></AddSlBtn>

                    <div tabindex="0" class="more-group">
                      <button class="moreBtn" @click="toggleMoreBtn(albumItem)">
                        <fontAwesome
                          :icon="['fa', 'ellipsis']"
                          style="color: #aaaaaa"
                        />
                      </button>
                      <div class="moreBtnAlert" v-if="albumItem.showMoreBtn">
                        <button class="close" @click="closeMoreBtn(albumItem)">
                          <fontAwesome
                            :icon="['fa', 'fa-xmark']"
                            style="color: #ffffff"
                          />
                        </button>
                        <router-link to="">
                          <img src="../../public/image/icon/share.png" />
                          <p>分享</p>
                        </router-link>
                        <router-link to="" class="addFav">
                          <img src="../../public/image/icon/addFav.png" />
                          <p>加入我的最愛</p>
                        </router-link>
                        <router-link to="" class="addSl">
                          <img src="../../public/image/icon/addSl.png" />
                          <p>加入歌單</p>
                        </router-link>
                        <router-link to="" class="readSong">
                          <img
                            src="../../public/image/icon/eyeopen.png"
                            class="eyeopen"
                          />
                          <p>檢視歌曲</p>
                        </router-link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> -->
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

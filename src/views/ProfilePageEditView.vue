<template>
  <player :s_id="playerId" @change-s-id="changeSId" ref="player"></player>
  <div class="profilepageedit">
    <div class="cover-container">
      <img
        class="cover"
        alt="CoverImage"
        :src="`${publicPath}dataimage/member/` + member[0].cover_pic"
      />
      <label for="coverImg" class="coverupdate"></label>
      <input
        id="coverImg"
        style="display: none"
        type="file"
        @change="coverImgChange($event)"
      />
      <!-- 頭貼 -->
      <div class="profile-container">
        <img
          class="profile"
          alt="ProfileImage"
          :src="`${publicPath}dataimage/member/` + member[0].mem_pic"
        />
        <label for="profileImg" class="profileupdate"></label>
        <input
          id="profileImg"
          type="file"
          @change="profileImgChange($event)"
          style="display: none"
        />
      </div>
    </div>

    <div class="main-wrapper">
      <div class="page-options">
        <div class="page-option">
          <button
            @click="changeTab(1)"
            :class="{
              active: activeTab === 1,
            }"
          >
            編輯個人主頁
          </button>
        </div>
        <div class="page-option">
          <button
            @click="changeTab(2)"
            :class="{
              active: activeTab === 2,
            }"
          >
            音樂上傳
          </button>
        </div>
        <div class="page-option">
          <button
            @click="changeTab(3)"
            :class="{
              active: activeTab === 3,
            }"
          >
            歌曲管理
          </button>
        </div>
        <div class="page-option">
          <button
            @click="changeTab(4)"
            :class="{
              active: activeTab === 4,
            }"
          >
            專輯管理
          </button>
        </div>
      </div>

      <div class="line"></div>

      <div class="page-content">
        <!-- -----------------------------個人主頁編輯----------------------------- -->
        <div v-show="activeTab === 1" class="page">
          <form class="form1">
            <div class="form-group">
              <label for="name" class="label">暱稱</label>
              <input
                type="text"
                style=""
                id="name"
                v-model="member[0].mem_aka"
              />
            </div>

            <div class="form-group">
              <label for="inst" class="label">介紹</label>
              <textarea
                name=""
                id="inst"
                v-model="member[0].intro"
                rows="10"
                wrap="hard"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="location" class="label">位置</label>
              <select id="location" v-model="member[0].county">
                <option value="基隆市">基隆市,台灣</option>
                <option value="台北市">台北市,台灣</option>
                <option value="新北市">新北市,台灣</option>
                <option value="桃園市">桃園市,台灣</option>
                <option value="新竹市">新竹市,台灣</option>
                <option value="新竹縣">新竹縣,台灣</option>
                <option value="苗栗縣">苗栗縣,台灣</option>
                <option value="台中市">台中市,台灣</option>
                <option value="彰化縣">彰化縣,台灣</option>
                <option value="南投縣">南投縣,台灣</option>
                <option value="雲林縣">雲林縣,台灣</option>
                <option value="嘉義市">嘉義市,台灣</option>
                <option value="嘉義縣">嘉義縣,台灣</option>
                <option value="台南市">台南市,台灣</option>
                <option value="高雄市">高雄市,台灣</option>
                <option value="屏東縣">屏東縣,台灣</option>
                <option value="台東縣">台東縣,台灣</option>
                <option value="花蓮縣">花蓮縣,台灣</option>
                <option value="宜蘭縣">宜蘭縣,台灣</option>
                <option value="澎湖縣">澎湖縣,台灣</option>
                <option value="金門縣">金門縣,台灣</option>
                <option value="連江縣">連江縣,台灣</option>
              </select>
            </div>
            <div class="form-group">
              <label for="social" class="label">社群網站</label>
              <input type="text" id="social" v-model="member[0].social_media" />
            </div>
          </form>
          <router-link to="profilepageedit"
            ><button
              class="button"
              style="margin-bottom: 150px"
              @click="complete"
            >
              取消變更
            </button></router-link
          >

          <button @click="saveBtn" class="button" style="margin-bottom: 150px">
            儲存變更
          </button>
        </div>
        <!-- -----------------------------音樂上傳----------------------------- -->
        <div v-show="activeTab === 2" class="page">
          <form class="form1">
            <div class="form-group">
              <label for="newSongSrc" class="label">歌曲上傳 *</label>
              <div class="uploadImgWrap">
                <div class="uploadImg">
                  <audio
                    id="audioPlayer"
                    controls
                    style="display: none"
                  ></audio>

                  <input
                    id="inputsrc"
                    type="file"
                    style="display: none"
                    @change="SongSrcChange($event)"
                  />
                  <label
                    for="inputsrc"
                    class="inputimg"
                    style="width: 176px; height: 176px"
                  >
                    <img
                      v-if="newsong.s_src_name == false"
                      class="pre"
                      alt="上傳圖示"
                      src="@/assets/image/icon/file.jpg"
                    />
                    <p
                      v-else
                      style="
                        color: #74ebd5;
                        line-height: 1.4;
                        padding-top: 50px;
                      "
                    >
                      已上傳檔案名稱：{{ newsong.s_src_name }}
                    </p>
                  </label>
                  <div>
                    <p style="color: white">音樂檔案上傳</p>
                    <br />
                    <p style="color: white">
                      ☸ 上傳格式限 MP3，位元傳輸率 192kbps 以上
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="newSongImg" class="label">歌曲封面</label>
              <div class="uploadImgWrap">
                <div class="uploadImg">
                  <input
                    id="inputimg"
                    type="file"
                    @change="SongImgChange($event)"
                  />
                  <label for="inputimg" class="inputimg">
                    <img
                      v-if="updateimg == false"
                      class="pre"
                      alt="上傳圖示"
                      src="@/assets/image/icon/upload.jpg"
                    />
                    <div v-else class="pic">
                      <img class="uploadpic" alt="已上傳圖片" :src="showimg" />
                    </div>
                  </label>
                  <div>
                    <p style="color: white">歌曲封面上傳</p>
                    <br />
                    <p style="color: white">
                      ☸ 建議尺寸:500x500px以上，圖片檔案大小不可超過2MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 歌曲檔案及歌曲封面上傳 原code -->
            <!-- <div class="form-group">
              <label for="newalbumname" class="label">歌曲上傳</label>
              <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 60px 0; background-color: black">
                  <img class="songpic" alt="Update Image" src="@/assets/image/icon/file.jpg" />
                  <p style="color: white">上傳檔案或將檔案拖曳到這裡</p>
                  <br />
                  <p style="color: white">
                    ※ 上傳格式限 MP3，位元傳輸率 192kbps 以上
                  </p>
                </div>
              </Upload>
            </div>

            <div class="form-group">
              <label for="newalbumname" class="label">歌曲封面</label>
              <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 60px 0; background-color: black">
                  <img class="songpic" alt="Update Image" src="@/assets/image/icon/camera.jpg" />
                  <p style="color: white">上傳封面相片</p>
                  <br />
                  <p style="color: white">
                    ※ 建議尺寸:500x500px以上，圖片檔案大小不可超過2MB
                  </p>
                </div>
              </Upload>
            </div> -->

            <div class="form-group">
              <label for="newSongName" class="label">歌曲名稱 *</label>
              <input
                type="text"
                id="newSongName"
                v-model="newsong.s_name"
                required
              />
            </div>
            <div class="form-group">
              <label for="newSongIntro" class="label"
                >歌曲介紹 （限300字以下）</label
              >
              <textarea
                name=""
                id="editalbuminfo"
                cols="30"
                rows="10"
                v-model="newsong.s_intro"
              >
              </textarea>
            </div>
            <div class="form-group">
              <label for="newSongIntro" class="label">歌曲歌詞</label>
              <textarea
                name=""
                id="editalbuminfo"
                cols="30"
                rows="10"
                v-model="newsong.s_lyrics"
              >
              </textarea>
            </div>
            <div class="form-group">
              <label for="songclass" class="label">歌曲分類</label>
            </div>
            <div class="checkbox">
              <div class="songclass">
                <label for="songclass" class="label">語系 （至少擇一）</label>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="language"
                      value="1"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">日語</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="language"
                      value="2"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">韓語</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="language"
                      value="3"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">華語</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="language"
                      value="4"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">西洋</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="language"
                      value="5"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">其他語言</span>
                </div>
              </div>
              <div class="songclass">
                <label for="songclass" class="label">曲風</label>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="style"
                      value="6"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">流行音樂</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="style"
                      value="7"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">獨立音樂</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="style"
                      value="8"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">嘻哈</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="style"
                      value="9"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">搖滾</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="style"
                      value="10"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">藍調</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="style"
                      value="11"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">爵士</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="style"
                      value="12"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">古典</span>
                </div>
              </div>
              <div class="songclass">
                <label for="songclass" class="label">情境</label>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="situation"
                      value="13"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">快樂</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="situation"
                      value="14"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">傷心</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="situation"
                      value="18"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">運動</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="situation"
                      value="15"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">輕鬆</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="situation"
                      value="16"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">舒眠</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="situation"
                      value="17"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">專注</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input
                      type="checkbox"
                      name="situation"
                      value="19"
                      class="scat"
                    />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">派對</span>
                </div>
              </div>
            </div>
          </form>

          <router-link to="profilepageedit"
            ><button
              class="button"
              style="margin-bottom: 150px"
              @click="complete"
            >
              取消變更
            </button></router-link
          >

          <button
            @click="uploadSong()"
            class="button"
            style="margin-bottom: 150px"
          >
            儲存變更
          </button>
        </div>
        <!-- -----------------------------歌曲管理----------------------------- -->
        <div v-show="activeTab === 3" class="page">
          <div class="top">
            <div class="newsong" @click="activeTab = 2">
              <img
                alt="Update Image"
                :src="`${publicPath}image/icon/upload.svg`"
              />
              <span>上傳歌曲</span>
            </div>
            <!-- 歌曲搜尋 -->
            <label class="search" for="songsearch"
              ><input
                type="search"
                v-model.lazy.trim="searchsong"
                id="songsearch" />
              <button>
                <img
                  alt="search_icon"
                  :src="`${publicPath}image/icon/search.svg`"
                /></button
            ></label>
          </div>
          <table class="song-table">
            <thead>
              <tr>
                <th class="timg"></th>
                <th class="tname">歌曲</th>
                <th class="tintro">歌曲簡介</th>
                <th class="show">審核狀態</th>
                <th class="date">更新日期</th>
                <th class="time">
                  <fontAwesome :icon="['fa', 'fa-clock']" />
                </th>
                <th class="edit">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filterprofileSongs" :key="item.s_id">
                <td class="timg">
                  <div class="pic">
                    <img
                      class="song"
                      :src="`${publicPath}dataimage/song/${item.s_img}`"
                      :alt="item.s_name"
                    />
                    <div class="play" @click="openPlayer(item.s_id)">
                      <fontAwesome class="i" :icon="['fa', 'play']" />
                    </div>
                  </div>
                </td>
                <td
                  class="tname"
                  @click="gotosinglemusic(item.s_id)"
                  style="cursor: pointer"
                >
                  {{ item.s_name }}
                </td>
                <td class="tintro">
                  <p>
                    {{ item.s_intro }}
                  </p>
                </td>
                <td class="show">
                  <span v-if="item.s_stat == 0"> 待審核 </span>
                  <span v-else>
                    {{ Number(item.show_stat) ? "已上架" : "審核未過" }}
                  </span>
                </td>
                <td class="date">
                  {{ item.update_date }}
                </td>
                <td class="time">
                  {{ item.s_length }}
                </td>
                <td class="edit">
                  <button
                    @click="
                      editSong(item.s_id, item.s_img, item.s_name, item.s_intro)
                    "
                  >
                    <fontAwesome
                      v-if="item.s_stat == 1 && item.show_stat == 1"
                      :icon="['fas', 'pen']"
                      style="color: #fdfbfb"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <Page :total="100" show-elevator /><br /> -->
        </div>

        <!-- -----------------------------專輯管理----------------------------- -->
        <div v-show="activeTab === 4" class="page">
          <div class="top">
            <router-link to="newalbum" class="newalbum">
              <fontAwesome class="i" :icon="['fa', 'plus']" /><span
                >新增專輯</span
              >
            </router-link>
            <!-- 專輯搜尋 -->
            <label class="search" for="albumsearch"
              ><input
                type="search"
                v-model.lazy.trim="searchalbum"
                id="albumsearch" />
              <button>
                <img
                  alt="search_icon"
                  :src="`${publicPath}image/icon/search.svg`"
                /></button
            ></label>
          </div>
          <table class="song-table">
            <thead>
              <tr>
                <th class="timg"></th>
                <th class="tname">專輯</th>
                <th class="tintro">專輯簡介</th>
                <th class="date">更新日期</th>
                <th class="edit">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in filterprofileAlbum"
                :key="item.alb_id"
              >
                <td class="timg">
                  <div class="pic">
                    <img
                      class="albumn"
                      alt="專輯照片"
                      :src="`${publicPath}dataimage/album/${item.alb_img}`"
                    />
                  </div>
                </td>
                <td
                  class="tname"
                  @click="gotosinglealbum(item.alb_id)"
                  style="cursor: pointer"
                >
                  {{ item.alb_name }}
                </td>
                <td class="tintro">
                  <p>
                    {{ item.alb_intro }}
                  </p>
                </td>
                <td class="date">
                  {{ item.upload_date }}
                </td>
                <td class="edit">
                  <!-- <router-link to="editalbum">
                    <fontAwesome
                      :icon="['fas', 'pen']"
                      style="color: #fdfbfb"
                    />
                  </router-link> -->
                  <button
                    @click="
                      editalbum(
                        item.alb_id,
                        item.alb_img,
                        item.alb_name,
                        item.alb_intro
                      )
                    "
                  >
                    <fontAwesome
                      :icon="['fas', 'pen']"
                      style="color: #fdfbfb"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <Page :total="100" show-elevator /><br /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style>
<script src="./js/ProfilePageEditView"></script>

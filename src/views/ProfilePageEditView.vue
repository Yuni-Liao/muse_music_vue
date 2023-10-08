<template>
  <div class="profilepageedit">
    <div class="cover-container">
      <img class="cover" alt="Cover Image" :src="member.coverimgURL" />
      <input class="coverupdate" type="file" @change="coverImgChange($event)" />
      <!-- 頭貼 -->
      <div class="profile-container">
        <img class="profile" alt="Profile Image" :src="member.profileImgURL" />
        <input type="file" @change="profileImgChange($event)" class="profileupdate" />
      </div>
    </div>

    <div class="main-wrapper">
      <div class="page-options">
        <div class="page-option">
          <button @click="changeTab(1)" :class="{
            active: activeTab === 1,
          }">
            編輯個人主頁
          </button>
        </div>
        <div class="page-option">
          <button @click="changeTab(2)" :class="{
            active: activeTab === 2,
          }">
            音樂上傳
          </button>
        </div>
        <div class="page-option">
          <button @click="changeTab(3)" :class="{
            active: activeTab === 3,
          }">
            歌曲管理
          </button>
        </div>
        <div class="page-option">
          <button @click="changeTab(4)" :class="{
            active: activeTab === 4,
          }">
            專輯管理
          </button>
        </div>
      </div>

      <div class="line"></div>

      <div class="page-content">
        <div v-show="activeTab === 1" class="page">
          <form class="form1">
            <div class="form-group">

              <label for="name" class="label">顯示名稱</label>
              <input type="text" style="" id="name" v-model="member.name" />
            </div>


            <div class="form-group">
              <!-- <div>
                <p>Name: {{ member.name }}</p>
                <p>Introduction: {{ member.introduction }}</p>
                <p>County: {{ member.county }}</p>
                <p>Social Media: {{ member.socialMedia }}</p>
                <p>Privacy: {{ member.privacy }}</p>
              </div> -->
              <label for="inst" class="label">介紹</label>
              <textarea name="" id="inst" v-model="member.introduction" rows="10" wrap="hard"></textarea>
            </div>
            <div class="form-group">
              <label for="location" class="label">位置</label>
              <select id="location" v-model="member.location">
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
              <input type="text" id="social" v-model="member.socialMedia" />
            </div>
          </form>
          <router-link to="profilepageedit"><button class="button" style="margin-bottom: 150px" @click="complete">
              取消變更
            </button></router-link>

          <router-link to="profilepageedit"><button class="button" style="margin-bottom: 150px" @click="complete">
              儲存變更
            </button></router-link>
        </div>

        <div v-show="activeTab === 2" class="page">
          <form class="form1">
            <div class="form-group">
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
            </div>

            <div class="form-group">
              <label for="newalbumname" class="label">歌曲名稱</label>
              <!-- 拿掉沒用的v-model -- 廖妍榛 -->
              <!-- <input type="text" id="newalbumname" v-model="newalbumname" /> -->
              <input type="text" id="newalbumname" />
            </div>
            <div class="form-group">
              <label for="songintro" class="label">歌曲介紹</label>
              <!-- 拿掉沒用的v-model -- 廖妍榛 -->
              <!-- <input type="text" id="songintro" v-model="newalbuminfo" /> -->
              <input type="text" id="songintro" />
            </div>
            <div class="form-group">
              <label for="songclass" class="label">分類</label>
            </div>
            <div class="checkbox">
              <div class="songclass">
                <label for="songclass" class="label">語系</label>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">日語流行</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">韓語流行</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">華語流行</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">西洋流行</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">其他語言</span>
                </div>
              </div>
              <div class="songclass">
                <label for="songclass" class="label">曲風</label>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">流行音樂</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">獨立音樂</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">嘻哈</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">搖滾</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">藍調</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">爵士</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">古典</span>
                </div>
              </div>
              <div class="songclass">
                <label for="songclass" class="label">情境</label>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">快樂</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">傷心</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">運動</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">輕鬆</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">舒眠</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">專注</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">派對</span>
                </div>
                <div class="opt">
                  <label class="checkboxLabel">
                    <input type="checkbox" name="songclass" value="" />
                    <fontAwesome class="i" :icon="['fa', 'fa-check']" />
                  </label>
                  <span class="classname">其他曲風</span>
                </div>
              </div>
            </div>
          </form>

          <router-link to="profilepageedit"><button class="button" style="margin-bottom: 150px" @click="complete">
              取消變更
            </button></router-link>

          <router-link to="profilepageedit"><button class="button" style="margin-bottom: 150px" @click="complete">
              儲存變更
            </button></router-link>
        </div>
        <div v-show="activeTab === 3" class="page">
          <div class="top">
            <div class="newsong" @click="activeTab = 2">
              <img alt="Update Image" :src="`${publicPath}image/icon/upload.svg`" />
              <span>上傳歌曲</span>
            </div>
            <label class="search"><input type="search" name="" id="" />
              <button>
                <img alt="search_icon" :src="`${publicPath}image/icon/search.svg`" /></button></label>
          </div>
          <table class="song-table">
            <thead>
              <tr>
                <th class="timg"></th>
                <th class="tname">歌曲</th>
                <th class="tintro">歌曲簡介</th>
                <th class="show">瀏覽權限</th>
                <th class="date">更新日期</th>
                <th class="time">
                  <fontAwesome :icon="['fa', 'fa-clock']" />
                </th>
                <th class="edit">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in profileSongs" :key="item.s_id">
                <td class="timg">
                  <img class="song" :src="`${publicPath}dataimage/song/${item.s_img}`" :alt="item.s_name" />
                </td>
                <td class="tname">
                  {{ item.s_name }}
                </td>
                <td class="tintro">
                  <p>
                    {{ item.s_intro }}
                  </p>
                </td>
                <td class="show">
                  {{ Number(item.show_stat) ? "公開" : "私人" }}
                </td>
                <td class="date">
                  {{ item.update_date }}
                </td>
                <td class="time">
                  {{ item.S_length }}
                </td>
                <td class="edit">
                  <button @click="
                    editSong(
                      item.s_id,
                      item.s_img,
                      item.s_name,
                      item.s_intro,
                      item.show_stat
                    )
                    ">
                    <fontAwesome v-if="item.s_stat == 1" :icon="['fas', 'pen']" style="color: #fdfbfb" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Page :total="100" show-elevator /><br />
        </div>

        <div v-show="activeTab === 4" class="page">
          <div class="top">
            <router-link to="newalbum" class="newalbum">
              <fontAwesome class="i" :icon="['fa', 'plus']" /><span>新增專輯</span>
            </router-link>
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
              <tr v-for="(item, index) in profileAlbums" :key="item.alb_id">
                <td class="timg">
                  <img class="albumn" alt="專輯照片" :src="`${publicPath}dataimage/album/${item.alb_img}`" />
                </td>
                <td class="tname">
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
                  <button @click="
                    editalbum(
                      item.alb_id,
                      item.alb_img,
                      item.alb_name,
                      item.alb_intro
                    )
                    ">
                    <fontAwesome :icon="['fas', 'pen']" style="color: #fdfbfb" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Page :total="100" show-elevator /><br />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style>
<script src="./js/ProfilePageEditView"></script>

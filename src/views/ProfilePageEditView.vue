<template>
  <!-- 重推again -->
  <div class="cover-image-container">
    <img
      class="cover-image"
      alt="Cover Image"
      src="@/assets/image/profileeditimage/coverimage.jpg"
    />
  </div>
  <Upload>
    <img class="update" alt="update" src="@/assets/image/icon/upload.jpg" />
  </Upload>

  <Upload>
    <div class="profile-container">
      <img
        class="profile"
        alt="Profile Image"
        src="@/assets/image/profileeditimage/profileimage.jpg"
      />
    </div>
    <img class="updatepic" alt="update" src="@/assets/image/icon/upload.jpg" />
  </Upload>

  <div class="page-options">
    <div class="page-option">
      <button @click="changeTab(1)" :class="{ active: activeTab === 1 }">
        編輯個人主頁
      </button>
    </div>
    <div class="page-option">
      <button @click="changeTab(2)" :class="{ active: activeTab === 2 }">
        音樂上傳
      </button>
    </div>
    <div class="page-option">
      <button @click="changeTab(3)" :class="{ active: activeTab === 3 }">
        歌曲管理
      </button>
    </div>
    <div class="page-option">
      <button @click="changeTab(4)" :class="{ active: activeTab === 4 }">
        專輯管理
      </button>
    </div>
  </div>

  <div class="line"></div>

  <div class="page-content">
    <div v-show="activeTab === 1">
      <form class="form1">
        <div class="form-group">
          <label for="name" class="label">顯示名稱</label>
          <input
            type="text"
            style=""
            id="name"
            v-model="name"
            placeholder="Anonyous"
          />
        </div>
        <div class="form-group">
          <label for="inst" class="label">介紹</label>
          <input
            type="text"
            id="inst"
            v-model="inst"
            placeholder="桃園人，喜歡古典樂，最近嘗試個人創作，將古典樂結合搖滾，如果各位還喜歡，請追蹤我會不定時更新創作，謝謝支持~~~"
            maxlength="300"
          />
        </div>
        <div class="form-group">
          <label for="location" class="label">位置</label>
          <select id="location" v-model="location">
            <option value="">請選擇縣市</option>
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
          <input
            type="text"
            id="social"
            v-model="social"
            placeholder="社群網站"
          />
        </div>
      </form>
      <router-link to="profilepageedit"><button class="button" style="margin-bottom: 150px" @click="complete">
        取消變更
      </button></router-link>
      
      <router-link to="profilepageedit"><button class="button" style="margin-bottom: 150px" @click="complete">
        儲存變更
      </button></router-link>
    </div>

    <div v-show="activeTab === 2">
      <form class="form1">
        <div class="form-group">
          <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 60px 0; background-color: black">
              <img
                class="songpic"
                alt="Update Image"
                src="@/assets/image/icon/file.jpg"
              />
              <p style="color: white">上傳檔案或將檔案拖曳到這裡</p>
              <br />
              <p style="color: white">
                ※ 上傳格式限 MP3，位元傳輸率 192kbps 以上
              </p>
            </div>
          </Upload>
        </div>

        <div class="form-group">
          <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 60px 0; background-color: black">
              <img
                class="songpic"
                alt="Update Image"
                src="@/assets/image/icon/camera.jpg"
              />
              <p style="color: white">上傳封面相片</p>
              <br />
              <p style="color: white">
                ※ 建議尺寸:500x500px以上，圖片檔案大小不可超過2MB
              </p>
            </div>
          </Upload>
        </div>

        <div class="form-group">
          <label for="newalbumname" class="label">輸入歌曲名稱</label>
          <input type="text" id="newalbumname" v-model="newalbumname" />
        </div>
        <div class="form-group">
          <label for="songclass" class="label">輸入歌曲介紹</label>
          <input type="text" id="songclass" v-model="newalbuminfo" />
        </div>
        <div class="form-group">
          <label for="newalbumname" class="label">選擇種類</label>
        </div>
        <div class="checkbox">
          <label for="songclass" class="label">歌曲語種 :</label>
          <div class="songclass">
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">日語流行</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">韓語流行</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">華語流行</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">西洋流行</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">其他語言</label><br />
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">流行音樂</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">搖滾</label>
          </div>
          <label for="songclass" class="label">歌曲類別 :</label>
          <div class="songclass">
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">嘻哈</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">獨立音樂</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">藍調</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">流行音樂</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">爵士</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">古典</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">其他曲風</label> <br />
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">快樂</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">傷心</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">運動</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">輕鬆</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">舒眠</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">專注</label>
            <input
              type="checkbox"
              id="songcheckbox"
              name="checkboxGroup"
              value="checkbox"
            />
            <label for="checkbox">派對</label>
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
    <div v-show="activeTab === 3">
      <div class="songsearch">
    
        
      </div>
      <table class="song-table">
        <thead>
          <tr>
            <th></th>
            <th>歌曲</th>
            <th>歌曲簡介</th>
            <th>瀏覽權限</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(song, index) in songs" :key="index">
            <td>
              <img
                class="song"
                alt="song"
                src="@/assets/image/profileeditimage/song.jpg"
              />
            </td>
            <td>{{ song.title }}</td>
            <td>{{ song.description }}</td>
            <td>{{ song.privacy }}</td>
            <td>{{ song.date }}</td>
            <td>{{ song.time }}</td>
            <td>
              <router-link to="editsong"><img
                class="songpicupload"
                alt="Update Image"
                src="@/assets/image/icon/file.jpg"
              /></router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Page :total="100" show-elevator /><br />
    </div>

    <div v-show="activeTab === 4">
      <div class="songsearch">
        <router-link to="newalbum"><img
          class="songpicupload"
          alt="Update Image"
          src="@/assets/image/icon/file.jpg"
        /></router-link>
        
      </div>
      <table class="song-table">
        <thead>
          <tr>
            <th></th>
            <th>專輯</th>
            <th>專輯簡介</th>
            <th>瀏覽權限</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(albumn, index) in albumns" :key="index">
            <td>
              <img
                class="albumn"
                alt="albumn"
                src="@/assets/image/songPic.png"
              />
            </td>
            <td>{{ albumn.title }}</td>
            <td>{{ albumn.description }}</td>
            <td>{{ albumn.privacy }}</td>
            <td>{{ albumn.date }}</td>
            <td>{{ albumn.time }}</td>
            <td>
              <router-link to="editalbum"><img
                class="songpicupload"
                alt="Update Image"
                src="@/assets/image/icon/file.jpg"
              /></router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Page :total="100" show-elevator /><br />
    </div>
    
    </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style>
<script src="./js/ProfilePageEditView"></script>

<template>
  <label for="name" class="label"></label>

  <form class="form1">
    <div class="form-group">
      <label for="name" class="label" color="white" margin-top="100px"
        >專輯編輯</label
      >
      <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 60px 0; background-color: black">
          <img
            class="songpic"
            alt="Update Image"
            src="@/assets/image/icon/upload.jpg"
          />
          <p style="color: white">上傳封面相片</p>
          <br />
          <p style="color: white">
            ☸ 建議尺寸:500x500px以上，圖片檔案大小不可超過2MB
          </p>
        </div>
      </Upload>
    </div>

    <div class="form-group">
      <label for="editalbumname" class="label">編輯專輯名稱</label>
      <input
        type="text"
        id="editalbumname"
        v-model="editalbumname"
        :placeholder="album.editalbumname"
      />
    </div>
    <div class="form-group">
      <label for="editalbuminfo" class="label">編輯專輯介紹</label>
      <input
        type="text"
        id="editalbuminfo"
        v-model="editalbuminfo"
        :placeholder="album.editalbuminfo"
      />
    </div>
    <div class="form-group">
      <label for="privacy" class="label">瀏覽權限</label>
      <select id="privacy" v-model="privacy">
        <option value="公開">公開</option>
        <option value="私人">私人</option>
      </select>
    </div>
  </form>
  <div class="plus-container">
    <router-link to="addsongtoalbum">
      <img
        class="plus"
        alt="Profile Image"
        src="@/assets/image/icon/plus.jpg"
      />
    </router-link>
    <p class="plus">新增單曲至專輯</p>
  </div>


  <table class="song-table">
    <thead>
      <tr>
        <th></th>
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
        <td>{{ index + 1 }}</td>
        <td>
          <img
            class="profile"
            alt="Profile Image"
            src="@/assets/image/profileeditimage/song.jpg"
          />
        </td>
        <td>{{ song.title }}</td>
        <td>{{ song.description }}</td>
        <td>{{ song.privacy }}</td>
        <td>{{ song.date }}</td>
        <td>{{ song.time }}</td>
        <td>
          <br />
          <label class="checkboxLabel">
            <input
              type="checkbox"
              name="songclass"
              v-model="song.isChecked"
              @click="updateCount"
            />
            <fontAwesome class="i" :icon="['fa', 'fa-check']" />
          </label>
        </td>
      </tr>
    </tbody>
  </table>
  <router-link to="profilepageedit"
    ><button class="button" style="margin-bottom: 150px">
      取消變更
    </button></router-link
  >

  <router-link to="profilepageedit"
    ><button class="button" style="margin-bottom: 150px" >
      儲存變更
    </button></router-link
  >
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/editsdsong";
</style>
<script src="./js/EditSdSong"></script>

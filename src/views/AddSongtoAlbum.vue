<template>
  <label for="name" class="label"></label>

  <form class="form1"><router-link to="editalbum" >專輯管理</router-link
    > > 新增單曲至專輯</form>
  <div class="selcetcheck">已勾選 {{ selectedCount }} 首歌曲</div>
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
            <br>
            <label class="checkboxLabel">
              <input type="checkbox" name="songclass" v-model="song.isChecked" @click="updateCount" />
              <fontAwesome class="i" :icon="['fa', 'fa-check']" />
            </label>
          </td>
      </tr>
    </tbody>
  </table>
  <router-link to="profilepageedit"
    ><button class="button" style="margin-bottom: 150px" >
      取消變更
    </button></router-link
  >

  <router-link to="editsdsong"
    ><button class="button" style="margin-bottom: 150px" >
      儲存變更
    </button></router-link
  >
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style>
<script src="./js/AddSongtoAlbum.js"></script>

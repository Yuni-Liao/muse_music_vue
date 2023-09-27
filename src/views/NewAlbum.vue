<template>
  <teleport to="body" v-if="isAddSongOpen"
    ><AddSongtoAlbum @isAddSongOpenupdate="isAddSongOpenupdate"></AddSongtoAlbum
  ></teleport>
  <div class="newalbum">
    <div class="main-wrapper">
      <label for="name" class="label"></label>

      <form class="form1">
        <div class="form-group">
          <label for="name" class="label" color="white" margin-top="100px"
            >新增專輯</label
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
          <label for="newalbumname" class="label">輸入專輯名稱</label>
          <input type="text" id="newalbumname" v-model="newalbumname" />
        </div>
        <div class="form-group">
          <label for="newalbuminfo" class="label">輸入專輯介紹</label>
          <input type="text" id="newalbuminfo" v-model="newalbuminfo" />
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
        <div @click="isAddSongOpen = !isAddSongOpen">
          <img
            alt="Profile Image"
            class="plus"
            src="@/assets/image/icon/plus.jpg"
          />
          <p class="plus">新增單曲至專輯</p>
        </div>
      </div>

      <router-link to="profilepageedit"
        ><button class="button" style="margin-bottom: 150px" @click="complete">
          取消變更
        </button></router-link
      >

      <router-link to="profilepageedit"
        ><button class="button" style="margin-bottom: 150px" @click="complete">
          儲存變更
        </button></router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style>
<script src="./js/NewAlbum.js"></script>

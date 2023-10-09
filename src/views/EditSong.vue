<template>
  <div class="editsong">
    <div class="main-wrapper">
      <label for="name" class="label"></label>

      <form class="form1">
        <div class="form-group">
          <label for="name" class="label" color="white" margin-top="100px"
            >歌曲編輯</label
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
                {{ songData.s_img }}
              </p>
            </div>
          </Upload>
        </div>

        <div class="form-group">
          <label for="song" class="label">輸入歌曲名稱</label>
          <input type="text" id="song" v-model="songData.s_name" />
        </div>
        <div class="form-group">
          <label for="songinfo" class="label">輸入歌曲介紹</label>
          <textarea
            name=""
            id="songinfo"
            cols="30"
            rows="10"
            v-model="songData.s_intro"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="privacy" class="label">瀏覽權限</label>
          <select id="privacy" v-model="songData.show_stat">
            <option value="1">公開</option>
            <option value="0">私人</option>
          </select>
        </div>
      </form>
      <router-link to="profilepageedit"
        ><button class="button" style="margin-bottom: 150px">
          取消變更
        </button></router-link
      >

      <button
        class="button"
        style="margin-bottom: 150px"
        @click.prevent="editSong()"
      >
        儲存變更
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style>
<script src="./js/EditSong.js"></script>

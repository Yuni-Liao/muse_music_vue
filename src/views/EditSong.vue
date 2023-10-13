<template>
  <div class="editsong">
    <div class="main-wrapper">
      <label for="" class="label"></label>

      <form class="form1">
        <div class="form-group">
          <p class="label" color="white" margin-top="100px">歌曲編輯</p>
          <div class="uploadImgWrap">
            <div class="uploadImg">
              <input
                id="inputimg"
                type="file"
                @change="coverImgChange($event)"
              />
              <label for="inputimg" class="inputimg">
                <div v-if="updateimg == false" class="pic">
                  <img
                    class="uploadpic"
                    alt="原本歌曲封面"
                    :src="`${publicPath}dataimage/song/${songData.s_img}`"
                  />
                </div>
                <div v-else class="pic">
                  <img
                    class="uploadpic"
                    alt="更新後之歌曲封面"
                    :src="showimg"
                  />
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

        <div class="form-group">
          <label for="search" class="label">輸入歌曲名稱</label>
          <input type="text" id="search" v-model="songData.s_name" />
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
        <!-- <div class="form-group">
          <label for="privacy" class="label">瀏覽權限</label>
          <select id="privacy" v-model="songData.show_stat">
            <option value="1">公開</option>
            <option value="0">私人</option>
          </select>
        </div> -->
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

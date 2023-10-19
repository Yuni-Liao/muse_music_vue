<template>
  <teleport to="body" v-if="isAddSongOpen"
    ><AddSongtoAlbum
      :noAlbumsongs="this.noAlbumsongs"
      @isAddSongOpenupdate="isAddSongOpenupdate"
      @NewDataupdate="NewDataupdate"
    ></AddSongtoAlbum
  ></teleport>
  <div class="main-wrapper">
    <label for="name" class="label"></label>
    <form class="form1">
      <div class="form-group">
        <label for="name" class="label" color="white">專輯編輯</label>
        <div class="uploadImgWrap">
          <div class="uploadImg">
            <input id="inputimg" type="file" @change="coverImgChange($event)" />
            <label for="inputimg" class="inputimg">
              <div v-if="updateimg == false" class="pic">
                <img
                  class="uploadpic"
                  alt="原本專輯封面"
                  :src="`${publicPath}dataimage/album/${albumData.alb_img}`"
                />
              </div>
              <div v-else class="pic">
                <img class="uploadpic" alt="更新後之專輯封面" :src="showimg" />
              </div>
            </label>
            <div>
              <p style="color: white">專輯封面上傳</p>
              <br />
              <p style="color: white">
                ☸ 建議尺寸:500x500px以上，圖片檔案大小不可超過2MB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="editalbumname" class="label">編輯專輯名稱 *</label>
        <input
          type="text"
          id="editalbumname"
          v-model="albumData.alb_name"
          required
        />
      </div>
      <div class="form-group">
        <label for="editalbuminfo" class="label"
          >編輯專輯介紹 （限300字以下）</label
        >
        <textarea
          name=""
          id="editalbuminfo"
          cols="30"
          rows="10"
          v-model="albumData.alb_intro"
          required
        >
        </textarea>
      </div>
    </form>
    <div class="plus-container">
      <div @click.prevent="isAddSongOpen = !isAddSongOpen">
        <img
          class="plus"
          alt="Profile Image"
          src="@/assets/image/icon/plus.jpg"
        />
        <p class="plus">新增單曲至專輯</p>
      </div>
    </div>

    <table class="song-table">
      <thead>
        <tr>
          <th class="tno"></th>
          <th class="timg"></th>
          <th class="tname">歌曲</th>
          <th class="tintro">歌曲簡介</th>
          <th class="tdate">更新時間</th>
          <th class="ttime"><fontAwesome :icon="['fa', 'fa-clock']" /></th>
          <th class="check"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in allsong" :key="item.alb_id">
          <td class="tno">{{ index + 1 }}</td>
          <td class="timg">
            <div class="pic">
              <img
                class="profile"
                alt="歌曲照片"
                :src="`${publicPath}dataimage/song/${item.songPic}`"
              />
            </div>
          </td>
          <td class="tname">{{ item.name }}</td>
          <td class="tintro">{{ item.s_intro }}</td>
          <td class="tdate">{{ item.s_update_date }}</td>
          <td class="ttime">{{ item.time }}</td>
          <td class="check">
            <br />
            <label class="checkboxLabel">
              <input
                type="checkbox"
                name="songclass"
                v-model="item.isChecked"
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
    <button
      class="button"
      style="margin-bottom: 150px"
      @click.prevent="submit()"
    >
      儲存變更
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/editalbum";
</style>
<script src="./js/EditAlbum.js"></script>

<template>
  <div class="addsongtoalbum">
    <form class="form1">
      <router-link to="editalbum">專輯管理</router-link> &nbsp/&nbsp
      新增單曲至專輯
    </form>
    <div class="selcetcheck">已勾選 {{ checked }} 首歌曲</div>
    <div class="content">
      <table class="song-table">
        <thead>
          <tr>
            <th></th>
            <th class="simg"></th>
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
            <td class="simg">
              <div class="pic">
                <img
                  class="profile"
                  alt="Profile Image"
                  src="@/assets/image/profileeditimage/song.jpg"
                />
              </div>
            </td>
            <td class="sname">{{ song.title }}</td>
            <td class="sintro">
              <p>{{ song.description }}</p>
            </td>
            <td>{{ song.privacy }}</td>
            <td>{{ song.date }}</td>
            <td>{{ song.time }}</td>
            <td>
              <br />
              <label class="checkboxLabel">
                <input
                  type="checkbox"
                  name="songclass"
                  @click="updateCount($event)"
                />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn">
      <button class="button" @click="cancelAddSong()">取消變更</button>
      <button class="button" @click="submitAddSong()">儲存變更</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAddSongOpen: false,
      checked: 0,
      songs: [
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
        {
          title: "新增加的歌1",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          //   isChecked: true,
        },
      ],
    };
  },
  methods: {
    updateCount(e) {
      //console.log(e.target.checked);
      if (e.target.checked == true) {
        this.checked++;
      } else {
        this.checked--;
      }
    },
    cancelAddSong() {
      this.isAddSongOpen = false;
      this.$emit("isAddSongOpenupdate", this.isAddSongOpen);
    },
    submitAddSong() {
      //   const NewSlData = {
      //     slid: undefined,
      //     slname: this.slname,
      //     image: "songPic.png",
      //     memid: 1,
      //     creator: "我",
      //     playnum: 0,
      //     songnum: 0,
      //     public: this.public,
      //   };
      this.isAddSongOpen = false;
      this.$emit("isAddSongOpenupdate", this.isAddSongOpen);
      //   this.$emit("NewSlDatanupdate", NewSlData);
    },
  },
};
</script>
<style scoped lang="scss">
// @import "~@/assets/scss/page/profilepageedit";
//新增歌曲至專輯
.addsongtoalbum {
  background-color: #2b2b2b;
  box-shadow: 0px 0px 50px #00000030;
  border-radius: 10px;
  position: fixed;
  width: 70%;
  height: 75vh;
  z-index: 400;
  padding: 50px;
  // 水平垂直置中
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .selcetcheck {
    color: $pink;
    text-align: right;
    line-height: 4;
  }

  .form1 {
    text-align: left;
    align-items: left;
    justify-content: left;
    margin: auto;
    color: $green;
  }
  .form1 a {
    color: $white;
  }

  .form-group {
    padding: 10px;
    text-align: left;
  }

  .form-group > input,
  .form-group > select,
  .form-group > textarea {
    border: 0;
    border-radius: 10px;
    width: 100%;
    background-color: black;
    color: $white;
    padding: 15px 20px;
    text-align: left;
    margin: 10px;
  }
  .checkboxLabel {
    display: inline-block;
    position: relative;
    width: 23px;
    height: 23px;
    // margin-right: 10px;
    padding: 0px;
    input[type="checkbox"] {
      cursor: pointer;
      vertical-align: sub;
      color: $white;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      /*清除預設樣式*/
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      border: 2px solid #ffffff80;
    }

    .i {
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
      color: $green;
      margin: 0;
      opacity: 0;
      pointer-events: none;
    }
    input[type="checkbox"]:hover,
    input[type="checkbox"]:checked {
      border: 2px solid $green;
    }
    input[type="checkbox"]:hover ~ .i,
    input[type="checkbox"]:checked ~ .i {
      opacity: 1;
    }
  }

  //table

  label {
    color: $white;
    padding: 8px;
  }

  .plus-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
  }

  .plus {
    border-radius: 20%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-right: 10px;
    // margin-bottom: 30px;
    vertical-align: middle;
  }

  p.plus {
    font-size: 25px;
    color: $white;
    padding: 20px;
    margin-bottom: 50px;
    display: inline;
    width: 250px;
    text-align: center;
  }

  //決定滾軸範圍
  .content {
    overflow-y: scroll;
    height: 75%;
  }
  //滾軸樣式------------------------
  .content::-webkit-scrollbar {
    margin: 5px;
    width: 5px;
    background-color: #252525;
    border-radius: 10px;
  }
  .content::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ffffff20;
  }
  //----------------
  .song-table {
    width: 100%;
    margin: auto;
    border-collapse: collapse;
  }
  .song-table th,
  .song-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
    margin-bottom: 20px;
    border-left: none;
    border-right: none;
    border-top: none;
    vertical-align: top;
    justify-content: space-evenly;
  }

  .song-table th {
    color: $white;
    text-align: left;
    height: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .song-table td {
    color: $white;
    background-color: transparent;
    font-size: 14px;
    line-height: 1.2;
    text-align: left;
    align-items: center;
  }
  .simg {
    .pic {
      @include rect(50px);
      min-width: 50px;
      height: 50px;
      overflow: hidden;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .sname {
    width: 15%;
    min-width: 100px;
  }
  .sintro {
    width: 40%;
    min-width: 200px;
    p {
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
  .song-table tr:hover {
    background-color: black;
  }

  .btn {
    max-width: 60%;
    height: 20%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .button {
      min-width: 106px;
      color: $green;
      background-color: transparent;
      border: $green 1px solid;
      border-radius: 5px;
      padding: 10px 20px;
      margin: 0 20px;
    }
  }
}
</style>

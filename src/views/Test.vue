<template>
  <!-- 這一頁是程式，用於預先的資料音檔的長度寫入資料庫 -->

  <div class="box">
    <h1>這一頁是程式，用於預先的資料音檔的長度寫入資料庫，用完會刪除</h1>
    <button @click="getdata()">點我取得資訊</button>
    <button @click="putmusiclength()">放入歌曲長度</button>
    <button @click="adddata()">寫回去資料庫</button>
  </div>
  <ol v-for="(item, index) in gdata" :key="gdata.s_id">
    <li class="li">
      <p>歌曲ID {{ item.s_id }}</p>
      <p>歌名 {{ item.s_name }}</p>
      <p>get 歌檔名 {{ item.s_src }}</p>
      <audio class="myAudio">
        <source :src="`${publicPath}audio/${item.s_src}`" type="audio/mpeg" />
      </audio>
      <p><button @click="paly(index)">播放</button></p>
      <p>歌曲長度 {{ item.s_length }}</p>
    </li>
  </ol>
</template>

<style>
.box {
  width: 100vw;
  min-height: 100vh;
  padding-top: 300px;
}
.li {
  padding: 20px;
  margin: 20px;
  border: 1px solid #ffffff;
}
</style>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      gdata: [],
    };
  },
  methods: {
    getdata() {
      const apiURL = new URL(`${this.$store.state.phpPublicPath}gettest.php`);
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.gdata = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },

    paly(index) {
      let newtime;
      let audioElement = document.querySelectorAll(".myAudio")[index];
      console.log(audioElement);
      audioElement.play();

      function timeqq(time) {
        const format = (time) => {
          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);
          return `${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`;
        };
        newtime = format(time);
      }
      timeqq(audioElement.duration);
      console.log(newtime);
    },

    putmusiclength() {
      for (let i = 0; i < this.gdata.length; i++) {
        let audioElement = document.querySelectorAll(".myAudio")[i];
        function timeqq(time) {
          let timee;
          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);
          const hr = 0;
          timee = `${String(hr).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
          )}:${String(seconds).padStart(2, "0")}`;
          return timee;
        }

        let num;
        num = timeqq(audioElement.duration);
        this.gdata[i].s_length = num;
      }
    },

    adddata() {
      // 獲取所有已選擇的歌單的 sl_id

      const slarr = this.gdata.map((obj) => obj.s_length);
      const sidarr = this.gdata.map((obj) => obj.s_id);

      console.log(slarr);
      console.log(sidarr);

      // 如果沒有選擇歌單，則alert提示

      const url = `${this.$store.state.phpPublicPath}edittest.php`;
      let headers = {
        Accept: "application/json",
      };
      const formData = new FormData();
      formData.append("slarr", JSON.stringify(slarr));
      formData.append("sidarr", JSON.stringify(sidarr));
      fetch(url, {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("新增失敗");
          }
        })
        .then(() => {
          this.isAddSlOpen = false;
        })
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
  },
  computed: {},
};
</script>

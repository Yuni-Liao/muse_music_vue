<template>
  <!-- 這一頁用於把音檔的長度寫入資料庫， -->
  <div class="box">
    <button @click="getdata()">點我取得資訊</button>
  </div>
  <ol v-for="(item, index) in gdata" :key="gdata.s_id">
    <li class="li">
      <p>歌曲ID {{ item.s_id }}</p>
      <p>歌名 {{ item.s_name }}</p>
      <p>get 歌檔名 {{ item.s_src }}</p>
      <p><button>播放</button></p>
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
      gdata: [],
    };
  },
  methods: {
    getdata() {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/gettest.php`
      );
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.gdata = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    },
  },
};
</script>

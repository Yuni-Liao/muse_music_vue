<template>
  <div class="mysonglist">
    <section>
      <h1>我的歌單</h1>
      <div class="tab">
        <button @click="currentType = 0"><h2>全部</h2></button>
        <button @click="currentType = 1"><h2>由我建立</h2></button>
        <button @click="currentType = 2"><h2>我追蹤的</h2></button>
      </div>
    </section>
    <section class="sl-list">
      <div class="sl-item" v-for="(item, index) in choosecreator">
        <div class="pic">
          <img :src="require(`/public/image/index/${item.image}`)" alt="" />
          <PlayBtnBig></PlayBtnBig>
        </div>
        <div>
          <h3>{{ item.slname }}</h3>
          <span>共有{{ item.songnum }}首歌</span>
        </div>
        <p>{{ item.creator }}</p>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/_mysonglist.scss";
</style>
<script src="./js/MySonglistView.js"></script>

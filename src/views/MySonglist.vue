<template>
  <div class="mysonglist">
    <section>
      <div><h1>我的歌單</h1></div>
      <div class="tabs">
        <button @click="currentType = 0" class="tab"><h2>全部</h2></button>
        <button @click="currentType = 1" class="tab"><h2>由我建立</h2></button>
        <button @click="currentType = 2" class="tab"><h2>我追蹤的</h2></button>
      </div>
      <div class="line"></div>
    </section>
    <section class="container">
      <div
        class="sl-list row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
      >
        <div class="col" v-for="(item, index) in choosecreator">
          <div class="sl-item">
            <div class="pic">
              <img :src="require(`/public/image/index/${item.image}`)" alt="" />
              <PlayBtnBig></PlayBtnBig>
            </div>
            <div class="txt">
              <h3>{{ item.slname }}</h3>
              <span>共有{{ item.songnum }}首歌</span>
            </div>
            <p>{{ item.creator }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/_mysonglist.scss";
</style>
<script src="./js/MySonglistView.js"></script>

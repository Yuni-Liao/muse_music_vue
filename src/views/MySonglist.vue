<template>
  <div class="mysonglist">
    <section>
      <h1>我的歌單{{ test }}</h1>
      <div>
        <button><h2>全部</h2></button>
        <button><h2>由我建立</h2></button>
        <button><h2>我追蹤的</h2></button>
      </div>
      <div class="tab">
        <button class="item"></button>
      </div>
    </section>
    <section class="list">
      <div class="sl-item"></div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/_mysonglist.scss";
</style>
<script src="./js/MySonglistView.js"></script>

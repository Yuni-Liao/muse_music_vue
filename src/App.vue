<template>
  <header>
    <!-- 非v-bind的圖片載入方式 -->
    <!-- 注意:: 點擊logo>返回首頁的跳轉要用router-link to="___" 這方式套才不會404, 用<a>沒辦法 -->
    <router-link to="/">
      <img alt="Vue logo" src="~@/assets/image/muse_logo.png">
    </router-link>
    <nav>
      <router-link to="/find">探索</router-link> |
      <router-link to="/ranking">排行榜</router-link> |
      <router-link to="/shop">周邊販售</router-link> |
      <router-link to="/activity">音樂快訊</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <router-link to="/">
      <img alt="Vue logo" src="~@/assets/image/muse_logo.png">
    </router-link>
    <router-link to="/about">關於謬思</router-link> |
    <router-link to="/activity">音樂快訊</router-link> |
    <router-link to="#">常見問題</router-link> |
    <router-link to="#">隱私權政策</router-link> |
    <p class="tibame">本網站為緯育TibaMe前端班第86期學員專題作品，本平台僅供學習、展示之用。</p>
  </footer>
</template>
<style lang="scss">
@import "~@/assets/scss/page/index.scss";
@import "~@/assets/scss/layout/header.scss";
@import "~@/assets/scss/layout/footer.scss";
@import "~@/assets/scss/component/muse_robot.scss";
</style>

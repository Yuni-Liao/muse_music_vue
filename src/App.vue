<template>
  <header>
    <!-- 非v-bind的圖片載入方式 -->
    <!-- 注意:: 點擊logo>返回首頁的跳轉要用router-link to="___" 這方式套才不會404, 用<a>沒辦法 -->
    <nav>
<<<<<<< HEAD
      <router-link to="/find">探索</router-link> |
      <router-link to="/ranking">排行榜</router-link> |
      <router-link to="/shop">周邊販售</router-link> |
      <router-link to="/activity">音樂快訊</router-link> |
      <router-link to="/login">Login</router-link>
      
=======
      <div class="header_nav_left">
        <router-link to="/">
          <img class="logo_header" alt="Vue logo" src="~@/assets/image/muse_logo.png">
        </router-link>
        <router-link to="/find">探索</router-link>
        <router-link to="/ranking">排行榜</router-link>
        <router-link to="/shop">周邊販售</router-link>
        <router-link to="/activity">音樂快訊</router-link>
      </div>

      <div class="header_nav_right">
        <img alt="search_icon" src="~@/assets/image/icon/search.png">
        <div class="dropdown_reaction">
          <img alt="bell_icon" src="~@/assets/image/icon/bell.png">

          <!-- <div class="dropdown" >
            <p>通知中心</p>
            <hr>
          </div> -->
        </div>
        <router-link to="/login"><img alt="user_icon" src="~@/assets/image/icon/user.png"></router-link>
      </div>

>>>>>>> 8317f86a36ef0b63be2f91f920939c616256730c
    </nav>
  </header>
  <main>
    <router-view />
  </main>

  <div class="pageTop_robot">
    <img id="pageTop" alt="pagetop_icon" src="~@/assets/image/icon/pageTop.svg" href="#top">
    <img alt="robot_icon" src="~@/assets/image/icon/robot.svg">
  </div>

  <footer
    :style="{ backgroundImage: `url( ${require('@/assets/image/footer_background.jpg')} )`, backgroundSize: '100% auto' }">

    <div class="logo_footer">
      <router-link to="/">
        <img alt="Vue logo" src="~@/assets/image/muse_logo_2.png">
      </router-link>
    </div>
    <div class="footer_nav">
      <router-link to="/about">關於謬思</router-link> |
      <router-link to="/activity">音樂快訊</router-link> |
      <router-link to="#">常見問題</router-link> |
      <router-link to="#">隱私權政策</router-link>
    </div>
    <p class="tibame">本網站為緯育TibaMe_前端設計工程師班第86期學員專題成果作品,本平台僅供學習、展示之用。<br>
      若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,<br>
      緯育公司概不負責。若有侵權疑慮,您可以私訊[緯育TibaMe],後續會由專人協助處理。</p>


  </footer>
</template>
<style lang="scss">
@import "~@/assets/scss/page/index.scss";
@import "~@/assets/scss/layout/header.scss";
@import "~@/assets/scss/layout/footer.scss";
@import "~@/assets/scss/component/muse_robot.scss";
</style>


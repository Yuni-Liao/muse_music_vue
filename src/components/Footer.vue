<template>
<<<<<<< HEAD
  <div class="phone-show">
    <router-link to="/home/find" style="margin: 0px 10px;">
      <fontAwesome :icon="['fa', 'fa-compass']" size="xl" style="color: #fff; cursor: pointer;" />
      <p>探索</p>
    </router-link>
    <router-link to="/home/ranking" style="margin: 0px 10px;">
      <fontAwesome :icon="['fa', 'fa-arrow-trend-up']" size="xl" style="color: #fff; cursor: pointer;" />
      <p>排行榜</p>
    </router-link>
    <router-link to="/home/shop" style="margin: 0px 10px;">
      <fontAwesome :icon="['fa', 'fa-bag-shopping']" size="xl" style="color: #fff; cursor: pointer;" />
      <p>周邊販售</p>
    </router-link>
    <router-link to="/home/activity" style="margin: 0px 10px;">
      <fontAwesome :icon="['fa', 'fa-bolt']" size="xl" style="color: #fff; cursor: pointer;" />
      <p>音樂快訊</p>
    </router-link>
  </div>
  <footer :style="{
    backgroundImage: `url( ${require('@/assets/image/footer_background.jpg')} )`,
    backgroundSize: '100% auto',
  }">
    <div class="logo_footer">
      <router-link to="/home">
        <img alt="Vue logo" src="~@/assets/image/muse_logo_2.png" />
      </router-link>
    </div>
    <div class="footer_nav">
      <router-link to="/home/about">關於謬思</router-link> |
      <router-link to="/home/activity">音樂快訊</router-link> |
      <router-link to="#">常見問題</router-link> |
      <router-link to="#">隱私權政策</router-link>
    </div>
    <p class="tibame">
      本網站為緯育TibaMe_前端設計工程師班第86期學員專題成果作品,本平台僅供學習、展示之用。<br />
      若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,<br />
      緯育公司概不負責。若有侵權疑慮,您可以私訊[緯育TibaMe],後續會由專人協助處理。
    </p>
  </footer>
=======
    <footer :style="{
        backgroundImage: `url( ${require('@/assets/image/footer_background.jpg')} )`,
        backgroundSize: '100% auto',
    }">
        <div class="logo_footer">
            <router-link to="/home">
                <img alt="Vue logo" src="~@/assets/image/muse_logo_2.png" />
            </router-link>
        </div>
        <div class="footer_nav">
            <router-link to="/home/about">關於謬思</router-link> |
            <router-link to="/home/activity">音樂快訊</router-link> |
            <router-link to="/home/about#faq">常見問題</router-link> |
            <router-link to="#">隱私權政策</router-link>
        </div>
        <p class="tibame">
            本網站為緯育TibaMe_前端設計工程師班第86期學員專題成果作品,本平台僅供學習、展示之用。<br />
            若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,<br />
            緯育公司概不負責。若有侵權疑慮,您可以私訊[緯育TibaMe],後續會由專人協助處理。
        </p>
    </footer>
>>>>>>> sang
</template>

<style scoped lang="scss">
@import "~@/assets/scss/layout/footer.scss";
</style>

<script></script>
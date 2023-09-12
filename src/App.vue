<template>
  <header headroom headroom--unpinned>
    <!-- 非v-bind的圖片載入方式 -->
    <!-- 注意:: 點擊logo>返回首頁的跳轉要用router-link to="___" 這方式套才不會404, 用<a>沒辦法 -->
    <nav>
      <div class="header_nav_left">
        <router-link to="/">
          <img
            class="logo_header"
            alt="Vue logo"
            src="~@/assets/image/muse_logo.png"
          />
        </router-link>
        <router-link to="/find">探索</router-link>
        <router-link to="/ranking">排行榜</router-link>
        <router-link to="/shop">周邊販售</router-link>
        <router-link to="/activity">音樂快訊</router-link>
      </div>

      <div class="header_nav_right">
        <div class="search_reaction">
          <div class="search_show">
            <input type="text" />
          </div>
          <img alt="search_icon" src="~@/assets/image/icon/search.png" />
        </div>
        <div class="notify_dropdown_reaction">
          <img :alt="'bell_icon'" src="~@/assets/image/icon/bell.png" />

          <div class="notify_dropdown">
            <p>通知中心</p>
            <hr />
            <div class="notify" v-for="(item, index) in notifyList" :key="index">
              <img
                :src="require(`@/assets/image/creator/${item.src}`)"
                alt=""
              />
              <p>{{ item.notifytxt }}</p>
            </div>
          </div>
        </div>
        <div class="user_dropdown_reaction">
          <router-link to="/login"
            ><img
              style="margin-top: -1px"
              alt="user_icon"
              src="~@/assets/image/icon/user.png"
          /></router-link>

          <div class="user_dropdown">
            <router-link to=""
              ><img
                src="~@/assets/image/icon/clipboard.png"
                alt=""
              />訂單資訊</router-link
            ><br />
            <router-link to=""
              ><img
                src="~@/assets/image/icon/settingicon.png"
                alt=""
              />帳號設定</router-link
            ><br />
            <router-link to="/profilepage"
              ><img
                src="~@/assets/image/icon/personalPage.png"
                alt=""
              />個人主頁</router-link
            ><br />
            <router-link to=""
              ><img
                src="~@/assets/image/icon/development.png"
                alt=""
              />個人管理頁面</router-link
            ><br />
            <p>我的音樂庫</p>
            <router-link to=""
              ><img
                src="~@/assets/image/icon/clock.png"
                alt=""
              />播放紀錄</router-link
            ><br />
            <router-link to="/mysonglist"
              ><img
                src="~@/assets/image/icon/list.png"
                alt=""
              />我的歌單</router-link
            ><br />
            <router-link to=""
              ><img
                src="~@/assets/image/icon/heart.png"
                alt=""
              />我的最愛</router-link
            ><br />
            <router-link to=""
              ><img
                src="~@/assets/image/icon/targeticon.png"
                alt=""
              />我的追蹤</router-link
            >
            <hr style="margin: 10px 0px" />
            <div class="loginbtn">登出</div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>

  <div class="pageTop_robot">
    <img
      id="pageTop"
      alt="pagetop_icon"
      src="~@/assets/image/icon/pageTop.svg"
      href="#top"
    />
    <img alt="robot_icon" src="~@/assets/image/icon/robot.svg" />
  </div>



  <footer
    :style="{
      backgroundImage: `url( ${require('@/assets/image/footer_background.jpg')} )`,
      backgroundSize: '100% auto',
    }"
  >
    <div class="logo_footer">
      <router-link to="/">
        <img alt="Vue logo" src="~@/assets/image/muse_logo_2.png" />
      </router-link>
    </div>
    <div class="footer_nav">
      <router-link to="/about">關於謬思</router-link> |
      <router-link to="/activity">音樂快訊</router-link> |
      <router-link to="#">常見問題</router-link> |
      <router-link to="#">隱私權政策</router-link>
    </div>
    <p class="tibame">
      本網站為緯育TibaMe_前端設計工程師班第86期學員專題成果作品,本平台僅供學習、展示之用。<br />
      若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,<br />
      緯育公司概不負責。若有侵權疑慮,您可以私訊[緯育TibaMe],後續會由專人協助處理。
    </p>
  </footer>
</template>
<style lang="scss">
@import "~@/assets/scss/page/index.scss";
@import "~@/assets/scss/layout/header.scss";
@import "~@/assets/scss/layout/footer.scss";
@import "~@/assets/scss/component/muse_robot.scss";

</style>

<script>
export default {
  data() {
    return {
      notifyList: [
        {
          src: "creator01.jpg",
          notifytxt: "Lucy 上傳了一首新歌，馬上來聽聽看吧!",
        },
        {
          src: "creator02.jpg",
          notifytxt: "Toby 上傳了一首新歌，馬上來聽聽看吧!",
        },
      ],
    };
  },
};
</script>
<script>
  
</script>
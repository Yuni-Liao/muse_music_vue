<template>
  <header headroom headroom--unpinned id="navbar">
    <!-- 非v-bind的圖片載入方式 -->
    <!-- 注意:: 點擊logo>返回首頁的跳轉要用router-link to="___" 這方式套才不會404, 用<a>沒辦法 -->
    <nav>
      <div class="header_nav_left">
        <router-link to="/home">
          <img class="logo_header" alt="Vue logo" src="~@/assets/image/muse_logo.png" />
        </router-link>
        <router-link to="/home/find" class="find">探索</router-link>
        <router-link to="/home/ranking" class="ranking">排行榜</router-link>
        <router-link to="/home/shop" class="shop">周邊販售</router-link>
        <router-link to="/home/activity" class="activity">音樂快訊</router-link>
      </div>

      <div class="header_nav_right">
        <div class="search_reaction">
          <div class="search_show">
            <input type="search" />
          </div>
          <img alt="search_icon" src="~@/assets/image/icon/search.png" />
        </div>
        <div class="notify_dropdown_reaction">
          <img :alt="'bell_icon'" src="~@/assets/image/icon/bell.png" />

          <div class="notify_dropdown">
            <p>通知中心</p>
            <hr />
            <div class="notify" v-for="(item, index) in notifyList" :key="index">
              <div class="pic">
                <img :src="require(`@/assets/image/creator/${item.src}`)" alt="" />
              </div>
              <p>{{ item.notifytxt }}</p>
            </div>
          </div>
        </div>
        <div class="user_dropdown_reaction">
          <router-link to="/home">
            <img v-if="login_mem_id !== null" class="profile" alt="ProfileImage"
              :src="`${publicPath}dataimage/member/` + member[0].mem_pic" style="
                border-radius: 50%;
                width: 35px;
                height: 35px;
                padding: 2px;
              " />
          </router-link>
          <router-link to="/home/login"><img v-if="login_mem_id === null" style="margin-top: -1px" alt="user_icon"
              src="~@/assets/image/icon/user.png" /></router-link>

          <div class="user_dropdown" v-if="login_mem_id !== null">
            <router-link to="/home/shoporders">
              <img src="~@/assets/image/icon/clipboard.png" alt="" />訂單資訊</router-link><br />
            <router-link to="/home/accsetting"><img src="~@/assets/image/icon/settingicon.png"
                alt="" />帳號設定</router-link><br />
            <router-link :to="`/home/profilepage/${login_mem_id}`"><img src="~@/assets/image/icon/personalPage.png"
                alt="" />個人主頁</router-link><br />
            <router-link to="/home/profilepageedit"><img src="~@/assets/image/icon/development.png"
                alt="" />個人主頁管理</router-link><br />
            <!-- <router-link to="/home/shoppingsteps"><img src="~@/assets/image/icon/development.png"
                alt="" />購物車流程</router-link><br /> -->
            <p>我的音樂庫</p>
            <!-- <router-link to="/home"
              ><img
                src="~@/assets/image/icon/clock.png"
                alt=""
              />播放紀錄</router-link
            ><br /> -->
            <router-link to="/home/mysonglist"><img src="~@/assets/image/icon/list.png" alt="" />我的歌單</router-link><br />
            <!-- <router-link to="/home"
              ><img
                src="~@/assets/image/icon/heart.png"
                alt=""
              />我的最愛</router-link
            ><br /> -->
            <router-link to="/home/myfol"><img src="~@/assets/image/icon/targeticon.png" alt="" />我的追蹤</router-link>
            <hr style="margin: 20px 0px 10px 0px" />
            <router-link to="/home">
              <div class="loginbtn" @click="logout">
                <p>登出</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="hamburger" @click="isNavVisible = !isNavVisible">
          <img alt="hamburger_icon" src="~@/assets/image/icon/hamburger.svg" />
        </div>
      </div>
    </nav>
    <div class="phone-show-nav" v-show="isNavVisible">
      <div class="headshot">
        <img src="@/assets/image/profileeditimage/profileimage.jpg" />
        <fontAwesome @click="isNavVisible = !isNavVisible" class="close" :icon="['fa', 'xmark']" size="2xl"
          style="color: #fff" />
      </div>
      <router-link to="/home/shoporders" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/clipboard.png" />
        <p>訂單資訊</p>
      </router-link>
      <router-link to="/home/accsetting" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/settingicon.png" />
        <p>帳號設定</p>
      </router-link>
      <router-link :to="`/home/profilepage/${login_mem_id}`" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/personalPage.png" />
        <p>個人主頁</p>
      </router-link>
      <router-link to="/home/profilepageedit" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/development.png" />
        <p>個人管理頁面</p>
      </router-link>

      <p style="margin: 30px 0px 20px 25px; font-size: 20px">我的音樂庫</p>

      <!-- <router-link to="/home" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/clock.png" alt="" />
        <p>播放紀錄</p>
      </router-link> -->
      <router-link to="/home/mysonglist" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/list.png" alt="" />
        <p>我的歌單</p>
      </router-link>
      <!-- <router-link to="/home" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/heart.png" alt="" />
        <p>我的最愛</p>
      </router-link> -->
      <router-link to="/home/myfol" @click="isNavVisible = false">
        <img src="~@/assets/image/icon/targeticon.png" alt="" />
        <p>我的追蹤</p>
      </router-link>

      <div class="loginbtn">
        <p style="margin: 30px 0px 10px 25px; font-size: 20px">登出</p>
      </div>
    </div>
  </header>
</template>

<script>
const Animations = {
  fadeOut(element) {
    element.classList.add("fadeOut");
  },
  fadeIn(element) {
    element.classList.remove("fadeOut");
  },
};
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,

      member: [
        {
          mem_pic: "",
        },
      ],
      login_mem_id: "",
      // member: null,
      isNavVisible: false,
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
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");

    // Fetch 會員資料
    const fetchMemberInfo = () => {
      // const apiURL = new URL(
      //   `http://localhost/muse_music/public/api/getProfileDetail.php?mem_id=${this.login_mem_id}`
      // );
      // 加這邊 - 廖妍榛
      const apiURL = new URL(
        `${this.$store.state.phpPublicPath}getProfileDetail.php?mem_id=${this.login_mem_id}`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.member = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchMemberInfo();

    let scrollold = 0;
    window.addEventListener("scroll", function () {
      if (this.scrollY > scrollold) {
        // document.querySelector("#navbar").style.top = "-100px";
        Animations.fadeOut(document.querySelector("#navbar"));
      } else {
        // document.querySelector("#navbar").style.top = "0px";
        Animations.fadeIn(document.querySelector("#navbar"));
      }
      scrollold = this.scrollY;
    });
  },

  // 會員登出
  methods: {
    logout() {
      this.login_mem_id = null;
      localStorage.removeItem("mem_id");
      // localStorage.removeItem("sl_fol");
      // localStorage.removeItem("cre_fol");
      // localStorage.removeItem("news_fol");
      //localStorage.removeItem("mem_name");
      alert("會員已登出~");
      window.location.href = `${this.$store.state.linkPublicPath}home/login`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/layout/header.scss";
</style>

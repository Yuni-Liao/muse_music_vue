<template>
  <div class="myfol">
    <section>
      <div class="hd">
        <h1>我的追蹤</h1>
      </div>
      <!-- tab -->
      <div class="tabs">
        <button
          @click="this.tabtype = 0"
          class="tab"
          :class="{ active: tabtype == 0 }"
        >
          <h2>追蹤的音樂快訊</h2>
        </button>
        <button
          @click="this.tabtype = 1"
          class="tab"
          :class="{ active: tabtype == 1 }"
        >
          <h2>追蹤的創作者</h2>
        </button>
      </div>
      <div class="line"></div>
    </section>
    <!-- 由tab切換之顯示內容 -->

    <!-- --------------------------追蹤的音樂快訊-------------------------- -->
    <section class="container" v-show="tabtype === 0">
      <!-- 判斷是否有data -->
      <div class="nodata" v-if="news_fol.length <= 0">目前沒有追蹤音樂快訊</div>
      <ul v-else>
        <li
          v-for="(news, index) in news_fol"
          :key="news.news_id"
          class="activityInfo"
        >
          <div class="calender phonehidden">
            <div class="month">{{ news.month }}月</div>
            <p>{{ news.day }}日</p>
            <p>星期{{ news.chinese_day_of_week }}</p>
          </div>
          <div class="actWrapper">
            <div class="pic">
              <img
                @click="gotoNewsDetail(news.news_id)"
                :src="`${publicPath}dataimage/news/${news.news_pic}`"
              />
            </div>
            <div class="info" @click="gotoNewsDetail(news.news_id)">
              <p>
                {{ news.news_name }}
                <span class="btn phoneshow">
                  <FolBtnBig :functype="2" :folnum="news.news_id" />
                </span>
              </p>
              <p>{{ news.news_place }}</p>
              <p class="phoneshow">
                {{ news.month }}/{{ news.day }}日 ({{
                  news.chinese_day_of_week
                }})
              </p>
              <div class="followSinger">
                <div class="singer">
                  <fontAwesome
                    :icon="['fa', 'user-large']"
                    style="color: #fff; margin-left: 10px; cursor: pointer"
                  />
                  <p>{{ news.singer }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="btn phonehidden">
            <FolBtnBig :functype="2" :folnum="news.news_id" />
          </div>
        </li>
      </ul>
    </section>

    <!-- --------------------------追蹤的創作者-------------------------- -->
    <section class="container" v-show="tabtype === 1">
      <!-- 判斷是否有data -->
      <div class="nodata" v-if="cre_fol.length <= 0">目前沒有追縱創作者</div>
      <div v-else class="folcre">
        <ul>
          <li v-for="(item, index) in cre_fol" :key="item.cre_id">
            <div class="pic" @click="gotoProfilePage(item.cre_id)">
              <img :src="`${publicPath}dataimage/member/${item.mem_pic}`" />
            </div>
            <div class="txt">
              <h2 @click="gotoProfilePage(item.cre_id)">
                <!-- 當AKA沒有和name同名或不是空值，則顯示AKA -->
                {{ item.mem_name }}
                <span
                  class="phonehidden"
                  v-if="item.mem_aka != item.mem_name && item.mem_aka != null"
                  >（{{ item.mem_aka }}）</span
                >
                <span class="btn phoneshow">
                  <FolBtnBig :functype="1" :folnum="item.cre_id" />
                </span>
              </h2>
              <p>{{ item.mem_acc }}</p>
            </div>
            <div class="btn phonehidden">
              <FolBtnBig :functype="1" :folnum="item.cre_id" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import FolBtnBig from "@/components/FolBtnBig.vue";
export default {
  components: {
    FolBtnBig,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL, // 讓圖片 build 之後能顯示
      tabtype: 0,
      login_mem_id: "",
      cre_fol: [],
      news_fol: [],
      PC: false,
    };
  },
  computed: {},
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");
    if (this.login_mem_id == undefined) {
      alert("使用會員功能，請先進行登入");
      this.$router.push({
        name: "login",
      });
    } else {
      fetch(
        `${this.$store.state.phpPublicPath}getMemFol.php?mem_id=${this.login_mem_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.cre_fol = data.cre_list;
          this.news_fol = data.news_list;
        })
        .catch((error) => {
          console.error("資料取得失敗:", error);
        });
    }
  },
  methods: {
    gotoNewsDetail(nid) {
      this.$router.push({
        name: "activityInfo",
        params: {
          nid,
        },
      });
    },
    gotoProfilePage(memid) {
      this.$router.push({
        name: "profilepage",
        params: {
          memid,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
// RWD
.phonehidden {
  @media screen and (max-width: 800px) {
    display: none;
  }
}
.phoneshow {
  display: none;
  @media screen and (max-width: 800px) {
    display: inline-block;
  }
}
.myfol {
  @include layout(1200px);
  padding: 150px 30px;
  box-sizing: border-box;
  li {
    list-style: none;
  }
  .hd {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 200px;
    padding: 50px;
    h1 {
      font-size: $big;
      color: $white;
      text-align: left;
    }
  }

  .tabs {
    padding: 15px;
    display: flex;
    justify-content: space-evenly;

    .tab {
      @include btnBgNone;
      color: $white;

      h2 {
        font-size: $small;
      }
    }
    .tab:hover {
      color: $blue;
    }
    .tab.active {
      color: $blue;
    }
  }
  .line {
    height: 3px;
    width: 100%;
    background: linear-gradient(to right, $tp, $blue, $tp);
  }
  //內容
  .container {
    padding: 60px 0px;
    .btn {
      margin: 0 20px 0 50px;
      @media screen and (max-width: 800px) {
        margin: 0 0 0 20px;
      }
      #FolBtnBig {
        line-height: 1.5;
      }
    }
    .nodata {
      height: 150px;
      text-align: center;
      line-height: 150px;
      color: $white;
    }
    // 音樂快訊
    .activityInfo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 25px 20px;
      & + li {
        border-top: 1px solid #ffffff30;
      }
      .calender {
        margin-right: 30px;
        background-color: $white;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 95px;
        .month {
          width: 95px;
          color: $white;
          background-color: $blue;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          padding: 5px 30px;
        }
        p {
          color: #000;
          padding: 5px 0px;
        }
      }
      .actWrapper {
        flex-grow: 1;
        display: flex;
        @include s() {
          flex-direction: column;
        }
        .pic {
          width: 160px;
          height: 110px;
          @media screen and (max-width: 650px) {
            display: none;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: left;
          margin-left: 25px;
          width: 250px;
          cursor: pointer;
          @include s() {
            margin-left: -10px;
            p {
              margin: 5px 0px;
            }
          }
          p {
            padding: 5px 10px;
            color: $white;
          }
          .followSinger {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            @media screen and (max-width: 650px) {
              display: none;
            }
            .singer {
              background-color: $pink;
              border-radius: 30px;
              display: flex;
              align-items: center;
              margin-left: 10px;
              p {
                padding: 5px 10px;
                font-size: $tag;
              }
            }
          }
        }
      }
    }
    .folcre {
      li {
        padding: 30px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & + li {
          border-top: 1px solid #ffffff30;
        }
        .pic {
          @include rect(100px);
          border-radius: 50%;
          overflow: hidden;
          margin-right: 50px;
          cursor: pointer;

          @media screen and (max-width: 650px) {
            @include rect(60px);
            margin-right: 10px;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .txt {
          flex-grow: 1;
          text-align: left;
          color: #fff;
          line-height: 1.6;
          margin-right: 50px;
          @media screen and (max-width: 650px) {
            margin-right: 10px;
          }
          h2 {
            font-weight: bolder;
            font-size: $small;
            @media screen and (max-width: 650px) {
              font-size: 12px;
            }
            margin-bottom: 5px;
            cursor: pointer;
            width: 100%;
          }
          p {
            font-size: $tag;
          }
        }
      }
    }
  }
}
</style>

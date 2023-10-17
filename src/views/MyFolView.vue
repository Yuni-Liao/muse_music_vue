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
      <!-- <div class="nodata" v-if="choosecreator.length === 0">
        目前沒有追蹤音樂快訊
      </div>
      <div v-else class="folnews"></div> -->
    </section>

    <!-- --------------------------追蹤的創作者-------------------------- -->
    <section class="container" v-show="tabtype === 1">
      <!-- 判斷是否有data -->
      <!-- <div class="nodata" v-if="choosecreator.length === 0">
        目前沒有追縱創作者
      </div>
      <div v-else class="folcre"></div> -->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabtype: "",
      login_mem_id: "",
      cre_fol: [],
      news_fol: [],
    };
  },
  computed: {},
  mounted() {
    this.login_mem_id = localStorage.getItem("mem_id");
    if (this.login_mem_id != undefined) {
      fetch(
        // 加這邊 - 廖妍榛
        `${this.$store.state.phpPublicPath}getMemFol.php?mem_id=${this.login_mem_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.cre_fol = data.cre_fol;
          this.news_fol = data.news_fol;
        })
        .catch((error) => {
          console.error("資料取得失敗:", error);
        });
    }
  },
  methods: {
    //     changTab(num) {
    //   this.tabtype = num;
    //   if (num == 0) {
    //     setTimeout(() => {
    //       this.typeshow = true;
    //     }, 100);
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
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
    padding: 30px 0px;
    .nodata {
      height: 150px;
      text-align: center;
      line-height: 150px;
      color: $white;
    }
  }
}
</style>

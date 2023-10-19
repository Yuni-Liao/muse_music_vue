<template>
  <div class="topncenter">
    <div class="infoTop">
      <img :src="`${publicPath}dataimage/news/${newsList.news_pic}`" alt="" />
      <div class="intro">
        <h1>{{ newsList.news_name }}</h1>
        <p>{{ newsList.news_place }}</p>
        <div class="followSingerr">
          <div class="singer">
            <fontAwesome
              :icon="['fa', 'user-large']"
              style="color: #fff; margin-left: 10px; cursor: pointer"
            />
            <p>{{ newsList.singer }}</p>
          </div>
          <FolBtnBig :functype="2" :folnum="newsList.news_id" />
        </div>
      </div>
    </div>
    <div class="infoCenter">
      <h1>活動介紹</h1>
      <p>{{ newsList.news_con }}</p>
    </div>
  </div>

  <hr />

  <div class="infoBottom">
    <h1>相關活動</h1>
    <div class="related">
      <div class="calender">
        <div class="month">4月</div>
        <p>28日</p>
        <p>星期五</p>
      </div>
      <div class="relatedWrapper">
        <img :src="`${publicPath}image/Activity/activityBanner01.jpg`" alt="" />
        <div class="intro">
          <div class="relatedInfo">
            <p>造夢人夢幻之夜</p>
            <p>台北市・ THE WALL公館</p>
          </div>
          <div class="followSinger">
            <div class="singer">
              <fontAwesome
                :icon="['fa', 'user-large']"
                style="color: #fff; margin-left: 10px; cursor: pointer"
              />
              <p>造夢人</p>
            </div>
            <!-- <FolBtnBig :functype="2" :folnum="0" /> -->
            
          </div>
        </div>
      </div>
    </div>
    <div class="related">
      <div class="calender">
        <div class="month">7月</div>
        <p>13日</p>
        <p>星期四</p>
      </div>
      <div class="relatedWrapper">
        <img :src="`${publicPath}image/Activity/activityBanner03.jpg`" alt="" />
        <div class="intro">
          <div class="relatedInfo">
            <p>醉心吉他 新歌小巡迴</p>
            <p>台北市・女巫店</p>
          </div>
          <div class="followSinger">
            <div class="singer">
              <fontAwesome
                :icon="['fa', 'user-large']"
                style="color: #fff; margin-left: 10px; cursor: pointer"
              />
              <p>醉心吉他</p>
            </div>
            <!-- <FolBtnBig :functype="2" :folnum="0" /> -->
            <!-- 如果有渲染，再幫忙於:folnum處放上new_id，我先放0，讓他不報錯 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/activityInfo.scss";
</style>
<script src="./js/ActivityInfo.js"></script>

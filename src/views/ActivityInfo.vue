<template>
    <div class="topncenter">
        <div class="infoTop">
            <!-- <img :src="`${publicPath}dataimage/news/${newsList.news_pic}`" alt=""> -->
            <div class="intro">
                <h1 >{{ newsList.news_name }}</h1>
                <h4></h4>
                <h4>{{ newsList.news_place }}</h4>
                <div class="followSingerr">
                    <router-link to="profilepage" class="singer">
                        <fontAwesome :icon="['fa', 'user-large']"
                            style="color: #fff; margin-left: 10px; cursor: pointer;" />
                        <p>{{ newsList.singer }}</p>
                    </router-link>
                    <FolBtnBig :functype="2" />
                </div>
            </div>
        </div>
        <div class="infoCenter">
            <h1>活動介紹</h1>
            <p>{{ newsList.news_con }}</p>
        </div>

    </div>

    <hr>

    <div class="infoBottom">
        <h1>相關活動</h1>
        <div class="related">
            <div class="calender">
                <div class="month">
                    7月
                </div>
                <p>13日</p>
                <p>星期四</p>
            </div>
            <div class="relatedWrapper">
                <img :src="`${publicPath}image/Activity/activityBanner01.jpg`" alt="">
                <div class="relatedInfo">
                    <p>音樂大排檔 : Showcase演唱會</p>
                    <p>2023年7月13日 / 星期四 / 18:00</p>
                    <p>台中市・Legacy Taichung 傳 音樂展演空間</p>
                </div>
            </div>
        </div>
        <div class="related">
            <div class="calender">
                <div class="month">
                    7月
                </div>
                <p>13日</p>
                <p>星期四</p>
            </div>
            <div class="relatedWrapper">
                <img :src="`${publicPath}image/Activity/activityBanner01.jpg`" alt="">
                <div class="relatedInfo">
                    <p>音樂大排檔 : Showcase演唱會</p>
                    <p>2023年7月13日 / 星期四 / 18:00</p>
                    <p>台中市・Legacy Taichung 傳 音樂展演空間</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/activityInfo.scss";
</style>
<script src="./js/ActivityInfo.js"></script>
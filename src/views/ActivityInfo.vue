<template>
    <div class="topncenter">
        <div class="infoTop">
            <img :src="`${publicPath}dataimage/news/${foundObject.news_pic}`" alt="">
            <div class="intro">
                <h1 >{{ foundObject.news_name }}</h1>
                <h4></h4>
                <h4>{{ foundObject.news_place }}</h4>
                <div class="followSingerr">
                    <router-link to="profilepage" class="singer">
                        <fontAwesome :icon="['fa', 'user-large']"
                            style="color: #fff; margin-left: 10px; cursor: pointer;" />
                        <p>{{ foundObject.singer }}</p>
                    </router-link>
                    <FolBtnBig :functype="2" />
                </div>
            </div>
        </div>
        <div class="infoCenter">
            <h1>活動介紹</h1>
            <p>一步一步，踩著得意的步伐一步一步，<br>踏著自己的節拍在自己的時區裡跟自己比較只要比上一秒再愜意一點點<br>就表示我們已經在普通的生活裡活出不普通的樣子<br>而這些腳印會被大家看見超近距離，<br>Acoustic小巡迴賀EP募資順利達標還超標讓我們先得意的見上一面！
            </p>
            <p>7/17 中午12點，全面啟售<br>單人票$680｜雙人票$1000｜現場票$700<br>購票請上 iNDIEVOX<br>*入場時間預計為開演前半小時，可能因現場狀況異動</p>
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
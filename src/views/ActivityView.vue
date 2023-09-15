<template>
    <div class="activityBanner">
        <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :pagination="{
        clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide>
            <img  src="/image/Activity/activityBanner01.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img  src="/image/Activity/activityBanner02.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img  src="/image/Activity/activityBanner03.jpg" alt="">
        </swiper-slide>
        
    </swiper>
    </div>

    <!-- 音樂快訊 -->
    <div class="activityTitle">
        <div class="whatson">
            <h1>音樂快訊</h1>
            <p>WHAT'S ON</p>
        </div>
    </div>

    <!-- 月份TAB -->
    <div class="bigMonthTab">
        <div class="left-arrow">
            <fontAwesome :icon="['fa', 'fa-chevron-left']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"  />
        </div>
        <ul class="monthTab">
            <li>MAY</li>
            <li>JUN</li>
            <li>JUL</li>
            <li>AUG</li>
            <li>SEP</li>
            <li>OCT</li>
            <li>NOV</li>
            <li>DEC</li>
            <li>JAN</li>
            <li>FEB</li>
            <li>MAR</li>
            <li>APR</li>
        </ul>
        <div class="right-arrow">
            <fontAwesome :icon="['fa', 'fa-chevron-right']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"  />
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/activity.scss";
</style>
<script src="./js/ActivityView.js"></script>

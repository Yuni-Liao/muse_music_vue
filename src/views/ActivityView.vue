<template>
    <div class="activityBanner">
        <swiper :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
            <swiper-slide style="background-image: url('/image/Activity/activityBanner01.jpg');">
                <div class="calender">
                    <div class="month">
                        7月
                    </div>
                    <p>26日</p>
                    <p>星期三</p>
                </div>
                <h3>音樂大排檔 : Showcase演唱會</h3>
                <h3>19:00 / 台中市 / Legacy Taichung 傳 音樂展演空間</h3>

            </swiper-slide>
            <swiper-slide style="background-image: url('/image/Activity/activityBanner02.jpg');"> 
                <div class="calender">
                    <div class="month">
                        8月
                    </div>
                    <p>4日</p>
                    <p>星期五</p>
                </div>
                <h3>初登場！夏日新聲企劃！</h3>
                <h3>20:00 / 台北市 / Revolver</h3>
            </swiper-slide>
            <swiper-slide style="background-image: url('/image/Activity/activityBanner03.jpg');">
                <div class="calender">
                    <div class="month">
                        8月
                    </div>
                    <p>14日</p>
                    <p>星期一</p>
                </div>
                <h3>喧嘩祭</h3>
                <h3>16:00/ 高雄市 / 百樂門酒館</h3>
            </swiper-slide>

        </swiper>
    </div>

    <!-- 音樂快訊標題 -->
    <div class="activityTitle">
        <div class="whatson">
            <h1>音樂快訊</h1>
            <p>WHAT'S ON</p>
        </div>
    </div>

    <!-- 波浪 -->
    <div class="wave">
        <svg id="Group1" width="660" height="108" viewBox="0 0 660 108" fill="none" xmlns="http://www.w3.org/2000/svg"
            style="max-width: 100%; max-height: 100%;">
            <path
                d="M1 53.6837L61.0846 17.1269L105.049 53.6837L162.203 17.1269L213.494 53.6837L283.837 2L332.198 53.6837L371.766 23.4298L414.265 53.6837L483.143 17.1269L546.158 53.6837L606.243 9.56347L659 53.6837"
                stroke="white" stroke-width="3" stroke-dasharray="0,0,0,812.5340576171875">
                <animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1000" dur="3.3333333333333335s"
                    values="0,0,0,812.5340576171875; 
                0,406.26702880859375,406.26702880859375,0; 
                812.5340576171875,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate>
            </path>
            <path
                d="M1 78.8953L61.0846 42.3385L105.049 78.8953L162.203 42.3385L213.494 78.8953L283.837 27.2116L332.198 78.8953L371.766 48.6414L414.265 78.8953L483.143 42.3385L546.158 78.8953L606.243 34.7751L659 78.8953"
                stroke="white" stroke-width="3" stroke-dasharray="0,0,0,812.5339965820312">
                <animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1000" dur="3.3333333333333335s"
                    values="0,0,0,812.5339965820312; 
                0,406.2669982910156,406.2669982910156,0; 
                812.5339965820312,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate>
            </path>
            <path
                d="M1 105.367L61.0846 68.8107L105.049 105.367L162.203 68.8107L213.494 105.367L283.837 53.6837L332.198 105.367L371.766 75.1136L414.265 105.367L483.143 68.8107L546.158 105.367L606.243 61.2472L659 105.367"
                stroke="white" stroke-width="3" stroke-dasharray="0,0,0,812.5308227539062">
                <animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1000" dur="3.3333333333333335s"
                    values="0,0,0,812.5308227539062; 
                0,406.2654113769531,406.2654113769531,0; 
                812.5308227539062,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate>
            </path>
        </svg>
    </div>

    <!-- 月份TAB -->
    <div class="bigMonthTab">
        <div class="outMonthTab" >
            <div class="left-arrow" @click="scrollMonth(-1)">
                <fontAwesome :icon="['fa', 'fa-chevron-left']" size="2xl"
                    style="color: #fff; margin: 15px; cursor: pointer;" />
            </div>
            <ul class="monthTab" ref="monthContainer">
                <!-- <li v-for="month in visibleMonths" :key="month" @click="filterByMonth(month)" :style="monthStyle(month)">{{ month }}</li> -->
                <li v-for="month in visibleMonths" :key="month">
                    <span
                    v-if="selectedMonth === month"
                    @click="filterByMonth(month)"
                    style="color: #74EBD5"
                    >{{ month }}</span>
                    <span
                    v-else
                    @click="filterByMonth(month)"
                    style="color: white" 
                    >{{ month }}</span>
            </li>
            </ul>
            <div class="right-arrow" @click="scrollMonth(1)">
                <fontAwesome :icon="['fa', 'fa-chevron-right']" size="2xl"
                    style="color: #fff; margin: 15px; cursor: pointer;" />
            </div>
        </div>
    </div>

    <div class="areaInfoContainer">
        <!-- 地區 -->
        <div class="activityArea">
            <ul>
                <li @click="filterByArea('全部')" :class="{ active: selectedArea === '全部' }">全部</li>
                <li @click="filterByArea('北部')" :class="{ active: selectedArea === '北部' }">北部</li>
                <li @click="filterByArea('中部')" :class="{ active: selectedArea === '中部' }">中部</li>
                <li @click="filterByArea('南部')" :class="{ active: selectedArea === '南部' }">南部</li>
                <li @click="filterByArea('東部')" :class="{ active: selectedArea === '東部' }">東部</li>
                
            </ul>
        </div>

        <!-- 活動資訊區 -->
        <div class="infoWrapper">
            <div class="activityInfo" v-for="(activity, index) in filteredActivities" :key="index" >
                <div class="calender">
                    <div class="month">
                        {{ activity.calenderMoth }}月
                    </div>
                    <p>{{ activity.date }}日</p>
                    <p>星期{{ activity.day }}</p>
                </div>
                <router-link to="ActivityInfo"><img :src="require(`/public/image/Activity/${activity.img}`)"></router-link>
                <div class="info" >
                    <router-link to="ActivityInfo"><p>{{ activity.title }}</p></router-link>
                    <router-link to="ActivityInfo"><p>{{ activity.timePlace }}</p></router-link>
                    <router-link to="#" class="singer">
                        <fontAwesome :icon="['fa', 'user-large']"
                            style="color: #fff; margin-left: 10px; cursor: pointer;" />
                        <p>{{ activity.singer }}</p>
                        
                    </router-link>
                </div>
            </div>
            <button @click="loadMoreActivities" v-if="showMoreButton">查看更多<fontAwesome :icon="['fa', 'chevron-down']" style="margin-left: 5px;" /></button>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/activity.scss";
</style>
<script src="./js/ActivityView.js"></script>

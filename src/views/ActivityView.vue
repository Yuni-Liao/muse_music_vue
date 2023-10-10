<template>
    <div class="activityBanner">
        <swiper :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in actiTopBanner" :key="index">
                <img class="acti_pic" :src="require(`/public/image/Activity/${item.image}`)" />
                <div class="calender">
                    <div class="month">
                        {{ item.month }}
                    </div>
                    <p>{{ item.day }}</p>
                    <p>{{ item.week }}</p>
                </div>
                <h3>{{ item.title }}</h3>
                <h3>{{ item.info }}</h3>

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
        <div class="outMonthTab">
            <div class="left-arrow" @click="prevMonthRange">
                <fontAwesome :icon="['fa', 'fa-chevron-left']" size="2xl"
                    style="color: #fff; margin: 15px; cursor: pointer;" />
            </div>
            <ul class="monthTab" >
                <li v-for="month in visibleMonths" :key="month" @click="selectedMonth = month" :style="{ color: selectedMonth === month ? textColor : '#fff' }">{{ month }}</li>
            </ul>
            <div class="right-arrow"  @click="nextMonthRange">
                <fontAwesome :icon="['fa', 'fa-chevron-right']" size="2xl"
                    style="color: #fff; margin: 15px; cursor: pointer;" />
            </div>
        </div>
    </div>

    <!-- 手機才會出現的地區篩選 -->
    <div class="bigAreaTab">
        <div class="outAreaTab">
            <ul>
                <li @click="selectedArea = '全部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '全部' ? textColor : '#fff' }">全部</li>
                <li @click="selectedArea = '北部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '北部' ? textColor : '#fff' }">北部</li>
                <li @click="selectedArea = '中部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '中部' ? textColor : '#fff' }">中部</li>
                <li @click="selectedArea = '南部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '南部' ? textColor : '#fff' }">南部</li>
                <li @click="selectedArea = '東部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '東部' ? textColor : '#fff' }">東部</li>
            </ul>
        </div>
    </div>

    <div class="areaInfoContainer">
        <!-- 地區 -->
        <div class="activityArea">
            <ul>
                <li @click="selectedArea = '全部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '全部' ? textColor : '#fff' }">全部</li>
                <li @click="selectedArea = '北部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '北部' ? textColor : '#fff' }">北部</li>
                <li @click="selectedArea = '中部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '中部' ? textColor : '#fff' }">中部</li>
                <li @click="selectedArea = '南部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '南部' ? textColor : '#fff' }">南部</li>
                <li @click="selectedArea = '東部'; textColor = '#74EBD5';" :style="{ color: selectedArea === '東部' ? textColor : '#fff' }">東部</li>

            </ul>
        </div>

        <!-- 活動資訊區 -->
        <div class="infoWrapper">
            <div v-if="filteredNews.length === 0" class="noActivity"><h1>目前沒有演出活動!</h1></div>
            <div v-else class="activityInfo" v-for="(news, id) in filteredNews" :key="news.news_id">
                <div class="calender">
                    <div class="month">
                        {{ news.month }}月
                    </div>
                    <p>{{ news.day }}日</p>
                    <p>星期{{ news.chinese_day_of_week }}</p> 
                </div>
                <div class="actWrapper">
                    <router-link :to="`ActivityInfo/${id}`"><img
                        :src="`${publicPath}dataimage/news/${news.news_pic}`">
                    </router-link>
                    <div class="info">
                        <router-link :to="`ActivityInfo/${id}`">
                            <p>{{ news.news_name }}</p>
                        </router-link>
                        <router-link :to="`ActivityInfo/${id}`">
                            <p>{{ news.news_place }}</p>
                        </router-link>
                        <div class="followSinger">
                           <div class="singer">
                            <fontAwesome :icon="['fa', 'user-large']"
                                    style="color: #fff; margin-left: 10px; cursor: pointer;" />
                                <p>{{ news.singer }}</p>
                           </div>
                            <FolBtnBig :functype="2" />
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/activity.scss";
</style>
<script src="./js/ActivityView.js"></script>

<template>
    <div class="find">
        <h1>探索．Find Your MUSE</h1>
    </div>
    <div class="language">
        <div class="space" v-for="(item, index) in languages" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <a :href="item.link">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>

    <div class="style">
        <div class="space" v-for="(item, index) in styles" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <a :href="item.link">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>

    <div class="emotion">
        <div class="space" v-for="(item, index) in emotion" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <a :href="item.link">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>

    <div class="hot_singer">
        <h2>熱門創作者．Hot Creator</h2>
        <section class="index_newMusic">
            <swiper class="mySwiper" 
            :loop="true"
            :loopedSlides="3"
            :initialSlide="4" 
            :slideToClickedSlide="false" 
            :grabCursor="false"
            :centeredSlides="true" 
            :slidesPerView="5" 
            :slidesPerGroup="1" 
            :effect="'coverflow'" 
            :coverflowEffect="{
                rotate: 0,
                stretch: -150,
                depth: 300,
                modifier: 2.5,
                slideShadows: false,
            }" 
            :pagination="{
                clickable: true,
            }"      
            :modules="modules">
                <swiper-slide v-for="(item, index) in singers" :key="sid">
                    <a :href="item.slink">
                        <div class="card">
                            <img :src="require(`/public/image/index/${item.image}`)" @click="playmusic()" />
                            <div class="text" @click="gotosinglemusic()">
                                <h3>{{ item.title }}</h3>
                            </div>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
        </section>
    </div>

    <div class="new_release">
        <h2>新歌推薦．New Release</h2>
        <section class="index_newMusic">
            <swiper class="mySwiper" 
            :loop="true"
            :loopedSlides="3"
            :initialSlide="4" 
            :slideToClickedSlide="false" 
            :grabCursor="false"
            :centeredSlides="true" 
            :slidesPerView="5" 
            :slidesPerGroup="1" 
            :effect="'coverflow'" 
            :coverflowEffect="{
                rotate: 0,
                stretch: -150,
                depth: 300,
                modifier: 2.5,
                slideShadows: false,
            }" 
            :pagination="{
                clickable: true,
            }"      
            :modules="modules">
                <swiper-slide v-for="(item, index) in singers" :key="sid">
                    <div class="card">
                        <div class="image">
                            <PlayBtnBig class="play_btn"></PlayBtnBig>
                            <img :src="require(`/public/image/index/${item.image}`)" @click="playmusic()" />
                        </div>
                        <div class="text" @click="gotosinglemusic()">
                            <h3>{{ item.title }}</h3>
                            <p>
                            {{ item.singer }}
                            <span>播放量{{ item.views }}</span>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </section>
    </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/find.scss";
</style>
<script src="./js/FindView.js"></script>
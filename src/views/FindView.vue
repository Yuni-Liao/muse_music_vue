<template>
    <player ref="player123"></player>
    <div class="find">
        <h1>探索．Find Your MUSE</h1>
    </div>
    <div class="language">
        <div class="space" v-for="(item, index) in language" :key="index">
            <img :src="require(`/public/image/Find/${item.img}`)" alt="image">
            <div class="txt">
                <router-link :to="item.link" >
                    {{ item.name }}
                </router-link>
            </div>
        </div>
    </div>

    <div class="style">
        <div class="space" v-for="(item, index) in style" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <router-link :to="item.link" >
                    {{ item.name }}
                </router-link>
            </div>
        </div>
    </div>

    <div class="emotion">
        <div class="space" v-for="(item, index) in emotion" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <router-link :to="item.link" >
                    {{ item.name }}
                </router-link>
            </div>
        </div>
    </div>

    <div class="hot_creator" >
        <h2>熱門創作者．Hot Creator</h2>
        <section>
            <swiper class="find_swiper"
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
                <swiper-slide v-for="(item, sid) in singers" :key="sid">
                    <div class="h_card">
                        <router-link :to="item.slink">
                            <img :src="require(`/public/image/index/${item.image}`)" />
                            <div class="text">
                                <h3>{{ item.title }}</h3>
                            </div>
                        </router-link>
                    </div>
                </swiper-slide>
            </swiper>
        </section>
    </div>

    <div class="new_release">
        <h2>新歌推薦．New Release</h2>
        <section class="find_newsong">
            <swiper class="find_swiper" 
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
                <swiper-slide v-for="(item, index) in singers" :key="index">
                    <div class="n_card">
                        <div class="image">
                            <PlayBtnBig 
                            class="play_btn"
                            @click="openPlayer">

                            </PlayBtnBig>
                            <img :src="require(`/public/image/index/${item.image}`)" @click="openPlayer"/>
                        </div>
                        <div class="text">
                            <h3>{{ item.title }}</h3>
                            <p>
                                <router-link :to="item.slink">
                                    {{ item.singer }}
                                </router-link>
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
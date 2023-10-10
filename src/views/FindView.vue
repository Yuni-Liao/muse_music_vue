<template>
    <div class="find_style">
        <player ref="player"></player>
        <div class="find_select" 
        :style="{ 
            backgroundImage: bgImage,
            backgroundColor: 'rgba(0, 0, 0, .3)',
            backdropFilter:'blur(5px)',
            }"
            >
            <div class="blur"></div>
            <div class="find">
                <h1>探索．Find Your MUSE</h1>
            </div>
            <div class="language">
                <div class="space" 
                
                
                v-for="(item, index) in language" :key="item.mcat_id"
                    @mouseenter="spaceHover(item.mcat_pic)">
                    <div class="txt">
                        <router-link :to="`findmusic/${item.mcat_id}`">
                            {{ item.mcat_name }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="style">
                <div class="space" v-for="sty in style" :key="sty.mcat_id" @mouseenter="spaceHover(sty.mcat_pic)">
                    <!-- <img :src="`${publicPath}dataimage/find/${sty.mcat_pic}`" alt="image"> -->
                    <div class="txt">
                        <router-link :to="`findmusic/${sty.mcat_id}`">
                            {{ sty.mcat_name }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="emotion">
                <div class="space" v-for="em in emotion" :key="em.mcat_id" @mouseenter="spaceHover(em.mcat_pic)">
                    <!-- <img :src="`${publicPath}dataimage/find/${em.mcat_pic}`" alt="image"> -->
                    <div class="txt">
                        <router-link :to="`findmusic/${em.mcat_id}`">
                            {{ em.mcat_name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot_creator">
            <h2>熱門創作者．Hot Creator</h2>
            <section>
                <swiper class="find_swiper" :loop="true" :loopedSlides="3" :initialSlide="4" :slideToClickedSlide="false"
                    :grabCursor="false" :centeredSlides="true" :slidesPerView="5" :slidesPerGroup="1" :effect="'coverflow'"
                    :coverflowEffect="{
                        rotate: 0,
                        stretch: -150,
                        depth: 300,
                        modifier: 2.5,
                        slideShadows: false,
                    }" 
                    :pagination="{
                        clickable: true,
                    }" :modules="modules">
                    <swiper-slide v-for="h in singers" :key="h.mem_id">
                        <div class="h_card">
                            <router-link :to="`/home/profilepage/${h.mem_id}`">
                                <img :src="`${publicPath}dataimage/member/${h.mem_pic}`" />
                                <div class="text">
                                    <h4>{{ h.mem_name }}</h4>
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
                <swiper class="find_swiper" :loop="true" :loopedSlides="3" :initialSlide="4" :slideToClickedSlide="false"
                    :grabCursor="false" :centeredSlides="true" :slidesPerView="5" :slidesPerGroup="1" :effect="'coverflow'"
                    :coverflowEffect="{
                        rotate: 0,
                        stretch: -150,
                        depth: 300,
                        modifier: 2.5,
                        slideShadows: false,
                    }" 
                    :pagination="{
                        clickable: true,
                    }" :modules="modules">
                    <swiper-slide v-for="n in songs" :key="n.mem_id">
                        <div class="n_card">
                            <router-link :to="`/home/singlemusic/${n.s_id}`">
                                <div class="image">
                                    <img :src="`${publicPath}dataimage/song/${n.s_img}`" />
                                </div>
                            </router-link>
                            <div class="text">
                                <router-link :to="`/home/singlemusic/${n.s_id}`">
                                    <h4>{{ n.s_name }}</h4>
                                </router-link>
                                <p>
                                    <router-link :to="`/home/profilepage/${n.mem_id}`">
                                        {{ n.h_name }}
                                    </router-link>
                                    <span>播放量{{ n.play_num }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/find.scss";
</style>
<script src="./js/FindView.js"></script>
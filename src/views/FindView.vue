<template>
    <div class="find_style">
        <player ref="player"></player>
        <div class="find_select" :style="{ 'background-image': bgImage }">
            <div class="find">
                <h1>探索．Find Your MUSE</h1>
            </div>
            <div class="language">
<<<<<<< HEAD
                <div class="space" v-for="(item, id) in language" :key="id" :class="item.className"
                    @mouseenter="spaceHover(item.img)">
=======
                <div class="space" v-for="(item, index) in language" :key="item.mcat_id">
                    <img :src="require(`/public/dataimage/find/${item.mcat_pic}`)" alt="image">
>>>>>>> c52755e1e5dc3157ef2a8165303cb5d230a1f6e9
                    <div class="txt">
                        <router-link :to="`findmusic/${item.mcat_id}`">
                            {{ item.mcat_name }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="style">
                <div class="space" v-for="sty in style" :key="sty.mcat_id">
                    <img :src="require(`/public/dataimage/find/${sty.mcat_pic}`)" alt="image">
                    <div class="txt">
                        <router-link :to="`findmusic/${sty.mcat_id}`">
                            {{ sty.mcat_name }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="emotion">
                <div class="space" v-for="em in emotion" :key="em.mcat_id">
                    <img :src="require(`/public/dataimage/find/${em.mcat_pic}`)" alt="image">
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
                    }" 
                    :modules="modules">
                    <swiper-slide v-for="h in singers" :key="h.mem_id">
                        <div class="h_card">
                            <router-link :to="`/home/profilepage/:memid`">
                                <img :src="require(`/public/dataimage/member/${h.mem_pic}`)" />
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
                        }" 
                        :modules="modules">
                    <swiper-slide v-for="n in songs" :key="n.mem_id">
                        <div class="n_card">
                            <div class="image">
                                <PlayBtnBig class="play_btn" @click="openPlayer">
                                </PlayBtnBig>
                                <img :src="require(`/public/dataimage/song/${n.s_img}`)" @click="openPlayer" />
                            </div>
                            <div class="text">
                                <h4>{{ n.s_name }}</h4>
                                <p>
                                    <router-link :to="`/home/profilepage/:memid`">
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
import PlayBtnBig from "@/components/PlayBtnBig.vue";
import player from '@/components/player.vue';

//引入swiper-------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";

// import required modules
import {
    Autoplay,
    EffectCoverflow,
    Pagination,
    EffectFade,
    EffectCards,
} from "swiper/modules";
// -----------------------------------

export default {
    name: 'App',
    components: {
        PlayBtnBig,
        player,
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // 語系
            language: [
                {
                    id: 0,
                    name: '日語流行',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 1,
                    name: '韓語流行',
                    img: 'korea50.png',
                    link: 'findmusic',
                },
                {
                    id: 2,
                    name: '華語流行',
                    img: 'asia50.png',
                    link: 'findmusic',
                },
                {
                    id: 3,
                    name: '西洋流行',
                    img: 'westernUp.png',
                    link: 'findmusic',
                },
                {
                    id: 4,
                    name: '其他語言',
                    img: 'animalUp.png',
                    link: 'findmusic',
                },
            ],
            // 風格
            style: [
                {
                    id: 5,
                    name: '流行音樂',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 6,
                    name: '獨立音樂',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 7,
                    name: '嘻哈',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 8,
                    name: '搖滾',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 9,
                    name: '藍調',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 10,
                    name: '爵士',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 11,
                    name: '古典',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
            ],
            // 心情
            emotion: [
                {
                    id: 12,
                    name: '快樂',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 13,
                    name: '傷心',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 14,
                    name: '運動',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 15,
                    name: '輕鬆',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 16,
                    name: '舒眠',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 17,
                    name: '專注',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
                {
                    id: 18,
                    name: '派對',
                    img: 'japan50.png',
                    link: 'findmusic',
                },
            ],
            singers: [
                {
                    sid: 1,
                    title: "宇宙飛行1",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 353,
                },
                {
                    sid: 2,
                    title: "宇宙飛行2",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 543,
                },
                {
                    sid: 3,
                    title: "宇宙飛行3",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 645,
                },
                {
                    sid: 4,
                    title: "宇宙飛行4",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 548,
                },
                {
                    sid: 5,
                    title: "宇宙飛行5",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 653,
                },
                {
                    sid: 6,
                    title: "宇宙飛行6",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 732,
                },
                {
                    sid: 7,
                    title: "宇宙飛行7",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 774,
                },
                {
                    sid: 8,
                    title: "宇宙飛行8",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 853,
                },
                {
                    sid: 9,
                    title: "宇宙飛行9",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 748,
                },
                {
                    sid: 10,
                    title: "宇宙飛行10",
                    image: "index_grid_08.png",
                    slink: "profilepage",
                    singer: "桌子樂團",
                    views: 567,
                }
            ],
            modules: [
                Autoplay,
                EffectCoverflow,
                Pagination,
                EffectFade,
                EffectCards
            ],
            styleList:[],
            fetchFindStyle() {
                const styleId = this.$route.params.styleId;
                const apiURL = new URL(
                    `http://localhost/muse_music/public/api/getSonglistSong.php?styleId=${styleId}`
                );
                fetch(apiURL).then(async (response) => {
                    this.styleList = await response.json();
                });
                console.log(this.styleList);
            }
        }
    },
    methods: {
        openPlayer() {
            this.$refs.player.playMusic();
        },
    },
    mounted() {
        this.fetchFindStyle();
    },
}
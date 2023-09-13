import PlayBtnBig from "@/components/PlayBtnBig.vue";


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
        Swiper,
        SwiperSlide,
        },
    data() {
        return {
            // 語系
            languages:[
                {
                    id: 1,
                    name:'日語流行',
                    imgUrl:123,
                    link: '/findmusic'
                },
                {
                    id: 2,
                    name:'韓語流行',
                    imgUrl:123,
                    link: '/'
                },
                {
                    id: 3,
                    name:'華語流行',
                    imgUrl:123,
                    link: '/'
                },
                {
                    id: 4,
                    name:'西洋流行',
                    imgUrl:123,
                    link: '/'
                },
                {
                    id: 5,
                    name: '其他語言',
                    imgUrl: 123,
                    link: '/'
                }
            ],
            // 風格
            styles:[
                {
                    id: 1,
                    name: '流行音樂',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 2,
                    name: '獨立音樂',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 3,
                    name: '嘻哈',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 4,
                    name: '搖滾',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 5,
                    name: '藍調',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 6,
                    name: '爵士',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 7,
                    name: '古典',
                    imgUrl: 123,
                    link: '/'
                },
            ],
            // 心情
            emotion:[
                {
                    id: 1,
                    name: '快樂',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 2,
                    name: '傷心',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 3,
                    name: '運動',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 4,
                    name: '輕鬆',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 5,
                    name: '舒眠',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 6,
                    name: '專注',
                    imgUrl: 123,
                    link: '/'
                },
                {
                    id: 7,
                    name: '派對',
                    imgUrl: 123,
                    link: '/'
                },
            ],
            singers: [
                {
                    sid: 1,
                    title: "宇宙飛行1",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 2,
                    title: "宇宙飛行2",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 3,
                    title: "宇宙飛行3",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 4,
                    title: "宇宙飛行4",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 5,
                    title: "宇宙飛行5",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 6,
                    title: "宇宙飛行6",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 7,
                    title: "宇宙飛行7",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 8,
                    title: "宇宙飛行8",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 9,
                    title: "宇宙飛行9",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    sid: 10,
                    title: "宇宙飛行10",
                    image: "index_grid_08.png",
                    slink: "/profilepage",
                    singer: "桌子樂團",
                    views: 0,
                }
            ]
        }
    },
    methods: {
        playmusic() {
            // alert("呼叫懸浮播放器");
        },
    },
    setup() {
        return {
            modules: [
                Autoplay, 
                EffectCoverflow,  
                Pagination,
                EffectFade, 
                EffectCards
            ],
        };
    },
    
}
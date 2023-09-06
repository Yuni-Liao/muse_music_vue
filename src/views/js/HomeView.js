//引入swiper-------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import "swiper/css/pagination";
import "swiper/css/autoplay";


// import required modules
import { Autoplay, EffectCoverflow, Pagination, EffectFade } from "swiper/modules";

// -----------------------------------

export default {
    data() {
        return {
            topBanner: [{
                image: "index_topbanner_01.jpg",
            },
            {
                image: "song01.jpg",
            },
            {
                image: "index_topbanner_01.jpg",
            },
            {
                image: "song01.jpg",
            }],
            songs: [
                {
                    title: "宇宙飛行1",
                    image: "song01.jpg",
                    link: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    title: "宇宙飛行2",
                    image: "song01.jpg",
                    link: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    title: "宇宙飛行3",
                    image: "song01.jpg",
                    link: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    title: "宇宙飛行4",
                    image: "song01.jpg",
                    link: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    title: "宇宙飛行5",
                    image: "song01.jpg",
                    link: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    title: "宇宙飛行6",
                    image: "song01.jpg",
                    songLink: "/shopProd/1",
                    singer: "桌子樂團7",
                    views: 0,
                },
                {
                    title: "宇宙飛行8",
                    image: "song01.jpg",
                    songLink: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    title: "宇宙飛行9",
                    image: "song01.jpg",
                    songLink: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
                {
                    title: "宇宙飛行10",
                    image: "song01.jpg",
                    link: "/shopProd/1",
                    singer: "桌子樂團",
                    views: 0,
                },
            ],
            album: [{ pot: "~@/assets/image/index/index_ablumPot.svg" }]
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectCoverflow, Pagination, EffectFade],
            EffectFade,
        };
    },
};

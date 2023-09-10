//引入swiper-------------------------
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
//引入viewUI Grid系統-------------------------
import { Grid, GridItem } from 'view-ui-plus';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-cards';


// import required modules
import { Autoplay, EffectCoverflow, Pagination, EffectFade, EffectCards } from "swiper/modules";
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
            album: [{
                name: 'RockYou',
                image: "index_grid_01.png"
            },
            {
                name: '藍色',
                image: "index_grid_01.png"
            },
            {
                name: 'LOVE',
                image: "index_grid_01.png"
            },
            {
                name: 'Faded',
                image: "index_grid_01.png"
            },
            {
                name: '有個念頭',
                image: "index_grid_01.png"
            },
            {
                name: '作夢的顏色',
                image: "index_grid_01.png"
            },
            {
                name: '花火',
                image: "index_grid_01.png"
            },
            {
                name: '你看不見',
                image: "index_grid_01.png"
            },
            {
                name: '你看不見',
                image: "index_grid_01.png"
            }],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
        Grid,
        GridItem,
    },
    setup() {
        return {
            modules: [Autoplay, EffectCoverflow, Pagination, EffectFade, EffectCards]
        };
    }
};

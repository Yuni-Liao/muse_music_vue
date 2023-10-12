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
            bgImage: '', // 存放背景圖 -- 廖妍榛
            //
            hover: false, // 鼠标悬停状态
            styleList: [],
            singers: [],
            songs: [],
            modules: [
                Autoplay,
                EffectCoverflow,
                Pagination,
                EffectFade,
                EffectCards
            ],
        }
    },
    methods: {
        fetchType() {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getFindStyle.php?`
            );
            fetch(apiURL).then(async (response) => {
                this.styleList = await response.json();
            });
            // console.log(this.styleList);
        },
        fetchMember() {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getFindMember.php?`
            );
            fetch(apiURL).then(async (response) => {
                this.singers = await response.json();
            });
            // console.log(this.singers);
        },
        fetchSong() {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getFindNewSong.php?`
            );
            fetch(apiURL).then(async (response) => {
                this.songs = await response.json();
            });
            // console.log(this.songs);
        },
        //  更換父組件背景圖 -- 廖妍榛
        spaceHover(imgUrl) {
            this.bgImage = `url(${this.publicPath}dataimage/find/${imgUrl})`;
            // console.log('Hovered image URL:', this.bgImage);
        },
    },
    mounted() {
        this.fetchType();
        this.fetchMember();
        this.fetchSong();
    },
    computed: {
        language() {
            return this.styleList.filter(v => v.mcat_type === '0')
        },
        style() {
            return this.styleList.filter(v => v.mcat_type === '1')
        },
        emotion() {
            return this.styleList.filter(v => v.mcat_type === '2')
        },
    }
}
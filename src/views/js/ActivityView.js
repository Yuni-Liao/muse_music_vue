// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
      },
    setup() {
     return {
        modules: [Pagination],
    };
    },
    data() {
    return {
        months: [
            "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR"
          ],
        currentIndex: 0,
        visibleMonths: [],

        activityList: [
            {
                month: '5',
                date: '26',
                day: '五',
                img: '/image/Activity/activity01.png',
                title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                timePlace: '19:00・台北市・THE WALL 公館',
                singer: 'Rosalyn',
            },
            {
                month: '5',
                date: '31',
                day: '三',
                img: '/image/Activity/activity01.png',
                title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                timePlace: '19:00・台北市・THE WALL 公館',
                singer: 'Rosalyn',
            },
            {
                month: '5',
                date: '31',
                day: '三',
                img: '/image/Activity/activity01.png',
                title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                timePlace: '19:00・台北市・THE WALL 公館',
                singer: 'Rosalyn',
            }, 
            {
                month: '5',
                date: '31',
                day: '三',
                img: '/image/Activity/activity01.png',
                title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                timePlace: '19:00・台北市・THE WALL 公館',
                singer: 'Rosalyn',
            }, 
            {
                month: '5',
                date: '31',
                day: '三',
                img: '/image/Activity/activity01.png',
                title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                timePlace: '19:00・台北市・THE WALL 公館',
                singer: 'Rosalyn',
            },        
        ]
    }
    },
    mounted() {
        this.updateVisibleMonths();
    },
    methods: {
        updateVisibleMonths() {
            const endIndex = this.currentIndex + 8;
            this.visibleMonths = this.months.slice(this.currentIndex, endIndex);
          },
          scrollMonth(step) {
            this.currentIndex += step;
            if (this.currentIndex < 0) {
              this.currentIndex = 0;
            } else if (this.currentIndex + 8 > this.months.length) {
              this.currentIndex = this.months.length - 8;
            }
            this.updateVisibleMonths();
          }
      },
    
}
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import FolBtnBig from '@/components/FolBtnBig.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    FolBtnBig,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      actiTopBanner: [
        {
          image: "activityBanner01.jpg",
          month: "4月",
          day: "28日",
          week: "星期五",
          title: "造夢人夢幻之夜",
          info: "台北市・THE WALL 公館"
        },
        {
          image: "activityBanner02.jpg",
          month: "9月",
          day: "12日",
          week: "星期二",
          title: "沙發馬鈴薯音樂之夜",
          info: "臺北市・樂悠悠之口 光復南"
        },
        {
          image: "activityBanner03.jpg",
          month: "9月",
          day: "24日",
          week: "星期日",
          title: "醉心吉他 新歌小巡迴",
          info: "台北市・女巫店"
        },
      ],
      months: ["MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR"],
      currentMonthIndex: 2,
      visibleMonthCount: 6,
      selectedMonth: 'SEP',//預設月份為SEP
      selectedArea: '全部',//預設地區為全部
      textColor: '#74EBD5',//預設顏色為綠色
      news: [],
    }
  },
  computed: {
    visibleMonths() {
      const start = this.currentMonthIndex;
      const end = start + this.visibleMonthCount;
      return this.months.slice(start, end);
    },
    filteredNews() {
      if (this.selectedArea === '全部' && this.selectedMonth === '全部') {
        return this.news; // 如果选择全部地区和全部月份，返回所有活动信息
      } else if (this.selectedArea === '全部') {
        // 根据月份筛选活动信息
        return this.news.filter(newsItem => newsItem.month_abbr === this.selectedMonth);
      } else if (this.selectedMonth === '全部') {
        // 根据地区筛选活动信息
        return this.news.filter(newsItem => newsItem.news_area === this.selectedArea);
      } else {
        // 同时根据地区和月份筛选活动信息
        return this.news.filter(newsItem => newsItem.news_area === this.selectedArea && newsItem.month_abbr === this.selectedMonth);
      }
    },
  },
  methods: {
    //獲取news資訊
    fetchNews(){
      const apiURL = new URL(`http://localhost/muse_music/public/api/getNews.php?`);
      fetch(apiURL)
      .then(async (response) => {
        this.news = await response.json();
        
      });
    },
    prevMonthRange() {
      if (this.currentMonthIndex > 0) {
        this.currentMonthIndex -= 1;
      }
    },
    nextMonthRange() {
      if (this.currentMonthIndex + this.visibleMonthCount < this.months.length) {
        this.currentMonthIndex += 1;
      }
    }
  },
  mounted() {
    this.fetchNews();
    
  },
  created() {
    this.selectedArea = '全部';
    this.textColor = '#74EBD5';
  },
}
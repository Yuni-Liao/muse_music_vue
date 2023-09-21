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
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      months: [
        "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR"
      ],
      currentIndex: 0,
      visibleMonths: [],

      activityList: [
        {
          calenderMoth: '5',
          date: '26',
          day: '五',
          img: 'activity01.png',
          title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
          timePlace: '19:00・台北市・THE WALL 公館',
          singer: 'Rosalyn',
          area: '北部',
          month: 'MAY',
        },
        {
          calenderMoth: '6',
          date: '14',
          day: '三',
          img: 'activity01.png',
          title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
          timePlace: '19:00・台北市・THE WALL 公館',
          singer: 'Rosalyn',
          area: '中部',
          month: 'JUN',
        },
        {
          calenderMoth: '7',
          date: '31',
          day: '一',
          img: 'activity01.png',
          title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
          timePlace: '19:00・台北市・THE WALL 公館',
          singer: 'Rosalyn',
          area: '中部',
          month: 'JUL',
        },
        {
          calenderMoth: '9',
          date: '30',
          day: '六',
          img: 'activity01.png',
          title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
          timePlace: '19:00・台北市・THE WALL 公館',
          singer: 'Rosalyn',
          area: '北部',
          month: 'SEP',
        },
        {
          calenderMoth: '10',
          date: '27',
          day: '五',
          img: 'activity01.png',
          title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
          timePlace: '19:00・台北市・THE WALL 公館',
          singer: 'Rosalyn',
          area: '北部',
          month: 'OCT',
        },
      ],

      selectedArea: '全部',
      selectedMonth: 'SEP',
      filteredActivities: [],
    }
  },
  watch: {
    selectedArea() {

      this.filterActivities();
    }
  },
  mounted() {
    this.updateVisibleMonths();
    this.selectedArea = '全部'; // 默认选择全部地区
    this.filterByMonth('SEP'); // 默认选择九月的活动
  },
  computed: {
    filteredActivities() {
      // 根据选中的月份和地区筛选活动
      return this.activityList.filter((activity) => {
        const monthMatches = !this.selectedMonth || activity.month === this.selectedMonth;
        const areaMatches = this.selectedArea === "全部" || activity.area === this.selectedArea;
        return monthMatches && areaMatches;
      });
    },
  },
  created() {
    this.selectedArea = '全部'; // 默认选择全部地区
    this.filterActivities(); // 显示所有活动
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
    },

    filterByArea(area) {
      if (area === '全部') {
        this.selectedArea = '全部';
      } else {
        this.selectedArea = area;
      }

      this.filterActivities();
    },

    filterByMonth(month) {
      this.selectedMonth = month;
      this.filterActivities();
    },
    filterActivities() {
      if (this.selectedArea === '全部' && this.selectedMonth === '全部') {
        this.filteredActivities = this.activityList;
      } else {
        this.filteredActivities = this.activityList.filter(activity => {
          const monthMatches = this.selectedMonth === '全部' || activity.month === this.selectedMonth;
          const areaMatches = this.selectedArea === '全部' || activity.area === this.selectedArea;
          return monthMatches && areaMatches;
        });
      }
    },
    monthStyle() {
      return function (month) {
        // 根据月份设置字体颜色
        if (this.selectedMonth === month) {
          return { color: '#74EBD5' };
        } else {
          return { color: '#fff' }; // 默认颜色或你希望的颜色
        }
      };
    }
  },


}
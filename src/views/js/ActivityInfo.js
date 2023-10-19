import FolBtnBig from '@/components/FolBtnBig.vue';

export default {
    components: {
        FolBtnBig,
    },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            newsList: [],
        }
    },
    methods: {
        gotoNewsDetail(nid) {
            this.$router.push({
              name: "activityInfo",
              params: {
                nid,
              },
            });
          },
    },
    mounted() {
        const fetchNewsDetail = () => {
          const nid = this.$route.params.nid;
          const apiURL = new URL(`${this.$store.state.phpPublicPath}getNewsDetail.php?nid=${nid}`);
          fetch(apiURL)
          .then((res) => res.json())
          .then((res) => (this.newsList= res))
          .catch((error) => {
            console.error("發生錯誤:", error);
          });
        };
        fetchNewsDetail();

    },
}
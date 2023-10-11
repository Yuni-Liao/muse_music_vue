import FolBtnBig from '@/components/FolBtnBig.vue';

export default {
    components: {
        FolBtnBig,
    },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            foundObject: {},
            newsList: [],
        }
    },

    mounted() {
        this.pageid = parseInt(this.$route.params.nid);
        const fetchnewsDetail = () => {
            const nid = this.$route.params.nid;
            const apiURL = new URL(
                `http://localhost/muse_music/public/api/getNewsDetail.php?slid=${nid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                this.newsList = await response.json();
                })
                .catch((error) => {
                console.error("發生錯誤:", error);
                });
        };
        fetchnewsDetail();
    },
}
import FolBtnBig from '@/components/FolBtnBig.vue';

export default {
    component: {
        FolBtnBig,
    },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            foundObject: {},
            news: [],
        }
    },

    methods: {
        fetchActivityDetail() {
            fetch(`http://localhost/muse_music/public/api/getNews.php`).then(async (response) => {
                this.news = await response.json();
                const idToFind =  this.$route.params.news_id;
                this.foundObject = this.news.find((item) => item.news_id === idToFind);
                // 檢查是否成功收到
                if (this.news.length === 0) {
                    console.warn('未收到');
                } else {
                    console.log('已收到:', this.news);
                }
                    
            })
                

            
        },
    },
    mounted() {
        this.fetchActivityDetail();
    },
}
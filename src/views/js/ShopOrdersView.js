export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            // orders
            shopOrders: [],

            // 訂單分頁初始狀態
            isRecentOrdersVisible: true,
            isHistoryOrdersVisible: false,

            login_mem_id: '',
        };
    },

    methods: {
        // 最近訂單分頁狀態
        showRecentOrders() {
            this.isRecentOrdersVisible = true;
            this.isHistoryOrdersVisible = false;
        },

        // 歷史訂單分頁狀態
        showHistoryOrders() {
            this.isRecentOrdersVisible = false;
            this.isHistoryOrdersVisible = true;
        },

        // 圖標切換訂單分頁狀態
        toggleOrdersVisibility() {
            this.isRecentOrdersVisible = !this.isRecentOrdersVisible;
            this.isHistoryOrdersVisible = !this.isHistoryOrdersVisible;
          },
    },

    computed: {
        // 歷史訂單分頁切換內容
        historyOrders() {
            return this.shopOrders.filter(item => item.ord_stat === '已完成' || item.ord_stat === '已取消');
        },

        // 最近訂單分頁切換內容
        recentOrders() {
            return this.shopOrders.filter(item => item.ord_stat === '已成立' || item.ord_stat === '已付款' || item.ord_stat === '已出貨' || item.ord_stat === '已送達');
        },

    },

    mounted() {
        this.login_mem_id = localStorage.getItem('mem_id');
        const loginMemId = this.login_mem_id;

        // fetch orders 訂單資訊
        const fetchOrdersArray = () => {
            const apiURL = new URL(
            `${this.$store.state.phpPublicPath}getShopOrders.php?loginMemId=${loginMemId}`
            );
            fetch(apiURL).then(async (response) => {
                this.shopOrders = await response.json();
                console.log('Shop Orders:', this.shopOrders);
            })
            .catch((error) => {
                console.error('獲取Order時發生錯誤', error);
            });
        };

        // 執行fetch
        fetchOrdersArray();
    },

}
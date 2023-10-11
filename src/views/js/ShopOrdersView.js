export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            // orders:[
            //     {
            //         id: 0,
            //         serial: "FK8644880",
            //         date: "2023-08-20 21:34",
            //         memid: 1,
            //         name: "Anonymous",
            //         tel: "0912345678",
            //         add: "320桃園市中壢區復興路46號9樓",
            //         pay: "信用卡",
            //         ship: "宅配",
            //         totalprice: "890",
            //         stat: "已出貨",

            //         prodpic: "shop_album6.jpg",
            //         prod: "Bluemage 黑膠",
            //         price: "890",
            //         pcs: "1",
            //         projectprice: "890",
            //     },
            //     {
            //         id: 1,
            //         serial: "FK8644772",
            //         date: "2023-08-18 09:22",
            //         memid: 1,
            //         name: "Anonymous",
            //         tel: "0912345678",
            //         add: "320桃園市中壢區復興路46號9樓",
            //         pay: "信用卡",
            //         ship: "宅配",
            //         totalprice: "790",
            //         stat: "已完成",

            //         prodpic: "shop_album1.jpg",
            //         prod: "Killbeast 黑膠",
            //         price: "790",
            //         pcs: "1",
            //         projectprice: "790",
            //     },
            //     {
            //         id: 2,
            //         serial: "FK8645388",
            //         date: "2023-08-14 17:44",
            //         memid: 1,
            //         name: "Anonymous",
            //         tel: "0912345678",
            //         add: "320桃園市中壢區復興路46號9樓",
            //         pay: "信用卡",
            //         ship: "宅配",
            //         totalprice: "1190",
            //         stat: "已完成",

            //         prodpic: "shop_album2.jpg",
            //         prod: "西城男人 黑膠",
            //         price: "1190",
            //         pcs: "1",
            //         projectprice: "1190",
            //     },
            //     {
            //         id: 3,
            //         serial: "FK8645388",
            //         date: "2023-08-08 12:53",
            //         memid: 1,
            //         name: "Anonymous",
            //         tel: "0912345678",
            //         add: "320桃園市中壢區復興路46號9樓",
            //         pay: "信用卡",
            //         ship: "宅配",
            //         totalprice: "590",
            //         stat: "已完成",

            //         prodpic: "shop_album7.jpg",
            //         prod: "Party Time 錄音帶",
            //         price: "590",
            //         pcs: "1",
            //         projectprice: "590",
            //     },
            //     {
            //         id: 4,
            //         serial: "FK8645388",
            //         date: "2023-08-01 11:12",
            //         memid: 1,
            //         name: "Anonymous",
            //         tel: "0912345678",
            //         add: "320桃園市中壢區復興路46號9樓",
            //         pay: "信用卡",
            //         ship: "宅配",
            //         totalprice: "890",
            //         stat: "已完成",

            //         prodpic: "shop_album4.jpg",
            //         prod: "Rose 黑膠",
            //         price: "890",
            //         pcs: "1",
            //         projectprice: "890",
            //     },
            //     {
            //         id: 6,
            //         serial: "FK8645388",
            //         date: "2023-07-22 15:33",
            //         memid: 1,
            //         name: "Anonymous",
            //         tel: "0912345678",
            //         add: "320桃園市中壢區復興路46號9樓",
            //         pay: "信用卡",
            //         ship: "宅配",
            //         totalprice: "1290",
            //         stat: "已完成",

            //         prodpic: "shop_album5.jpg",
            //         prod: "Over Over 黑膠",
            //         price: "1290",
            //         pcs: "1",
            //         projectprice: "1290",
            //     },

            // ],
            shopOrders: [],
            shopOrdersItem: [],

            // 訂單分頁初始狀態
            isRecentOrdersVisible: true,
            isHistoryOrdersVisible: false,
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
        // fetch orders 訂單資訊
        const fetchOrdersArray = () => {
            const apiURL = new URL(
            `http://localhost/muse_music/public/api/getShopOrders.php?`
            );
            fetch(apiURL).then(async (response) => {
                this.shopOrders = await response.json();
                console.log('Shop Orders:', this.shopOrders);
            })
            .catch((error) => {
                console.error('獲取Order時發生錯誤', error);
            });
        };

        // fetch orders 訂單項目資訊
        const fetchOrdersItemArray = () => {
            const apiURL = new URL(
            `http://localhost/muse_music/public/api/getShopOrdersItem.php?`
            );
            fetch(apiURL).then(async (response) => {
                this.shopOrdersItem = await response.json();
                console.log('Shop Orders Item:', this.shopOrdersItem);
            })
            .catch((error) => {
                console.error('獲取OrdersItem時發生錯誤', error);

            });
        };

        // 執行fetch
        fetchOrdersArray();
        fetchOrdersItemArray();
    },

}
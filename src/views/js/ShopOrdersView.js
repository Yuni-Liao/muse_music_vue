export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            orders:[
                {
                    id: 0,
                    serial: "FK8644880",
                    date: "2023-08-20 21:34",
                    memid: 1,
                    name: "Anonymous",
                    tel: "0912345678",
                    add: "320桃園市中壢區復興路46號9樓",
                    pay: "信用卡",
                    ship: "宅配",
                    totalprice: "890",
                    stat: "已出貨",

                    prodpic: "prod6.jpg",
                    prod: "Bluemage 黑膠",
                    price: "890",
                    pcs: "1",
                    projectprice: "890",
                },
                {
                    id: 1,
                    serial: "FK8644772",
                    date: "2023-08-18 09:22",
                    memid: 1,
                    name: "Anonymous",
                    tel: "0912345678",
                    add: "320桃園市中壢區復興路46號9樓",
                    pay: "信用卡",
                    ship: "宅配",
                    totalprice: "790",
                    stat: "已完成",

                    prodpic: "prod1.jpg",
                    prod: "Killbeast 黑膠",
                    price: "790",
                    pcs: "1",
                    projectprice: "790",
                },
                {
                    id: 2,
                    serial: "FK8645388",
                    date: "2023-08-14 17:44",
                    memid: 1,
                    name: "Anonymous",
                    tel: "0912345678",
                    add: "320桃園市中壢區復興路46號9樓",
                    pay: "信用卡",
                    ship: "宅配",
                    totalprice: "1190",
                    stat: "已完成",

                    prodpic: "prod2.jpg",
                    prod: "西城男人 黑膠",
                    price: "1190",
                    pcs: "1",
                    projectprice: "1190",
                },
                {
                    id: 3,
                    serial: "FK8645388",
                    date: "2023-08-08 12:53",
                    memid: 1,
                    name: "Anonymous",
                    tel: "0912345678",
                    add: "320桃園市中壢區復興路46號9樓",
                    pay: "信用卡",
                    ship: "宅配",
                    totalprice: "590",
                    stat: "已完成",

                    prodpic: "prod3.jpg",
                    prod: "Party Time 錄音帶",
                    price: "590",
                    pcs: "1",
                    projectprice: "590",
                },
                {
                    id: 4,
                    serial: "FK8645388",
                    date: "2023-08-01 11:12",
                    memid: 1,
                    name: "Anonymous",
                    tel: "0912345678",
                    add: "320桃園市中壢區復興路46號9樓",
                    pay: "信用卡",
                    ship: "宅配",
                    totalprice: "890",
                    stat: "已完成",

                    prodpic: "prod4.jpg",
                    prod: "Rose 黑膠",
                    price: "890",
                    pcs: "1",
                    projectprice: "890",
                },
                {
                    id: 5,
                    serial: "FK8645388",
                    date: "2023-07-22 15:33",
                    memid: 1,
                    name: "Anonymous",
                    tel: "0912345678",
                    add: "320桃園市中壢區復興路46號9樓",
                    pay: "信用卡",
                    ship: "宅配",
                    totalprice: "1290",
                    stat: "已完成",

                    prodpic: "prod5.jpg",
                    prod: "Over Over 黑膠",
                    price: "1290",
                    pcs: "1",
                    projectprice: "1290",
                },

            ],
            isRecentOrdersVisible: true,
            isHistoryOrdersVisible: false,
            isRecentActive: true,
            isHistoryActive: false,

        };
    },
    computed: {
        recentOrders() {
            return this.orders.slice(0, 5);
        },
    },
    methods: {
        showRecentOrders() {
            this.isRecentOrdersVisible = true;
            this.isHistoryOrdersVisible = false;
            this.isRecentActive = true;
            this.isHistoryActive = false;
        },
        showHistoryOrders() {
            this.isRecentOrdersVisible = false;
            this.isHistoryOrdersVisible = true;
            this.isRecentActive = false;
            this.isHistoryActive = true;
        },
    }

}
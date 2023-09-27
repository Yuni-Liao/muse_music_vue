export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            //用來存儲查找到的商品物件
            foundObject: {},

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

                    prodpic: "shop_album6.jpg",
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

                    prodpic: "shop_album1.jpg",
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

                    prodpic: "shop_album2.jpg",
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

                    prodpic: "shop_album3.jpg",
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

                    prodpic: "shop_album4.jpg",
                    prod: "Rose 黑膠",
                    price: "890",
                    pcs: "1",
                    projectprice: "890",
                },
                {
                    id: 6,
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

                    prodpic: "shop_album5.jpg",
                    prod: "Over Over 黑膠",
                    price: "1290",
                    pcs: "1",
                    projectprice: "1290",
                },

            ],


        };
    },
    methods: {
        fetchProductDetail() {
            // 使用路由參數中的商品ID來獲取商品詳情
            const productId = this.$route.params.id;
            // 根據商品ID獲取商品詳情數據 將獲取到的數據賦值給 this.product
            this.product = getProductById(productId);
        },

    },

    computed: {
        // 根據訂單狀態回傳boolean
        isStatActive() {
            return (status) => {
            return this.foundObject.stat === status;
            };
        },
    },


    //根據路由參數中的 id 值來查找並定位
    mounted() {
        const idToFind = parseInt(this.$route.params.id);
        this.foundObject = this.orders.find(item => item.id === idToFind);
    },
    
}
export default {
    data() {
        return {
            // inCart: 0,
            products:
            {
                id: 1,
                prodPic: "prod1.jpg",
                prodName: "Killbeast 黑膠",
                prodPrice: 790,
                inCart: 0,
                date: "2023-01-01",
                kind: "女藝人黑膠唱片",
                link: "/ShopProdDetail",
                value: "Killbeast 黑膠|prod1.jpg|790",
                singer: "Bling Bling",
                prodNum: "RLP139",
                prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                mainDesc: "Bling Bling之前是冬天的天涯 Bling Bling之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
            },
        };
    },
    methods: {
        incrementItem() {
            if (this.products.inCart >= 0) {
                this.products.inCart++;
            }
        },
        decrementItem() {
            if (this.products.inCart > 0) {
                this.products.inCart--;
            }
        },
        fetchProductDetail() {
            // 使用路由參數中的商品ID來獲取商品詳情
            const productId = this.$route.params.id;
            // 根據商品ID獲取商品詳情數據 將獲取到的數據賦值給 this.product
            this.product = getProductById(productId);
        }
    },

};
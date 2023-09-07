export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    prodPic: "prod1.jpg",
                    prodName: "Killbeast 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 2,
                    prodPic: "prod2.jpg",
                    prodName: "西城男人 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 3,
                    prodPic: "prod3.jpg",
                    prodName: "Party Time 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 4,
                    prodPic: "prod4.jpg",
                    prodName: "Rose 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 5,
                    prodPic: "prod5.jpg",
                    prodName: "Over Over 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 6,
                    prodPic: "prod6.jpg",
                    prodName: "Blackmage 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 7,
                    prodPic: "prod7.jpg",
                    prodName: "KKOCK 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 8,
                    prodPic: "prod1.jpg",
                    prodName: "cillbeast 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 9,
                    prodPic: "prod2.jpg",
                    prodName: "東城男子 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 10,
                    prodPic: "prod3.jpg",
                    prodName: "Sleep Time 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 11,
                    prodPic: "prod4.jpg",
                    prodName: "Lisa 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 12,
                    prodPic: "prod5.jpg",
                    prodName: "Very Very 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 13,
                    prodPic: "prod6.jpg",
                    prodName: "Pinkmage 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 14,
                    prodPic: "prod7.jpg",
                    prodName: "VVOCK 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 15,
                    prodPic: "prod1.jpg",
                    prodName: "Drop beast 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 16,
                    prodPic: "prod2.jpg",
                    prodName: "北區女孩 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 17,
                    prodPic: "prod3.jpg",
                    prodName: "Show Time 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 18,
                    prodPic: "prod4.jpg",
                    prodName: "Jisso 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 19,
                    prodPic: "prod5.jpg",
                    prodName: "Money Money 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                },
                {
                    id: 20,
                    prodPic: "prod6.jpg",
                    prodName: "Bluemage 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                }
            ],
            //以下是自己打的顯示數量下拉選單 先不要刪除
            // perPageOptions: {
            //     '每頁顯示20個': 20,
            //     '每頁顯示16個': 16,
            //     '每頁顯示12個': 12,
            //     '每頁顯示8個': 8,
            // },
            // selectedPerPage: '每頁顯示20個',

            //下面這個改不了下拉選單內的簡體字QQ
            pageTexts: {
                '20': '每頁顯示20個',
                '16': '每頁顯示16個',
                '12': '每頁顯示12個',
                '8': '每頁顯示8個',
            },
            selectedPageSize: 20, 
            currentPage: 1,
            typeOptions: [
                '商品排序',
                '上架時間(新>舊)',
                '上架時間(舊>新)',
                '價格:由高到低',
                '價格:由低到高',
            ],
            selectedType: '商品排序',
        }
    },
    methods: {
        // 增加商品數量
        incrementItem(item) {
            if (item.inCart >= 0) {
                item.inCart++;
            }
        },
        // 減少商品數量
        decrementItem(item) {
            if (item.inCart > 0) {
                item.inCart--;
            }
        },
        // 以下想做分頁顯示商品數量 但是失敗QQ
        handlePageChange(page) {
            this.currentPage = page;
            // 算出起始跟結束頁面
            const startIndex = (page - 1) * this.pageSize;
            const endIndex = page * this.pageSize;
            // 要顯示的產品數量
            this.displayedProducts = this.products.slice(startIndex, endIndex);
        },
    },
    created() {
        // 顯示第一頁商品數量
        this.displayedProducts = this.products.slice(0, this.pageSize);
    },
}

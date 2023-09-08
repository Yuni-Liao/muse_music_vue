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
            //切換數量功能還在研究中QQ
            perPageOptions: {
                '每頁顯示20個': 20,
                '每頁顯示16個': 16,
                '每頁顯示12個': 12,
                '每頁顯示8個': 8,
            },
            selectedPerPage: '每頁顯示20個',
            typeOptions: [
                '商品排序',
                '上架時間(新>舊)',
                '上架時間(舊>新)',
                '價格:由高到低',
                '價格:由低到高',
            ],
            selectedType: '商品排序',
        }
    }, computed: {
        // 计算属性，根据当前的每页显示数量和当前页数计算应该显示的商品
        displayedProducts() {
            // 计算应该显示的商品数量
            const startIdx = (this.currentPage - 1) * this.selectedPerPage;
            const endIdx = startIdx + this.selectedPerPage;

            // 使用数组的 slice 方法来获取对应范围的商品
            return this.products.slice(startIdx, endIdx);
        },
    },
    methods: {
        // 增加商品数量
        incrementItem(item) {
            if (item.inCart >= 0) {
                item.inCart++;
            }
        },
        // 减少商品数量
        decrementItem(item) {
            if (item.inCart > 0) {
                item.inCart--;
            }
        },
    },
};

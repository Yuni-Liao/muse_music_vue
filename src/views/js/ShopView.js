export default {
    data() {
        return {
            //分類篩選
            items: [
                {
                    id: 1,
                    label: '所有商品',
                    kind: 'All',
                    link: '#'
                },
                {
                    id: 2,
                    label: '黑膠唱片',
                    kind: '黑膠唱片',
                    link: '#'
                },
                {
                    id: 3,
                    label: '錄音帶',
                    kind: '錄音帶',
                    link: '#'
                },
                {
                    id: 4,
                    label: '男藝人',
                    kind: '男藝人',
                    link: '#'
                },
                {
                    id: 5,
                    label: '女藝人',
                    kind: '女藝人',
                    link: '#'
                },
                {
                    id: 6,
                    label: '樂團團體',
                    kind: '樂團團體',
                    link: '#'
                }
            ],

            //商品：product.json
            products: [
                {
                    id: 1,
                    prodPic: "prod1.jpg",
                    prodName: "Killbeast 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-01",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 2,
                    prodPic: "prod2.jpg",
                    prodName: "西城男人 黑膠",
                    prodPrice: 1190,
                    inCart: 0,
                    date: "2023-01-02",
                    kind: "男藝人樂團團體黑膠唱片",
                    link:"#",
                },
                {
                    id: 3,
                    prodPic: "prod3.jpg",
                    prodName: "Party Time 錄音帶",
                    prodPrice: 590,
                    inCart: 0,
                    date: "2023-01-03",
                    kind: "樂團團體錄音帶",
                    link:"#",
                },
                {
                    id: 4,
                    prodPic: "prod4.jpg",
                    prodName: "Rose 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-04",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 5,
                    prodPic: "prod5.jpg",
                    prodName: "Over Over 黑膠",
                    prodPrice: 1290,
                    inCart: 0,
                    date: "2023-01-05",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 6,
                    prodPic: "prod6.jpg",
                    prodName: "Blackmage 黑膠",
                    prodPrice: 1020,
                    inCart: 0,
                    date: "2023-01-06",
                    kind: "樂團團體黑膠唱片",
                    link:"#",
                },
                {
                    id: 7,
                    prodPic: "prod7.jpg",
                    prodName: "KKOCK 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                    date: "2023-01-07",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 8,
                    prodPic: "prod1.jpg",
                    prodName: "cillbeast 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-08",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 9,
                    prodPic: "prod2.jpg",
                    prodName: "東城男子 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-09",
                    kind: "男藝人樂團團體黑膠唱片",
                    link:"#",
                },
                {
                    id: 10,
                    prodPic: "prod3.jpg",
                    prodName: "Sleep Time 錄音帶",
                    prodPrice: 1290,
                    inCart: 0,
                    date: "2023-01-10",
                    kind: "樂團團體錄音帶",
                    link:"#",
                },
                {
                    id: 11,
                    prodPic: "prod4.jpg",
                    prodName: "Lisa 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-11",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 12,
                    prodPic: "prod5.jpg",
                    prodName: "Very Very 黑膠",
                    prodPrice: 1090,
                    inCart: 0,
                    date: "2023-01-12",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 13,
                    prodPic: "prod6.jpg",
                    prodName: "Pinkmage 黑膠",
                    prodPrice: 690,
                    inCart: 0,
                    date: "2023-01-13",
                    kind: "樂團團體黑膠唱片",
                    link:"#",
                },
                {
                    id: 14,
                    prodPic: "prod7.jpg",
                    prodName: "VVOCK 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-14",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 15,
                    prodPic: "prod1.jpg",
                    prodName: "Drop beast 黑膠",
                    prodPrice: 1190,
                    inCart: 0,
                    date: "2023-01-15",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 16,
                    prodPic: "prod2.jpg",
                    prodName: "北區女孩 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-16",
                    kind: "女藝人樂團團體黑膠唱片",
                    link:"#",
                },
                {
                    id: 17,
                    prodPic: "prod3.jpg",
                    prodName: "Show Time 錄音帶",
                    prodPrice: 990,
                    inCart: 0,
                    date: "2023-01-17",
                    kind: "樂團團體錄音帶",
                    link:"#",
                },
                {
                    id: 18,
                    prodPic: "prod4.jpg",
                    prodName: "Jisso 黑膠",
                    prodPrice: 1090,
                    inCart: 0,
                    date: "2023-01-18",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 19,
                    prodPic: "prod5.jpg",
                    prodName: "Money Money 黑膠",
                    prodPrice: 1390,
                    inCart: 0,
                    date: "2023-01-19",
                    kind: "女藝人黑膠唱片",
                    link:"#",
                },
                {
                    id: 20,
                    prodPic: "prod6.jpg",
                    prodName: "Bluemage 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-20",
                    kind: "樂團團體黑膠唱片",
                    link:"#",
                }
            ],
            // displayedProducts: [],   //接json檔
            currentPage: 1,
            //劉宜靜 - 商品分類篩選(All)
            currentKind: "All",
            //劉宜靜 - 商品排序
            typeOptions: [
                '商品排序',
                '上架時間(新>舊)',
                '上架時間(舊>新)',
                '價格:由高到低',
                '價格:由低到高',
            ],
            selectedType: '商品排序',
            //郭凱芸 - 下拉數量選單:預設
            selectedPageSize: 20,
        }
    },
    computed: {
        //劉宜靜 - 商品分類篩選(All)
        catList() {
            if (this.currentKind === 'All') return this.products;
            return this.products.filter((v, i) => v.kind.includes(this.currentKind))
        },
        //郭凱芸 - 下拉數量選單:計算商品數量
        displayedProducts() {
            const startIdx = (this.currentPage - 1) * this.selectedPageSize;
            const endIdx = startIdx + this.selectedPageSize;
            return this.sortedTypeOptions.slice(startIdx, endIdx);
        },

        //劉宜靜 - 商品排序
        sortedTypeOptions() {
            const sortedProducts = [...this.catList];
            let func = (a, b) => new Date(b.date) - new Date(a.date)

            if (this.selectedType === '上架時間(舊>新)') {
                func = (a, b) => new Date(a.date) - new Date(b.date)
            }

            if (this.selectedType === '價格:由高到低') {
                func = (a, b) => b.prodPrice - a.prodPrice
            }

            if (this.selectedType === '價格:由低到高') {
                func = (a, b) => a.prodPrice - b.prodPrice
            }
            return sortedProducts.sort(func);
        }
    },
    //郭凱芸 - 下拉數量選單:預設
    mounted() {
        this.handlePageSize(20)

    },
    methods: {
        // 郭凱芸 - 增加商品數量
        incrementItem(item) {
            if (item.inCart >= 0) {
                item.inCart++;
            }
        },
        // 郭凱芸 - 減少商品數量
        decrementItem(item) {
            if (item.inCart > 0) {
                item.inCart--;
            }
        },
        //郭凱芸 - 下拉數量選單:分頁
        handlePageChange(page) {
            console.log('handlePageChange', page)
            this.currentPage = page;
        },
        handlePageSize(page) {
            // console.log('handlePageSize', page)
            this.selectedPageSize = page;
        },
    },
}

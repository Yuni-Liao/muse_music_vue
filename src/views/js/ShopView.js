export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            // 將 localStorage 儲存在 storage 變數中
            storage: localStorage,
            // 分類篩選
            items: [
                {
                    id: 1,
                    label: '所有商品',
                    kind: 'All',
                },
                {
                    id: 2,
                    label: '黑膠唱片',
                    kind: '黑膠唱片',
                },
                {
                    id: 3,
                    label: '錄音帶',
                    kind: '錄音帶',
                },
                {
                    id: 4,
                    label: '男藝人',
                    kind: '男藝人',
                },
                {
                    id: 5,
                    label: '女藝人',
                    kind: '女藝人',
                },
                {
                    id: 6,
                    label: '樂團團體',
                    kind: '樂團團體',
                }
            ],
            products: [],//商品資料
            currentPage: 1,
            // 商品分類篩選(All)
            currentKind: "All",
            // 商品排序
            typeOptions: [
                '商品排序',
                '上架時間(新>舊)',
                '上架時間(舊>新)',
                '價格:由高到低',
                '價格:由低到高',
            ],
            sortType: '商品排序',
            // 下拉數量選單:預設
            selectedPageSize: 20,
            inCart: 0,
        }
    },
    computed: {
        // 商品分類篩選(All)
        catList() {
            if (this.currentKind === 'All') return this.products;
            return this.products.filter((v) => v.prod_type?.includes(this.currentKind));
        },

        // 下拉數量選單:計算商品數量
        getSelectedPageSize() {
            const startIdx = (this.currentPage - 1) * this.selectedPageSize;
            const endIdx = startIdx + this.selectedPageSize;
            return this.sortedTypeOptions.slice(startIdx, endIdx);
        },

        // 商品排序
        sortedTypeOptions() {
            const sortedProducts = this.catList.slice();
            let func = (a, b) => new Date(b.prod_date) - new Date(a.prod_date);
            if (this.sortType === '上架時間(舊>新)') {
                func = (a, b) => new Date(a.prod_date) - new Date(b.prod_date);
            }
            if (this.sortType === '價格:由高到低') {
                func = (a, b) => b.prod_price - a.prod_price;
            }
            if (this.sortType === '價格:由低到高') {
                func = (a, b) => a.prod_price - b.prod_price;
            }
            return sortedProducts.sort(func);
        }
    },
    // 每次點選分類就重新回到第1頁
    watch: {
        currentKind() {
            this.currentPage = 1;
        },
        sortType() {
            this.currentPage = 1;
        },
    },
    methods: {
        fetchprod() {
            const apiURL = new URL(
                `http://localhost/musemusic/public/api/getProducts.php`
            );
            fetch(apiURL).then(async (response) => {
                this.products = await response.json();
            });
            console.log(this.products);
        },
        setCurrentKind(kind) {
            console.log('Clicked on kind:', kind);
            this.currentKind = kind;
        },
        // 增加商品數量
        incrementItem(item) {
            if (item.chat_num >= 0) {
                item.chat_num++;
            }
        },
        // 減少商品數量
        decrementItem(item) {
            if (item.chat_num > 0) {
                item.chat_num--;
            }
        },
        // 下拉數量選單:分頁
        handlePageChange(page) {
            console.log('handlePageChange', page)
            this.selectedPageSize = page;
        },

        handlePageSize(page) {
            // console.log('handlePageSize', page)
            this.selectedPageSize = page;
        },

        typeClick(type) {
            if (this.sortType !== type) {
                this.sortType = type;
            }
        },
        //加入購物車
        addToCart(item) {
            // 獲取已存儲的購物車數據或初始化一個空數組
            const cartItemsJSON = localStorage.getItem('cartItems');
            let cartItems = [];

            if (cartItemsJSON) {
                // 如果已經有購物車數據，則解析它
                cartItems = JSON.parse(cartItemsJSON);
            }

            // 檢查購物車中是否已經存在相同的商品
            const existingItem = cartItems.find(cartItem => cartItem.prod_name === item.prod_name);

            if (existingItem) {
                // 如果存在相同的商品，將它們的 inCart 數字相加
                existingItem.chat_num += item.chat_num;
            } else {
                // 如果不存在相同的商品，將商品添加到購物車數組
                cartItems.push(item);
            }

            // 將購物車數組轉換為 JSON 字符串
            const updatedCartItemsJSON = JSON.stringify(cartItems);

            // 使用 localStorage 存購物車數據
            localStorage.setItem('cartItems', updatedCartItemsJSON);
        },
    },
    mounted() {
        this.fetchprod();
    }
}

export default {
    data() {
        return {
            login_mem_id: "",
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
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
        }
    },
    computed: {
        // 商品分類篩選(All)
        catList() {
            if (this.currentKind === 'All') return this.products;
            return this.products.filter((v) => v.prod_type?.includes(this.currentKind));
        },

        // 根據顯示數量 撈出對應商品
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
        checkLogin() {
            if (this.login_mem_id === null) {
                alert("使用會員功能，請先進行登入");
                this.$router.push({ name: "login" });
            } else {
                // 導向到購物車頁面
                this.$router.push({ name: "shoppingsteps" });
            }
        },

        fetchprod() {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getProducts.php`
            );
            fetch(apiURL).then(async (response) => {
                this.products = await response.json();
            });
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
        // 處理分頁的變化
        handlePageChange(page) {
            this.selectedPageSize = page;
        },

        // 處理每頁顯示數量
        handlePageSize(page) {
            this.selectedPageSize = page;
        },

        typeClick(type) {
            if (this.sortType !== type) {
                this.sortType = type;
            }
        },
        //加入購物車
        addToCart(item) {
            if (item.chat_num == 0) {
                alert("請點選數量");
            } else {
                // 取得購物車資料存成 JSON 字串，或建立空陣列存放
                const cartItemsJSON = localStorage.getItem('cartItems');
                let cartItems = [];
        
                if (cartItemsJSON) {
                    // 如果已經有購物車資料，則把 JSON 字串轉成 js 物件存放[]
                    cartItems = JSON.parse(cartItemsJSON);
                }
        
                // 用 find() 檢查有沒有相同的商品
                const existingItem = cartItems.find(cartItem => cartItem.prod_name === item.prod_name);
        
                if (existingItem) {
                    // 如果相同，把數字相加
                    existingItem.chat_num += item.chat_num;
                } else {
                    // 不同就加到購物車
                    cartItems.push(item);
                }
        
                // 將更新後的資料轉為 JSON 字串
                const updatedCartItemsJSON = JSON.stringify(cartItems);
        
                // 用 localStorage 儲存新資料
                localStorage.setItem('cartItems', updatedCartItemsJSON);

                alert("已加入購物車");

                item.chat_num = 0;
            }
        }
    },
    mounted() {
        this.login_mem_id = localStorage.getItem('mem_id');
        this.fetchprod();
    }
}

export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //用來存儲查找到的商品物件
            foundObject: {},
            products: [],//商品資料
            storage: localStorage,
        };
    },
    methods: {
        fetchProdDetail() {
            fetch(`http://localhost/muse_music/public/api/getProducts.php`).then(async (response) => {
                this.products = await response.json();
                const idToFind = this.$route.params.prod_id;
                this.foundObject = this.products.find((item) => item.prod_id === idToFind);
            })
                .catch((error) => {
                    console.error('發生錯誤:', error);
                });
        },
        incrementItem() {
            if (this.foundObject.chat_num >= 0) {
                this.foundObject.chat_num++;
            }
        },
        decrementItem() {
            if (this.foundObject.chat_num > 0) {
                this.foundObject.chat_num--;
            }
        },
        //這邊是 加入購物車
        // addToCart() {
        //     // 獲取已存儲的購物車數據或初始化一個空數組
        //     const cartItemsJSON = localStorage.getItem('cartItems');
        //     let cartItems = [];

        //     if (cartItemsJSON) {
        //         // 如果已經有購物車數據，則解析它
        //         cartItems = JSON.parse(cartItemsJSON);
        //     }

        //     // 檢查購物車中是否已經存在相同的商品
        //     const existingItem = cartItems.find(cartItem => cartItem.prod_name === this.foundObject.prod_name);

        //     if (existingItem) {
        //         // 如果存在相同的商品，將它們的 chat_num 數字相加
        //         existingItem.chat_num += this.foundObject.chat_num;
        //     } else {
        //         // 如果不存在相同的商品，將商品添加到購物車數組
        //         cartItems.push(this.foundObject);
        //     }

        //     // 將購物車數組轉換為 JSON 字符串
        //     const updatedCartItemsJSON = JSON.stringify(cartItems);

        //     // 使用 localStorage 存儲購物車數據
        //     localStorage.setItem('cartItems', updatedCartItemsJSON);
        // },
        addToCart() {

            if (this.foundObject.chat_num == 0) {
                // 如果商品数量为0，显示警告信息
                alert("請點選數量");
            } else {
                // 獲取已存儲的購物車數據或初始化一個空數組
                const cartItemsJSON = localStorage.getItem('cartItems');
                let cartItems = [];

                if (cartItemsJSON) {
                    // 如果已經有購物車數據，則解析它
                    cartItems = JSON.parse(cartItemsJSON);
                }

                // 檢查購物車中是否已經存在相同的商品
                const existingItem = cartItems.find(cartItem => cartItem.prod_name === this.foundObject.prod_name);

                if (existingItem) {
                    // 如果存在相同的商品，將它們的 chat_num 數字相加
                    existingItem.chat_num += this.foundObject.chat_num;
                } else {
                    // 如果不存在相同的商品，將商品添加到購物車數組
                    cartItems.push(this.foundObject);
                }

                // 將購物車數組轉換為 JSON 字符串
                const updatedCartItemsJSON = JSON.stringify(cartItems);

                // 使用 localStorage 存儲購物車數據
                localStorage.setItem('cartItems', updatedCartItemsJSON);

                // 跳窗提醒
                alert("已加入購物車");

                // 將商品數量歸零
                this.foundObject.chat_num = 0;
            }
        }
    },
    //根據路由參數中的 id 值來查找並定位
    mounted() {
        // const idToFind = parseInt(this.$route.params.id);
        // this.foundObject = this.products.find(item => item.id === idToFind);
        this.fetchProdDetail();
    },
}

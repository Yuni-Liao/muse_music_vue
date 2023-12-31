export default {
    data() {
        return {
            login_mem_id: "",
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //用來存儲查找到的商品物件
            foundObject: {},
            products: [], //商品資料
            storage: localStorage,
        };
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
        fetchProdDetail() {
            fetch(`${this.$store.state.phpPublicPath}getProducts.php`)
                .then(async (response) => {
                    this.products = await response.json();
                    const idToFind = this.$route.params.prod_id;
                    this.foundObject = this.products.find(
                        (item) => item.prod_id === idToFind
                    );
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
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
        addToCart() {
            if (this.foundObject.chat_num == 0) {
                // 如果商品数量为0，显示警告信息
                alert("請點選數量");
            } else {
                // 如果商品数量不为0
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
                    // 如果存在相同的商品，將它們的 inCart 數字相加
                    existingItem.chat_num += this.foundObject.chat_num;
                } else {
                    // 如果不存在相同的商品，將商品添加到購物車數組
                    cartItems.push(this.foundObject);
                }

                // 將購物車數組轉換為 JSON 字符串
                const updatedCartItemsJSON = JSON.stringify(cartItems);

                // 使用 localStorage 存購物車數據
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
        this.login_mem_id = localStorage.getItem("mem_id");
        this.fetchProdDetail();
    },
};

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
                alert("請點選數量");
            } else {
                // 取得購物車資料存成 JSON 字串，或建立空陣列存放
                const cartItemsJSON = localStorage.getItem('cartItems');
                let cartItems = [];

                if (cartItemsJSON) {
                    // 如果已經有購物車資料，則把 JSON 字串轉成 js 物件存放[]中
                    cartItems = JSON.parse(cartItemsJSON);
                }

                // 用 find() 檢查有沒有相同的商品
                const existingItem = cartItems.find(cartItem => cartItem.prod_name === this.foundObject.prod_name);

                if (existingItem) {
                    // 如果相同，把數字相加
                    existingItem.chat_num += this.foundObject.chat_num;
                } else {
                    // 不同就加到購物車
                    cartItems.push(this.foundObject);
                }

                // 將更新後的資料轉為 JSON 字串
                const updatedCartItemsJSON = JSON.stringify(cartItems);

                // 用 localStorage 儲存新資料
                localStorage.setItem('cartItems', updatedCartItemsJSON);

                alert("已加入購物車");

                this.foundObject.chat_num = 0;
            }
        }
    },
    mounted() {
        this.login_mem_id = localStorage.getItem("mem_id");
        this.fetchProdDetail();
    },
};

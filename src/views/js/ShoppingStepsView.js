export default {
    data() {
        return {
            login_mem_id: "",
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            currentStep: 1,
            totalSteps: 3,
            stepLabels: ["填寫基本資料", "選擇運送方式", "選擇付款方式"],
            name: "",
            phone: "",
            address: "",
            shippingMethod: "",
            paymentMethod: "",
            errors: {},
            orders: [{
                ord_name: '',
                ord_tel: '',
                ord_add: '',
                ord_ship: '',
                ord_pay: '',
                ord_id: '',
            }],

            //凱芸 購物車 ▼
            cartItems: [], // 存放購物車商品列表
            total: '', // 總金額預設0元
        };
    },
    computed: {
        availableDistricts() {
            if (!this.selectedCounty || !this.districts[this.selectedCounty]) {
                return {};
            }

            return this.districts[this.selectedCounty];
        },
        total(){
            return JSON.parse(localStorage.getItem('total'))
        }
    },
    watch: {
        selectedCounty: function () {
            this.selectedDistrict = "";
            this.zipcode = "";
        },
        selectedDistrict: function () {
            this.zipcode = this.districts[this.selectedCounty][this.selectedDistrict];
        },
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
            }
        },
        previousStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },
        completeStep() {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
            }
        },
        validateForm() {
            this.errors = {};

            if (this.currentStep === 1) {
                if (!this.name) {
                    this.errors.name = "請輸入收件人";
                }

                if (!this.phone) {
                    this.errors.phone = "請輸入連絡電話";
                }

                if (!this.address) {
                    this.errors.address = "請輸入收件地址";
                }
            } else if (this.currentStep === 2) {
                if (!this.shippingMethod) {
                    this.errors.shippingMethod = "請選擇運送方式";
                }
            } else if (this.currentStep === 3) {
                if (!this.paymentMethod) {
                    this.errors.paymentMethod = "請選擇付款方式";
                }
            }

            if (Object.keys(this.errors).length === 0) {
            }
        },

        // ▼ 凱芸 加入購物車
        addToCart(item) {
            // 獲得商品訊息
            const prod_pic = item.prod_pic;
            const prod_price = item.prod_price;
            const prod_name = item.prod_name;
            const chat_num = item.chat_num;

            // 產生商品訊息字串
            //const itemInfo = `${prod_name}|${prod_pic}|${prod_price}`;

            // 將商品訊息儲存到localStorage
            localStorage.setItem(item.prod_id, itemInfo);

            // 更新購物車列表
            this.cartItems.push({
                prod_id: item.prod_id,
                prod_pic,
                prod_price,
                prod_name,
                chat_num,
            });

            // 更新購物車總金額
            this.total += prod_price * chat_num;

            // 跳轉到購物車頁面
            this.$router.push({ name: 'shoppingCart' });
        },
        // 載入購物車中的商品
        loadCartItems() {
            const cartItemsJSON = localStorage.getItem('cartItems');
            if (cartItemsJSON) {
                // 如果 localStorage 中有購物車數據，將其解析並填充到 cartItems 中
                this.cartItems = JSON.parse(cartItemsJSON);

                // 計算總金額
                this.total = this.cartItems.reduce((acc, item) => {
                    return acc + item.prod_price * item.chat_num;
                }, 0);
            }
        },
        changeItemCount(itemId) {
            // 查找要更改數量的項目
            const item = this.cartItems.find(item => item.prod_id === itemId);

            if (item) {
                item.chat_num = Math.max(1, item.chat_num); // 最小為1

                // 更新總金額
                this.total = this.cartItems.reduce((acc, item) => {
                    return acc + item.prod_price * item.chat_num;
                }, 0);

                // 保存到 localStorage
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
                localStorage.setItem('total', this.total);
            }
        },
        // 刪除購物車商品
        deleteItem(itemId) {
            const index = this.cartItems.findIndex((v) => v.prod_id === itemId);
            // 使用 splice 方法刪除對應id產品
            this.cartItems.splice(index, 1);

            // 更新總金額
            this.total = this.cartItems.reduce((acc, item) => {
                return acc + item.prod_price * item.chat_num;
            }, 0);

            // 將更新後的資料保存到 localStorage
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
            localStorage.setItem('total', this.total);
        },

        checkout() {
            if (this.orders && this.orders.length > 0) {
                const dataToSend = new FormData();
                dataToSend.append("ord_name", this.orders[0].ord_name);
                dataToSend.append("ord_tel", this.orders[0].ord_tel);
                dataToSend.append("ord_add", this.orders[0].ord_add);
                dataToSend.append("ord_ship", this.orders[0].ord_ship);
                dataToSend.append("ord_pay", this.orders[0].ord_pay);
                dataToSend.append("mem_id", this.login_mem_id);
                // dataToSend.append("ord_total_price", localStorage.getItem("total")); 沒有computed可以用這個
                dataToSend.append("ord_total_price", this.total);

                // 使用 fetch 送出 POST 請求到伺服器
                fetch(`${this.$store.state.phpPublicPath}postShoppingDetail.php`, {
                    method: "POST",
                    body: dataToSend,
                })
                    .then((response) => {
                        if (!response.ok) {
                            if (response.status === 400) {
                                throw new Error("發送失敗: 伺服器請求無效 (HTTP 400)");
                            } else if (response.status === 500) {
                                throw new Error("發送失敗: 伺服器內部錯誤 (HTTP 500)");
                            } else {
                                throw new Error("發送失敗: 網路錯誤 (HTTP " + response.status + ")");
                            }
                        }
                        return response.json();
                    })
                    .then((data) => {
                        if (data.mem_id) {
                            alert("訂單成立");

                        } else if (data.error) {
                            alert("訂單未成立: " + data.error);
                        }
                    })
                    .catch((error) => {
                        console.error("Network error:", error);
                        alert("發送失敗 - 無法連接到伺服器");
                    });
            } else {
                alert("未找到訂單訊息")
            }

            this.nextStep();
        }

    },

    //凱芸 加載購物車商品資訊
    mounted() {
        this.loadCartItems();
        this.login_mem_id = localStorage.getItem('mem_id');
    },
};
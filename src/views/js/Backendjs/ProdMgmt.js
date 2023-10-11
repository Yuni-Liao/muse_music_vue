export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            uploadedImg: null, // 上傳圖片暫存
            columns: [
                {
                    title: 'No',
                    key: 'prod_id',
                    width: 60,
                    align: 'center'
                },
                // {
                //     title: '商品編號',
                //     key: 'prodNo',
                //     width: 100,
                //     align: 'center'
                // },
                {
                    title: '商品名稱',
                    key: 'prod_name',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '商品分類',
                    key: 'prod_type',
                    width: 140,
                    align: 'center'
                },
                {
                    title: '商品售價',
                    key: 'prod_price',
                    width: 140,
                    align: 'center'
                },
                {
                    title: '更新時間',
                    key: 'prod_date',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '上/下架',
                    slot: 'upDownBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '編輯',
                    slot: 'editBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            productData: [], // 渲染資料的陣列
            editBox: false, // 預設跳窗隱藏
            editItem: {
                prod_id: '',
                prod_type: '',
                prod_name: '',
                prod_singer: '',
                prod_inf: '',
                prod_int: '',
                prod_price: '',
                prod_date: '',
                show_stat: '',
                chat_num: ''
            },
            privacy: "公開",
        }
    },
    methods: {
        upDownBtn(row) {
            alert('上/下架');
        },
        editBtn(row) {
            alert('編輯');
        },
        prodSearchBtn() {
            alert('搜索');
        },
        addProdBtn() {
            alert('新增商品');
        },

        // 點擊編輯按鈕後跳窗出現
        editProd(row) {
            this.editItem = { ...row }; // 傳入編輯數據
            this.editBox = true; // 顯示編輯跳窗
        },

        // 編輯確認按鈕點擊事件
        prodEdit() {
            const url = `${this.$store.state.phpPublicPath}editProd.php`;
            let headers = {
                Accept: "application/json",
            };

            const formData = new FormData();
            formData.append("prod_id", this.editItem.prod_id);
            // formData.append("prod_pic", this.editItem.prod_pic);
            formData.append("prod_name", this.editItem.prod_name);
            formData.append("prod_price", this.editItem.prod_price);
            formData.append("prod_date", this.editItem.prod_date);
            formData.append("prod_type", this.editItem.prod_type);
            formData.append("prod_inf", this.editItem.prod_inf);
            formData.append("prod_int", this.editItem.prod_int);
            formData.append("show_stat", this.editItem.show_stat);
            console.log(this.editItem);
            console.log("formData", formData);
            fetch(url, {
                method: "POST",
                headers: headers,
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("新增失敗");
                    }
                })
                .then(() => {
                    //update this.productData
                    let index = this.productData.findIndex((product) => {
                        return product.prod_id == this.editItem.prod_id
                    });
                    if (index >= 0) {
                        //this.productData[index] = { ...this.editItem }
                        this.productData.splice(index, 1, this.editItem);
                        console.log(index, "-------------", this.productData);
                        //alert("NNNNNNNNNN");
                    } else {
                        console.log("---error");
                    }

                    //----------------
                    this.$router.push({
                        name: "prodmgmt",
                    });
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });

            this.editBox = false; // 關閉編輯跳窗

        },
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        const url = `${this.$store.state.phpPublicPath}postProdMgmt.php`;
        let headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        fetch(url, {
            method: "POST",
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('API 錯誤回應:', response);
                    throw new Error("取得 dta 失敗");
                }
            })
            .then((json) => {
                console.log('API 成功回應:', json);
                this.productData = json;
                // 將 prod_type 設定為正確的值
            })
            .catch((error) => {
                console.error('API 請求失敗:', error);
            });

        //接值，把值放入 this.editItem 中
        const puteditItem = () => {
            const obj = {};
            obj.prod_id = this.$route.query.prod_id;
            //obj.prod_pic = this.$route.query.prod_pic;
            obj.prod_name = this.$route.query.prod_name;
            obj.prod_price = this.$route.query.prod_price;
            obj.prod_type = this.$route.query.prod_type;
            obj.prod_date = this.$route.query.prod_date;
            obj.prod_inf = this.$route.query.prod_inf;
            obj.prod_int = this.$route.query.prod_int;
            obj.show_stat = this.$route.query.show_stat;
            this.editItem = obj;
        };
        puteditItem();
    }
}


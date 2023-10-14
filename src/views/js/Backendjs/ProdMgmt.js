export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //uploadedImg: null, // 上傳圖片暫存
            columns: [
                {
                    title: 'No',
                    key: 'prod_id',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '商品圖片',
                    key: 'prod_pic',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '商品名稱',
                    key: 'prod_name',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '商品分類',
                    key: 'prod_type',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '商品售價',
                    key: 'prod_price',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '更新時間',
                    key: 'prod_date',
                    width: 180,
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
                    width: 80,
                    align: 'center'
                }
            ],
            productData: [], // 渲染資料的陣列
            editBox: false, // 預設編輯跳窗隱藏
            addBox: false, //預設新增跳窗隱藏
            //編輯商品
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
                chat_num: '',
                prod_pic: '',
            },
            //新增商品
            addItem: {
                //prod_id: '',
                prod_type: '',
                prod_name: '',
                prod_singer: '',
                prod_inf: '',
                prod_int: '',
                prod_price: '',
                //prod_date: '',
                show_stat: '',
                chat_num: '',
                prod_pic: '',
            },
            privacy: "公開",
        }
    },
    methods: {
        prodSearchBtn() {
            alert('搜索');
        },

        // 以下 上/下架功能相關------------------------------------------------
        toggleBtn(row) {
            this.editItem.prod_id = row.prod_id;
            this.editItem.show_stat = row.show_stat;
            console.log("指定此列的值:", this.editItem.show_stat);

            this.changeStatus();
        },
        changeStatus() {
            const url = `${this.$store.state.phpPublicPath}editProdOnOff.php`;
            const formData = new FormData();
            formData.append("prod_id", this.editItem.prod_id);
            formData.append("show_stat", this.editItem.show_stat);
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("編輯失敗");
                    }
                })
                .then(() => {
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        prodBeforeChange() {
            return new Promise((resolve) => {
                this.$Modal.confirm({
                    title: '提示',
                    content: '確定要更改狀態嗎 ?',
                    onOk: () => {
                        resolve();
                    }
                });
            });
        },
        
        // 以下編輯功能相關----------------------------------------------------
        // 編輯圖片
        img(e) {
            let that = this;
            let files = e.target.files[0];
            if (!e || !window.FileReader) return;
            let reader = new FileReader();
            reader.readAsDataURL(files);

            reader.onloadend = function () {
                that.editItem.prod_pic = files.name;
            };
        },
        // 編輯跳窗
        editProd(row) {
            this.editItem = { ...row }; // 傳入編輯數據
            this.editBox = true; // 顯示編輯跳窗
        },
        // 編輯商品 - 確認按鈕
        saveBtn() {
            if (prod_id != undefined) {
                const url = `${this.$store.state.phpPublicPath}editProd.php`;
                // let headers = {
                //     Accept: "application/json",
                // };
                const formData = new FormData();
                formData.append("prod_id", this.editItem.prod_id);
                formData.append("prod_name", this.editItem.prod_name);
                formData.append("prod_price", this.editItem.prod_price);
                formData.append("prod_singer", this.editItem.prod_singer);
                formData.append("prod_date", this.editItem.prod_date);
                formData.append("prod_type", this.editItem.prod_type);
                formData.append("prod_inf", this.editItem.prod_inf);
                formData.append("prod_int", this.editItem.prod_int);
                formData.append("show_stat", this.editItem.show_stat);
                //formData.append("prod_pic", document.getElementById("fileImg").files[0]);

                if (document.getElementById("fileimg").files[0]) {
                    formData.append("prod_pic", document.getElementById("fileimg").files[0]);
                } else {
                    formData.append("prod_pic", this.editItem.prod_pic);
                }

                //console.log(document.getElementById("fileImg").files[0]);

                //console.log(this.editItem);
                //console.log("formData", formData);
                fetch(url, {
                    method: "POST",
                    //headers: headers,
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log(response);
                            // return response.json();
                        } else {
                            throw new Error("編輯失敗");
                        }
                    })
                    .then(() => {
                        //this.success(true, json);
                        //this.fetchnew();
                        this.editItem = [];
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        },
        // 關閉編輯跳窗
        closeBtn() {
            this.editBox = false;
            window.location.reload();
        },

        // 以下新增功能相關-----------------------------------------------------
        // 新增圖片
        img2(e) {
            let that2 = this;
            let files = e.target.files[0];
            if (!e || !window.FileReader) return;
            let reader = new FileReader();
            reader.readAsDataURL(files);

            reader.onloadend = function () {
                that2.addItem.prod_pic = files.name;
            };
        },
        // 新增跳窗
        addProd(row) {
            this.addItem = { ...row }; // 傳入編輯數據
            this.addBox = true; // 顯示編輯跳窗
        },
        // 新增商品 - 確認按鈕 這邊要再修改-----------------------------
        saveAddBtn() {
            const url = `${this.$store.state.phpPublicPath}addProd.php`;

            // 創建新產品
            const formData = new FormData();
            //formData.append("prod_id", this.addItem.prod_id);
            formData.append("prod_name", this.addItem.prod_name);
            formData.append("prod_price", this.addItem.prod_price);
            formData.append("prod_singer", this.addItem.prod_singer);
            //formData.append("prod_date", this.addItem.prod_date);
            formData.append("prod_type", this.addItem.prod_type);
            formData.append("prod_inf", this.addItem.prod_inf);
            formData.append("prod_int", this.addItem.prod_int);
            formData.append("show_stat", this.addItem.show_stat);
            formData.append("prod_pic", document.getElementById("fileimg").files[0]);

            console.log("Form data:", formData);

            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                        // console.log(response);
                    } else {
                        throw new Error("編輯失敗");
                    }
                })
                .then(() => {
                    this.success(true, json);
                    this.addItem = [];
                })
                .catch((error) => {
                    console.log(error.message);
                });

        },
        // 關閉新增跳窗
        closeAddBtn() {
            this.addBox = false;
        },
        
    },
    mounted() {
        //fetch postProdMgmt.php;
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
    }
}


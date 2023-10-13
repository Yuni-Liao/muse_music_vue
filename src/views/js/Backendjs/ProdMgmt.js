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
                chat_num: '',
                prod_pic: '',
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
        //變更圖片
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

        // 點擊編輯按鈕後跳窗出現
        editProd(row) {
            this.editItem = { ...row }; // 傳入編輯數據
            this.editBox = true; // 顯示編輯跳窗
        },

        // 編輯確認按鈕點擊事件
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
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                // then(() => {
                //     //update this.productData
                //     let index = this.productData.findIndex((product) => {
                //         return product.prod_id == this.editItem.prod_id
                //     });
                //     if (index >= 0) {
                //         //this.productData[index] = { ...this.editItem }
                //         this.productData.splice(index, 1, this.editItem);
                //         //console.log(index, "-------------", this.productData);
                //         //window.location.reload();
                //         this.fetchProdMgmt();
                //     } else {
                //         console.log("error.message");
                //     }

                // })
                // .catch((error) => {
                //     console.error("發生錯誤:", error);
                // });
            }
        },
        closeBtn() {
            this.editBox = false;
        }, // 關閉編輯跳窗
        fetchProdMgmt() {
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
    },
    mounted() {
        this.fetchProdMgmt();
    }
}


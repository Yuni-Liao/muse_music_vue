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
            editBox: false,
            productData: [], // 渲染資料的陣列
            editedProduct: {
                prod_id: '',
                prod_type: '',
                prod_name: '',
                prod_singer: '',
                prod_inf: '',
                prod_int: '',
                prod_price: '',
                prod_date: '',
                prod_pic: '',
                show_stat: '',
                chat_num: '',
            },
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
        // addProdBtn() {
        //     alert('新增商品');
        // }
        imgChange(file) {
            console.log('文件名稱:', file.name);
            console.log('文件大小:', file.size);

            console.log('uploadedImg 值:', this.uploadedImg);

            const reader = new FileReader();
            reader.onload = (e) => {
                this.uploadedImg = e.target.result;
                console.log('上傳後的 uploadedImg 值:', this.uploadedImg);
            };

            reader.onerror = (error) => {
                console.error('上傳失敗:', error);
            };

            reader.readAsDataURL(file);
        },
        editProd(row) {
            this.editBox = true;

            this.editedProduct.prod_id = row.prod_id;
            this.editedProduct.prod_name = row.prod_name;
            this.editedProduct.prod_type = row.prod_type;
            this.editedProduct.prod_price = row.prod_price;
            this.editedProduct.prod_date = row.prod_date;
            this.editedProduct.prod_singer = row.prod_singer;
            this.editedProduct.prod_inf = row.prod_inf;
            this.editedProduct.prod_int = row.prod_int;
            this.editedProduct.prod_pic = row.prod_pic;
            this.editedProduct.show_stat = row.show_stat
            this.editedProduct.chat_num = row.chat_num
        },
        prodEdit() {
            const formData = new FormData();
            const url = `http://localhost/muse_music/public/api/editProd.php`;
            let headers = {
                Accept: "application/json",
            };
            formData.append('prod_id', this.editItem.prod_id);
            formData.append('prod_name', this.editItem.prod_nameValue);
            formData.append('prod_type', this.editItem.prod_type);
            formData.append('prod_price', this.editItem.prod_price);
            formData.append('prod_date', this.editItem.prod_date);
            formData.append('prod_singer', this.editItem.prod_singer);
            formData.append('prod_inf', this.editItem.prod_inf);
            formData.append('prod_int', this.editItem.prod_int);
            formData.append('show_stat', this.editItem.show_stat);
            formData.append('chat_num', this.editItem.chat_num);

            if (this.uploadedImg) {
                formData.append('img', this.uploadedImg);
            }
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
                .then((json) => {
                    // alert(json);
                    console.log(formData.get('car_id'));
                    console.log(formData.get('name'));
                    console.log(formData.get('link'));
                    console.log(formData.get('img'));
                    console.log(JSON.stringify(json));
                    // window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    },
    saveEditedProduct() {
        // 在這個方法中處理保存編輯后的商品信息的邏輯
        // 例如：向後端發送請求保存商品信息

        // 保存成功後，關閉編輯對話框
        this.editBox = false;
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        const url = `http://localhost/muse_music/public/api/postProdMgmt.php`;
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
                    throw new Error("取得 dta 失敗");
                }
            })
            .then((json) => {
                this.productData = json;
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}


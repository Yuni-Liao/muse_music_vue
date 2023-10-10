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
            editBox: false, // 控制编辑模态框的显示与隐藏
            editItem:[],
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

        // 点击编辑按钮时触发编辑模态框
        editProd(row) {
            this.editItem = { ...row }; // 传入编辑的数据
            this.editBox = true; // 显示编辑模态框
        },

        // 编辑确认按钮点击事件
        prodEdit() {
            // 编辑逻辑
            // ...
            this.editBox = false; // 关闭编辑模态框
        },
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


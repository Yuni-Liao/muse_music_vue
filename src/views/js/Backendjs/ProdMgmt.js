export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
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
                    title: '操作',
                    slot: 'upDownBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title:'編輯',
                    slot: 'editBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            editBox: false,
            // data: [
            //     {
            //         no: 1,
            //         prodNo: '#9453',
            //         prodName: 'Lisa 黑膠',
            //         prodType: '女藝人',
            //         amount: 1200,
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 2,
            //         prodNo: '#9453',
            //         prodName: 'Lisa 黑膠',
            //         prodType: '女藝人',
            //         amount: 1200,
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 3,
            //         prodNo: '#9453',
            //         prodName: 'Lisa 黑膠',
            //         prodType: '女藝人',
            //         amount: 1200,
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 4,
            //         prodNo: '#9453',
            //         prodName: 'Lisa 黑膠',
            //         prodType: '女藝人',
            //         amount: 1200,
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 5,
            //         prodNo: '#9453',
            //         prodName: 'Lisa 黑膠',
            //         prodType: '女藝人',
            //         amount: 1200,
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            // ],
            productData: [], // 渲染資料的陣列
            // editItem: {
            //     prod_id: '',
            //     prod_type: '',
            //     prod_name: '',
            //     prod_inf: '',
            //     prod_int: '',
            //     prod_count:'',
            //     prod_price:'',
            //     prod_date:'',
            // },
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
        // editProd(row) {
        //     this.editBox = true;
        //     this.editItem.prod_id = row.prod_id;
        //     this.editItem.prod_name = row.prod_name;
        //     this.editItem.prod_type = row.prod_type;
        //     this.editItem.prod_price = row.prod_price;
        //     this.editItem.prod_date = row.prod_date;
        // },
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
                    throw new Error("取得 data 失敗");
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


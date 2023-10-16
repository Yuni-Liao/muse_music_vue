export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            
            //orders title
            ordercolumns: [
                {
                    title: '#',
                    key: 'orderNumber',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '訂單編號',
                    key: 'ord_id',
                    width: 150,
                    align: 'center',
                    render: (h, params) => { return h('span', null, 'FK-348593' + params.row.ord_id); }
                },
                {
                    title: '會員帳號',
                    key: 'mem_acc',
                    width: 220,
                    align: 'center'
                },
                {
                    title: '會員姓名',
                    key: 'mem_name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '訂單金額',
                    key: 'ord_total_price',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '付款方式',
                    key: 'ord_pay',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '訂單狀態',
                    key: 'ord_stat',
                    width: 140,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    width: 80,
                    align: 'center'
                }
            ],
            // orders_item title
            columns:[
                {
                    title: '商品名稱',
                    slot: 'prod_name',
                    align: 'center'
                },
                {
                    title: '商品金額',
                    key: 'ord_price',
                    align: 'center'
                },
                {
                    title: '數量',
                    key: 'ord_pcs',
                    align: 'center'
                },
                {
                    title: '商品小計',
                    key: 'ord_pricep*ord_pcs',
                    align: 'center'
                }
            ],
            
            // orders 渲染資料
            orderData: [],
            // orders_item 渲染資料
            data:[],

            // Select: ord_stat
            cityList: [
                {
                    value: '請選擇',
                    label: '請選擇'
                },
                {
                    value: '已成立',
                    label: '已成立'
                },
                {
                    value: '已付款',
                    label: '已付款'
                },
                {
                    value: '已出貨',
                    label: '已出貨'
                },
                {
                    value: '已送達',
                    label: '已送達'
                },
                {
                    value: '已完成',
                    label: '已完成'
                },
                {
                    value: '已取消',
                    label: '已取消'
                }
            ],
            model: '',

            // 編輯彈窗預設關閉
            editBox: false,

            // 編輯彈窗資料
            editItem: {
                ord_date: '',
                ord_id: '',
                mem_acc: '',
                mem_name: '',
                ord_pay: '',
                ord_ship: '',
                ord_name: '',
                ord_tel: '',
                ord_stat: '',
                ord_add: '',
                ord_total_price:'',
            },

        }
    },

    methods: {
        orderSearchBtn() {
            // 如果 value3 不為空，則進行搜尋
            if (this.value3.trim() !== '') {
                // 如果還沒有保存原始 orderData，則保存一次
                if (!this.originalOrderData) {
                    this.originalOrderData = [...this.orderData];
                }
    
                // 過濾 orderData，只保留符合條件的項目
                const filteredData = this.originalOrderData.filter(item => {
                    const ordId = item.ord_id || '';
                    return (ordId.includes(this.value3.trim()) ||
                        ('FK-348593' + ordId).includes(this.value3.trim()));
                });
    
                // 將過濾後的結果設置為要顯示的數據
                this.orderData = filteredData;
            } else {
                // 如果 value3 為空，則重置為原始的 orderData
                this.orderData = this.originalOrderData || [];
            }
        },

        // Select: ord_stat
        getSelectData() {
            if (this.model === '' || this.model === '請選擇') {
                return this.orderData.filter(item => item.ord_stat !== '已完成' && item.ord_stat !== '已取消').map((item, index) => {
                    return {
                        ...item,
                        orderNumber: index + 1,
                    };
                });
            } else {
                return this.orderData.filter(item => item.ord_stat === this.model).map((item, index) => {
                    return {
                        ...item,
                        orderNumber: index + 1,
                    };
                });
            }
        },

        // 編輯彈窗
        editBtn(row) {
            this.editBox = true;
            // 傳入編輯數據
            this.editItem = { ...row };
        },

        // 傳入orders_item數據
        getEditData() {
            return this.data.filter(item => item.ord_id === this.editItem.ord_id);
        },

        // 編輯
        editSaveBtn() {
            const url = `${this.$store.state.phpPublicPath}editOrderMgmt.php`;
            const formData = new FormData();
            formData.append("ord_date", this.editItem.ord_date);
            formData.append("ord_id", this.editItem.ord_id);
            formData.append("mem_acc", this.editItem.mem_acc);
            formData.append("mem_name", this.editItem.mem_name);
            formData.append("ord_pay", this.editItem.ord_pay);
            formData.append("ord_ship", this.editItem.ord_ship);
            formData.append("ord_name", this.editItem.ord_name);
            formData.append("ord_tel", this.editItem.ord_tel);
            formData.append("ord_stat", this.editItem.ord_stat);
            formData.append("ord_add", this.editItem.ord_add);
            formData.append("ord_total_price", this.editItem.ord_total_price);
            fetch(url, {
                method: "POST",
                body: formData,
            })
            .then((response) => {
                if (response.ok) {
                    console.log(response);
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

        // 彈窗取消btn：關閉彈窗
        closeBtn() {
            this.editBox = false;
        },

    },

    mounted() {
        //Orders
        const url = `${this.$store.state.phpPublicPath}postOrderMgmt.php`;
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
                    throw new Error("取得 Orders data 失敗");
                }
            })
            .then((json) => {
                console.log('API 成功回應:', json);
                this.orderData = json;
            })
            .catch((error) => {
                console.error('API 請求失敗:', error);
            });

        //OrdersItem
        const apiurl = `${this.$store.state.phpPublicPath}postOrdersitemMgmt.php`;
        fetch(apiurl, {
            method: "POST",
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('API 錯誤回應:', response);
                    throw new Error("取得 OrdersItem data 失敗");
                }
            })
            .then((json) => {
                console.log('API 成功回應:', json);
                this.data = json;
            })
            .catch((error) => {
                console.error('API 請求失敗:', error);
            });
    },
}


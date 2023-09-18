export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'no',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '商品編號',
                    key: 'prodNo',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '商品名稱',
                    key: 'prodName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '商品分類',
                    key: 'prodType',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '商品售價',
                    key: 'amount',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '更新者',
                    key: 'adminAcc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '更新時間',
                    key: 'updateTime',
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
                    title: '操作',
                    slot: 'editBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            data: [
                {
                    no: 1,
                    prodNo: '#9453',
                    prodName: 'Lisa 黑膠',
                    prodType: '女藝人',
                    amount: 1200,
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 2,
                    prodNo: '#9453',
                    prodName: 'Lisa 黑膠',
                    prodType: '女藝人',
                    amount: 1200,
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 3,
                    prodNo: '#9453',
                    prodName: 'Lisa 黑膠',
                    prodType: '女藝人',
                    amount: 1200,
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 4,
                    prodNo: '#9453',
                    prodName: 'Lisa 黑膠',
                    prodType: '女藝人',
                    amount: 1200,
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 5,
                    prodNo: '#9453',
                    prodName: 'Lisa 黑膠',
                    prodType: '女藝人',
                    amount: 1200,
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
            ],
        }
    },
    methods: {
        upDownBtn(row) {
            alert('上/下架');
        },
        editBtn(row) {
            alert('編輯');
        },
    },
}


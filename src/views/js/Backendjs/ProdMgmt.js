export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'no'
                },
                {
                    title: '商品編號',
                    key: 'prodNo'
                },
                {
                    title: '商品名稱',
                    key: 'prodName'
                },
                {
                    title: '商品分類',
                    key: 'prodType'
                },
                {
                    title: '商品售價',
                    key: 'amount'
                },
                {
                    title: '更新者',
                    key: 'adminAcc'
                },
                {
                    title: '更新時間',
                    key: 'updateTime'
                },
                {
                    title: '上/下架',
                    slot: 'upDownBtn'
                },
                {
                    title: '操作',
                    slot: 'editBtn'
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


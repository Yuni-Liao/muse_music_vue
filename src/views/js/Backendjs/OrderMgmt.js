export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            columns: [
                {
                    title: 'No',
                    key: 'no',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '訂單編號',
                    key: 'orderNo',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '會員帳號',
                    key: 'memAcc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '會員姓名',
                    key: 'memName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '訂單金額',
                    key: 'amount',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '付款方式',
                    key: 'payType',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '訂單狀態',
                    key: 'orderStatus',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    width: 80,
                    align: 'center'
                }
            ],
            data: [
                {
                    no: 1,
                    orderNo: 'O-001200',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '信用卡',
                    orderStatus: '待付款',
                },
                {
                    no: 2,
                    orderNo: 'O-001201',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '信用卡',
                    orderStatus: '處理中',
                },
                {
                    no: 3,
                    orderNo: 'O-001202',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '信用卡',
                    orderStatus: '配送中',
                },
                {
                    no: 4,
                    orderNo: 'O-001203',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '貨到付款',
                    orderStatus: '已完成',
                },
                {
                    no: 5,
                    orderNo: 'O-001204',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '信用卡',
                    orderStatus: '已取消',
                },
                {
                    no: 6,
                    orderNo: 'O-001205',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '信用卡',
                    orderStatus: '已取消',
                },
            ],
        }
    },
    methods: {
        orderSearchBtn() {
            alert('搜索訂單');
        },
        editBtn() {
            alert('編輯');
        },
    },
}


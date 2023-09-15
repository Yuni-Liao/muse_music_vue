export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'no'
                },
                {
                    title: '訂單編號',
                    key: 'orderNo'
                },
                {
                    title: '會員帳號',
                    key: 'memAcc'
                },
                {
                    title: '會員姓名',
                    key: 'memName'
                },
                {
                    title: '訂單金額',
                    key: 'amount'
                },
                {
                    title: '付款方式',
                    key: 'payType'
                },
                {
                    title: '訂單狀態',
                    key: 'orderStatus'
                },
                {
                    title: '操作',
                    slot: 'editBtn'
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
                    orderNo: 'O-001200',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '信用卡',
                    orderStatus: '處理中',
                },
                {
                    no: 3,
                    orderNo: 'O-001200',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '信用卡',
                    orderStatus: '配送中',
                },
                {
                    no: 4,
                    orderNo: 'O-001200',
                    memAcc: 'yuni70217',
                    memName: '煞氣a芋泥',
                    amount: 666,
                    payType: '貨到付款',
                    orderStatus: '已完成',
                },
                {
                    no: 5,
                    orderNo: 'O-001200',
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
        editBtn() {
            alert('編輯');
        },
    },
}


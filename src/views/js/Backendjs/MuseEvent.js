export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'no'
                },
                {
                    title: '快訊標題',
                    key: 'eventTitle'
                },
                {
                    title: '圖片',
                    key: 'imageLink'
                },
                {
                    title: '開始日期',
                    key: 'startDate'
                },
                {
                    title: '結束日期',
                    key: 'endDate'
                },
                {
                    title: '上/下架',
                    slot: 'upDownBtn'
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
                    title: '操作',
                    slot: 'editBtn'
                }
            ],
            data: [
                {
                    no: 1,
                    eventTitle: '庸俗救星',
                    imageLink: '#放圖',
                    startDate: '2023-09-20',
                    endDate: '2023-09-30',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 2,
                    eventTitle: '庸俗救星',
                    imageLink: '#放圖',
                    startDate: '2023-09-20',
                    endDate: '2023-09-30',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 3,
                    eventTitle: '庸俗救星',
                    imageLink: '#放圖',
                    startDate: '2023-09-20',
                    endDate: '2023-09-30',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 4,
                    eventTitle: '庸俗救星',
                    imageLink: '#放圖',
                    startDate: '2023-09-20',
                    endDate: '2023-09-30',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 5,
                    eventTitle: '庸俗救星',
                    imageLink: '#放圖',
                    startDate: '2023-09-20',
                    endDate: '2023-09-30',
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


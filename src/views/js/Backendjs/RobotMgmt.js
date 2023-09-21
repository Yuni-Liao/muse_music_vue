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
                    title: '提問標題',
                    key: 'QuesTitle',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '創建者',
                    key: 'createAdminAcc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '創建時間',
                    key: 'createTime',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '更新者',
                    key: 'updateAdminAcc',
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
                    title: '修改',
                    slot: 'editBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: ' ',
                    slot: 'deleteBtn',
                    width: 80,
                    // align: 'center'
                }
            ],
            data: [
                {
                    no: 1,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '2023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '2023-09-15 00:30:22'
                },
                {
                    no: 2,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '2023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '2023-09-15 00:30:22'
                },
                {
                    no: 3,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '2023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '2023-09-15 00:30:22'
                },
                {
                    no: 4,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '2023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '2023-09-15 00:30:22'
                },
                {
                    no: 5,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '2023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '2023-09-15 00:30:22'
                },
            ],
        }
    },
    methods: {
        editBtn(row) {
            alert('編輯');
        },
        deleteBtn(row) {
            alert('刪除');
        },
    },
}


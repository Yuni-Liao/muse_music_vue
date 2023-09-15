export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'no'
                },
                {
                    title: '提問標題',
                    key: 'QuesTitle'
                },
                {
                    title: '創建者',
                    key: 'createAdminAcc'
                },
                {
                    title: '創建時間',
                    key: 'createTime'
                },
                {
                    title: '更新者',
                    key: 'updateAdminAcc'
                },
                {
                    title: '更新時間',
                    key: 'updateTime'
                },
                {
                    title: '修改',
                    slot: 'editBtn'
                },
                {
                    title: '刪除',
                    slot: 'deleteBtn'
                }
            ],
            data: [
                {
                    no: 1,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '023-09-15 00:30:22'
                },
                {
                    no: 2,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '023-09-15 00:30:22'
                },
                {
                    no: 3,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '023-09-15 00:30:22'
                },
                {
                    no: 4,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '023-09-15 00:30:22'
                },
                {
                    no: 5,
                    QuesTitle: '如何上傳音樂',
                    createAdminAcc: 'admin01',
                    createTime: '023-09-12 12:00:30',
                    updateAdminAcc: 'admin02',
                    updateTime: '023-09-15 00:30:22'
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


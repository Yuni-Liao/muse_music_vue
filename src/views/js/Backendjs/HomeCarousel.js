export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'no'
                },
                {
                    title: '輪播名稱',
                    key: 'carouselName'
                },
                {
                    title: '圖片',
                    key: 'imageLink'
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
                    carouselName: '左右情緒-告八人',
                    imageLink: '#放圖',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 2,
                    carouselName: '溫蒂漫步',
                    imageLink: '#放圖',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 3,
                    carouselName: 'Jolin揪令',
                    imageLink: '#放圖',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 4,
                    carouselName: '蕭靜疼',
                    imageLink: '#放圖',
                    adminAcc: 'admin01',
                    updateTime: '2023-09-15 00:30:22',
                },
                {
                    no: 5,
                    carouselName: '羅痣想',
                    imageLink: '#放圖',
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


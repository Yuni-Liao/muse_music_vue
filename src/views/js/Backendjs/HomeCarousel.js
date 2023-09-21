export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            bannerBox: false,
            columns: [

                {
                    title: 'No',
                    key: 'no',
                    align: 'center',
                    width: 60,

                },
                {
                    title: '輪播名稱',
                    key: 'carouselName',
                    align: 'center',
                    width: 200,
                },
                {
                    title: '圖片',
                    key: 'imageLink',
                    align: 'center',
                    width: 200,
                },
                {
                    title: '上/下架',
                    slot: 'upDownBtn',
                    align: 'center',
                    width: 100,
                },
                {
                    title: '更新者',
                    key: 'adminAcc',
                    align: 'center',
                    width: 150,
                },
                {
                    title: '更新時間',
                    key: 'updateTime',
                    align: 'center',
                    width: 250,
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    align: 'center',
                    width: 100,
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
        addBannerBtn() {
            this.bannerBox = true;
        },
        upDownBtn(row) {
            alert('上/下架');
        },
        editBtn(row) {
            alert('編輯');
        },
    },
}


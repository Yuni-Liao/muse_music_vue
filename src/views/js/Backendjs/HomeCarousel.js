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
                    width: 150,
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
                    width: 200,
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    align: 'center',
                    width: 100,
                }
            ],
            carouselItem: [],
            // data: [
            //     {
            //         no: 1,
            //         carouselName: '左右情緒-告八人',
            //         imageLink: '#放圖',
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 2,
            //         carouselName: '溫蒂漫步',
            //         imageLink: '#放圖',
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 3,
            //         carouselName: 'Jolin揪令',
            //         imageLink: '#放圖',
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 4,
            //         carouselName: '蕭靜疼',
            //         imageLink: '#放圖',
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            //     {
            //         no: 5,
            //         carouselName: '羅痣想',
            //         imageLink: '#放圖',
            //         adminAcc: 'admin01',
            //         updateTime: '2023-09-15 00:30:22',
            //     },
            // ],
        }
    },
    // created() {
    //     fetch('http://localhost/muse_music/public/api/editIndexCarousel.php')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('請求失敗');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             this.carouselItem = data;
    //         })
    //         .catch(error => {
    //             // 處理錯誤
    //             console.error('獲取錯誤:', error);
    //         });
    // },
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
    mounted() {
        //先檢查資料格式是否符合DB規則
        const url = `http://localhost/muse_music/public/api/postIndexCarousel.php`;
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
                    // 如果請求成功，解析JSON數據
                    return response.json();
                } else {
                    // 如果請求不成功，拋出錯誤
                    throw new Error("取得 data 失敗");
                }
            })
            .then((json) => {
                this.news = json;
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}

export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // bannerBox: false, //新增輪播按鈕先隱藏-yuni
            carouselItem: [],
            columns: [
                {
                    title: 'No',
                    key: 'car_id',
                    align: 'center',
                    width: 100,

                },
                {
                    title: '輪播名稱',
                    key: 'name',
                    align: 'center',
                    width: 200,
                },
                {
                    title: '圖片',
                    key: 'img',
                    align: 'center',
                    width: 100,
                },
                {
                    title: '上/下架',
                    slot: 'upDownBtn',
                    align: 'center',
                    width: 90,
                },
                {
                    title: '連結網址',
                    key: 'link',
                    align: 'center',
                    width: 300,
                },
                {
                    title: '更新時間',
                    key: 'update_time',
                    align: 'center',
                    width: 150,
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    align: 'center',
                    width: 50,
                }
            ],
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
        // addBannerBtn() {
        //     this.bannerBox = true; //新增輪播按鈕先隱藏-yuni
        // },
        upDownBtn(row) {
            alert('上/下架');
        },
        editBtn(row) {
            if (id != undefined) {
                const url = `http://localhost/muse_music/public/api/editIndexCarousel.php`;
                let headers = {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                };
                fetch(url, {
                    method: "POST",
                    headers: headers,
                })
            }
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
                this.carouselItem = json;
                console.log(this.carouselItem);

            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}

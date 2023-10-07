export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // bannerBox: false, //新增輪播按鈕先隱藏-yuni
            editBox: false,
            editBanner: [ // 編輯資料的暫存陣列
                {
                    car_id: '',
                    nameValue: '',
                    bannerLink: '',
                    uploadImg: '',
                }
            ],
            imageData: null, // 圖片編譯Base64
            carouselItem: [], // 渲染資料的暫存陣列
            editItem: [],
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
                    width: 150,
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
                    width: 100,
                }
            ],
        }
    },
    methods: {
        // addBannerBtn() {
        //     this.bannerBox = true; //新增輪播按鈕先隱藏-yuni
        // },
        upDownBtn(row) {
            alert('上/下架');
        },
        editCarousel(row) {
            this.editBox = true;
            this.editItem = row;
        },
        confirmEdit() {
            const url = `http://localhost/muse_music/public/api/editIndexCarousel.php`;
            const data = {
                car_id: this.editItem.car_id,
                name: this.editBanner[0].nameValue,
                link: this.editBanner[0].bannerLink,
                img: this.editBanner[0].uploadImg,
            };
            let headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
            };
            console.log(data);
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((responseData) => {
                    console.log('編輯成功', responseData);
                })
                .catch((error) => {
                    console.error('編輯失敗', error);
                })
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
                    return response.json();
                } else {
                    throw new Error("取得 data 失敗");
                }
            })
            .then((json) => {
                this.carouselItem = json;
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}

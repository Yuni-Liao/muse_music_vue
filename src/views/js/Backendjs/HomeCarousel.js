export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // bannerBox: false, //新增輪播按鈕先隱藏-yuni
            editBox: false,
            // uploadedImg: '', // 上傳圖片暫存
            carouselItem: [], // 渲染資料的暫存陣列
            columns: [
                {
                    title: 'No',
                    key: 'car_id',
                    align: 'center',
                    width: 60,
                },
                {
                    title: '輪播名稱',
                    key: 'name',
                    align: 'center',
                    width: 140,
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
                    width: 200,
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    align: 'center',
                    width: 100,
                }
            ],
            editItem: {
                car_id: '',
                name: '',
                link: '',
                img: '',
            },
            selectedCarRank: '',
        }
    },
    methods: {
        // addBannerBtn() {
        //     this.bannerBox = true; //新增輪播按鈕先隱藏-yuni
        // },
        upDownBtn(row) {
            alert('上/下架');
        },
        imgChange(e) {
            let that = this;
            let files = e.target.files[0];
            if (!e || !window.FileReader) return;
            let reader = new FileReader();
            reader.readAsDataURL(files);

            reader.onloadend = function () {
                that.editItem.img = files;
            };
        },
        editCarousel(row) {
            this.editBox = true;
            this.editItem.car_id = row.car_id;
            this.editItem.name = row.name;
            this.editItem.link = row.link;
            this.editItem.img = row.img;
        },

        saveBtn() {
            const url = `http://localhost/muse_music/public/api/editIndexCarousel.php`;

            const formData = new FormData();
            formData.append("car_id", this.editItem.car_id);
            formData.append("name", this.editItem.name);
            formData.append("link", this.editItem.link);
            formData.append("img", document.getElementById("fileImg").files[0]);
            console.log(document.getElementById("fileImg").files[0]);

            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        console.log(response);
                        return response.json();
                    } else {
                        throw new Error("新增失敗");
                    }
                })
                .then((json) => {
                    alert(json);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        closeBtn() {
            this.editBox = false;
        }
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

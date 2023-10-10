export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // bannerBox: false, //新增輪播按鈕先隱藏-yuni
            editBox: false,
            uploadedImg: null, // 上傳圖片暫存
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
                nameValue: '',
                bannerLink: '',
                // uploadImg: '',
            },
        }
    },
    methods: {
        // addBannerBtn() {
        //     this.bannerBox = true; //新增輪播按鈕先隱藏-yuni
        // },
        upDownBtn(row) {
            alert('上/下架');
        },
        // 圖片還沒寫進DB 壞的~~ 
        imgChange(file) {
            console.log('文件名稱:', file.name);
            console.log('文件大小:', file.size);

            console.log('uploadedImg 值:', this.uploadedImg);

            const reader = new FileReader();
            reader.onload = (e) => {
                this.uploadedImg = e.target.result;
                console.log('上傳後的 uploadedImg 值:', this.uploadedImg);
            };

            reader.onerror = (error) => {
                console.error('上傳失敗:', error);
            };

            reader.readAsDataURL(file);
        },
        editCarousel(row) {
            this.editBox = true;
            this.editItem.car_id = row.car_id;
            this.editItem.nameValue = row.nameValue;
            this.editItem.bannerLink = row.bannerLink;
            // this.editItem.uploadImg = row.uploadImg;
        },
        confirmEdit() {
            const formData = new FormData();
            const url = `http://localhost/muse_music/public/api/editIndexCarousel.php`;
            let headers = {
                Accept: "application/json",
            };
            formData.append('car_id', this.editItem.car_id);
            formData.append('name', this.editItem.nameValue);
            formData.append('link', this.editItem.bannerLink);
            // formData.append('img', tthis.uploadedImg);
            if (this.uploadedImg) {
                formData.append('img', this.uploadedImg);
            }
            fetch(url, {
                method: "POST",
                headers: headers,
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("新增失敗");
                    }
                })
                .then((json) => {
                    // alert(json);
                    console.log(formData.get('car_id'));
                    console.log(formData.get('name'));
                    console.log(formData.get('link'));
                    console.log(formData.get('img'));
                    console.log(JSON.stringify(json));
                    // window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });

            // const url = `http://localhost/muse_music/public/api/editIndexCarousel.php`;
            // let headers = {
            //     "Content-Type": "application/json",
            //     Accept: "application/json",
            // };
            // const dataToSend = {
            //     car_id: this.editItem.car_id,
            //     name: this.editItem.nameValue,
            //     link: this.editItem.bannerLink,
            //     img: this.editItem.uploadImg,
            // };
            // console.log(this.editItem.uploadImg)
            // fetch(url, {
            //     method: "POST",
            //     headers: headers,
            //     body: JSON.stringify(dataToSend),
            // })
            // .then((response) => {
            //     if (response.ok) {
            //         return response.json();
            //     } else {
            //         throw new Error("新增失敗");
            //     }
            // })
            // .then((json) => {
            //     alert(json);
            //     window.location.reload();
            // })
            // .catch((error) => {
            //     console.log(error.message);
            // });
            // console.log(dataToSend);
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

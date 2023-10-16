export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // bannerBox: false, //新增輪播按鈕先隱藏-yuni
            editBox: false,
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
                status: '',
            },
        }
    },
    methods: {
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
        saveBtn(car_id) {

            const url = `${this.$store.state.phpPublicPath}editIndexCarousel.php`;
            const formData = new FormData();
            formData.append("car_id", this.editItem.car_id);
            formData.append("name", this.editItem.name);
            formData.append("link", this.editItem.link);
            if (car_id !== undefined) {
                formData.append("img", document.getElementById("fileImg").files[0]);
            } else {
                formData.append("img", this.editItem.img);
            }
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        console.log(response);
                        // return response.json();
                    } else {
                        throw new Error("編輯失敗");
                    }
                })
                .then(() => {
                    // alert(json);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        closeBtn() {
            this.editBox = false;
        },
        toggleBtn(row) {
            this.editItem.car_id = row.car_id;
            this.editItem.status = row.status;
            console.log("指定此列的值:", this.editItem.status);

            this.changeStatus();
        },
        changeStatus() {
            const url = `${this.$store.state.phpPublicPath}editIndexCarouselOnOff.php`;
            const formData = new FormData();
            formData.append("car_id", this.editItem.car_id);
            formData.append("status", this.editItem.status);
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("編輯失敗");
                    }
                })
                .then(() => {
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        confirmBeforeChange() {
            return new Promise((resolve) => {
                this.$Modal.confirm({
                    title: '提示',
                    content: '確定要更改狀態嗎 ?',
                    onOk: () => {
                        resolve();
                    }
                });
            });
        }
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        const url = `${this.$store.state.phpPublicPath}postIndexCarousel.php`;
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

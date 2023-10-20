export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //

            columns: [
                {
                    title: 'No',
                    key: 'news_id',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '快訊標題',
                    key: 'news_name',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '圖片',
                    key: 'news_pic',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '活動日期',
                    key: 'news_date',
                    align: 'center',
                    width: 150,
                },
                {
                    title: '更新時間',
                    key: 'news_update',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '修改',
                    slot: 'editBtn',
                    width: 80,
                    align: 'center'
                },
                {
                    title: '刪除',
                    slot: 'deleteBtn',
                    width: 80,
                    align: 'center'
                },

            ],
            newsData: [],
            editBox: false, // 預設跳窗隱藏
            editItem: [],
            addBox: false,
            deleteBox: false,
            editItem: {
                news_id: '',
                singer: '',
                news_name: '',
                news_date: '',
                news_place: '',
                news_con: '',
                news_area: '',
                news_pic: '',
            },
            addItem: {
                add_singer: '',
                add_news_name: '',
                add_news_date: '',
                add_news_place: '',
                add_news_con: '',
                add_news_area: '',
                news_pic: '',
            },
        }
    },
    methods: {
        addNews(row) {
            this.addItem = { ...row }; // 傳入編輯數據
            this.addBox = true; // 顯示編輯跳窗
        },
        imgChange(e) {
            let that = this;
            let files = e.target.files[0];
            if (!files || !window.FileReader) return;
        
            if (files.name) {
               
                that.editItem.news_pic = files.name;
            } else {
                
                that.editItem.news_pic = "没有选择文件";
            }
        
            let reader = new FileReader();
            reader.readAsDataURL(files);
        
            reader.onloadend = function () {
                that.editItem.src = this.result;
            };
        },
        editNews(row) {
            this.editBox = true;
            this.editItem = { ...row };
        },
        saveEditBtn() {
            const url = `${this.$store.state.phpPublicPath}editnews.php`;
            const formData = new FormData();
            formData.append("news_id", this.editItem.news_id);
            formData.append("singer", this.editItem.singer);
            formData.append("news_name", this.editItem.news_name);
            formData.append("news_date", this.editItem.news_date);
            formData.append("news_place", this.editItem.news_place);
            formData.append("news_con", this.editItem.news_con);
            formData.append("news_area", this.editItem.news_area);
            if (news_id !== undefined) {
                formData.append("news_pic", document.getElementById("fileImg").files[0]);
            } else {
                formData.append("news_pic", this.editItem.news_pic);
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
            this.deleteBox = false;
        },
        closeAddBtn() {
            this.addBox = false;
        },
        deleteBtn(row) {
            this.deleteBox = true;
            this.currentDeleteRow = row;
        },

        saveAddBtn() {
            const url = `${this.$store.state.phpPublicPath}addNews.php`;
            const formData = new FormData();
            formData.append("add_singer", this.addItem.add_singer);
            formData.append("add_news_name", this.addItem.add_news_name);
            formData.append("add_news_date", this.addItem.add_news_date);
            formData.append("add_news_place", this.addItem.add_news_place);
            formData.append("add_news_con", this.addItem.add_news_con);
            formData.append("add_news_area", this.addItem.add_news_area);
            formData.append("news_pic", document.getElementById("addFileImg").files[0]);
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        console.log(response);
                    } else {
                        throw new Error("新增失敗");
                    }
                })
                .then(() => {
                    this.addItem = [];
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        deleteSaveBtn() {
            if (this.currentDeleteRow) {
                const url = `${this.$store.state.phpPublicPath}deleteNews.php`;
                const formData = new FormData();
                formData.append("news_id", this.currentDeleteRow.news_id);

                fetch(url, {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log(response);
                            window.location.reload();
                        } else {
                            throw new Error("刪除失敗");
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })
                    .finally(() => {
                        this.deleteBox = false;
                        this.currentDeleteRow = null;
                    });
            }
        },
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        const url = `${this.$store.state.phpPublicPath}postNewsMgmt.php`;
        const formData = new FormData();

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
                    console.error('API 錯誤回應:', response);
                    throw new Error("取得 dta 失敗");
                }
            })
            .then((json) => {
                console.log('API 成功回應:', json);
                this.newsData = json;

            })
            .catch((error) => {
                console.error('API 請求失敗:', error);
            });


        const puteditItem = () => {
            const obj = {};
            obj.news_id = this.$route.query.news_id;
            obj.news_name = this.$route.query.news_name;
            obj.singer = this.$route.query.singer;
            obj.news_date = this.$route.query.news_date;
            obj.news_place = this.$route.query.news_place;
            obj.news_update = this.$route.query.news_update;
            obj.news_con = this.$route.query.news_con;
            obj.news_pic = this.$route.query.news_pic;
            obj.news_area = this.$route.query.news_area;
            this.editItem = obj;
        };
        puteditItem();
    }
}


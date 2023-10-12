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
                    title: '上/下架',
                    slot: 'upDownBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '更新時間',
                    key: 'news_update',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    width: 80,
                    align: 'center'
                }
            ],
            newsData: [],
            editBox: false, // 預設跳窗隱藏
            editItem: [],
            
        }
    },
    methods: {
        upDownBtn(row) {
            alert('上/下架');
        },
        editBtn(row) {
            alert('編輯');
        },

        editNews(row) {
            this.editItem = { ...row }; // 傳入編輯數據
            this.editBox = true; // 顯示編輯跳窗
        },

        newsEdit() {
            const url = `${this.$store.state.phpPublicPath}editNews.php`;
            let headers = {
                Accept: "application/json",
            };

            const formData = new FormData();
            formData.append("news_id", this.editItem.news_id);
            formData.append("news_name", this.editItem.news_name);
            formData.append("singer", this.editItem.singer);
            formData.append("news_date", this.editItem.news_date);
            formData.append("news_place", this.editItem.news_place);
            formData.append("news_update", this.editItem.news_update);
            formData.append("news_con", this.editItem.news_con);
            //formData.append("news_pic", this.editItem.news_pic);
            formData.append("news_area", this.editItem.news_area);

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
                .then(() => {
                    this.$router.push({
                        name: "museevent",
                    });
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });

            this.editBox = false; // 關閉編輯跳窗
            console.log("formData", formData);
        
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


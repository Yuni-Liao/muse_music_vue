export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            // title
            columns: [
                {
                    title: 'No',
                    key: 'faq_id',
                    // key值是資料庫表格抬頭名字
                    width: 60,
                    align: 'center'
                },
                {
                    title: '提問標題',
                    key: 'que',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '創建者',
                    key: 'createAdminAcc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '創建時間',
                    key: 'createTime',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '更新者',
                    key: 'updateAdminAcc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '更新時間',
                    key: 'updateTime',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '修改',
                    slot: 'editBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '刪除',
                    slot: 'deleteBtn',
                    width: 80,
                    // align: 'center'
                }
            ],

            // data: [
            //     {
            //         no: 1,
            //         QuesTitle: '如何上傳音樂',
            //         createAdminAcc: 'admin01',
            //         createTime: '2023-09-12 12:00:30',
            //         updateAdminAcc: 'admin02',
            //         updateTime: '2023-09-15 00:30:22'
            //     },

            // 渲染資料
            faqData: [],

            // 編輯彈窗預設關閉
            editBox: false,
            editItem: {
                faq_id: '',
                que: '',
                ans: '',
                short_ans: '',
                keyword: '',
                open: '',
            },

        }
    },
    methods: {
        addfaqBtn(row) {
            alert('新增')
        },

        // 編輯跳窗
        editBtn(row) {
            // 顯示編輯跳窗
            this.editBox = true;
            // 傳入編輯數據
            // this.editItem = { ...row };
            this.editItem.faq_id = row.faq_id;
            this.editItem.que = row.que;
            this.editItem.ans = row.ans;
            this.editItem.short_ans = row.short_ans;
            this.editItem.keyword = row.keyword;
            this.editItem.open = row.open;
        },
        closeBtn() {
            // 關閉編輯跳窗
            this.editBox = false;
        },
        saveBtn() {
            const url = `${this.$store.state.phpPublicPath}editFaqs.php`;
            const formData = new FormData();
            formData.append("faq_id", this.editItem.faq_id);
            formData.append("que", this.editItem.que);
            formData.append("ans", this.editItem.ans);
            formData.append("short_ans", this.editItem.short_ans);
            formData.append("keyword", this.editItem.keyword);
            formData.append("open", this.editItem.open);
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
                // 在這裡處理返回的 JSON 數據
                // console.log(json);
                // alert(json);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error.message);
            });
            console.log(formData);
        },

        deleteBtn(row) {
            alert('刪除');
        },
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        const url = `${this.$store.state.phpPublicPath}postFaqsMgmt.php`;
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
                this.faqData = json;
                // 將 prod_type 設定為正確的值
            })
            .catch((error) => {
                console.error('API 請求失敗:', error);
            });


        //接值，把值放入 this.editItem 中
        // const puteditItem = () => {
        //     const obj = {};
        //     obj.faq_id = this.$route.query.faq_id;
        //     obj.que = this.$route.query.que;
        //     obj.ans = this.$route.query.ans;
        //     obj.short_ans = this.$route.query.short_ans;
        //     obj.keyword = this.$route.query.keyword;
        //     this.editItem = obj;
        // };
        // puteditItem();
    }
}


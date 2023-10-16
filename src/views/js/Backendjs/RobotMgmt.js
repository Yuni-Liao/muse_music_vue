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
                    title: '問題',
                    key: 'que',
                    width: 150,
                    align: 'left'
                },
                {
                    title: '答案',
                    key: 'ans',
                    width: 280,
                    align: 'left'
                },
                {
                    title: '短回答（機器人使用）',
                    key: 'short_ans',
                    width: 200,
                    align: 'left'
                },
                {
                    title: '關鍵字',
                    key: 'keyword',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '預設開合',
                    key: 'open',
                    width: 100,
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
                }
            ],
            // 渲染資料
            faqData: [],
            // 新增彈窗預設關閉
            addBox: false,
            addItem: {
                add_que: '',
                add_ans: '',
                add_short_ans: '',
                add_keyword: '',
                add_open: '',
            },
            // 編輯彈窗預設關閉
            editBox: false,
            // 編輯彈窗資料
            editItem: {
                faq_id: '',
                que: '',
                ans: '',
                short_ans: '',
                keyword: '',
                open: '',
            },
            // 刪除彈窗預設關閉
            deleteBox: false,
        }
    },
    methods: {
        // 新增彈窗
        addBtn(row) {
            // 顯示彈窗
            this.addBox = true;
        },

        // 新增
        addsaveBtn(){
            const url = `${this.$store.state.phpPublicPath}addFaqsMgmt.php`;
            const formData = new FormData();
            formData.append("add_que", this.addItem.add_que);
            formData.append("add_ans", this.addItem.add_ans);
            formData.append("add_short_ans", this.addItem.add_short_ans);
            formData.append("add_keyword", this.addItem.add_keyword);
            formData.append("add_open", this.addItem.add_open);
            console.log(this.addItem);
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
                window.location.reload();
            })
            .catch((error) => {
                console.log(error.message);
            });
        },

        // 編輯彈窗
        editBtn(row) {
            // 顯示彈窗
            this.editBox = true;
            // 傳入編輯數據
            this.editItem = { ...row };
        },

        // 編輯
        editSaveBtn() {
            // // 取得當前時間
            // const currentDate = new Date();
            // // 格式化為字串，可以根據需要調整格式
            // const formattedDate = currentDate.toLocaleString();
            // // 將當前時間賦值給更新時間
            // this.editItem.updateTime = formattedDate;
            // this.updateTime = formattedDate;

            const url = `${this.$store.state.phpPublicPath}editFaqsMgmt.php`;
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

        // 刪除彈窗
        deleteBtn(row) {
            // 顯示刪除彈窗
            this.deleteBox = true;
            // 存儲當前行數據以便在確定時使用
            this.currentDeleteRow = row;
        },

        // 刪除
        deleteSaveBtn() {
            if (this.currentDeleteRow) {
                const url = `${this.$store.state.phpPublicPath}deleteFaqsMgmt.php`;
                const formData = new FormData();
                // 傳遞參數
                formData.append("faq_id", this.currentDeleteRow.faq_id);
        
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
                    // 重置彈窗狀態
                    this.deleteBox = false;
                    // 重置當前行數據
                    this.currentDeleteRow = null;
                });
            }
        },

        // 彈窗取消btn：關閉彈窗
        closeBtn() {
            this.editBox = false;
            this.addBox = false;
            this.deleteBox = false;
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
                    throw new Error("取得 data 失敗");
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



        //建立事件聆聽:點空白處關閉
        // document.addEventListener("click", this.closeBtn, true);
    },

    
    beforeUnmount() {
    //移除事件聆聽:點空白處關閉
    // document.removeEventListener("click", this.closeBtn);
    },

}


export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            addBox: false,
            login_admin_id: '', // 暫存登入管理員id
            adminList: [],
            addItem: {
                name: '',
                acc: '',
                admin_psw: '',
            }, // 新增管理員資料
            columns: [
                {
                    title: '編號',
                    key: 'admin_id',
                    width: 80,
                    align: 'center'
                },
                {
                    title: '管理員姓名',
                    key: 'name',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '管理員帳號',
                    key: 'acc',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '管理員密碼',
                    key: 'admin_psw',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'deleteBtn',
                    width: 80,
                    align: 'center'
                }
            ],
        }
    },
    methods: {
        createAdmin() {
            this.addBox = true;
        },
        saveBtn() {
            const url = new URL(`${this.$store.state.phpPublicPath}addAdmMgmt.php`)

            const formData = new FormData();
            formData.append("admin_id", this.addItem.admin_id);
            formData.append("name", this.addItem.name);
            formData.append("acc", this.addItem.acc);
            formData.append("admin_psw", this.addItem.admin_psw);

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
        closeBtn() {
            this.addBox = false;
        },
        deleteBtn(row) {
            this.adminList[0].admin_id = row.admin_id;

            const url = new URL(`${this.$store.state.phpPublicPath}deleAdmMgmt.php`);

            let headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
            };
            const dataToSend = {
                admin_id: this.adminList[0].admin_id,
            };
            console.log(this.adminList[0].admin_id)
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(dataToSend)
            })
                .then((response) => {
                    if (response.ok) {
                        // return response.json();
                        console.log('完成刪除')
                    } else {
                        throw new Error("刪除 data 失敗");
                    }
                })
                .then((data) => {
                    console.log('已刪除', data);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
            console.log(dataToSend)
        },
    },
    mounted() {
        //fetch 管理員資料  - 廖妍榛

        const fetchAdminList = () => {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getAdmMgmt.php`);
            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => {
                    // 避免撈不到資料報錯 - 廖妍榛
                    if (Array.isArray(res)) {
                        this.adminList = res;
                    } else {
                        this.adminList = [];
                    }
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        fetchAdminList();
    }
}


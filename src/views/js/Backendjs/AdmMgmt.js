export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            modal: false,
            login_admin_id: '', // 暫存登入管理員id
            adminList: [],
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
            this.modal = true;
        },
        deleteBtn(row) {
            this.adminList[0].admin_id = row.admin_id;

            // const url = new URL(`${this.$store.state.phpPublicPath}deleteAdmMgmt.php`);
            const url = new URL(`http://localhost/muse_music/public/api/deleAdmMgmt.php`)
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
        //fetch 管理員資料 
        // 之後要改動態 - 廖妍榛
        // this.login_admin_id = localStorage.getItem('login_admin_id');
        const fetchAdminList = () => {
            // const apiURL = new URL(
            //     `${this.$store.state.phpPublicPath}getAdmMgmt.php?admin_id=${this.login_admin_id}`);
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getAdmMgmt.php`);

            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => {
                    this.adminList = res;
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        console.log(this.adminList)
        fetchAdminList();
    }
}


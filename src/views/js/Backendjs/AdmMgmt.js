export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            modal: false,
            login_admin_id: '',
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
        deleteBtn() {
            alert('刪除管理員');
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


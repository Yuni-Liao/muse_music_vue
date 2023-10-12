export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            member: [{
                mem_acc: '',
                mem_psw: '',
                mem_name: '',
            }],
            login_mem_id: '',
            emailInvalid: false,
            passwordInvalid: false,
            showPassword: false,
            memberData: {},
        };
        

    },
    methods: {
        loginBtn() {
            alert("送出");
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        login() {
            console.log("登入中...");

            // 錯誤驗證 暫定
            if (!this.validateEmail(this.member.mem_acc)) {
                this.emailInvalid = true;
                alert("請輸入有效的電子信箱，需有1個英文或數字");
                return;
            } else {
                this.emailInvalid = false;
            }

            if (!this.validatePassword(this.member.mem_psw)) {
                this.passwordInvalid = true;
                alert("請輸入有效的密碼，需有1個英文或數字");
                return;
            } else {
                this.passwordInvalid = false;
            }

            const dataToSend = new FormData();
            
            dataToSend.append("mem_acc", this.member.mem_acc);
            dataToSend.append("mem_psw", this.member.mem_psw);

            fetch("http://localhost/muse_music/public/api/logIn.php", {
                method: "POST",
                body: dataToSend,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.message === "登入成功") {
                        alert("登入成功");
                        // 從資料庫撈會員姓名
                        const mem_name = data.mem_name;
                        // 綁定id
                        const mem_id = data.mem_id;
                        alert(`Hi! ${mem_name}  歡迎回到 MuseMusic！ 會員編號 (ID: ${mem_id})`);

                        //會員id localStorage暫存
                        localStorage.setItem('mem_id', mem_id);
                        localStorage.setItem('mem_name', mem_name);
                        // 導回首頁
                        this.$router.push("/home");
                    } else {
                        alert("帳戶密碼不正確");
                    }
                });
        },

        // 錯誤驗證，正規化
        validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9]{1,10}@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        validatePassword(password) {
            const passwordRegex = /^[a-zA-Z0-9]{1,20}$/;
            return passwordRegex.test(password);
        },

        // 取得會員資料庫
        fetchMemberData(mem_id) {

            fetch(`http://localhost/muse_music/public/api/logIn.php?mem_id=${mem_id}`)
                .then((response) => response.json())
                .then((memberData) => {
                    this.memberData = memberData;
                })
                .catch((error) => {
                    console.error("資料取得失敗:", error);
                });
        },


    },
};

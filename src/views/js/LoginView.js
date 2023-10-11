export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            email: "",
            password: "",
            emailInvalid: false,
            passwordInvalid: false,
            showPassword: false,
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
            if (!this.validateEmail(this.email)) {
                this.emailInvalid = true;
                alert("請輸入有效的電子信箱，需有1個英文或數字");
                return;
            } else {
                this.emailInvalid = false;
            }

            if (!this.validatePassword(this.password)) {
                this.passwordInvalid = true;
                alert("請輸入有效的密碼，需有1個英文或數字");
                return;
            } else {
                this.passwordInvalid = false;
            }

            const dataToSend = new FormData();
            dataToSend.append("username", this.email);
            dataToSend.append("password", this.password);

            fetch("http://localhost/muse_music/public/api/logIn.php", {
                method: "POST",
                body: dataToSend,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.message === "登入成功") {
                        alert("登入成功");

                        // 從資料庫撈會員姓名
                        const userName = data.mem_name;

                        // 彈出對應會員訊息~~~
                        alert(`Hi! ${userName} 歡迎回到MuseMusic！`);

                        // 導回首頁
                        this.$router.push("/home");

                    } else {
                        alert("帳戶密碼不正確");
                    }
                })
        },
        validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9]{1,10}@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);  // 原先驗證和資料庫衝突，帳號驗證先調成@前1位英文或數字，之後隨時可以再改
        },
        validatePassword(password) {
            const passwordRegex = /^[a-zA-Z0-9]{1,20}$/;
            return passwordRegex.test(password);  // 原先驗證和資料庫衝突，密碼驗證先調成1位英文或數字，之後隨時可以再改
        },
    },
};

export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            email: "",
            password: "",
            emailInvalid: false,
            passwordInvalid: false,
            showPassword: false,
            predefinedCredentials: [
                {
                    email: "chd103@gmail.com",
                    password: "11111111",
                },
            ]
            
        };
        
    },
    methods: {
        loginBtn() {
            alert('送出');
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        login() {
            console.log("登入中...");

            if (!this.validateEmail(this.email)) {
                this.emailInvalid = true;
                alert("請輸入有效的電子信箱，需有6-10個英文或數字");
                return;
            }
            else {
                this.emailInvalid = false;
            }

            if (!this.validatePassword(this.password)) {
                this.passwordInvalid = true;
                alert("請輸入有效的密碼，需有8-20個英文或數字");
                return;
            } else {
                this.passwordInvalid = false;
            }

            const matchingCredentials = this.predefinedCredentials.find(
                (credentials) =>
                    credentials.email === this.email && credentials.password === this.password
            );
        
            if (matchingCredentials) {
                alert("登入成功");
                this.$router.push("/home");
            } else {
                alert("帳號或密碼不正確");
            }

            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.email,
                    password: this.password
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))
        },
        validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9]{6,10}@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        validatePassword(password) {
            const passwordRegex = /^[a-zA-Z0-9]{8,20}$/;
            return passwordRegex.test(password);
        }
    }
};

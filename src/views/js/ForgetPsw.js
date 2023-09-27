export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            current: 0,
            email: '',
            verificationCode: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        next() {
            if (this.current === 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        },
        prev() {
            if (this.current === 0) {
                this.current = 3;
            } else {
                this.current -= 1;
            }
        },
    },
    computed: {
        isEmailValid(){
            const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            return emailRegex.test(this.email);
        }
    },
}
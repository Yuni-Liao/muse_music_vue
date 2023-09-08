export default {
    data() {
        return {
            current: 0,
            email1: '',
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
    }
}
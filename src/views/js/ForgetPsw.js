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
            confirmPassword: '',
            fetchEmail:[]    
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
        saveBtn() {
            const url = `${this.$store.state.phpPublicPath}editForgetPsw.php`;
            const formData = new FormData();
            formData.append("password", this.password);
            formData.append("email", this.email);

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
                    // window.location.reload();
                    alert("已完成修改");
                    this.$router.push("/home")
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
    },
    computed: {
        isEmailValid(){
            return this.fetchEmail.some(item => item.email === this.email);
        }
    },
    mounted() {
        const fetchMail = () => {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getFindMember.php?`
            );
            fetch(apiURL).then(async (response) => {
                this.fetchEmail = await response.json();
            });
            // console.log('fetchEmail:', this.fetchEmail);
        };
        fetchMail();

    },
}
export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            email: "",
            password: ""
        };
    },
    methods: {
        login() {
            console.log("登入中...");
            this.$router.push("/dashboard");
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_"
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))
        }
    }
};

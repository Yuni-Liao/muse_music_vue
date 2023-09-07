export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        login() {
            console.log("登入中...");
            this.$router.push("/dashboard");
        }
    }
};
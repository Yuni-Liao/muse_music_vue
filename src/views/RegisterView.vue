<template>
    <router-link to="/find"><img alt="Vue logo" src="~@/assets/image/muse_logo.png"></router-link>
    <div class="login-container">
        
        <form @submit.prevent="login">
            <div class="form-group">
                <input type="email" id="email" v-model="email" required placeholder="請輸入電子信箱" class="logininput">
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model="password" required placeholder="請輸入密碼" class="logininput">
            </div>

            <div class="links">
                <router-link to="/forgot-password">忘記密碼</router-link>
                <router-link to="/register">立即註冊</router-link>
            </div>
            <button type="submit">登入</button>
        </form>
        
    </div>


</template>

<script>
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
</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}

.form-group {
    margin: 10px 0;
}

label {
    display: block;
}

.logininput{
    border: #74EBD5 3px solid;
    width: 100%;
    height: 40px;
    background-color: white;
    margin: 5px;
    padding: 5px;
    font-size: 10px;
}


button {
    background-color: #74EBD5 ;
    color:black;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    font-size: 15px;
}

.links {
    text-align: right;
    margin: 10px;
    
}

.links a {
    margin-right: 10px;
    text-decoration: none;
    color: white;
    font-size: 10px;
}
</style>


<style scoped lang="scss">
@import "~@/assets/scss/layout/login.scss";
</style>


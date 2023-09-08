<template>
    <router-link to="/find"><img alt="Vue logo" src="~@/assets/image/muse_logo.png"></router-link>
    <div class="login-container">
<<<<<<< HEAD
        
        <form @submit.prevent="register">
=======

        <form @submit.prevent="login">
>>>>>>> 8317f86a36ef0b63be2f91f920939c616256730c
            <div class="form-group">
                <input type="email" id="email" v-model="email" required placeholder="請輸入電子信箱" class="logininput">
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model="password" required placeholder="請輸入密碼" class="logininput">
            </div>

            <div class="links">
<<<<<<< HEAD
                <router-link to="/forgot-password">忘記密碼</router-link>
                <router-link to="/register">test</router-link>
=======
                <router-link to="/forgetpsw">忘記密碼</router-link>
                <router-link to="/register">立即註冊</router-link>
>>>>>>> 8317f86a36ef0b63be2f91f920939c616256730c
            </div>
            <button type="submit">登入</button>
        </form>
    </div>
</template>



<style scoped lang="scss">
@import "~@/assets/scss/page/register.scss";
</style>
<script src="./js/RegisterView.js"></script>




<template>
<<<<<<< HEAD
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
        
=======
    <!-- <div class="register">
        <h1>這是註冊頁面</h1>
    </div> -->
    <!-- 此處為測試文字,可以改掉重新編輯 -->

    <div class="wrapper">
        
        <p>当前正在进行第 {{ current + 1 }} 步</p>
        
        <div class="step">
            
            <Steps :current="current">
                <Step title="忘記密碼"></Step>
                <Step title="信箱驗證"></Step>
                <Step title="新密碼設定"></Step>
                <Step title="完成修改"></Step>
            </Steps>
            <Button style="margin-top:16px" type="primary" @click="next">Next step</Button>
            <button class="btn_XS_NoBorder obj_Radius" type="primary" @click="next">信箱收取重設信件</button>

            <!-- <div class="step_1">
                <p>忘記密碼</p>
            </div>
            <div class="step_2">
                <p>信箱驗證</p>
            </div>
            <div class="step_3">
                <p>新密碼設定</p>
            </div>
            <div class="step_4">
                <p>完成修改</p>
            </div> -->
        </div>
        <div class="inner">
            <form action="">
                <h2>忘記密碼</h2>
                <input class="btn_S_Border"  type="email" placeholder="請輸入電子信箱"><br>
                <button class="btn_XS_NoBorder obj_Radius" type="primary" @click="next">信箱收取重設信件</button>
            </form>
        </div>
>>>>>>> 40b30ae1d1c6df835cb5e50d56b95b11d3b1627d
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

<<<<<<< HEAD
=======
<script src="./js/RegisterView"></script>


>>>>>>> 40b30ae1d1c6df835cb5e50d56b95b11d3b1627d
  
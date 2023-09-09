<template>
    <div class="wrapper">
        <div class="inner">
            <Steps :current="current">
                <Step title="會員註冊"></Step>
                <Step title="信箱驗證"></Step>
                <Step title="帳號密碼設定"></Step>
                <Step title="完成註冊"></Step>
            </Steps>
            <form class="step_1" action="" v-if="current === 0">
                <h2>會員註冊</h2>
                <input type="email" placeholder="請輸入電子信箱" v-model="email1" required>
                <input type="password" placeholder="請輸入密碼" v-model="password" required>
                <input type="password" placeholder="確認密碼" v-model="confirmpassword" required>
                <label>
                    <input type="checkbox" id="text">
                    同意MUSE的會員服務條款與隱私權保護政策，包括cookies的使用、其他人能夠在本站上瀏覽你的相關公開資訊。
                </label>
                <button class="btn_L_NoBorder obj_Radius submit" @click="next" :disabled="!email1">信箱收取驗證碼</button>
            </form>
            <form class="step_2" action="" v-if="current === 1">
                <h2>信箱驗證</h2>
                <input type="text" placeholder="請輸入驗證碼" v-model="verificationCode" required>
                <br>
                <button class="btn_L_NoBorder">重新發送驗證碼</button>
                <br>
                <button class="btn_L_NoBorder" @click="prev">返回上一步</button>
                <br>
                <button class="btn_L_NoBorder obj_Radius submit" @click="next" :disabled="!verificationCode">進行驗證</button>
                <div class="error-message" v-if="!verificationCode">請輸入驗證碼</div>
            </form>
            <form class="step_3" action="" v-if="current === 2">
                <h2>帳號密碼設定</h2>
                <input type="account" placeholder="請設定帳號" v-model="account" required>
                <input type="password" placeholder="請設定密碼" v-model="password" required>
                <input type="password" placeholder="請確認密碼" v-model="confirmPassword" required>
                <br>
                <button class="btn_L_NoBorder obj_Radius" @click="prev">返回上一步</button>
                <button class="btn_L_NoBorder obj_Radius submit" @click="next"
                    :disabled="!password || !confirmPassword || password !== confirmPassword">完成註冊</button>
                <div class="error-message" v-if="!password || !confirmPassword || password !== confirmPassword">請確認密碼是否一致
                </div>
            </form>
            <form class="step_4" v-if="current === 3">
                <h2>已註冊完成</h2>
                <router-link to="/">
                    <button class="btn_L_NoBorder obj_Radius submit">
                        返回首頁
                    </button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
@import "~@/assets/scss/page/register.scss";
</style>
<script src="./js/RegisterView.js"></script>

<style>
/* 步驟條 */
.ivu-steps {
    display: flex;
    width: 100%;
}

/* 步驟區塊 */
.ivu-steps-item {
    width: 25%;
    display: flex;
    flex-direction: column;
}

/* 文字 */
.ivu-steps-item.ivu-steps-status-wait .ivu-steps-title,
.ivu-steps .ivu-steps-title,
.ivu-steps-item.ivu-steps-status-finish .ivu-steps-title {
    color: white;
    font-size: 20px;
    background-color: transparent;
}

/* 勾圖區塊 */
.ivu-steps .ivu-steps-head,
.ivu-steps-horizontal .ivu-steps-item:not(:first-child) .ivu-steps-head {
    background: transparent;
    margin: auto;
}

/* 勾勾圖片
    .ivu-steps-horizontal div :nth-child(2){
        
    } */
/* 文字底線 */
.ivu-steps .ivu-steps-tail {
    display: none;
}

/* 當前進度文字 */
.ivu-steps-item.ivu-steps-status-process .ivu-steps-title {
    color: white;
}
</style>

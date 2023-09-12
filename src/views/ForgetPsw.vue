<template>
    <div class="fog_wrapper">
        <div class="fog_inner">
            <Steps :current="current">
                <Step title="忘記密碼"></Step>
                <Step title="信箱驗證"></Step>
                <Step title="重設密碼"></Step>
                <Step title="完成修改"></Step>
            </Steps>
            <form class="step_1" action="" v-if="current === 0">
                <h2>忘記密碼</h2>
                <input type="email" placeholder="請輸入電子信箱" v-model="email" required>
                <br>
                <button class="btn_L_NoBorder obj_Radius submit" @click="next" :disabled="!email">信箱收取重設信件</button>
                <!-- <div class="error-message" v-if="!email">請輸入電子信箱</div> -->
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
                <h2>重設密碼</h2>
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
                <h2>已完成修改</h2>
                <router-link to="/">
                    <button class="btn_L_NoBorder obj_Radius submit">
                        返回首頁
                    </button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<style lang="scss"> //忘記密碼頁不下scoped
 @import "~@/assets/scss/page/forgetpsw.scss";
</style>
<script src="./js/ForgetPsw.js"></script> 
<template>
    <div class="reg_wrapper">
        <div class="reg_inner">
            <Steps :current="current">
                <Step title="會員註冊"></Step>
                <Step title="信箱驗證"></Step>
                <Step title="帳號密碼設定"></Step>
                <Step title="完成註冊"></Step>
            </Steps>
            <form class="step_1" action="" method="POST" >
                <h2>會員註冊</h2>
                <input type="text" placeholder="請輸入姓名" v-model="member.mem_name" required>
                <input type="text" placeholder="請輸入暱稱" v-model="member.mem_aka" required>
                <input type="email" placeholder="請輸入信箱" v-model="member.email" required>
                <label>
                    <input class="policy" type="checkbox" id="text">
                    同意MUSE的會員服務條款與隱私權保護政策，<br>包括cookies的使用、其他人能夠在本站上瀏覽你的相關公開資訊。
                </label>
                <button class="btn_L_NoBorder obj_Radius submit" @click="registerAccountToDatabase">註冊</button>
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
                <input type="account" placeholder="請設定帳號" v-model="mem_acc" required>
                <input type="password" placeholder="請設定密碼" v-model="mem_psw" required>
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
                <router-link to="/home">
                    <button class="btn_L_NoBorder obj_Radius submit">
                        返回首頁
                    </button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script src="./js/RegisterView.js"></script>
<style lang="scss"> //註冊頁不下scoped
 @import "~@/assets/scss/page/_register.scss";
</style>


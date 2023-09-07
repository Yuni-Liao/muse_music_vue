<template>
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
    </div>


</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/register.scss";
</style>

<script src="./js/RegisterView"></script>


  
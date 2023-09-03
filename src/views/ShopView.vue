<template>
    <div class="shop">
        <h1>這是商城頁面
        </h1>
        <div class="prod">
            <!-- 此處為測試文字,可以改掉重新編輯 -->
            <!-- 非v-bind的圖片載入方式 -->
            <!-- 注意:: 點擊商品>查看商品詳情的內頁跳轉要用router-link to="___" 這方式套才不會404, 用<a>沒辦法 -->
            <router-link to="/shopProd/1"><img alt="Vue logo" src="~@/assets/image/muse_logo.png"></router-link>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/shop.scss";
</style>
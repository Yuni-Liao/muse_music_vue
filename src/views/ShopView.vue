<template>
    <h1>這是商城頁面</h1>
    <div class="shop">
        <Breadcrumb separator=">">
            <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
            <BreadcrumbItem>周邊商品</BreadcrumbItem>
        </Breadcrumb>
        <select class="obj_Radius btn_S_Border">
            <option selected>商品排序</option>
            <option>新貨上架</option>
            <option>價格低到高</option>
            <option>價格高到低</option>
        </select>
        <select class="obj_Radius btn_M_Border">
            <option selected>每頁顯示20個</option>
            <option>每頁顯示16個</option>
            <option>每頁顯示12個</option>
            <option>每頁顯示8個</option>
        </select>
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
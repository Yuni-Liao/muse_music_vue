<!-- 這頁作為後台的根目錄 -->

<template>
    <BackendHeader />
    <BackendSideBar />
    <div class="welcome_box">
        <h1 class="backend_title_welcome">
            歡迎登入 MUSE 管理平台
        </h1>
    </div>
    <router-view />
</template>

<style lang="scss">
@import "~@/assets/scss/page/Backend/backend.scss";
</style>
<script src="../js/Backendjs/BackendView.js"></script>

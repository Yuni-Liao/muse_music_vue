<!-- 這頁作為後台的根目錄 -->

<template>
    <BackendHeader />
    <BackendSideBar />
    <router-view />
</template>

<style lang="scss">
@import "~@/assets/scss/page/Backend/backend.scss";
</style>
<script src="../js/Backendjs/BackendView.js"></script>

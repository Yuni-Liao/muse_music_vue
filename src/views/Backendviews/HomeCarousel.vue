<template>
    <div class="homecarousel_box">
        <h1>網站資訊管理 | 首頁輪播管理</h1>
        <Table highlight-row stripe class="homecarousel_table cellHeight" width="1200" height="550" :columns="columns"
            :data="data">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn()" true-color="#13ce66" false-color="#ff4949" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
</template>
<!-- 補上/下架按鈕、搜尋框、新增按鈕、分頁按鈕、調整字距 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/homecarousel.scss";
</style>
<script src="../js/Backendjs/HomeCarousel.js"></script>

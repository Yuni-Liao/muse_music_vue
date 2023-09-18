<template>
    <div class="admin_table_box">
        <h1>管理員管理</h1>
        <Table size="large" highlight-row stripe class="admin_table cellHeight" width="1200" height="450" :columns="columns"
            :data="data">
            <template #deleteBtn="{ row }">
                <Button @click="deleteBtn()">刪除</Button>
            </template>
        </Table>
        <div class="btn_box">
            <Button type="primary" @click="createAdmin()" class="admin_add">新增</Button>
        </div>
    </div>
</template>
<!-- 刪除按鈕功能要寫,, 新增管理員按鈕也要調整-->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/admmgmt.scss";
</style>
<script src="../js/Backendjs/AdmMgmt.js"></script>

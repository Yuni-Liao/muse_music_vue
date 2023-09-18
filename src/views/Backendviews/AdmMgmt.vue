<template>
    <div class="admin_table_box">
        <h1>管理員管理</h1>
        <Table size="large" highlight-row stripe class="admin_table cellHeight" width="1200" :columns="columns"
            :data="data">
            <template #deleteBtn="{ row }">
                <fontAwesome @click="deleteBtn()" :icon="['fa', 'trash']" style="cursor: pointer;" />
            </template>
        </Table>
        <div class="btn_box">
            <Button type="primary" @click="createAdmin()" class="admin_add" style="margin: 50px 0px;">新增</Button>
        </div>
    </div>

    <!-- 新增管理員帳號 -->
    <Modal v-model="modal" title="新增管理員帳號" width="300" okText="新增">
        <p>填寫管理員資料!!!!</p>
    </Modal>
</template>
<!-- 刪除按鈕功能要寫, 新增管理員內容也要調整為表單樣式-->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/admmgmt.scss";
</style>
<script src="../js/Backendjs/AdmMgmt.js"></script>

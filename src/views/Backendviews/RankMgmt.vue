<template>
    <div class="rankmgmt_box">
        <h1>網站資訊管理 | 排行榜管理</h1>
        <Table highlight-row stripe size="large" class="rankmgmt_table" width="1200" height="550" :columns="columns"
            :data="data">
            <template #editBtn="{ row }">
                <Button @click="editBtn()">
                    <fontAwesome :icon="['far', 'pen-to-square']" />
                </Button>
            </template>
        </Table>
    </div>
</template>
<!-- 補 編輯排行按鈕、搜尋框、新增按鈕、分頁按鈕-vue動態改變內容、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/rankmgmt.scss";
</style>
<script src="../js/Backendjs/RankMgmt.js"></script>

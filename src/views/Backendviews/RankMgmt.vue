<template>
    <div class="rankmgmt_box">
        <h1>網站資訊管理 | 排行榜管理</h1>
        <Button type="primary" @click="addRank()" style="width:100px; margin-bottom: 1%;margin-left: 65%;">編輯排行</Button>
        <Table highlight-row stripe size="large" class="rankmgmt_table cellHeight" width="1200" height="700"
            :columns="columns" :data="data">
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
</template>
<!-- 補 編輯排行按鈕、搜尋框、新增按鈕、分頁按鈕-vue動態改變內容、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/rankmgmt.scss";
</style>
<script src="../js/Backendjs/RankMgmt.js"></script>

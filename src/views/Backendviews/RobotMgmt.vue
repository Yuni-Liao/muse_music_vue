<template>
    <div class="robotmgmt_box">
        <h1>網站資訊管理 | 機器人管理</h1>
        <Button type="primary" @click="addfaqBtn()" style="width:100px; margin-bottom: 1%;margin-left: 70%;">新增問題</Button>
        <Table highlight-row stripe class="robotmgmt_table cellHeight" width="1200" :columns="columns" :data="data">
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
            <template #deleteBtn="{ row }">
                <fontAwesome @click="deleteBtn()" :icon="['fa', 'trash']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
</template>

<!-- 補上 新增按鈕、分頁按鈕、彈跳視窗、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/robotmgmt.scss";
</style>
<script src="../js/Backendjs/RobotMgmt.js"></script>

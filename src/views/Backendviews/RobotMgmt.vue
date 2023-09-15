<template>
    <div class="robotmgmt_box">
        <h1>網站資訊管理 | 機器人管理</h1>
        <Table highlight-row stripe class="robotmgmt_table" width="1200" height="550" :columns="columns" :data="data">
            <template #editBtn="{ row }">
                <Button @click="editBtn()">
                    <fontAwesome :icon="['far', 'pen-to-square']" />
                </Button>
            </template>
            <template #deleteBtn="{ row }">
                <Button @click="deleteBtn()">
                    <fontAwesome :icon="['fa', 'trash']" />
                </Button>
            </template>
        </Table>
    </div>
</template>

<!-- 補上 新增按鈕、分頁按鈕、彈跳視窗、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/robotmgmt.scss";
</style>
<script src="../js/Backendjs/RobotMgmt.js"></script>

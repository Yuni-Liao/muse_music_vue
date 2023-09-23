<template>
    <div class="ordermgmt_box">
        <h1>周邊販售管理 | 訂單管理</h1>
        <Input v-model="value3" placeholder="輸入訂單編號或會員" style="width: 180px; margin-bottom: 1%; margin-left: 70%;">
        <Input v-model="value" />
        <template #append>
            <Button icon="ios-search" @click="orderSearchBtn()" style="background-color: #515a6e; color: #fff;"></Button>
        </template>
        </Input>
        <Table highlight-row stripe class="order_mgmt_table cellHeight" width="1000" :columns="columns" :data="data">
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
</template>
<!-- 圖標統一先放編輯的, 要寫判斷, 決定給哪個圖標 -->
<!-- 下拉篩選單還沒做 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/ordermgmt.scss";
</style>
<script src="../js/Backendjs/OrderMgmt.js"></script>

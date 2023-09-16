<template>
    <div class="ordermgmt_box">
        <h1>周邊販售管理 | 訂單管理</h1>
        <Table highlight-row stripe class="order_mgmt_table cellHeight" width="1200" height="550" :columns="columns"
            :data="data">
            <template #editBtn="{ row }">
                <Button @click="editBtn()">
                    <fontAwesome :icon="['far', 'pen-to-square']" />
                </Button>
            </template>
        </Table>
    </div>
</template>
<!-- 圖標統一先放編輯的, 要寫判斷, 決定給哪個圖標 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/ordermgmt.scss";
</style>
<script src="../js/Backendjs/OrderMgmt.js"></script>

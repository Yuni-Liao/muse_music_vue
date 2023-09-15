<template>
    <div class="prodmgmt_box">
        <h1>周邊販售管理 | 商品管理</h1>
        <Table highlight-row stripe class="prodmgmt_table" width="1200" height="550" :columns="columns" :data="data">
            <template #upDownBtn="{ row }">
                <Button @click="upDownBtn()">
                    上/下架
                </Button>
            </template>
            <template #editBtn="{ row }">
                <Button @click="editBtn()">
                    <fontAwesome :icon="['far', 'pen-to-square']" />
                </Button>
            </template>
        </Table>
    </div>
</template>

<!-- 補上/下架按鈕、搜尋框、新增按鈕、分頁按鈕、下拉式選單按鈕、調整字距 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/prodmgmt.scss";
</style>
<script src="../js/Backendjs/ProdMgmt.js"></script>

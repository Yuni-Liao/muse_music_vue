<template>
    <div class="prodmgmt_box">
        <h1>周邊販售管理 | 商品管理</h1>
        <!-- 以下是新增欄位 -->
        <Button type="primary" @click="addProdBtn()" style="width:100px; margin-bottom: 1%;margin-left: 70%;">新增商品</Button>

        <!--以下是搜尋欄位-->
        <Input v-model="value3" placeholder="輸入商品名稱" style="width: 180px; margin-bottom: 1%; margin-left: 70%;"
            id="prod_search">
        <Input v-model="value" />
        <template #append>
            <Button icon="ios-search" @click="prodSearchBtn()" style="background-color: #515a6e; color: #fff;"></Button>
        </template>
        </Input>

        <!-- 以下是表格資料區 -->
        <Table highlight-row stripe class="prodmgmt_table cellHeight" width="1000" :columns="columns" :data="productData">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn(row)" true-color="#13ce66" false-color="#ff4949" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editProd(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>

</template>

<!-- 補分頁按鈕、下拉式選單按鈕、調整字距 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/prodmgmt.scss";
</style>
<script src="../js/Backendjs/ProdMgmt.js"></script>

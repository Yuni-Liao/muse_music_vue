<template>
    <div class="prodmgmt_box">
        <h1>周邊販售管理 | 商品管理</h1>
        <Button type="primary" @click="addProdBtn()" style="width:100px; margin-bottom: 1%;margin-left: 65%;">新增商品</Button>
        <Input v-model="value3" placeholder="輸入商品編號或名稱" style="width: 180px; margin-bottom: 1%; margin-left: 65%;"
            id="prod_search">
        <Input v-model="value" />
        <template #append>
            <Button icon="ios-search" @click="prodSearchBtn()" style="background-color: #515a6e; color: #fff;"></Button>
        </template>
        </Input>
        <Table highlight-row stripe class="prodmgmt_table cellHeight" width="1200" height="550" :columns="columns"
            :data="data">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn()" true-color="#13ce66" false-color="#ff4949" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
</template>

<!-- 補分頁按鈕、下拉式選單按鈕、調整字距 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/prodmgmt.scss";
</style>
<script src="../js/Backendjs/ProdMgmt.js"></script>

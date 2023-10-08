<template>
    <div class="prodmgmt_box">
        <h1>周邊販售管理 | 商品管理</h1>
        <!-- 以下是新增欄位 -->
        <!-- <Button type="primary" @click="addProdBtn()" style="width:100px; margin-bottom: 1%;margin-left: 70%;">新增商品</Button> -->

        <!--以下是搜尋欄位-->
        <!-- <Input v-model="value3" placeholder="輸入商品編號或名稱" style="width: 180px; margin-bottom: 1%; margin-left: 70%;"
            id="prod_search">
        <Input v-model="value" />
        <template #append>
            <Button icon="ios-search" @click="prodSearchBtn()" style="background-color: #515a6e; color: #fff;"></Button>
        </template>
        </Input> -->

        <!-- 以下是表格資料區 -->
        <Table highlight-row stripe class="prodmgmt_table cellHeight" width="1000" :columns="columns" :data="productData">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn(row)" 
                true-color="#13ce66" false-color="#ff4949" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editProd(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>

    <!-- 新增輪播彈窗 還沒弄 -->
    <!-- <Modal v-model:modelValue="editBox" title="編輯" width="300" okText="確認" @on-ok="prodEdit()"> -->
        <!-- 商品id -->
        <!-- <input type="text" name="prod_id" v-model="editItem.prod_id" style="display: none;"> -->
        <!-- 商品編號 -->
        <!-- <p>商品編號:</p>
        <input type="text" id="nameValue" name="prod_count" v-model="editItem.prod_id"
            style="margin-bottom:10px; width: 200px;"> -->
        <!-- 商品名稱 -->
        <!-- <p>商品名稱:</p><input type="text" id="prod_name" name="link" v-model="editItem.prod_name"
            style="margin-bottom:10px; width: 200px;"> -->
        <!-- 商品售價 -->
        <!-- <p>商品售價:</p><input type="text" id="prod_price" name="link" v-model="editItem.prod_price"
            style="margin-bottom:10px; width: 200px;"> -->
        <!-- 更新時間 -->
        <!-- 上傳商品圖片 -->
        <!-- <Upload type="drag" name="prod_pic" id="uploadImg" v-model="editItem.prod_pic"
            :action="`${$store.state.phpPublicPath}editProd.php`">
            <div style="padding: 20px 0">
                <Icon size="100" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
            </div>
        </Upload> 
    </Modal>-->
</template>

<!-- 補分頁按鈕、下拉式選單按鈕、調整字距 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/prodmgmt.scss";
</style>
<script src="../js/Backendjs/ProdMgmt.js"></script>

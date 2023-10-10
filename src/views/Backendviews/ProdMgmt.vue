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
                <font-awesome @click="editProd(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
    <!-- 以下是跳窗編輯區 -->
    <Modal v-model:modelValue="editBox" title="編輯商品" width="300" okText="確認" @on-ok="prodEdit">
        <Form enctype="multipart/form-data">
            <!-- 編輯的內容 -->
            <p>商品編號:</p>
            <input type="text" id="prod_id" name="id" v-model="editItem.prod_id"
                style="margin-bottom: 10px; width: 268px;" />
            <p>商品名稱:</p>
            <input type="text" id="prod_name" name="name" v-model="editItem.prod_name"
                style="margin-bottom: 10px; width: 268px;" />
            <p>商品售價:</p>
            <input type="text" id="prod_price" name="name" v-model="editItem.prod_price"
                style="margin-bottom: 10px; width: 268px;" />
            <p>上架時間:</p>
            <input type="text" id="prod_date" name="name" v-model="editItem.prod_date"
                style="margin-bottom: 10px; width: 268px;" />
            <p>商品分類:</p>
            <Select v-model="editItem.prod_type" style="width: 268px;">
                <option value="男藝人">男藝人</option>
                <option value="女藝人">女藝人</option>
                <option value="錄音帶">錄音帶</option>
                <option value="樂團團體">樂團團體</option>
            </Select>
            <p>商品詳情:</p>
            <textarea id="prod_inf" name="name" v-model="editItem.prod_inf"
                style="margin-bottom: 10px; width: 268px; height: 80px;"></textarea>
            <p>商品介紹:</p>
            <textarea id="prod_int" name="name" v-model="editItem.prod_int"
                style="margin-bottom: 10px; width: 268px; height: 80px;"></textarea>
            <Upload type="drag" name="img" id="uploadImg" :action="`${$store.state.phpPublicPath}editIndexCarousel.php`"
                accept="image/*" @change="imgChange">
                <div style="padding: 20px 0;">
                    <Icon size="100" style="color: #3399ff"></Icon>
                    <p>點擊/拖曳上傳商品圖片</p>
                </div>
            </Upload>
        </Form>
    </Modal>
</template>

<!-- 補分頁按鈕、下拉式選單按鈕、調整字距 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/prodmgmt.scss";
</style>
<script src="../js/Backendjs/ProdMgmt.js"></script>

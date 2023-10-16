<template>
    <div class="homecarousel_box">
        <h1>網站資訊管理 | 首頁輪播管理</h1>
        <Table highlight-row stripe class="homecarousel_table cellHeight" width="1000" :columns="columns"
            :data="carouselItem">
            <template #upDownBtn="{ row }">
                <Switch v-model="row.status" @on-change="toggleBtn(row)" false-color="#ff4949" true-color="#13ce66"
                    :before-change="confirmBeforeChange" true-value="1" false-value="0" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editCarousel(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
        <div class="btn_box">
            <Button type="primary" @click="createCar()" class="car_add" style="margin: 50px 0px;">新增</Button>
        </div>
    </div>
    <!-- 新增輪播彈窗 -->
    <div v-if="addBox == true" class="addCar obj_Radius">
        <p>輪播名稱:</p>
        <input type="text" id="name" name="name" v-model="addItem.name" class="obj_Radius"
            style="margin-bottom:10px; width: 250px;">
        <p>連結網址:</p><input type="text" id="carLink" name="carLink" class="obj_Radius" v-model="addItem.link"
            style="margin-bottom:10px; width: 250px;">
        <p>圖片:</p><input type="file" name="addImg" id="addFileImg" class="obj_Radius">
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="saveAddCarBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>
    <!-- 編輯輪播彈窗 -->
    <div v-if="editBox == true" class="editcarousel obj_Radius">
        <p>輪播名稱:</p>
        <input type="text" id="name" name="name" v-model="editItem.name" class="obj_Radius"
            style="margin-bottom:10px; width: 250px;">
        <p>連結網址:</p><input type="text" id="bannerLink" name="link" class="obj_Radius" v-model="editItem.link"
            style="margin-bottom:10px; width: 250px;">
        <p>圖片:</p><input type="file" name="img" id="fileImg" class="obj_Radius" @change="imgChange($event)">
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="saveBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/homecarousel.scss";
</style>
<script src="../js/Backendjs/HomeCarousel.js"></script>

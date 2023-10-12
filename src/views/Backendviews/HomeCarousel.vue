<template>
    <div class="homecarousel_box">
        <h1>網站資訊管理 | 首頁輪播管理</h1>
        <Table highlight-row stripe class="homecarousel_table cellHeight" width="1000" :columns="columns"
            :data="carouselItem">
            <template #upDownBtn="{ row }">
                <Switch @on-change="upDownBtn(row)" :false-color="editItem.status === 0 ? '#ff4949' : '#13ce66'"
                    :true-color="editItem.status === 1 ? '#13ce66' : '#ff4949'" :before-change="confirmBeforeChange" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editCarousel(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
    <!-- 編輯輪播彈窗 -->
    <div v-if="editBox == true" class="editcarousel obj_Radius">
        <!-- 更新輪播名稱 -->
        <p>輪播名稱:</p>
        <input type="text" id="name" name="name" v-model="editItem.name" class="obj_Radius"
            style="margin-bottom:10px; width: 250px;">
        <!-- 更新網址 -->
        <p>連結網址:</p><input type="text" id="bannerLink" name="link" class="obj_Radius" v-model="editItem.link"
            style="margin-bottom:10px; width: 250px;">
        <!-- 更新圖片 -->
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

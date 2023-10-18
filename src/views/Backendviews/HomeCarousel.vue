<template>
    <div class="homecarousel_box">
        <h1>網站資訊管理 | 首頁輪播管理</h1>
        <Table highlight-row stripe class="homecarousel_table cellHeight" width="1000" height="450" :columns="columns"
            :data="carouselItem">
            <template #upDownBtn="{ row }">
                <Switch v-model="row.status" @on-change="toggleBtn(row)" false-color="#ff4949" true-color="#13ce66"
                    :before-change="confirmBeforeChange" true-value="1" false-value="0" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editCarousel(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
            <template #deleteBtn="{ row }">
                <fontAwesome @click="deleteBtn(row)" :icon="['fa', 'trash']" style="cursor: pointer;" />
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
        <label for="addFileImg" class="uploadblock">
            <div>
                <fontAwesome v-if="!addItem.src" :icon="['fa', 'cloud-arrow-up']"
                    style="cursor: pointer; width: 50%; height: 100%; padding: 6%;" />
                <img v-else-if="!addItem.src" :src="`${publicPath}dataimage/index/carousel/${addItem.img}`" />
                <img v-else :src="addItem.src" />
                <input @change="imgAdd($event)" style="display: none;" type="file" id="addFileImg" name="img" />
            </div>
        </label>

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
        <label for="fileImg" class="uploadblock">
            <div>
                <p v-if="editItem.src == null">上傳圖片
                    <fontAwesome :icon="['far', 'cloud-arrow-up']" />
                </p>
                <img v-else-if="!editItem.src" :src="`${publicPath}dataimage/index/carousel/${editItem.img}`">
                <img v-else :src="editItem.src" />
                <input @change="imgChange($event)" style="display: none;" type="file" id="fileImg" name="img" />
            </div>
        </label>
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

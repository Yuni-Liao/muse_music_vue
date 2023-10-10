<template>
    <div class="homecarousel_box">
        <h1>網站資訊管理 | 首頁輪播管理</h1>
        <!-- <Button type="primary" @click="addBannerBtn()"
            style="width:100px; margin-bottom: 1%;margin-left: 70%;">新增輪播</Button> -->
        <Table highlight-row stripe class="homecarousel_table cellHeight" width="1000" :columns="columns"
            :data="carouselItem">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn(row)" true-color="#13ce66" false-color="#ff4949" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editCarousel(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
    <!-- 新增輪播彈窗 -->
    <!-- <Modal v-model="bannerBox" title="新增輪播圖" width="300" okText="新增">
        <p>上傳輪播圖!!!!</p>
        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon size="100" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
            </div>
        </Upload>
    </Modal> -->
    <Modal v-model:modelValue="editBox" title="編輯" width="300" okText="確認" @on-ok="confirmEdit()">
        <Form enctype="multipart/form-data">
            <!-- 輪播id -->
            <input type="text" name="car_id" v-model="editItem.car_id" style="display: none;">
            <!-- 更新輪播名稱 -->
            <p>輪播名稱:</p>
            <input type="text" id="nameValue" name="name" v-model="editItem.nameValue"
                style="margin-bottom:10px; width: 250px;">
            <!-- 更新網址 -->
            <p>連結網址:</p><input type="text" id="bannerLink" name="link" v-model="editItem.bannerLink"
                style="margin-bottom:10px; width: 250px;">
            <!-- 上傳圖片 - 還沒寫完 -->
            <Upload type="drag" name="img" id="uploadImg" :action="`${$store.state.phpPublicPath}editIndexCarousel.php`"
                accept="image/*" @change="imgChange">
                <div style="padding: 20px 0">
                    <Icon size="100" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>
        </Form>
    </Modal>
</template>
<!-- 補搜尋框 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/homecarousel.scss";
</style>
<script src="../js/Backendjs/HomeCarousel.js"></script>

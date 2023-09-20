<template>
    <div class="homecarousel_box">
        <h1>網站資訊管理 | 首頁輪播管理</h1>
        <Button type="primary" @click="addBannerBtn()"
            style="width:100px; margin-bottom: 1%;margin-left: 62%;">新增輪播</Button>
        <Table highlight-row stripe class="homecarousel_table cellHeight" width="1200" :columns="columns" :data="data">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn()" true-color="#13ce66" false-color="#ff4949" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>

    <!-- 新增輪播彈窗 -->
    <Modal v-model="bannerBox" title="新增輪播圖" width="300" okText="新增">
        <p>上傳輪播圖!!!!</p>
        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon size="100" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
            </div>
        </Upload>
    </Modal>
</template>
<!-- 補搜尋框 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/homecarousel.scss";
</style>
<script src="../js/Backendjs/HomeCarousel.js"></script>

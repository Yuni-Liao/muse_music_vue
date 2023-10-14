<template>
    <div class="muse_event_box">
        <h1>網站資訊管理 | 音樂快訊管理</h1>
        <Table highlight-row stripe class="muse_event_table cellHeight" width="1000" :columns="columns" :data="newsData">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn()" true-color="#13ce66" false-color="#ff4949" />
            </template>
            <template #editBtn="{ row }">
                <fontAwesome @click=" editNews(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
            <template>
                <Space>
                    <Switch size="large" />
                    <Switch />
                    <Switch size="small" />
                </Space>
            </template>
        </Table>
    </div>

    <Modal v-model:modelValue="editBox" title="編輯活動" width="500" okText="確認" @on-ok="newsEdit()">
        <Form enctype="multipart/form-data">
            <label for="news_id" class="label">活動編號:</label>
            <input type="text" id="news_id" name="news_id" v-model="editItem.news_id" style="margin-bottom: 10px; width: 468px;">
            <label for="news_name" class="label">活動名稱:</label>
            <input type="text" id="news_name" name="news_name" v-model="editItem.news_name" style="margin-bottom: 10px; width: 468px;">
            <label for="news_date" class="label">活動日期:</label>
            <input type="text" id="news_date" name="news_date" v-model="editItem.news_date" style="margin-bottom: 10px; width: 468px;">
            <label for="news_place" class="label">活動地點:</label>
            <input type="text" id="news_place" name="news_place" v-model="editItem.news_place" style="margin-bottom: 10px; width: 468px;">
            
            <p>活動內容:</p>
            <textarea id="prod_int" name="name" v-model="editItem.news_con"
                style="margin-bottom: 10px; width: 468px; height: 80px;"></textarea>
                <label for="news_area" class="label">地區:</label>
                <select id="news_area" name="news_area" v-model="editItem.news_area" style="margin-bottom: 10px; width: 268px;">
                <option value="北部">北部</option>
                <option value="中部">中部</option>
                <option value="南部">南部</option>
                <option value="東部">東部</option>
                </select>

            <Upload type="drag" name="img" id="uploadImg">
                <div style="padding: 20px 0">
                    <Icon size="100" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>
        </Form>
    </Modal>
</template>
<!-- 補上/下架按鈕、搜尋框、新增按鈕、分頁按鈕、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/museevent.scss";
</style>
<script src="../js/Backendjs/MuseEvent.js"></script>

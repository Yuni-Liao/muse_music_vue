<template>
    <div class="muse_event_box">
        <h1>網站資訊管理 | 音樂快訊管理</h1>

        <!-- 新增活動 -->
        <Button type="primary" @click="addNews(row)" style="width:100px; margin-bottom: 1%;margin-left: 60%;">新增活動</Button>

        <!-- 新增活動彈窗 -->
        <div v-if="addBox == true" class="addnews obj_Radius">

            <label for="news_name" class="label">活動名稱:</label>
            <input type="text" id="news_name" name="name" v-model="addItem.add_news_name"
                style="margin-bottom: 10px; width: 468px;" />
            <label for="singer" class="label">歌手名稱:</label>
            <input type="text" id="singer" name="name" v-model="addItem.add_singer"
                style="margin-bottom: 10px; width: 468px;" />
            <label for="news_date" class="label">活動日期:</label>
            <input type="date" id="news_date" name="name" v-model="addItem.add_news_date"
                style="margin-bottom: 10px; width: 468px;" />

            <label for="news_place" class="label">活動地點:</label>
            <input type="text" id="news_place" name="name" v-model="addItem.add_news_place"
                style="margin-bottom: 10px; width: 468px;" />
            <p>活動內容:</p>
            <textarea id="news_con" name="name" v-model="addItem.add_news_con"
                style="margin-bottom: 10px; width: 468px; height: 80px;"></textarea>

            <label for="news_area" class="label">地區:</label>
            <select id="news_area" name="news_area" v-model="addItem.add_news_area"
                style="margin-bottom: 10px; width: 268px;">
                <option value="北部">北部</option>
                <option value="中部">中部</option>
                <option value="南部">南部</option>
                <option value="東部">東部</option>
            </select>

            <p>圖片:</p><input type="file" name="addFileImg" id="addFileImg" class="obj_Radius">

            <div class="btngroup">
                <button @click="closeAddBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
                <button @click="saveAddBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
            </div>
        </div>


        <Table highlight-row stripe class="muse_event_table cellHeight" width="1000" :columns="columns" :data="newsData">
            <template #editBtn="{ row }">
                <fontAwesome @click=" editNews(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
            <template #deleteBtn="{ row }">
                <fontAwesome @click="deleteBtn(row)" :icon="['fa', 'trash']" style="cursor: pointer;" />
            </template>
            <template>
                <Space>
                    <Switch size="large" />
                    <Switch />
                    <Switch size="small" />
                </Space>
            </template>
        </Table>

        <!-- 編輯活動彈窗 -->
        <div v-if="editBox == true" class="editnews obj_Radius">
            <Form enctype="multipart/form-data">
                <label for="news_id" class="label">活動編號:</label>
                <input type="text" id="news_id" name="news_id" v-model="editItem.news_id"
                    style="margin-bottom: 10px; width: 468px;">
                <label for="singer" class="label">歌手:</label>
                <input type="text" id="singer" name="singer" v-model="editItem.singer"
                    style="margin-bottom: 10px; width: 468px;">
                <label for="news_name" class="label">活動名稱:</label>
                <input type="text" id="news_name" name="news_name" v-model="editItem.news_name"
                    style="margin-bottom: 10px; width: 468px;">
                <label for="news_date" class="label">活動日期:</label>
                <input type="date" id="news_date" name="news_date" v-model="editItem.news_date"
                    style="margin-bottom: 10px; width: 468px;">
                <label for="news_place" class="label">活動地點:</label>
                <input type="text" id="news_place" name="news_place" v-model="editItem.news_place"
                    style="margin-bottom: 10px; width: 468px;">

                <p>活動內容:</p>
                <textarea id="news_con" name="name" v-model="editItem.news_con"
                    style="margin-bottom: 10px; width: 468px; height: 80px;"></textarea>
                <label for="news_area" class="label">地區:</label>
                <select id="news_area" name="news_area" v-model="editItem.news_area"
                    style="margin-bottom: 10px; width: 268px;">
                    <option value="北部">北部</option>
                    <option value="中部">中部</option>
                    <option value="南部">南部</option>
                    <option value="東部">東部</option>
                </select>
                <p>圖片:</p><input type="file" name="img" id="fileImg" class="obj_Radius" @change="imgChange($event)">
            </Form>

            <div class="btngroup">
                <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
                <button @click="saveEditBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
            </div>
        </div>

        <!-- 刪除彈窗 -->
        <div v-if="deleteBox == true" class="deletenews obj_Radius">
            <p>確定刪除嗎？</p>
            <div class="btngroup">
                <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
                <button @click="deleteSaveBtn()" class="saveBtn default_Btn obj_Radius">確定</button>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/museevent.scss";
</style>
<script src="../js/Backendjs/MuseEvent.js"></script>

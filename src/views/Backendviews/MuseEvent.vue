<template>
    <div class="muse_event_box">
        <h1>網站資訊管理 | 音樂快訊管理</h1>

        <!-- 新增活動 -->
        <Button type="primary" @click="addNews(row)" style="width:100px; margin-bottom: 1%;margin-left: 52%;">新增活動</Button>

        <!-- 新增活動視窗 -->
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
        <select id="news_area" name="news_area" v-model="addItem.add_news_area" style="margin-bottom: 10px; width: 268px;">
            <option value="北部">北部</option>
            <option value="中部">中部</option>
            <option value="南部">南部</option>
            <option value="東部">東部</option>
        </select>
        
        <!-- <p>圖片:</p>
        <div class="uploadblock">
            <label for="fileimg">
                <p v-if="addItem.news_pic == null">上傳圖片</p>
                <p v-else>{{ addItem.news_pic }}</p>

                <input @change="img2($event)" type="file" id="fileimg" name="img" style="display: none" />
                <img v-if="addItem.news_pic == null" :src="`${publicPath}image/ShopImage/shop_album0.jpg`" />
                <img v-else :src="`${publicPath}image/ShopImage/${addItem.news_pic}`" />
            </label>
        </div> -->

        <div class="btngroup">
            <button @click="closeAddBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="saveAddBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>


        <Table highlight-row stripe class="muse_event_table cellHeight" width="1000" :columns="columns" :data="newsData">
            <template #upDownBtn="{ row }">
                <Switch @click="upDownBtn(row)" true-color="#13ce66" false-color="#ff4949" />
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

    <div v-if="editBox == true"  class="editnews obj_Radius">
        <Form enctype="multipart/form-data">
            <label for="news_id" class="label">活動編號:</label>
            <input type="text" id="news_id" name="news_id" v-model="editItem.news_id" style="margin-bottom: 10px; width: 468px;">
            <label for="news_name" class="label">活動名稱:</label>
            <input type="text" id="news_name" name="news_name" v-model="editItem.news_name" style="margin-bottom: 10px; width: 468px;">
            <label for="news_date" class="label">活動日期:</label>
            <input type="date" id="news_date" name="news_date" v-model="editItem.news_date" style="margin-bottom: 10px; width: 468px;">
            <label for="news_place" class="label">活動地點:</label>
            <input type="text" id="news_place" name="news_place" v-model="editItem.news_place" style="margin-bottom: 10px; width: 468px;">
            
            <p>活動內容:</p>
            <textarea id="news_con" name="name" v-model="editItem.news_con"
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

        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="saveBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/museevent.scss";
</style>
<script src="../js/Backendjs/MuseEvent.js"></script>

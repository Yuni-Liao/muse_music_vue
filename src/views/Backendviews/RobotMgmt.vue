<template>
    <div class="robotmgmt_box">
        <h1>網站資訊管理 | 機器人管理</h1>
        <Button type="primary" @click="addBtn(row)"
            style="width:100px; margin-bottom: 2%; margin-left: 80%;">新增問題</Button>
        <Table highlight-row stripe class="robotmgmt_table cellHeight" width="1150" height="500" :columns="columns" :data="faqData">
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
            <template #deleteBtn="{ row }">
                <fontAwesome @click="deleteBtn(row)" :icon="['fa', 'trash']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>

    <!-- 編輯彈窗 -->
    <div v-if="editBox == true" class="editfaq obj_Radius">
        <p>編號：</p>
        <input type="text" id="faq_id" name="name" v-model="editItem.faq_id" class="obj_Radius"
            style="margin-bottom:10px; width: 368px;" readonly>
        <p>問題：</p><input type="text" id="que" name="name" class="obj_Radius" v-model="editItem.que"
            style="margin-bottom:10px; width: 368px; ">
        <p>回答：</p><input type="text" id="ans" name="name" class="obj_Radius" v-model="editItem.ans"
            style="margin-bottom:10px; width: 368px;">
        <p>短回答（機器人使用）：</p><input type="text" id="short_ans" name="name" class="obj_Radius" v-model="editItem.short_ans"
            style="margin-bottom:10px; width: 368px;">
        <p>關鍵字（不需使用間隔）：</p><input type="text" id="keyword" name="name" class="obj_Radius" v-model="editItem.keyword"
            style="margin-bottom:10px; width: 368px;">
            
        <p>預設開合（0：關閉，1：打開）：</p><input type="text" id="open" name="name" class="obj_Radius" v-model="editItem.open"
            style="margin-bottom:10px; width: 368px;">
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="editSaveBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>

    <!-- 新增彈窗 -->
    <div v-if="addBox == true" class="addfaq obj_Radius">
        <p>問題：</p><input type="text" id="add_que" name="name" v-model="addItem.add_que" class="obj_Radius"
            style="margin-bottom:10px; width: 368px; ">
        <p>回答：</p><input type="text" id="add_ans" name="name" v-model="addItem.add_ans" class="obj_Radius"
            style="margin-bottom:10px; width: 368px;">
        <p>短回答（機器人使用）：</p><input type="text" id="add_short_ans" name="name" v-model="addItem.add_short_ans" class="obj_Radius"
            style="margin-bottom:10px; width: 368px;">
        <p>關鍵字（不需使用間隔）：</p><input type="text" id="add_keyword" name="name" v-model="addItem.add_keyword" class="obj_Radius"
            style="margin-bottom:10px; width: 368px;">
        <p>預設開合（0：關閉，1：打開）：</p><input type="text" id="add_open" name="name"  v-model="addItem.add_open" class="obj_Radius"
            style="margin-bottom:10px; width: 368px;">
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="addsaveBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>

    <!-- 刪除彈窗 -->
    <div v-if="deleteBox == true" class="deletefaq obj_Radius">
        <p>確定刪除嗎？</p>
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="deleteSaveBtn()" class="saveBtn default_Btn obj_Radius">確定</button>
        </div>
    </div>

</template>

<!-- 補上 分頁按鈕、彈跳視窗、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/robotmgmt.scss";
</style>
<script src="../js/Backendjs/RobotMgmt.js"></script>

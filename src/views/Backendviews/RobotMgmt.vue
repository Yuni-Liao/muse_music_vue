<template>
    <div class="robotmgmt_box">
        <h1>網站資訊管理 | 機器人管理</h1>
        <Button type="primary" @click="addfaqBtn(row)"
            style="width:100px; margin-bottom: 1%;margin-left: 70%;">新增問題</Button>
        <Table highlight-row stripe class="robotmgmt_table cellHeight" width="1200" :columns="columns" :data="faqData">
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
        <p>問題：</p><input type="text" id="que" name="name" class="obj_Radius scope" v-model="editItem.que"
            style="margin-bottom:10px; width: 368px; ">
        <p>回答：</p><input type="text" id="ans" name="name" class="obj_Radius scope" v-model="editItem.ans"
            style="margin-bottom:10px; width: 368px;">
        <p>短回答（機器人）：</p><input type="text" id="short_ans" name="name" class="obj_Radius scope" v-model="editItem.short_ans"
            style="margin-bottom:10px; width: 368px;">
        <p>關鍵字（無須加間隔）：</p><input type="text" id="keyword" name="name" class="obj_Radius" v-model="editItem.keyword"
            style="margin-bottom:10px; width: 368px;">
            
        <p>預設開合（0：關閉，1：打開）：</p><input type="text" id="open" name="name" class="obj_Radius" v-model="editItem.open"
            style="margin-bottom:10px; width: 368px;">
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="saveBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>
</template>

<!-- 補上 分頁按鈕、彈跳視窗、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/robotmgmt.scss";
</style>
<script src="../js/Backendjs/RobotMgmt.js"></script>

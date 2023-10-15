<template>
    <div class="msgmgmt_box">
        <h1>檢舉留言管理</h1>
        <Table ref="selection" highlight-row stripe class="msgmgmt_table cellHeight" width="1000" :columns="columns"
            :data="msgDate">
            <!-- 下架按鈕 -->
            <template #rejectBtn="{ row }">
                <Button type="error" @click="acceptBtn(row)">
                    下架
                </Button>
            </template>

            <!-- 駁回按鈕 -->
            <template  #deleteBtn="{ row }">
                <Button type="success" @click="deleteBtn(row) ">
                    駁回
                </Button>
            </template>
        </Table>

        <!-- 批次按鈕 -->
        <space :size="size" style="margin: 30px 0px;">
           
            <Button type="success" @click="alldelete(row)">批次駁回</Button>
            <Button type="error" @click="allAccept(row)">批次下架</Button>
        </space>
    </div>

    <!-- 下架彈窗 -->
    <div v-if="deleteBox == true" class="deleteRep obj_Radius">
        <p>確定駁回檢舉嗎？</p>
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="deleteSaveBtn()" class="saveBtn default_Btn obj_Radius">確定</button>
        </div>
    </div>
</template>



<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/msgmgmt.scss";
</style>
<script src="../js/Backendjs/MsgMgmt.js"></script>

<template>
    <div class="msgmgmt_box">
        <h1>檢舉留言管理</h1>
        <Table ref="selection" highlight-row stripe class="msgmgmt_table" width="1200" height="550" :columns="columns"
            :data="data">
            <template #acceptBtn="{ row }">
                <Button @click="acceptBtn()">
                    下架
                </Button>
            </template>
            <template #rejectBtn="{ row }">
                <Button @click="rejectBtn()">
                    駁回
                </Button>
            </template>
        </Table>
        <div class="btngroup">
            <button @click="allAccept()" class="admin_add obj_Radius default_Btn btn_S_NoBorder">批次下架</button>
            <button @click="allReject()" class="admin_add obj_Radius default_Btn btn_S_NoBorder">批次駁回</button>
        </div>
    </div>
</template>



<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/msgmgmt.scss";
</style>
<script src="../js/Backendjs/MsgMgmt.js"></script>

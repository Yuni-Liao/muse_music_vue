<template>
    <div class="msgmgmt_box">
        <h1>檢舉留言管理</h1>
        <Table ref="selection" highlight-row stripe class="msgmgmt_table cellHeight" width="1200" height="550"
            :columns="columns" :data="data">
            <template #acceptBtn="{ row }">
                <Button type="error" @click="acceptBtn()">
                    下架
                </Button>
            </template>
            <template #rejectBtn="{ row }">
                <Button type="success" @click="rejectBtn()">
                    駁回
                </Button>
            </template>
        </Table>
        <space :size="size">
            <Button type="error" @click="allAccept()">批次下架</Button>
            <Button type="success" @click="allReject()">批次駁回</Button>
        </space>
    </div>
</template>



<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/msgmgmt.scss";
</style>
<script src="../js/Backendjs/MsgMgmt.js"></script>

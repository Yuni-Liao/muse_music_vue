<template>
    <div class="msgmgmt_box">
        <h1>檢舉留言管理</h1>
        <Table ref="selection" highlight-row stripe class="msgmgmt_table cellHeight" width="1000" :columns="columns" :data="msgDate">
            <template #acceptBtn="{ row }">
                <Button type="error" @click="acceptBtn(row)">
                    下架
                </Button>
            </template>
            <template #rejectBtn="{ row }">
                <Button type="success" @click="rejectBtn(row)">
                    駁回
                </Button>
            </template>
        </Table>
        <space :size="size" style="margin: 30px 0px;">
            <Button type="error" @click="allAccept(row)">批次下架</Button>
            <Button type="success" @click="allReject(row)">批次駁回</Button>
        </space>
    </div>
</template>



<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/msgmgmt.scss";
</style>
<script src="../js/Backendjs/MsgMgmt.js"></script>

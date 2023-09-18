<template>
    <div class="mem_table_box">
        <h1>會員管理</h1>
        <Table size="large" highlight-row stripe class="mem_table cellHeight" width="1200" height="550" :columns="columns"
            :data="data">
            <template #pauseBtn="{ row }">
                <Button type="error" id="pauseBtn" @click="pauseBtn()" v-padding="5">
                    停權
                </Button>
            </template>
            <template #viewBtn="{ row }">
                <Button id="viewBtn" @click="viewBtn()" v-padding="5">
                    查閱
                </Button>
            </template>
        </Table>
        <template>
            <Page :modelValue="2" :total="50" simple />
        </template>
    </div>
</template>
<!--待補 會員內頁、搜尋框、page分頁按鈕 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/memmgmt.scss";
</style>
<script src="../js/Backendjs/MemMgmt.js"></script>

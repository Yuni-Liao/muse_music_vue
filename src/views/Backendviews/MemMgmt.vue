<template>
    <div class="mem_table_box">
        <h1>會員管理</h1>
        <Table size="large" highlight-row stripe class="mem_table" width="1200" height="550" :columns="columns"
            :data="data">
        </Table>
    </div>
</template>
<!-- 部分欄位沒顯示出來,有放在陣列中,要調整 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/memmgmt.scss";
</style>
<script src="../js/Backendjs/MemMgmt.js"></script>

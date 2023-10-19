<template>
    <div class="mem_table_box">
        <h1>會員管理</h1>
        <Input v-model="value3" placeholder="輸入會員編號或帳號" style="width: 180px; margin-bottom: 2%; margin-left: 60%">
        <Input v-model="value" />
        <template #append>
            <Button icon="ios-search" @click="searchMembers()" style="background-color: #515a6e; color: #fff;"></Button>
        </template>
        </Input>
        <Table size="large" highlight-row stripe class="mem_table cellHeight" width="1000" height="510" :columns="columns"
            :data="filteredData">
            <template #pauseBtn="{ row }">
                <Button :type="row.paused ? 'success' : 'error'" @click="togglePause(row)" id="pauseBtn" v-padding="5">
                    {{ row.paused ? '復權' : '停權' }}
                </Button>
            </template>
        </Table>
    </div>
</template>

<!--待補 page分頁按鈕 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/memmgmt.scss";
</style>
<script src="../js/Backendjs/MemMgmt.js"></script>

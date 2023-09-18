<template>
    <div class="songtype_table_box">
        <h1>歌曲管理 | 歌曲類別管理</h1>
        <Input v-model="value3" placeholder="輸入類別編號或名稱" style="width: 180px; margin-bottom: 1%; margin-left: 60%;">
        <Input v-model="value" />
        <template #append>
            <Button icon="ios-search" @click="songTypeSearchBtn()" style="background-color: #515a6e; color: #fff;"></Button>
        </template>
        </Input>
        <Table highlight-row stripe class="songtype_table cellHeight" width="1200" height="350" :columns="columns"
            :data="data">
            <template #editSongTypeBtn="{ row }">
                <fontAwesome @click="editSongTypeBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
    <div class="singlesongtype_table_box">
        <Table highlight-row stripe class="songtype_table cellHeight" width="1200" height="350" :columns="singleSongType"
            :data="singleSongData">
            <template #editSingleSongBtn="{ row }">
                <fontAwesome @click="editSingleSongBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
</template>
<!-- 請照figma核對一下該出現的按鈕~~ -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/songtype.scss";
</style>
<script src="../js/Backendjs/SongType.js"></script>

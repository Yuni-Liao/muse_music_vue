<template>
    <div class="songtype_table_box">
        <h1>歌曲管理 | 歌曲類別管理</h1>
        <Table highlight-row stripe class="songtype_table cellHeight" width="1200" :columns="columns" :data="data">
            <template #editSongTypeBtn="{ row }">
                <Button @click="editSongTypeBtn()">
                    <fontAwesome :icon="['far', 'pen-to-square']" />
                </Button>
            </template>
        </Table>
    </div>
    <div class="singlesongtype_table_box">
        <Table highlight-row stripe class="songtype_table cellHeight" width="1200" height="300" :columns="singleSongType"
            :data="singleSongData">
            <template #editSingleSongBtn="{ row }">
                <Button @click="editSingleSongBtn()">
                    <fontAwesome :icon="['far', 'pen-to-square']" />
                </Button>
            </template>
        </Table>
    </div>
</template>
<!-- 請照figma核對一下該出現的按鈕~~ -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/songtype.scss";
</style>
<script src="../js/Backendjs/SongType.js"></script>

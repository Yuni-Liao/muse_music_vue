<template>
    <div class="song_review_table_box">
        <h1>歌曲管理 | 歌曲審核管理</h1>
        <Table highlight-row stripe class="song_review_table cellHeight" width="1200" height="550" :columns="columns"
            :data="data">
            <template #editBtn="{ row }">
                <Button @click="editBtn()">刪除</Button>
            </template>
        </Table>
    </div>
</template>
<!-- <fontAwesome :icon="['far', 'pen-to-square']" /> -->
<!-- 已經有插入slot-操作的按鈕但是沒出現,要檢查
音樂播放鈕還沒處理,但已有定義 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/songreview.scss";
</style>
<script src="../js/Backendjs/SongReview.js"></script>

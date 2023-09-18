<template>
    <div class="song_review_table_box">
        <h1>歌曲管理 | 歌曲審核管理</h1>
        <Input v-model="value3" placeholder="輸入編號或名稱" style="width: 180px; margin-bottom: 1%; margin-left: 60%;">
        <Input v-model="value" />
        <template #append>
            <Button icon="ios-search" @click="songReviewSearchBtn()"
                style="background-color: #515a6e; color: #fff;"></Button>
        </template>
        </Input>
        <Table highlight-row stripe class="song_review_table cellHeight" width="1200" height="550" :columns="columns"
            :data="data">
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>
</template>
<!--
音樂播放鈕還沒處理,但已有定義 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/songreview.scss";
</style>
<script src="../js/Backendjs/SongReview.js"></script>

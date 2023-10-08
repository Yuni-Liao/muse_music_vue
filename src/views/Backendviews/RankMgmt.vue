<template>
    <div class="rankmgmt_box">
        <h1>網站資訊管理 | 排行榜管理</h1>
        <Button type="primary" @click="addRank()" style="width:100px; margin-bottom: 1%;margin-left: 70%;">編輯排行</Button>

        <Tabs value="name" capture-focus v-width="1000" style="overflow-x: hidden;">
            <TabPane label="單曲排行" name="singleSongRanking" width="1000" height="450">
                <Table highlight-row stripe size="large" class="rankmgmt_table cellHeight" width="1000" height="450"
                    :columns="songColumns" :data="songRankGroup">
                    <template #editBtn="{ row }">
                        <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
                    </template>
                </Table>
            </TabPane>
            <TabPane label="專輯排行" name="albumRanking">
                <Table highlight-row stripe size="large" class="rankmgmt_table cellHeight" width="1000" height="450"
                    :columns="albColumns" :data="albumRankGroup">
                    <template #editBtn="{ row }">
                        <fontAwesome @click="editBtn()" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
                    </template>
                </Table>
            </TabPane>
        </Tabs>
    </div>
</template>
<!-- 補 編輯排行按鈕、搜尋框、新增按鈕、分頁按鈕-vue動態改變內容、調整字距 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/rankmgmt.scss";
</style>
<script src="../js/Backendjs/RankMgmt.js"></script>

<template>
    <div class="rankmgmt_box">
        <h1>網站資訊管理 | 排行榜管理</h1>
        <div v-if="editSingleSongRank == true" class="popSongSelect obj_Radius">
            <input class="allSong obj_Radius selectedrank" type="text" readonly :value="`No. ` + selectedSongRank">
            <select class="allSong obj_Radius" id="allSong" v-model="selectedSong.s_id">
                <option v-for="(item, index) in allSong" :key="index" :value="item.s_id">{{ item.s_name
                }}
                </option>
            </select>
            <div class="btngroup">
                <button @click="closeBtn()" class=" default_Btn obj_Radius closeBtn">取消</button>
                <button @click="saveSongBtn()" class="rankBtn default_Btn  obj_Radius">儲存</button>
            </div>
        </div>
        <div v-if="editAlbumRank == true" class="popAlbumSelect obj_Radius">
            <input class="allSong obj_Radius selectedrank" type="text" readonly :value="`No. ` + selectedAlbumRank">
            <select class="allAlbum obj_Radius" id="allAlbum" v-model="selectedAlbum.alb_id">
                <option v-for="(item, index) in allAlbum" :key="index" :value="item.alb_id">{{ item.alb_name
                }}
                </option>
            </select>
            <div class="btngroup">
                <button @click="closeBtn()" class=" default_Btn obj_Radius closeBtn">取消</button>
                <button @click="saveAlbumBtn()" class="rankBtn default_Btn obj_Radius">儲存</button>
            </div>
        </div>
        <Tabs value="name" capture-focus v-width="1000" style="overflow-x: hidden;">
            <TabPane label="單曲排行" name="singleSongRanking" width="1000" height="450">
                <Table highlight-row stripe size="large" class="rankmgmt_table cellHeight" width="1000" height="450"
                    :columns="songColumns" :data="songRankGroup">
                    <template #editBtn="{ row }">
                        <fontAwesome @click="editSongBtn(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
                    </template>
                </Table>
            </TabPane>
            <TabPane label="專輯排行" name="albumRanking">
                <Table highlight-row stripe size="large" class="rankmgmt_table cellHeight" width="1000" height="450"
                    :columns="albColumns" :data="albumRankGroup">
                    <template #editBtn="{ row }">
                        <fontAwesome @click="editAlbumBtn(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
                    </template>
                </Table>
            </TabPane>       
        </Tabs>
    </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/rankmgmt.scss";
</style>
<script src="../js/Backendjs/RankMgmt.js"></script>

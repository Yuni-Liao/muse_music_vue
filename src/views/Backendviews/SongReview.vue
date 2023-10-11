<template>
  <div class="song_review_table_box">
    <h1>歌曲管理 | 歌曲審核管理</h1>
    <Input
      v-model="value3"
      placeholder="輸入編號或名稱"
      style="width: 180px; margin-bottom: 5%; margin-left: 80%"
    >
      <Input v-model="value" />
      <template #append>
        <Button
          icon="ios-search"
          @click="songReviewSearchBtn()"
          style="background-color: #515a6e; color: #fff"
        ></Button>
      </template>
    </Input>
    <div class="content">
      <Table
        width="1000"
        highlight-row
        stripe
        class="song_review_table cellHeight"
        :columns="columns"
        :data="data"
      >
        <template #editBtn="{ row }">
          <fontAwesome
            @click="editBtn(row)"
            :icon="['far', 'pen-to-square']"
            style="cursor: pointer"
          />
        </template>
      </Table>
    </div>
  </div>
  <!-- 編輯彈窗 -->
  <div v-if="editBox" class="edit obj_Radius">
    <!-- 輪播id -->
    <!-- 更新輪播名稱 -->
    <span>編號</span>
    <input
      type="text"
      id="sid"
      v-model="editItem.s_id"
      style="margin-bottom: 10px; width: 250px"
    />
    <!-- 更新網址 -->
    <p>歌曲名稱</p>
    <input
      type="text"
      id="bannerLink"
      v-model="editItem.s_name"
      style="margin-bottom: 10px; width: 250px"
    />
    <!-- 播放歌曲 -->
    <p>播放</p>
    <input
      type="text"
      id="playsong"
      v-model="editItem.s_src"
      style="margin-bottom: 10px; width: 250px"
    />
    <div class="btngroup">
      <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">
        取消
      </button>
      <button @click="saveBtn()" class="saveBtn default_Btn obj_Radius">
        儲存
      </button>
    </div>
  </div>
</template>
<!--
音樂播放鈕還沒處理,但已有定義 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/songreview.scss";
</style>
<script src="../js/Backendjs/SongReview.js"></script>

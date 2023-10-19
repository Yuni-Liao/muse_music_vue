<template>
  <div class="song_review_table_box">
    <h1>歌曲管理 | 歌曲審核管理</h1>
    <Input v-model="searchdata" placeholder="輸入歌曲編號或名稱" style="width: 180px; margin-bottom: 2%; margin-left: 60%">
    <Input v-model="value" />
    <template #append>
      <Button icon="ios-search" @click="songReviewSearchBtn()" style="background-color: #515a6e; color: #fff"></Button>
    </template>
    </Input>
    <div class="content">
      <Table width="1000" highlight-row stripe class="song_review_table cellHeight" :columns="columns" :data="filterdata">
        <template #reviewBtn="{ row }">
          <Button type="warning" @click="editBtn(row)"> 審核 </Button>
        </template>
      </Table>
    </div>
  </div>
  <!-- 編輯彈窗 -->
  <div v-if="editBox" class="editwrap" @click.stop="closeBtn($event)">
    <div class="edit obj_Radius">
      <form action="">
        <!-- 歌曲編號 -->
        <p>歌曲編號</p>
        <div class="group">
          <input type="text" id="sid" v-model="editItem.s_id" readonly />
        </div>

        <!-- 歌曲名稱 -->
        <p>歌曲名稱</p>
        <div class="group">
          <input type="text" id="bannerLink" v-model="editItem.s_name" readonly />
        </div>

        <!-- 播放歌曲 -->
        <p>試聽</p>
        <div class="play group">
          <span>{{ editItem.s_src }}</span><span v-show="isplay == false">
            <fontAwesome class="i" :icon="['fa', 'play']" type="text" id="playsong" @click="play()" />
          </span>
          <span v-show="isplay == true">
            <fontAwesome class="i" :icon="['fa', 'fa-stop']" @click="pause()" />
          </span>

          <audio id="myAudio" @ended="isplay = false">
            <source :src="`${publicPath}audio/${editItem.s_src}`" type="audio/mpeg" />
          </audio>
        </div>
        <!-- 類別 -->
        <p>歌曲類別（可修改）</p>
        <div class="checkbox group">
          <div class="songclass">
            <p class="label">語系</p>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="1" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">日語</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="2" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">韓語</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="3" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">華語</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="4" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">西洋</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="5" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">其他語言</span>
            </div>
          </div>
          <div class="songclass">
            <p class="label">曲風</p>
            <!-- <label for="songclass" class="label">曲風</label> -->
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="6" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">流行音樂</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="7" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">獨立音樂</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="8" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">嘻哈</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="9" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">搖滾</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="10" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">藍調</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="11" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">爵士</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="12" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">古典</span>
            </div>
          </div>
          <div class="songclass">
            <p class="label">情境</p>
            <!-- <label for="songclass" class="label">情境</label> -->
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="13" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">快樂</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="14" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">傷心</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="18" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">運動</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="15" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">輕鬆</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="16" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">舒眠</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="17" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">專注</span>
            </div>
            <div class="opt">
              <label class="checkboxLabel">
                <input type="checkbox" name="songcat" value="19" />
                <fontAwesome class="i" :icon="['fa', 'fa-check']" />
              </label>
              <span class="classname">派對</span>
            </div>
          </div>
        </div>
        <div class="btngroup">
          <button @click.prevent="reject()" class="default_Btn obj_Radius closeBtn" type="warning">
            駁回
          </button>
          <button @click.prevent="approve()" class="saveBtn default_Btn obj_Radius">
            批准
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<!--
音樂播放鈕還沒處理,但已有定義 -->

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/songreview.scss";
</style>
<script src="../js/Backendjs/SongReview.js"></script>

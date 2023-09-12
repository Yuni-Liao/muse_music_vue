<template>
  <div class="editfrontpage">
    <div class="cover-image-container">
      <img
        class="cover-image"
        alt="Cover Image"
        src="@/assets/image/profileeditimage/coverimage.jpg"
      />
      <div class="profile-container">
        <img
          class="profile"
          alt="Profile Image"
          src="@/assets/image/profileeditimage/profileimage.jpg"
        />
      </div>
    </div>
  </div>

  <div class="page-options">
    <div class="page-option">
      <button @click="changeTab(1)" :class="{ active: activeTab === 1 }">
        編輯個人主頁
      </button>
    </div>
    <div class="page-option">
      <button @click="changeTab(2)" :class="{ active: activeTab === 2 }">
        音樂上傳
      </button>
    </div>
    <div class="page-option">
      <button @click="changeTab(3)" :class="{ active: activeTab === 3 }">
        歌曲管理
      </button>
    </div>
    <div class="page-option">
      <button @click="changeTab(4)" :class="{ active: activeTab === 4 }">
        專輯管理
      </button>
    </div>
  </div>

  <div class="line"></div>

  <div class="page-content">
    <div v-show="activeTab === 1">
      <form>
        <div class="form-group">
          <label for="name" class="label">顯示名稱</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">顯示名稱</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">顯示名稱</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">顯示名稱</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
      </form>
    </div>
    <div v-show="activeTab === 2">
      <form>
        <div class="form-group">
          <label for="name" class="label">音樂上傳</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">音樂上傳</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">音樂上傳</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">音樂上傳</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
      </form>
    </div>
    <div v-show="activeTab === 3">
      <form>
        <div class="form-group">
          <label for="name" class="label">歌曲管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">歌曲管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">歌曲管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">歌曲管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
      </form>
    </div>
    <div v-show="activeTab === 4">
      <form>
        <div class="form-group">
          <label for="name" class="label">專輯管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">專輯管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">專輯管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
        <div class="form-group">
          <label for="name" class="label">專輯管理</label>
          <input type="text" id="name" v-model="name" placeholder="新增名稱" />
        </div>
      </form>
    </div>
  </div>

</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style> 
<script src="./js/ProfilePageEditView"></script> 

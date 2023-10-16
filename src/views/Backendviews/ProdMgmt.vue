<template>
  <div class="prodmgmt_box">
    <h1>周邊販售管理 | 商品管理</h1>
    <div class="topbtn">
      <!-- 以下是新增欄位 -->
      <Button type="primary" @click.stop="addProd(row)"
        style="width: 100px; margin-bottom: 2%;">新增商品</Button>

      <!--以下是搜尋欄位-->
      <Input v-model="searchKeyword" placeholder="輸入商品名稱"
        style="width: 180px; margin-bottom: 2%;padding: 10px;">
      <Input v-model="productData" />
      <template #append>
        <Button icon="ios-search" @click="prodSearchBtn()" style="background-color: #515a6e; color: #fff;"></Button>
      </template>
      </Input>
    </div>

    <!-- 以下是表格資料區 -->
    <Table highlight-row stripe class="prodmgmt_table cellHeight" width="1000" :columns="columns" :data="productData">
      <!-- 上下架按鈕 -->
      <template #upDownBtn="{ row }">
        <Switch v-model="row.show_stat" @on-change="toggleBtn(row)" false-color="#ff4949" true-color="#13ce66"
          :before-change="prodBeforeChange" true-value="1" false-value="0" />
      </template>
      <!-- 編輯按鈕 -->
      <template #editBtn="{ row }">
        <font-awesome @click="editProd(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer" />
      </template>
    </Table>
  </div>
  <!-- 以下是跳窗"編輯"區 -->
  <div v-if="editBox == true" class="editprod obj_Radius">
    <label for="prod_id" class="label">商品編號:</label>
    <input type="text" id="prod_id" name="id" v-model="editItem.prod_id" style="margin-bottom: 10px; width: 550px"
      readonly />
    <label for="prod_name" class="label">商品名稱:</label>
    <input type="text" id="prod_name" name="name" v-model="editItem.prod_name"
      style="margin-bottom: 10px; width: 550px" />
    <label for="prod_singer" class="label">歌手名稱:</label>
    <input type="text" id="prod_singer" name="name" v-model="editItem.prod_singer"
      style="margin-bottom: 10px; width: 550px" />
    <label for="prod_price" class="label">商品售價:</label>
    <input type="text" id="prod_price" name="name" v-model="editItem.prod_price"
      style="margin-bottom: 10px; width: 550px" />
    <label for="prod_date" class="label">更新時間:</label>
    <input type="text" id="prod_date" name="name" v-model="editItem.prod_date" style="margin-bottom: 10px; width: 550px"
      readonly />
    <label for="prod_type" class="label">商品分類:</label>
    <input type="text" id="prod_type" name="name" v-model="editItem.prod_type"
      style="margin-bottom: 10px; width: 550px" />
    <p>商品詳情:</p>
    <textarea id="prod_inf" name="name" v-model="editItem.prod_inf"
      style="margin-bottom: 10px; width: 550px; height: 80px"></textarea>
    <p>商品介紹:</p>
    <textarea id="prod_int" name="name" v-model="editItem.prod_int"
      style="margin-bottom: 10px; width: 550px; height: 80px"></textarea>
    <label for="show_stat" class="label">預設狀態:</label>
    <select id="show_stat" style="margin-bottom: 10px; width: 550px" v-model="editItem.show_stat">
      <option value="1">公開</option>
      <option value="0">私人</option>
    </select>
    <p>圖片:</p>
    <div class="uploadblock">
      <label for="fileimg">
        <p v-if="editItem.prod_pic == null">上傳圖片</p>
        <p v-else>{{ editItem.prod_pic }}</p>

        <input @change="img($event)" type="file" id="fileimg" name="img" style="display: none" />
        <img v-if="editItem.prod_pic == null" :src="`${publicPath}image/ShopImage/shop_album0.jpg`" />
        <img v-else-if="editItem.prod_pic != null && editItem.updateimg == false"
          :src="`${publicPath}image/ShopImage/${editItem.prod_pic}`" />
        <img v-else-if="editItem.updateimg" :src="editItem.showimg" />
      </label>
    </div>
    <div class="btngroup">
      <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">
        取消
      </button>
      <button @click.stop="saveEditBtn()" class="saveBtn default_Btn obj_Radius">
        儲存
      </button>
    </div>
  </div>
  <!-- 以下是跳窗"新增"區 -->
  <div v-if="addBox == true" class="addprod obj_Radius">
    <label for="addprod_name" class="label">商品名稱:</label>
    <input type="text" id="addprod_name" name="name" v-model="addItem.addprod_name"
      style="margin-bottom: 10px; width: 550px" />
    <label for="addprod_singer" class="label">歌手名稱:</label>
    <input type="text" id="addprod_singer" name="name" v-model="addItem.addprod_singer"
      style="margin-bottom: 10px; width: 550px" />
    <label for="addprod_price" class="label">商品售價:</label>
    <input type="text" id="addprod_price" name="name" v-model="addItem.addprod_price"
      style="margin-bottom: 10px; width: 550px" />
    <label for="addprod_type" class="label">商品分類:</label>
    <input type="text" id="addprod_type" name="name" v-model="addItem.addprod_type"
      style="margin-bottom: 10px; width: 550px" />
    <p>商品詳情:</p>
    <textarea id="addprod_inf" name="name" v-model="addItem.addprod_inf"
      style="margin-bottom: 10px; width: 550px; height: 80px"></textarea>
    <p>商品介紹:</p>
    <textarea id="addprod_int" name="name" v-model="addItem.addprod_int"
      style="margin-bottom: 10px; width: 550px; height: 80px"></textarea>
    <label for="addshow_stat" class="label">預設狀態:</label>
    <select id="addshow_stat" style="margin-bottom: 10px; width: 550px" v-model="addItem.addshow_stat">
      <option value="1">公開</option>
      <option value="0">私人</option>
    </select>
    <p>圖片:</p>
    <div class="uploadblock">
      <label for="addfileimg">
        <p v-if="addItem.prod_pic == null">上傳圖片</p>
        <p v-else>{{ addItem.prod_pic }}</p>
        <input @change="img2($event)" type="file" id="addfileimg" name="img" style="display: none" />
        <img v-if="addItem.prod_pic == null" :src="`${publicPath}image/ShopImage/shop_album0.jpg`" />
        <img v-else-if="addItem.prod_pic != null && addItem.updateimg == false"
          :src="`${publicPath}image/ShopImage/${addItem.prod_pic}`" />
        <img v-else-if="addItem.updateimg" :src="addItem.showimg" />
      </label>
    </div>
    <div class="btngroup">
      <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">
        取消
      </button>
      <button @click.prevent="saveAddBtn()" class="saveBtn default_Btn obj_Radius">
        儲存
      </button>
    </div>
  </div>
</template>

<!-- 補分頁按鈕、下拉式選單按鈕、調整字距 -->
<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/prodmgmt.scss";
</style>
<script src="../js/Backendjs/ProdMgmt.js"></script>

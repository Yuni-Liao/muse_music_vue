<template>
  <div>
    <div class="progress-bar">
      <div :style="{ width: progressWidth + '%' }"></div>
    </div>
    <Breadcrumb separator=">" class="breadcrumb">
      <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
      <BreadcrumbItem><router-link to="/shop">周邊商品</router-link></BreadcrumbItem>
      <BreadcrumbItem><router-link to="/shoppingsteps"></router-link>購物車</BreadcrumbItem>
    </Breadcrumb>
    <div class="checkout-steps">
      <div :class="{ active: currentStep === 1 }">1.選取商品加入購物車</div>
      <div class="arrow">></div>
      <div :class="{ active: currentStep === 2 }">2.填寫收件資料與付款方式</div>
      <div class="arrow">></div>
      <div :class="{ active: currentStep === 3 }">3.完成訂單</div>
    </div>

    <div class="checkout">
      <div v-if="currentStep === 1">
        <!-- <p>已加入購物車商品</p> -->
        <!-- 以上不要動到 -->

        <!-- ▼凱芸 測試帶入暫存的商品資訊 -->
        <div id="myCart">
          <h1>
            Shopping Cart
          </h1>
          <div>
            <div id="cartList">
              <table>
                <tr v-for="(item, itemId) in cartItems" :key="itemId" class="item">
                  <td style="width: 200px">
                    <img :src="'imgs/' + item.prodPic" width="70" alt="item.prodName" />
                  </td>
                  <td style="width: 280px">
                    <p>{{ item.prodName }}</p>
                    <button @click="deleteItem(itemId)">Delete</button>
                  </td>
                  <td style="width: 170px">{{ item.prodPrice }}</td>
                  <td style="width: 60px">
                    <input type="number" v-model="item.inCart" min="1" @input="changeItemCount(itemId)" />
                  </td>
                </tr>
              </table>
            </div>
            <p>Total: {{ total }}</p>
          </div>
        </div>
        <!-- ▲凱芸 測試帶入暫存的商品資訊 -->


        <!-- 以下不要動 -->
        <button @click="completeStep">
          <router-link to="/shop">◄ 繼續選購其他商品</router-link>
        </button>
        <button @click="nextStep">進入結帳 ►</button>

        <div class="shopinst">
          <div class="shoptitle">
            購物說明
          </div>
          <div class="shopcont">
            您可以至首頁選擇商品繼續購物，全部選完後再點按上方的結帳按鈕。<br>
            <br>
            • 預購CD依發行日寄出,請單獨下單,如與其它CD併購,將與預購CD發行日同時寄出,不另分次寄送。<br>
            • 訂單如因個人因素需取消,限定於訂單完成48小時內(例假日不算)通知取消。<br>
            • 進口商品與限量預購商品訂單為專單，訂單完成後恕不接受取消。<br>
            • 請留意您的訂購是否有未發行商品。<br>
            • 若遇缺貨本公司保留接受訂單與否的權利。<br>
            • 本公司保留接受訂單與否的權利。<br>
            • 贈品如有海報，若未購買海報筒將用折疊的方式。
          </div>
        </div>
      </div>
      <div v-else-if="currentStep === 2">
        <div class="paytitle">
          填寫資料
        </div>
        <div class="shopline"></div>
        <div class="form-group">
          <label for="name" class="label">收件人</label>
          <input type="text" id="name" v-model="name" placeholder="" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>

          <label for="phone" class="label">連絡電話</label>
          <input type="phone" id="phone" v-model="phone" placeholder="" />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>

          <label for="addressf" class="label">收件地址</label>
          <input type="text" id="address" v-model="address" placeholder="" />
          <!-- <label for="county_box">請選取送貨地址</label>
          <select name="county" id="county_box" v-model="selectedCounty">
            <option value="">選擇縣市</option>
            <option v-for="(value, key) in counties" :key="key" :value="key">
              {{ value }}
            </option>
          </select>

          <select name="district" id="district_box" v-model="selectedDistrict">
            <option value="">選擇鄉鎮市區</option>
            <option v-for="(value, key) in availableDistricts" :key="key" :value="key">
              {{ value }}
            </option>
          </select>

          <input
            type="text"
            id="zipcode_box"
            placeholder="郵遞區號"
            v-model="zipcode"
          /> -->

          <label for="ship" class="label">運送方式</label>
          <select id="ship" v-model="shippingMethod">
            <option value="">請選擇運送方式</option>
            <option value="standard">標準運送</option>
            <option value="express">快遞運送</option>
            <option value="express">急件運送</option>
          </select>
          <span v-if="errors.shippingMethod" class="error">{{
            errors.shippingMethod
          }}</span>

          <label for="pay" class="label">付款方式</label>
          <select id="pay" v-model="paymentMethod">
            <option value="">請選擇付款方式</option>
            <option value="credit_card">信用卡</option>
            <option value="paypal">PayPal</option>
            <option value="credit_card">貨到付款</option>
          </select>
          <span v-if="errors.paymentMethod" class="error">{{
            errors.paymentMethod
          }}</span>
        </div>
        <button @click="nextStep">確認結帳 ►</button>
        <div class="shopinst">
          <div class="shoptitle">
            購物說明
          </div>
          <div class="shopcont">
            您可以至首頁選擇商品繼續購物，全部選完後再點按上方的結帳按鈕。<br>
            <br>
            • 預購CD依發行日寄出,請單獨下單,如與其它CD併購,將與預購CD發行日同時寄出,不另分次寄送。<br>
            • 訂單如因個人因素需取消,限定於訂單完成48小時內(例假日不算)通知取消。<br>
            • 進口商品與限量預購商品訂單為專單，訂單完成後恕不接受取消。<br>
            • 請留意您的訂購是否有未發行商品。<br>
            • 若遇缺貨本公司保留接受訂單與否的權利。<br>
            • 本公司保留接受訂單與否的權利。<br>
            • 贈品如有海報，若未購買海報筒將用折疊的方式。
          </div>
        </div>
      </div>

      <div v-else>
        <div class="paytitle">
          完成訂單
        </div>
        <div class="shopline"></div>
        <p>已完成訂購，預計2~3天內出貨，感謝您的支持!</p>
        <button @click="completeStep">
          <router-link to="/shop">會員專區</router-link>
        </button>
        <button @click="completeStep">
          <router-link to="/">回到首頁</router-link>
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
@import "~@/assets/scss/page/shoppingsteps.scss";
</style> 
<script src="./js/ShoppingStepsView"></script>
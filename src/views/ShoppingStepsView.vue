<template>
  <div>
    <div class="progress-bar">
      <!-- <div :style="{ width: progressWidth + '%' }"></div> -->
    </div>
    <Breadcrumb separator="/" class="breadcrumb">
      <BreadcrumbItem><router-link to="/home">首頁</router-link></BreadcrumbItem>
      <BreadcrumbItem><router-link to="/home/shop">周邊商品</router-link></BreadcrumbItem>
      <BreadcrumbItem class="nowBreadcrumb"><router-link to="/home/shoppingsteps"></router-link>購物車</BreadcrumbItem>
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

        <!-- ▼ 凱芸 帶入暫存的商品資訊 -->
        <div id="myCart">
          <div class="cartArea">
            <h2>購物清單</h2>
            <div id="cartList">
              <table>
                <tr v-for="(item, index)  in cartItems" :key="item.prod_id" class="item">
                  <td class="itemNum">
                    {{ index + 1 }}
                  </td>
                  <td class="pic">
                    <div class="image-wrapper">
                      <img :src="`${publicPath}image/ShopImage/${item.prod_pic}`" :alt="item.prod_name" />
                    </div>
                  </td>
                  <td class="prodName">
                    <p>{{ item.prod_name }}</p>
                  </td>
                  <td class="price">$ {{ item.prod_price }}</td>
                  <td class="number">
                    <input type="number" v-model="item.chat_num" min="1" @input="changeItemCount(item.prod_id)" />
                  </td>
                  <button @click="() => deleteItem(item.prod_id)">
                    <font-awesome :icon="['fa', 'trash']" />
                  </button>
                </tr>
              </table>
            </div>
            <p class="count">全館免運！<br>總金額： $ {{ total }}</p>
          </div>
        </div>
        <!-- ▲ 凱芸 帶入暫存的商品資訊 -->

        <button @click="completeStep">
          <router-link to="/home/shop">◄ 繼續選購其他商品</router-link>
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
          <input type="text" id="name" v-model="orders[0].ord_name" placeholder="" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>

          <label for="phone" class="label">連絡電話</label>
          <input type="phone" id="phone" v-model="orders[0].ord_tel" placeholder="" />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>

          <label for="addressf" class="label">收件地址</label>
          <input type="text" id="address" v-model="orders[0].ord_add" placeholder="" />

          <label for="ship" class="label">運送方式</label>
          <select id="ship" v-model="orders[0].ord_ship">
            <option value="">請選擇運送方式</option>
            <option value="standard">宅配</option>
            <option value="express">郵局</option>
            <option value="express">超商</option>
          </select>
          <span v-if="errors.shippingMethod" class="error">{{
            errors.shippingMethod
          }}</span>

          <label for="pay" class="label">付款方式</label>
          <select id="pay" v-model="orders[0].ord_pay">
            <option value="">請選擇付款方式</option>
            <option value="credit_card">信用卡</option>
            <option value="paypal">PayPal</option>
            <option value="credit_card">貨到付款</option>
          </select>
          <span v-if="errors.paymentMethod" class="error">{{
            errors.paymentMethod
          }}</span>
        </div>
        <!-- <button @click="nextStep">確認結帳 ►</button> -->
        <button @click="checkout">確認結帳 ►</button>
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
          <router-link to="/home/shoporders">會員專區</router-link>
        </button>
        <button @click="completeStep">
          <router-link to="/home">回到首頁</router-link>
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
@import "~@/assets/scss/page/shoppingsteps.scss";
</style> 
<script src="./js/ShoppingStepsView"></script>
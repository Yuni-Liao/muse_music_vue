<template>
    <!-- 此處為測試文字,可以改掉重新編輯 -->
    <div class="about">
        <h1>這是關於謬思頁面</h1>
    </div>
    <div class="cart-container">
        <div class="content">
            <i class="fa-solid fa-cart-shopping">
                <h1>購物車</h1>
                <span>商品數量:{{ prodCount }}</span>
            </i>
            <div class="notthing" v-if="prodCount == 0">
                <p>未選購商品</p>
            </div>
            <div class="cart" v-else>
                <div class="product" v-for="(item, index) in productlist" :key="index">
                    <div class="pic">
                        <img :src="item.imgsrc" :alt="item.name">
                    </div>
                    <div class="txt">
                        <h2>
                            {{ item.name }}
                            <span>
                                {{ item.enname }}
                            </span>
                        </h2>
                        <div class="order-btn">
                            <button @click="minus(item, index)">-</button>
                            <input type="text" v-model="item.count" min="0">
                            <button @click="plus(item)">+</button>
                            <span>{{ item.count }}</span>
                            <i class="fa-solid fa-trash-can" @click="removeCart(index)"></i>
                        </div>
                        <span>單價:{{ item.price }}<br>數量:{{ item.count }}<br>單品總額:{{ totalprice(item.count, item.price)
                        }}</span>
                    </div>
                </div>
                <div class="total">總金額:<span>{{ parsePrice }}</span>元
                </div>
            </div>
        </div>
        <div class=notting v-if="prodCount == 0"></div>
        <div class="summary" v-else>
            <div class="sumtext">
                <h3>Summary</h3>
                <div class="product" v-for="(item, index) in productlist" :key="index">
                    <p>
                        {{ item.name }}
                        <span>{{ item.count }}</span>
                        <span>${{ this.totalprice(item.count, item.price) }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/about.scss";
</style>
<script src="./js/AboutView.js"></script>

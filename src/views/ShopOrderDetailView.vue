<template>
    <div class="shoporderdetail">
        <div class="warp">
            <div class="return">
                <router-link :to="`/home/shoporders`">
                    <div class="pic">
                        <fontAwesome :icon="['fa', 'angle-left']" class="arrow" />
                    </div>
                    <div class="txt">回到總覽頁面</div>
                </router-link>
            </div>
            <div class="order">
                <!-- 直接使用shopOrdersItem[0].ord_id抓會找不到值報錯 -->
                <div class="serial">訂單編號：FK-348593{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_id : '' }}</div>

                <div class="course">
                    <div class="active"></div>
                    <div class="item">
                        <div class="frame">
                            <div class="pic">
                                <img :src="`${publicPath}image/ShopOrders/shopordersbuild.png`" alt="shopordersbuild">
                            </div>
                        </div>
                        <div class="txt">訂單成立</div>
                    </div>
                    <div class="line" :class="{ 'active': isStatActive('已付款') || isStatActive('已出貨') || isStatActive('已送達') || isStatActive('已完成') }"></div>
                    <div class="item">
                        <div class="frame">
                            <div class="pic">
                                <img :src="`${publicPath}image/ShopOrders/shoporderspay.png`" alt="shoporderspay">
                            </div>
                        </div>
                        <div class="txt">確認付款</div>
                    </div>
                    <div class="line" :class="{ 'active': isStatActive('已出貨') || isStatActive('已送達') || isStatActive('已完成') }"></div>
                    <div class="item">
                        <div class="frame">
                            <div class="pic">
                                <img :src="`${publicPath}image/ShopOrders/shopordersship.png`" alt="shopordersship">
                            </div>
                        </div>
                        <div class="txt">訂單出貨</div>
                    </div>
                    <div class="line" :class="{ 'active': isStatActive('已送達') || isStatActive('已完成') }"></div>
                    <div class="item">
                        <div class="frame">
                            <div class="pic">
                                <img :src="`${publicPath}image/ShopOrders/shopordersarrive.png`" alt="shopordersarrive">
                            </div>    
                        </div>
                        <div class="txt">訂單送達</div>
                    </div>
                    <div class="line" :class="{ 'active': isStatActive('已完成') }"></div>
                    <div class="item">
                        <div class="frame">
                            <div class="pic">
                                <img :src="`${publicPath}image/ShopOrders/shopordersfinish.png`" alt="shopordersfinish">
                            </div>
                        </div>
                        <div class="txt">訂單完成</div>
                    </div>
                </div>

                <div class="menu">
                    <div class="product_pic order_item"></div>
                    <div class="product order_item">商品名稱</div>
                    <div class="totalprice order_item">商品金額</div>
                    <div class="pcs order_item">數量</div>
                    <div class="date order_item">商品小計</div>
                </div>
                <div class="main" v-for="(item, id) in shopOrdersItem" :key="id">
                    <div class="product_pic order_item">
                        <img :src="`${publicPath}image/ShopImage/${item.prod_pic}`" alt="item.prod_name">
                    </div>
                    <div class="product order_item">
                        {{ item.prod_name }}
                    </div>
                    <div class="price order_item">{{ item.ord_price }}</div>
                    <div class="pcs order_item">{{ item.ord_pcs }}</div>
                    <div class="projectprice order_item">{{ item.ord_price * item.ord_pcs }}</div>
                </div>
                <div class="content">
                    <div class="list">
                        <div class="totalprice item">
                            總金額：{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_total_price: ''}}
                        </div>
                        <div class="totalpcs item">
                            共 {{ shopOrdersItem.length }} 件商品
                        </div>
                    </div>
                    <div class="list">
                        <div class="ship item">運送方式：{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_ship : '' }}</div>
                        <div class="pay item">付款方式：{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_pay : '' }}</div>
                        <div class="stat item">訂單狀態：{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_stat : '' }}</div>
                    </div>
                    <div class="list item">
                        <div class="name item">收件者：{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_name : '' }}</div>
                        <div class="add item">收件地址：{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_add : '' }}</div>
                        <div class="tel item">聯絡電話：{{ shopOrdersItem.length > 0 ? shopOrdersItem[0].ord_tel : '' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/shoporderdetail.scss";
</style>
<script src="./js/ShopOrderDetailView.js"></script>
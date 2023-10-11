<template>
    <div class="shoporders">
        <div class="orders_change">
            <h2 class="recent" @click="showRecentOrders" :class="{ 'active': isRecentOrdersVisible }">最近訂單</h2>
            <div class="change"><img :src="`${publicPath}image/ShopOrders/shoporderschange.png`" alt="shoporderschange">
            </div>
            <h2 class="history" @click="showHistoryOrders" :class="{ 'active': isHistoryOrdersVisible }"> 歷史訂單</h2>
        </div>
        <div class="orders orders_recent" v-show="isRecentOrdersVisible">
            <div v-for="(item1, id) in recentOrders" :key="id" class="order">
                <div class="menu">
                    <div class="serial order_item">
                        <div class="title">訂單編號：</div>
                        <div class="id">{{ item1.ord_id }}</div>
                    </div>
                    <div class="product order_item">商品名稱</div>
                    <div class="pcs order_item">數量</div>
                    <div class="totalprice order_item">總金額</div>
                    <div class="date order_item">訂購日期</div>
                    <div class="stat order_item">訂單狀態</div>
                </div>
                <div v-for="(item2, id) in shopOrdersItem" :key="id" class="main">
                    {{ item1.ord_id }}#{{ item2.ord_id }}
                    <router-link :to="`/home/shoporderdetail/${item1.ord_id}`">
                        <div class="product_pic order_item">
                            <img :src="`${publicPath}image/ShopImage/${item2.prod_pic}`" :alt="item2.prod_name">
                        </div>
                        <div class="product order_item">
                            {{ item2.prod_name }}
                        </div>
                        <div class="pcs order_item">{{ item2.ord_pcs }}</div>
                        <div class="totalprice order_item">{{ item1.ord_total_price }}</div>
                        <div class="date order_item">{{ item1.ord_date }}</div>
                        <div class="stat order_item">
                            {{ item1.ord_stat }}
                            <fontAwesome :icon="['fa', 'angle-right']" class="arrow" />
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="orders orders_history" v-show="isHistoryOrdersVisible">
            <div v-for="(item1, id) in historyOrders" :key="id" class="order">
                <div class="menu">
                    <div class="serial order_item">
                        <div class="title">訂單編號：</div>
                        <div class="id">{{ item1.ord_id }}</div>
                    </div>
                    <div class="product order_item">商品名稱</div>
                    <div class="pcs order_item">數量</div>
                    <div class="totalprice order_item">總金額</div>
                    <div class="date order_item">訂購日期</div>
                    <div class="stat order_item">訂單狀態</div>
                </div>
                <div v-for="(item2, id) in shopOrdersItem" :key="id" class="main">
                    <router-link :to="`/home/shoporderdetail/${item1.ord_id}`">
                        <div class="product_pic order_item">
                            <img :src="`${publicPath}image/ShopImage/${item2.prod_pic}`" :alt="item2.prod_name">
                        </div>
                        <div class="product order_item">
                            {{ item2.prod_name }}
                        </div>
                        <div class="pcs order_item">{{ item2.ord_pcs }}</div>
                        <div class="totalprice order_item">{{ item1.ord_total_price }}</div>
                        <div class="date order_item">{{ item1.ord_date }}</div>
                        <div class="stat order_item">{{ item1.ord_stat }}
                            <fontAwesome :icon="['fa', 'angle-right']" class="arrow" />
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/shoporders.scss";
</style>
<script src="./js/ShopOrdersView.js"></script>
<template>
    <div class="shoporders">
        <div class="orders_change">
            <h2 class="recent" @click="showRecentOrders" :class="{ 'active': isRecentOrdersVisible }">最近訂單</h2>
            <div class="change"><img :src="`${publicPath}image/ShopOrders/shoporderschange.png`" alt="shoporderschange">
            </div>
            <h2 class="history" @click="showHistoryOrders" :class="{ 'active': isHistoryOrdersVisible }"> 歷史訂單</h2>
        </div>
        <div class="orders orders_recent" v-show="isRecentOrdersVisible">
            <div v-for="(item, id) in recentOrders" :key="id" class="order">
                <div class="menu">
                    <div class="serial order_item">
                        <div class="title">訂單編號</div>
                        <!-- <div class="id"></div> -->
                    </div>                   
                    <div class="date order_item">訂購日期</div>
                    <div class="ship order_item">運送方式</div>                    
                    <div class="totalprice order_item">總金額</div>
                    <div class="stat order_item">訂單狀態</div>
                </div>
                <div class="main">
                    <router-link :to="`/home/shoporderdetail/${item.ord_id}`">
                        <div class="serial order_item">
                            FK-348593{{ item.ord_id }}
                        </div>
                        <div class="date order_item">{{ item.ord_date }}</div>
                        <div class="ship order_item">{{ item.ord_ship }}</div>
                        <div class="totalprice order_item">{{ item.ord_total_price }}</div>
                        <div class="stat order_item">
                            {{ item.ord_stat }}
                            <fontAwesome :icon="['fa', 'angle-right']" class="arrow" />
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="orders orders_history" v-show="isHistoryOrdersVisible">
            <div v-for="(item, id) in historyOrders" :key="id" class="order">
                <div class="menu">
                    <div class="serial order_item">
                        <div class="title">訂單編號</div>
                        <!-- <div class="id"></div> -->
                    </div>                   
                    <div class="date order_item">訂購日期</div>
                    <div class="ship order_item">運送方式</div>                    
                    <div class="totalprice order_item">總金額</div>
                    <div class="stat order_item">訂單狀態</div>
                </div>
                <div class="main">
                    <router-link :to="`/home/shoporderdetail/${item.ord_id}`">
                        <div class="serial order_item">
                            FK-348593{{ item.ord_id }}
                        </div>
                        <div class="date order_item">{{ item.ord_date }}</div>
                        <div class="ship order_item">{{ item.ord_ship }}</div>
                        <div class="totalprice order_item">{{ item.ord_total_price }}</div>
                        <div class="stat order_item">
                            {{ item.ord_stat }}
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
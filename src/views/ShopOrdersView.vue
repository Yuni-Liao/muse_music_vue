<template>
    <div class="shoporders">
        <div class="orders_change">
            <div class="recent"  @click="showRecentOrders" :class="{ 'active': isRecentActive }">最近訂單</div>
            <div class="change"><img :src="`${publicPath}image/ShopOrders/shoporderschange.png`" alt="shoporderschange"></div>
            <div class="history" @click="showHistoryOrders" :class="{ 'active': isHistoryActive }"> 歷史訂單</div>
        </div>
        <div class="orders orders_recent"  v-show="isRecentOrdersVisible">
            <div v-for="(item, id) in recentOrders" :key="id" class="order">
                <div class="menu">
                    <div class="serial order_item">
                        <div class="title">訂單編號：</div>
                        <div class="id">{{item.serial}}</div>
                    </div>
                    <div class="product order_item">商品名稱</div>
                    <div class="pcs order_item">數量</div>
                    <div class="totalprice order_item">總金額</div>
                    <div class="date order_item">訂購日期</div>
                    <div class="stat order_item">訂單狀態</div>
                </div>
                <div  class="main">
                    <router-link :to="`/home/shoporderdetail/${id}`">
                        <div class="product_pic order_item">
                            <img :src="require(`/public/image/ShopImage/${item.prodpic}`)" alt="prod">
                        </div>
                        <div class="product order_item">
                            {{item.prod}}
                        </div>
                        <div class="pcs order_item">{{item.pcs}}</div>
                        <div class="totalprice order_item">{{item.totalprice}}</div>
                        <div class="date order_item">{{item.date}}</div>
                        <div class="stat order_item">{{item.stat}}</div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="orders orders_history" v-show="isHistoryOrdersVisible">
            <div v-for="(item, id) in orders" :key="id" class="order">
                <div class="menu">
                    <div class="serial order_item">
                        <div class="title">訂單編號：</div>
                        <div class="id">{{item.serial}}</div>
                    </div>
                    <div class="product order_item">商品名稱</div>
                    <div class="pcs order_item">數量</div>
                    <div class="totalprice order_item">總金額</div>
                    <div class="date order_item">訂購日期</div>
                    <div class="stat order_item">訂單狀態</div>
                </div>
                <div class="main">
                    <router-link :to="`/home/shoporderdetail/${id}`">
                        <div class="product_pic order_item">
                            <img :src="require(`/public/image/ShopImage/${item.prodpic}`)" alt="prod">
                        </div>
                        <div class="product order_item">
                            {{item.prod}}
                        </div>
                        <div class="pcs order_item">{{item.pcs}}</div>
                        <div class="totalprice order_item">{{item.totalprice}}</div>
                        <div class="date order_item">{{item.date}}</div>
                        <div class="stat order_item">{{item.stat}}</div>
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
<template>
    <div class="shoporderdetail">
        <div class="warp">
            <div class="return">
                <router-link :to="`/home/shoporders`">
                    <div class="pic">
                        <img :src="`${publicPath}image/ShopOrders/shoporderdetail_return.png`" alt="shoporderdetail_return">
                    </div>
                    <div class="txt">回上頁</div>
                </router-link>
            </div>
            <div class="order">
                <div class="serial">訂單編號：{{ foundObject.serial }}</div>

                <div class="course">
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
                <div class="main">
                    <div class="product_pic order_item">
                        <img :src="`${publicPath}/image/ShopImage/${foundObject.prodpic}`" alt="prod">
                    </div>
                    <div class="product order_item">
                        {{ foundObject.prod }}
                    </div>
                    <div class="price order_item">{{ foundObject.price }}</div>
                    <div class="pcs order_item">{{ foundObject.pcs }}</div>
                    <div class="projectprice order_item">{{ foundObject.projectprice }}</div>
                </div>
                <div class="content">
                    <div class="list">
                        <div class="totalprice item">
                            總金額：{{ foundObject.totalprice }}
                        </div>
                        <div class="totalpcs item">
                            共 {{ foundObject.pcs }} 件商品
                        </div>
                    </div>
                    <div class="list">
                        <div class="ship item">運送方式：{{ foundObject.ship }}</div>
                        <div class="pay item">付款方式：{{ foundObject.pay }}</div>
                        <div class="stat item">訂單狀態：{{ foundObject.stat }}</div>
                    </div>
                    <div class="list item">
                        <div class="name item">收件者：{{ foundObject.name }}</div>
                        <div class="add item">收件地址：{{ foundObject.add }}</div>
                        <div class="tel item">聯絡電話：{{ foundObject.tel }}</div>
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
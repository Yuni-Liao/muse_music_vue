<template>
    <main class="shopProdDetail">
        <!-- 麵包屑 -->
        <Breadcrumb separator="/">
            <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
            <BreadcrumbItem><router-link to="/shop">周邊商品</router-link></BreadcrumbItem>
            <BreadcrumbItem>商品詳情</BreadcrumbItem>
        </Breadcrumb>
        <!-- 商品介紹 -->
        <section class="inner">
            <div class="mainInf">
                <div class="pic">
                    <img src="/image/ShopImage/prod5.jpg" alt="Mekka Over Over(黑膠)">
                </div>
                <div class="txt">
                    <div class="title">
                        <h1 class="singer">{{ products.singer }}</h1>
                        <h2 class="prodName">{{ products.prodName }}</h2>
                    </div>
                    <div class="prodInf">
                        {{products.prodInf}}
                    </div>
                    <p class="price">
                        售價 ${{products.prodPrice}}
                    </p>
                    <div class="btnArea">
                        <span class="prodCount">
                            <button class="prodBtn" @click="decrementItem">
                                <img src="/image/ShopImage/up.png">
                            </button>
                            <p>{{ products.inCart }}</p>
                            <button class="prodBtn" @click="incrementItem">
                                <img src="/image/ShopImage/down.png">
                            </button>
                        </span>
                        <button class="obj_Radius btn_Shop_Border">加入購物車</button>
                    </div>
                </div>
            </div>
            <div class="description">
                <h3>專輯介紹</h3>
                <div class="txt">
                    <p class="mainDesc">
                        {{products.mainDesc}}
                    </p>
                    <p class="list">
                        {{products.list}}
                    </p>
                    <p class="attention">
                        此商品為預購特殊商品，除無法發行外，否則下訂單後一律「無法取消」或「更改」訂單。<br>
                        如遇供貨量不足，將依訂購順序，強制取消訂單，請消費者確認之後再下訂單！敬請見諒！
                    </p>
                </div>
            </div>
        </section>
        <router-link to="/shoppingsteps">
            <button class="shopcart">
                <img src="/image/icon/shopcart.png" alt="shopcart">
            </button>
        </router-link>
    </main>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/shopproddetail.scss";
</style>
<script src="./js/shopProdDetailView.js"></script>
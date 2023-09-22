<template>
    <main class="shopProdDetail">
        <!-- 麵包屑 -->
        <Breadcrumb separator="/">
            <BreadcrumbItem><router-link to="/home">首頁</router-link></BreadcrumbItem>
            <BreadcrumbItem><router-link to="/home/shop">周邊商品</router-link></BreadcrumbItem>
            <BreadcrumbItem>商品詳情</BreadcrumbItem>
        </Breadcrumb>
        <!-- 商品介紹 -->
        <section class="inner">
            <div class="mainInf">
                <div class="pic">
                    <!-- <img :src="foundObject.prodPic" :alt="foundObject.prodName"> -->
                    <img :src="`/image/ShopImage/${foundObject.prodPic}`" :alt="foundObject.prodName" />
                </div>
                <div class="txt">
                    <div class="title">
                        <h1 class="singer">{{ foundObject.singer }}</h1>
                        <h2 class="prodName">{{ foundObject.prodName }}</h2>
                    </div>
                    <div class="prodInf">
                        {{ foundObject.prodInf }}
                    </div>
                    <p class="price">
                        售價 ${{ foundObject.prodPrice }}
                    </p>
                    <div class="btnArea">
                        <!-- 數量加減 -->
                        <span class="prodCount">
                            <button class="prodBtn" @click="decrementItem(item)">
                                <fontAwesome :icon="['fa', 'circle-minus']" style="color: #252525;" size="xl" />
                            </button>
                            <p>{{ foundObject.inCart }}</p>
                            <button class="prodBtn" @click="incrementItem(item)">
                                <fontAwesome :icon="['fa', 'circle-plus']" style="color: #252525;" size="xl" />
                            </button>
                        </span>
                        <button class="obj_Radius btn_Shop_Border" @click="addToCart(item)">加入購物車</button>
                    </div>
                </div>
            </div>
            <div class="description">
                <h3>專輯介紹</h3>
                <div class="txt">
                    <p class="mainDesc">
                        {{ foundObject.mainDesc }}
                    </p>
                    <p class="list">
                        {{ foundObject.list }}
                    </p>
                    <p class="attention">
                        此商品為預購特殊商品，除無法發行外，否則下訂單後一律「無法取消」或「更改」訂單。<br>
                        如遇供貨量不足，將依訂購順序，強制取消訂單，請消費者確認之後再下訂單！敬請見諒！
                    </p>
                </div>
            </div>
        </section>
        <router-link to="/home/shoppingsteps">
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
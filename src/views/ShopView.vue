<template>
    <div class="bannerpic">
        <img src="~@/assets/image/ShopImage/shopbanner.png" alt="周邊販售">
    </div>
    <Breadcrumb separator="/">
        <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
        <BreadcrumbItem>周邊商品</BreadcrumbItem>
    </Breadcrumb>
    <div class="selectArea">
        <select class="prodSort obj_Radius" v-model="selectedType">
            <option v-for="(type, index) in sortedTypeOptions" :value="type" :key="index" @click="sortedTypeOptions">{{ type
            }}
            </option>
        </select>

        <select class="prodQuantity obj_Radius" v-model="selectedPerPage">
            <option v-for="(quantity, option) in perPageOptions" :value="option">{{ option }}</option>
        </select>

    </div>


    <div class="shop">
        <div class="prodType ">
            <h2>商品類型</h2>
            <ul>
                <li v-for="item in items" :key="item.id">
                    <a :href="item.link" @click="filterByKind(item.kind)">{{ item.kind }}</a>
                </li>
            </ul>
        </div>
        <div class="inner">
            <div class="prod">
                <div class="prodCard" v-for="(item, index) in products" :key="index">
                    <div class="prodPic">
                        <img :src="require(`@/assets/image/ShopImage/${item.prodPic}`)" alt="item.prodName">
                    </div>
                    <div class="prodTxt">
                        <p class="prodName">{{ item.prodName }}</p>
                        <p class="prodPrice">$ {{ item.prodPrice }}</p>
                        <span class="prodCount">
                            <button class="prodBtn" @click="decrementItem(item)"><img
                                    src="~@/assets/image/ShopImage/up.png"></button>

                            <p>{{ item.inCart }}</p>
                            <button class="prodBtn" @click="incrementItem(item)"><img
                                    src="~@/assets/image/ShopImage/down.png"></button>
                        </span>
                        <button class="obj_Radius btn_Shop_Border">加入購物車</button>
                    </div>
                </div>
            </div>
            <!-- 以下是分頁面區 -->
            <Page :total="totalItems" :current.sync="currentPage" :page-size="pageSize" />
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/shop.scss";
</style>
<script src="./js/ShopView.js"></script>

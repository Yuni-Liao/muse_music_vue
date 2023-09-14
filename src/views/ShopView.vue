<template>
    <div class="bannerpic">
        <img src="
        /image/ShopImage/shopbanner.png" alt="周邊販售">
    </div>
    <!-- 麵包屑 -->
    <Breadcrumb separator="/">
        <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
        <BreadcrumbItem>周邊商品</BreadcrumbItem>
    </Breadcrumb>
    <!-- 商品排序 -->
    <div class="selectArea">
        <select class="prodSort obj_Radius" v-model="selectedType">
            <option v-for="(type, index) in typeOptions" :value="type" :key="index">{{ type
            }}
            </option>
        </select>
    </div>

    <div class="shop">
        <div class="prodType ">
            <h2>商品類型</h2>
            <!-- 分類篩選 -->
            <ul>
                <li v-for="item in items" :key="item.id">
                    <a :href="item.link" @click="currentKind = item.kind"
                        :class="{ '--active': currentKind === item.kind }">{{ item.label }}</a>
                </li>
            </ul>
        </div>

        <!-- 商品 -->
        <div class="inner">
            <div class="prod">
                <div class="prodCard" v-for="(item, index) in displayedProducts" :key="index">
                    <div class="prodPic">
                        <img :src="require(`/public/image/ShopImage/${item.prodPic}`)" alt="item.prodName">
                    </div>
                    <div class="prodTxt">
                        <p class="prodName">{{ item.prodName }}</p>
                        <p class="prodPrice">$ {{ item.prodPrice }}</p>

                        <!-- 數量加減 -->
                        <span class="prodCount">
                            <button class="prodBtn" @click="decrementItem(item)">
                                <img src="/image/ShopImage/up.png"></button>

                            <p>{{ item.inCart }}</p>
                            <button class="prodBtn" @click="incrementItem(item)">
                                <img src="/image/ShopImage/down.png"></button>
                        </span>
                        <button class="obj_Radius btn_Shop_Border">加入購物車</button>
                    </div>
                </div>
            </div>

            <!-- 分頁 -->
            <Page :total="catList.length" show-sizer :page-size-opts="[20, 16, 12, 8]" :page-size="selectedPageSize"
                @on-change="handlePageChange" @on-page-size-change="handlePageSize" />
        </div>

        <!-- <pre>{{ sortProducts2 }}</pre> -->
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/shop.scss";
</style>
<script src="./js/ShopView.js"></script>

<template>
    <div class="bannerpic">
        <img :src="`${publicPath}image/ShopImage/shopbanner.png`" alt="周邊販售">
    </div>
    <!-- 麵包屑 -->
    <Breadcrumb separator="/">
        <BreadcrumbItem><router-link to="/home">首頁</router-link></BreadcrumbItem>
        <BreadcrumbItem>周邊商品</BreadcrumbItem>
    </Breadcrumb>
    <!-- 商品排序 -->
    <div class="selectArea">
        <select class="prodSort obj_Radius" v-model="sortType" @change="typeClick(sortType)">
            <option v-for="type in typeOptions" :value="type" :key="type">
                {{ type }}
            </option>
        </select>
    </div>

    <div class="shop">
        <div class="prodType ">
            <h2>商品類型</h2>
            <!-- 分類篩選 -->
            <ul>
                <li v-for="item in items" :key="item.id">
                    <p class="chooseType" @click="setCurrentKind(item.kind)"
                        :class="{ '--active': currentKind === item.kind }">{{ item.label }}</p>
                </li>
            </ul>

        </div>

        <!-- 商品 -->
        <div class="inner">
            <div class="prod">
                <div class="prodCard" v-for="item in getSelectedPageSize" :key="item.prod_id">
                    <router-link :to="`/home/shopproddetail/${item.prod_id}`" class="prodPic">
                        <img :src="`${publicPath}image/ShopImage/${item.prod_pic}`" :alt="item.prod_name">
                    </router-link>
                    <div class="prodTxt">
                        <router-link :to="`/hetail/${item.prod_id}`" class="prodName">{{ item.prod_name }}</router-link>
                        <p class="prodPrice">$ {{ item.prod_price }}</p>

                        <!-- 數量加減 -->
                        <span class="prodCount">
                            <button class="prodBtn" @click="decrementItem(item)">
                                <fontAwesome :icon="['fa', 'circle-minus']" style="color: #252525;" />
                            </button>

                            <p>{{ item.chat_num }}</p>
                            <button class="prodBtn" @click="incrementItem(item)">
                                <fontAwesome :icon="['fa', 'circle-plus']" style="color: #252525;" />
                            </button>
                        </span>
                        <button class="obj_Radius btn_Shop_Border addButton" @click="addToCart(item)">加入購物車</button>
                    </div>
                </div>
            </div>

            <!-- 分頁 -->
            <Page :total="catList.length" show-sizer :page-size-opts="[20, 16, 12, 8]" :page-size="selectedPageSize"
                @on-page-size-change="handlePageChange" v-model="currentPage" />
        </div>
        <button class="shopcart" @click="checkLogin">
            <img :src="`${publicPath}image/icon/shopcart.png`" alt="shopcart">
        </button>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/shop.scss";
</style>
<script src="./js/ShopView.js"></script>

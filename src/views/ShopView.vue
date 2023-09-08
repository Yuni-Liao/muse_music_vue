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
            <option v-for="(type, index) in typeOptions" :value="type" :key="index">{{ type
            }}
            </option>
        </select>
    </div>


    <div class="shop">
        <div class="prodType ">
            <h2>商品類型</h2>
            <ul>
                <li v-for="item in items" :key="item.id">
                    <a :href="item.link" @click="currentKind = item.kind"
                        :class="{ '--active': currentKind === item.kind }">{{ item.label }}</a>
                </li>
            </ul>
        </div>
        <div class="inner">
            <div class="prod">
                <div class="prodCard" v-for="(item, index) in displayedProducts" :key="index">
                    <div class="prodPic">
                        <img :src="require(`@/assets/image/ShopImage/${item.prodPic}`)" alt="item.prodName">
                    </div>
                    <div class="prodTxt">
                        <p class="prodName">{{ item.prodName }}</p>
                        <p class="prodPrice">$ {{ item.prodPrice }}</p>
                        <span class="prodCount">
                            <button class="prodBtn" @click="decrementItem(item)">
                                <img src="~@/assets/image/ShopImage/up.png"></button>

                            <p>{{ item.inCart }}</p>
                            <button class="prodBtn" @click="incrementItem(item)">
                                <img src="~@/assets/image/ShopImage/down.png"></button>
                        </span>
                        <button class="obj_Radius btn_Shop_Border">加入購物車</button>
                    </div>
                </div>
            </div>
            <!-- 以下是分頁面區 -->
            <Page :total="catList.length" show-sizer :page-size-opts="[20, 16, 12, 8]" :page-size="selectedPageSize"
                @on-change="handlePageChange" @on-page-size-change="handlePageSize" />
        </div>

        <pre>{{ sortProducts2 }}</pre>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/shop.scss";
</style>
<script src="./js/ShopView.js">
// export default {
//     data() {
//         return {
//             items: [
//                 {
//                     id: 1,
//                     label: '所有商品',
//                     kind: 'All',
//                     link: '#'
//                 },
//                 {
//                     id: 2,
//                     label: '黑膠唱片',
//                     kind: '黑膠唱片',
//                     link: '#'
//                 },
//                 {
//                     id: 3,
//                     label: '男藝人',
//                     kind: '男藝人',
//                     link: '#'
//                 },
//                 {
//                     id: 4,
//                     label: '女藝人',
//                     kind: '女藝人',
//                     link: '#'
//                 },
//                 {
//                     id: 5,
//                     label: '樂團團體',
//                     kind: '樂團團體',
//                     link: '#'
//                 }
//             ],
//             products: [
//                 {
//                     id: 1,
//                     prodPic: "prod1.jpg",
//                     prodName: "Killbeast 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-01",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 2,
//                     prodPic: "prod2.jpg",
//                     prodName: "西城男人 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-02",
//                     kind: "男藝人樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 3,
//                     prodPic: "prod3.jpg",
//                     prodName: "Party Time 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-03",
//                     kind: "樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 4,
//                     prodPic: "prod4.jpg",
//                     prodName: "Rose 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-04",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 5,
//                     prodPic: "prod5.jpg",
//                     prodName: "Over Over 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-05",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 6,
//                     prodPic: "prod6.jpg",
//                     prodName: "Blackmage 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-06",
//                     kind: "樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 7,
//                     prodPic: "prod7.jpg",
//                     prodName: "KKOCK 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-07",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 8,
//                     prodPic: "prod1.jpg",
//                     prodName: "cillbeast 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-08",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 9,
//                     prodPic: "prod2.jpg",
//                     prodName: "東城男子 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-09",
//                     kind: "男藝人樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 10,
//                     prodPic: "prod3.jpg",
//                     prodName: "Sleep Time 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-10",
//                     kind: "樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 11,
//                     prodPic: "prod4.jpg",
//                     prodName: "Lisa 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-11",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 12,
//                     prodPic: "prod5.jpg",
//                     prodName: "Very Very 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-12",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 13,
//                     prodPic: "prod6.jpg",
//                     prodName: "Pinkmage 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-13",
//                     kind: "樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 14,
//                     prodPic: "prod7.jpg",
//                     prodName: "VVOCK 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-14",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 15,
//                     prodPic: "prod1.jpg",
//                     prodName: "Drop beast 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-15",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 16,
//                     prodPic: "prod2.jpg",
//                     prodName: "北區女孩 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-16",
//                     kind: "女藝人樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 17,
//                     prodPic: "prod3.jpg",
//                     prodName: "Show Time 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-17",
//                     kind: "樂團團體黑膠唱片",
//                 },
//                 {
//                     id: 18,
//                     prodPic: "prod4.jpg",
//                     prodName: "Jisso 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-18",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 19,
//                     prodPic: "prod5.jpg",
//                     prodName: "Money Money 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-19",
//                     kind: "女藝人黑膠唱片",
//                 },
//                 {
//                     id: 20,
//                     prodPic: "prod6.jpg",
//                     prodName: "Bluemage 黑膠",
//                     prodPrice: 990,
//                     inCart: 0,
//                     date: "2023-01-20",
//                     kind: "樂團團體黑膠唱片",
//                 }
//             ],

//             currentPage: 1,
//             //劉宜靜 - 商品篩選
//             currentKind: [
//                 "黑膠唱片",
//                 "男藝人",
//                 "女藝人",
//                 "樂團團體"
//             ],
//             //劉宜靜 - 商品排序
//             typeOptions: [
//                 '商品排序',
//                 '上架時間(新>舊)',
//                 '上架時間(舊>新)',
//                 '價格:由高到低',
//                 '價格:由低到高',
//             ],
//             selectedType: '商品排序',
//         }
//     },

//     computed: {
//         //劉宜靜 - 商品篩選(All)
//         catList() {
//             if (this.currentKind === 'All') return this.products;
//             return this.products.filter((v, i) => v.kind.includes(this.currentKind))
//         },
//         //郭凱芸 - 下拉數量選單:計算商品數量
//         displayedProducts() {
//             const startIdx = (this.currentPage - 1) * this.selectedPageSize;
//             const endIdx = startIdx + this.selectedPageSize;
//             return this.sortedTypeOptions.slice(startIdx, endIdx);
//         },

//         //劉宜靜 - 商品排序
//         sortedTypeOptions() {
//             const sortedProducts = [...this.catList];
//             let func = (a, b) => new Date(b.date) - new Date(a.date)

//             if (this.selectedType === '上架時間(舊>新)') {
//                 func = (a, b) => new Date(a.date) - new Date(b.date)
//             }

//             if (this.selectedType === '價格:由高到低') {
//                 func = (a, b) => b.prodPrice - a.prodPrice
//             }

//             if (this.selectedType === '價格:由低到高') {
//                 func = (a, b) => a.prodPrice - b.prodPrice
//             }
//             return sortedProducts.sort(func);
//         }
//     },
//     //郭凱芸 - 下拉數量預設
//     mounted() {
//         this.handlePageSize(20)
//     },
//     methods: {
//         // 郭凱芸 - 增加商品數量
//         incrementItem(item) {
//             if (item.inCart >= 0) {
//                 item.inCart++;
//             }
//         },
//         // 郭凱芸 - 減少商品數量
//         decrementItem(item) {
//             if (item.inCart > 0) {
//                 item.inCart--;
//             }
//         },
//         // 郭凱芸 - 分頁顯示商品數量
//         handlePageChange(page) {
//             console.log('handlePageChange', page)
//             this.currentPage = page;
//         },
//         handlePageSize(page) {
//             console.log('handlePageSize', page)
//             this.selectedPageSize = page;
//         },
//     },
// }
</script>

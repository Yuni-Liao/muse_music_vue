<template>
    <!-- <h1>這是商城頁面</h1> -->
            <!-- 注意:: 點擊商品>查看商品詳情的內頁跳轉要用router-link to="___" 這方式套才不會404, 用<a>沒辦法 -->
        <!-- <router-link to="/shopProd/1"><img alt="Vue logo" src="~@/assets/image/muse_logo.png"></router-link> -->
    <div class="shop">
        <div class="prodtype ">
            <h2>商品類型</h2>
            <a href="#">新貨上架</a>
            <a href="#">黑膠唱片</a>
            <a href="#">男藝人</a>
            <a href="#">女藝人</a>
            <a href="#">樂團團體</a>
        </div>
        <div class="inner">
        <div class="top">
            <Breadcrumb separator="/">
                <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
                <BreadcrumbItem>周邊商品</BreadcrumbItem>
            </Breadcrumb>
            <select class="obj_Radius">
                <option selected>商品排序</option>
                <option>上架時間(新>舊)</option>
                <option>上架時間(舊>新)</option>
                <option>價格:由高到低</option>
                <option>價格:由低到高</option>
            </select>
            <select class="obj_Radius">
                <option selected>每頁顯示20個</option>
                <option>每頁顯示16個</option>
                <option>每頁顯示12個</option>
                <option>每頁顯示8個</option>
            </select>
        </div>
        
        <div class="prod">
            <div class="prodcard">
                <div class="prodpic">
                    <img alt="Vue logo" src="https://picsum.photos/247/163">
                </div>
                <div class="prodtxt">
                    <p>商品名稱</p>
                    <p>$990</p>
                    <span class="prodcount">
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/down.png"></button>
                        <p>0</p>
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/up.png"></button>
                    </span>
                </div>
            </div>
            <div class="prodcard">
                <div class="prodpic">
                    <img alt="Vue logo" src="https://picsum.photos/247/163">
                </div>
                <div class="prodtxt">
                    <p>商品名稱</p>
                    <p>$990</p>
                    <span class="prodcount">
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/down.png"></button>
                        <p>0</p>
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/up.png"></button>
                    </span>
                </div>
            </div>
            <div class="prodcard">
                <div class="prodpic">
                    <img alt="Vue logo" src="https://picsum.photos/247/163">
                </div>
                <div class="prodtxt">
                    <p>商品名稱</p>
                    <p>$990</p>
                    <span class="prodcount">
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/down.png"></button>
                        <p>0</p>
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/up.png"></button>
                    </span>
                </div>
            </div>
            <div class="prodcard">
                <div class="prodpic">
                    <img alt="Vue logo" src="https://picsum.photos/247/163">
                </div>
                <div class="prodtxt">
                    <p>商品名稱</p>
                    <p>$990</p>
                    <span class="prodcount">
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/down.png"></button>
                        <p>0</p>
                        <button class="prodbtn"><img src="~@/assets/image/ShopImage/up.png"></button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/shop.scss";
</style>
<<<<<<< HEAD

=======
<script src="./js/ShopView"></script>
>>>>>>> 80e4ba173a555321b09f08bb44159c9ecfb01347

<template>
    <main class="shopProdDetail">
        <!-- 麵包屑 -->
        <Breadcrumb separator="/">
            <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
            <BreadcrumbItem><router-link to="/">周邊商品</router-link></BreadcrumbItem>
            <BreadcrumbItem>黑膠唱片</BreadcrumbItem>
        </Breadcrumb>
        <!-- 商品介紹 -->
        <section class="inner">
            <div class="mainInf">
                <div class="pic">
                    <img src="/image/ShopImage/prod5.jpg" alt="Mekka Over Over(黑膠)">
                </div>
                <div class="txt">
                    <div class="title">
                        <h1 class="singer">Mekka</h1>
                        <h2 class="prodName">Over Over(黑膠)</h2>
                    </div>
                    <div class="prodInf">
                        商品條碼 4710149693495<br>
                        商品編號 RLP139<br>
                        音樂類型 黑膠唱片LP黑膠 專輯<br>
                        發行公司 昆拾<br>
                        發行日期 2022/12/2<br>
                        內裝片數 1
                    </div>
                    <p class="price">
                        售價 $990
                    </p>
                    <div class="btnArea">
                        <span class="prodCount">
                            <button class="prodBtn">
                                <img src="/image/ShopImage/up.png">
                            </button>
                            <p>0</p>
                            <button class="prodBtn">
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
                    <p>
                        Mekka之前是冬天的天涯<br>
                        Mekka之後是春天的天堂<br>
                        當女人唱歌就該像個男人<br>
                        男人的胸膛與女人的懷抱之間 這一片春天花會開...
                    </p>
                    <p class="list">
                        原始母帶製作<br>
                        德國Optimal刻片、壓片、140g<br>
                        限量發行<br>
                    </p>
                    <p>
                        此商品為預購特殊商品，除無法發行外，否則下訂單後一律「無法取消」或「更改」訂單。<br>
                        如遇供貨量不足，將依訂購順序，強制取消訂單，請消費者確認之後再下訂單!敬請見諒!
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/shopproddetail.scss";
</style>
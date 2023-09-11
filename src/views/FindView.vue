<template>
    <div class="find">
        <h1>探索．Find Your MUSE</h1>
    </div>
    <div class="language">
        <div class="space" v-for="(item, index) in languages" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <a :href="item.link">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>

    <div class="style">
        <div class="space" v-for="(item, index) in styles" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <a :href="item.link">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>

    <div class="emotion">
        <div class="space" v-for="(item, index) in emotion" :key="index">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="txt">
                <a :href="item.link">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>

    <div class="test">
        <div class="aaa">
            <img src="~@/assets/image/footer_background.jpg" alt="">
            <div class="text">
                <p>
                    test123
                </p>
            </div>
        </div>
        <div class="aaa">
            test123
            <img src="~@/assets/image/footer_background.jpg" alt="">
        </div>
        <div class="aaa">
            test123
            <img src="~@/assets/image/footer_background.jpg" alt="">
        </div>
        <div class="aaa">
            test123
            <img src="~@/assets/image/footer_background.jpg" alt="">
        </div>
        <div class="aaa">
            test123
            <img src="~@/assets/image/footer_background.jpg" alt="">
        </div>
        <div class="aaa">
            test123
            <img src="~@/assets/image/footer_background.jpg" alt="">
        </div>
        <div class="aaa">
            test123
            <img src="~@/assets/image/footer_background.jpg" alt="">
        </div>
    </div>

</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/find.scss";
</style>
<script src="./js/FindView.js"></script>

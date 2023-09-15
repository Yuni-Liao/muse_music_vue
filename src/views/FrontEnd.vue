<!-- 這頁作為前台的根目錄 -->

<template>
    <Header />
    <Robot />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<style lang="scss">
@import "~@/assets/scss/page/index.scss";
</style>
<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Robot from '../components/Robot.vue'


export default {
    name: 'FrontEnd',
    components: {
        Header,
        Footer,
        Robot
    }
}
</script>

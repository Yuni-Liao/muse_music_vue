<template>
    <header class="backend_header" id="backend_header">
        <router-link to="/backend">
            <img class="logo_backend" id="logo_backend" alt="Vue logo" src="~@/assets/image/muse_logo.png" />
        </router-link>
        <button @click="logOut()" class="logout obj_Radius" id="logout">登出</button>
        <!-- <router-link to="/backendlogin">登出</router-link> -->
    </header>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/layout/backendHeader.scss";
</style>

<script>
export default {
    methods: {
        logOut() {
            alert('登出');
        }
    },
}
</script>

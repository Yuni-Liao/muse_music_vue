<template>
    <div class="backend_login_wrap">
        <div class="backend_login_logo">
            <img src="../../../public/image/muse_logo_2.png" alt="">
        </div>
        <div class="backend_muse_login">
            <!-- 功能我先註解掉, 真正寫功能時要用可以解開 by yuni-->
            <!-- <Login @on-submit="handleSubmit"> -->
            <Login>
                <UserName name="username" value="aresn" />
                <Password name="password" value="iamadmin" />
                <Submit to="/backend" />
            </Login>
        </div>
    </div>
</template>

<style scoped lang="scss">
.backend_login_wrap {
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: $dark;

    .backend_muse_login {
        width: 400px !important;
        margin: 60px auto;
    }

    .backend_login_logo {
        vertical-align: middle;
    }
}
</style>

<!-- <script>
export default {
    methods: {
        handleSubmit(valid, { username, password }) {
            if (valid) {
                this.$Modal.info({
                    title: '输入的内容如下：',
                    content: 'username: ' + username + ' | password: ' + password
                });
            }
        }
    }
}
</script> -->
<template>
  <div class="backend_login_wrap">
    <div class="backend_login_logo">
      <img src="../../../public/image/muse_logo_2.png" alt="">
    </div>
    <div class="backend_muse_login">
      <Login @on-submit="login">
        <UserName name="acc" v-model="admin_acc.acc" />
        <Password name="admin_psw" v-model="admin_acc.admin_psw" />
        <Submit>
          <span slot="inner">登入</span>
        </Submit>
      </Login>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      admin_acc: {
        acc: "",
        admin_psw: "",
      },
    };
  },
  methods: {
    login(valid, { acc, admin_psw }) {
      console.log(acc);
      console.log(admin_psw);

      const dataToSend = new FormData();
      dataToSend.append("acc", acc);
      dataToSend.append("admin_psw", admin_psw);

      const url = new URL(`${this.$store.state.phpPublicPath}loginBackend.php`);

      fetch(url, {
        method: "POST",
        body: dataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "登入成功") {
            alert("登入成功");
            window.location.href = `${this.$store.state.linkPublicPath}backend`;
            
          } else {
            alert(data.message || "帳號密碼不正確");
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.backend_login_wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark;
}

  .backend_muse_login {
    width: 400px !important;
    margin: 60px auto;
  }

  .backend_login_logo {
    vertical-align: middle;
  }
</style>

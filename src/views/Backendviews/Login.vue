<template>
  <div class="backend_login_wrap">
    <div class="backend_login_logo">
      <img src="../../../public/image/muse_logo_2.png" alt="">
    </div>
    <div class="backend_muse_login">
      <Login @on-submit="login">
        <UserName name="username" v-model="admin_acc[0].acc" />
        <Password name="password" v-model="admin_acc[0].admin_psw" />
        <!-- <Submit /> -->
        <Submit>
          <span slot="inner">登入</span>
        </Submit>
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

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      admin_acc: [
        {
          acc: "請輸入帳號",
          admin_psw: "",
          name: "",
        },
      ],
      login_admin_id: "",
      emailInvalid: false,
      passwordInvalid: false,
      showPassword: false,
      adminData: {},
    };
  },
  methods: {
    login() {
      console.log("登入中...");

      const dataToSend = new FormData();

      dataToSend.append("acc", this.admin_acc[0].acc);
      dataToSend.append("admin_psw", this.admin_acc[0].admin_psw);

      const url = new URL(
        `${this.$store.state.phpPublicPath}loginBackend.php`);

      fetch(url, {
        method: "POST",
        body: dataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "登入成功") {
            alert("登入成功");

            const admin_id = data.admin_id;
            const name = data.name;
            localStorage.setItem("admin_id", admin_id);
            localStorage.setItem("name", name);

            window.location.href = `${this.$store.state.linkPublicPath}backend`;
          } else {
            alert(data.error || "帳號密碼不正確");
          }
        });
    },

  },
};
</script>

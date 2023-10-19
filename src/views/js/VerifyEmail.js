export default {
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      email: "",
    };
  },
  methods: {
    async sendVerificationEmail() {
      this.verificationCode = this.generateVerificationCode();
      try {
        // 寄送驗證碼
        const response = await fetch(
          "${this.$store.state.phpPublicPath}verifyEmail.php",
          {
            method: "POST",
            body: JSON.stringify({
              email: this.member[0].email,
              verificationCode: this.verificationCode,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          alert("驗證碼已寄出");
        } else {
          alert("驗證碼未寄出");
        }
      } catch (error) {
        console.error("網路連線:", error);
        alert("寄送成功");
      }
      this.next();
    },

    generateVerificationCode(length = 6) {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let code = "";
      for (let i = 0; i < length; i++) {
        code += characters[Math.floor(Math.random() * characters.length)];
      }
      return code;
    },
  },

  next() {
    if (this.current === 3) {
      this.current = 0;
    } else {
      this.current += 1;
    }
  },
  prev() {
    if (this.current === 0) {
      this.current = 3;
    } else {
      this.current -= 1;
    }
  },
};

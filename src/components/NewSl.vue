<template>
  <div id="NewSl">
    <form action="">
      <div class="content">
        <div class="newSlName title">
          <p>新增歌單</p>
          <input type="text" name="" />
        </div>
        <div class="public title">
          <p>隱私設定</p>
          <div class="opt">
            <label class="radioLabel">
              <input type="radio" name="public" value="1" required />
              <fontAwesome class="i" :icon="['fa', 'fa-check']"
            /></label>
            <span
              >公開
              <!-- <fontAwesome class="i" :icon="['fa', 'lock-open']"
            /> -->
            </span>

            <label class="radioLabel">
              <input type="radio" name="public" value="0" />
              <fontAwesome class="i" :icon="['fa', 'fa-check']"
            /></label>
            <span
              >私人
              <!-- <fontAwesome class="i" :icon="['fa', 'lock']" /> -->
            </span>
          </div>
        </div>
      </div>
      <div class="submit">
        <button type="button" @click="submitNewSl">
          <fontAwesome class="i" :icon="['fa', 'fa-check']" />完成
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewSl",
  data() {
    return {
      isNewSlOpen: false,
    };
  },
  methods: {
    submitNewSl() {
      this.$emit("isNewSlOpenupdate", this.isNewSlOpen);
    },
  },
};
</script>

<style scoped lang="scss">
#NewSl {
  width: 400px;
  @media screen and (max-width: 800px) {
    width: 350px;
    background-color: #2b2b2bee;
  }
  // 水平垂直置中
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 400;

  background-color: #000000dd;
  box-shadow: 0px 0px 50px #00000030;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  color: $white;
  padding: 0 30px;
  .i {
    margin: 0 10px;
    font-size: $tag;
  }
  .content {
    padding-top: 30px;
    .title {
      margin-bottom: 15px;
      p {
        font-size: $default;
        text-align: left;
        padding: 10px 0;
      }
      input[type="text"] {
        outline: 0;
        width: 100%;
        background-color: $tp;
        border: none;
        background-color: #ffffff20;
        border-radius: 5px;
        // border-bottom: 1px solid $white;
        padding: 8px 10px;
        color: $green;
        margin: 10px 0;
        font-size: $tag;
      }
      .opt {
        margin: 18px 0 35px 0;
        display: flex;
        .radioLabel {
          position: relative;
          margin-right: 20px;
          padding-top: 2px;
          input[type="radio"] {
            cursor: pointer;
            vertical-align: sub;
            color: $white;
            width: 23px;
            height: 23px;
            border-radius: 50%;
            /*清除預設樣式*/
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            border: 2px solid #ffffff80;
          }
          .i {
            position: absolute;
            z-index: 10;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            font-size: 12px;
            color: $green;
            margin: 0;
            opacity: 0;
            pointer-events: none;
          }
          input[type="radio"]:hover,
          input[type="radio"]:checked {
            border: 2px solid $green;
          }
          input[type="radio"]:hover ~ .i,
          input[type="radio"]:checked ~ .i {
            opacity: 1;
          }
        }
        span {
          font-size: $tag;
          flex-grow: 1;
          text-align: start;
          line-height: 25px;
        }
      }
    }
  }
  .submit {
    width: 100%;
    height: 70px;
    margin-top: 20px;
    border-top: 1px solid #ffffff80;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    button {
      margin: auto;
      @include btnBgNone;
      font-size: $default;
      color: $white;
      .i {
        margin-right: 20px;
      }
    }
    button:hover {
      color: $green;
    }
  }
}
</style>

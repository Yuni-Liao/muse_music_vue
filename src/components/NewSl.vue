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
              <input type="radio" name="public" value="1" checked />
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
        <button>
          <fontAwesome class="i" :icon="['fa', 'fa-check']" />完成
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewSl",
  methods: {
    // ShareBtn() {
    //   alert("分享");
    // },
  },
};
</script>

<style scoped lang="scss">
#NewSl {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  width: 280px;
  background-color: #000000;
  border-radius: 6px;
  border: 1px solid $white;
  color: $white;
  font-size: $tag;
  .i {
    margin: 0 10px;
    font-size: $tag;
  }
  .content {
    p {
      text-align: left;
    }
    padding: 10px 20px;

    .title {
      padding: 5px 0;
      p {
        padding: 5px 0;
      }
    }
    input[type="text"] {
      width: 100%;
      background-color: $tp;
      border: none;
      border-bottom: 1px solid $white;
    }
    .opt {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      .radioLabel {
        position: relative;
        margin-right: 0 10px;
        vertical-align: middle;
        input[type="radio"] {
          color: $white;
          width: 20px;
          height: 20px;
          /*清除預設樣式*/
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          border: 1px solid $white;
        }
        .i {
          position: absolute;
          z-index: 10;
          top: 15%;
          left: 25%;
          font-size: 12px;
          color: $white;
          margin: 0;
          opacity: 0;
          pointer-events: none;
        }
        input[type="radio"]:checked ~ .i {
          opacity: 1;
        }
      }
    }
  }
  .submit {
    width: 280px;
    padding: 10px;
    border-top: 1px solid $white;
    button {
      @include btnBgNone;
      color: $white;
    }
  }
}
</style>

<template>
  <button id="ShareBtn" @click="ShareBtn()">
    <fontAwesome :icon="['fa', 'share']" style="color: #252525" />
  </button>
</template>
<script>
export default {
  name: "ShareBtn",
  methods: {
    ShareBtn() {
      // 此處撰寫功能code，測試用內容可清除
      alert("分享");
    },
    copyPageLink() {
      // 获取当前网页的链接
      const pageLink = window.location.href;

      // 创建一个虚拟的文本区域元素，用于复制到剪贴板
      const textArea = document.createElement("textarea");
      textArea.value = pageLink;

      // 将文本区域元素添加到文档中
      document.body.appendChild(textArea);

      // 选择文本
      textArea.select();

      try {
        // 尝试执行复制操作
        document.execCommand("copy");
        alert("已复制到剪贴板: " + pageLink);
      } catch (err) {
        console.error("复制失败: ", err);
      } finally {
        // 从文档中移除文本区域元素
        document.body.removeChild(textArea);
      }
    },
  },
};
</script>

<style scoped lang="scss">
#ShareBtn {
  @include music_btn_circle(35px);
}
</style>

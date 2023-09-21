<template>
  <div id="Typed">
    <h2 v-for="(content, index) in displayedText.slice(0, 1)" :key="index">
      {{ content }}
    </h2>
    <p v-for="(content, index) in displayedText.slice(1, 10)" :key="index">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Typed",
  props: ["initialques", "initialopt1", "initialopt2", "initialopt3"],
  data() {
    return {
      index: 0,
      displayedText: [], // 存储已显示的文本
      contentQueue: [], // 存储所有要显示的内容
      activeContent: "ques", // 当前要显示的内容类型
    };
  },
  created() {
    // 将要显示的内容按顺序存入队列
    this.contentQueue.push(
      this.initialques,
      this.initialopt1,
      this.initialopt2,
      this.initialopt3
    );
    this.autoTyping(); // 开始打字
  },
  methods: {
    autoTyping() {
      if (this.contentQueue.length === 0) {
        // 队列为空，停止打字
        return;
      }

      const currentContent = this.contentQueue.shift(); // 获取当前要显示的内容
      this.index = 0; // 重置索引
      this.displayedText.push(""); // 添加一个空文本，用于显示当前内容

      const typingInterval = setInterval(() => {
        this.index++;
        const text = currentContent.slice(0, this.index);
        this.displayedText[this.displayedText.length - 1] = text; // 更新最后一个元素

        if (this.index === currentContent.length) {
          // 当前内容已打印完毕
          clearInterval(typingInterval); // 停止计时器
          setTimeout(() => {
            // 根据不同的内容类型切换到下一个
            if (this.activeContent === "ques") {
              this.activeContent = "opt1";
            } else if (this.activeContent === "opt1") {
              this.activeContent = "opt2";
            } else if (this.activeContent === "opt2") {
              this.activeContent = "opt3";
            }
            this.autoTyping(); // 继续下一个内容
          }, 1000); // 停顿一秒后继续下一个内容
        }
      }, 100);
    },
  },
};
</script>

<style></style>

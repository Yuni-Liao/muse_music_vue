<template>
  <div class="museboybox">
    <canvas id="museboy"> </canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    // 跟 HTML 畫面產生關聯
    let canvas = document.getElementById("museboy");
    let context = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 400;

    function drawing() {
      //橡皮擦
      context.clearRect(0, 0, canvas.width, canvas.height);

      // =====
      //museboy
      //黑膠頭
      context.beginPath();
      context.moveTo(80, 80);
      context.lineTo(90, 80);
      context.lineTo(90, 60);
      context.lineTo(100, 60);
      context.lineTo(100, 50);
      context.lineTo(120, 50);
      context.lineTo(120, 40);
      context.lineTo(170, 40);
      context.lineTo(170, 50);
      context.lineTo(190, 50);
      context.lineTo(190, 60);
      context.lineTo(200, 60);
      context.lineTo(200, 80);
      context.lineTo(210, 80);
      context.lineTo(210, 130);
      context.lineTo(200, 130);
      context.lineTo(200, 150);
      context.lineTo(190, 150);
      context.lineTo(190, 160);
      context.lineTo(170, 160);
      context.lineTo(170, 170);
      context.lineTo(120, 170);
      context.lineTo(120, 160);
      context.lineTo(100, 160);
      context.lineTo(100, 150);
      context.lineTo(90, 150);
      context.lineTo(90, 130);
      context.lineTo(80, 130);
      context.lineTo(80, 80);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //黑膠頭(紅)
      context.beginPath();
      context.moveTo(120, 90);
      context.lineTo(130, 90);
      context.lineTo(130, 80);
      context.lineTo(160, 80);
      context.lineTo(160, 90);
      context.lineTo(170, 90);
      context.lineTo(170, 120);
      context.lineTo(160, 120);
      context.lineTo(160, 130);
      context.lineTo(130, 130);
      context.lineTo(130, 120);
      context.lineTo(120, 120);
      context.lineTo(120, 90);
      context.closePath();
      context.fillStyle = "#BD2727";
      context.fill();

      //黑膠頭(白)
      context.beginPath();
      context.moveTo(140, 100);
      context.lineTo(150, 100);
      context.lineTo(150, 110);
      context.lineTo(140, 110);
      context.closePath();
      context.fillStyle = "#FFFFFF";
      context.fill();

      //白踢
      context.beginPath();
      context.moveTo(120, 170);
      context.lineTo(180, 170);
      context.lineTo(180, 250);
      context.lineTo(120, 250);
      context.lineTo(120, 170);
      context.closePath();
      context.fillStyle = "#d9d9d9";
      context.fill();

      //紅外套(左)
      context.beginPath();
      context.moveTo(90, 160);
      context.lineTo(120, 160);
      context.lineTo(120, 170);
      context.lineTo(140, 170);
      context.lineTo(140, 180);
      context.lineTo(130, 180);
      context.lineTo(130, 200);
      context.lineTo(120, 200);
      context.lineTo(120, 250);
      context.lineTo(90, 250);
      context.lineTo(90, 210);
      context.lineTo(80, 210);
      context.lineTo(80, 220);
      context.lineTo(70, 220);
      context.lineTo(70, 230);
      context.lineTo(50, 230);
      context.lineTo(50, 200);
      context.lineTo(60, 200);
      context.lineTo(60, 190);
      context.lineTo(70, 190);
      context.lineTo(70, 180);
      context.lineTo(80, 180);
      context.lineTo(80, 170);
      context.lineTo(90, 170);
      context.lineTo(90, 160);
      context.closePath();
      context.fillStyle = "#DF2525";
      context.fill();

      //手(左)
      context.beginPath();
      context.moveTo(40, 220);
      context.lineTo(60, 220);
      context.lineTo(60, 240);
      context.lineTo(40, 240);
      context.lineTo(40, 220);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //紅外套(右)
      context.beginPath();
      context.moveTo(170, 160);
      context.lineTo(190, 160);
      context.lineTo(190, 150);
      context.lineTo(200, 150);
      context.lineTo(200, 140);
      context.lineTo(210, 140);
      context.lineTo(210, 130);
      context.lineTo(230, 130);
      context.lineTo(230, 150);
      context.lineTo(220, 150);
      context.lineTo(220, 160);
      context.lineTo(210, 160);
      context.lineTo(210, 170);
      context.lineTo(200, 170);
      context.lineTo(200, 180);
      context.lineTo(210, 180);
      context.lineTo(210, 190);
      context.lineTo(220, 190);
      context.lineTo(220, 210);
      context.lineTo(230, 210);
      context.lineTo(230, 230);
      context.lineTo(210, 230);
      context.lineTo(210, 240);
      context.lineTo(190, 240);
      context.lineTo(190, 250);
      context.lineTo(180, 250);
      context.lineTo(180, 210);
      context.lineTo(170, 210);
      context.lineTo(170, 160);
      context.closePath();
      context.fillStyle = "#DF2525";
      context.fill();

      //手(右)
      context.beginPath();
      context.moveTo(220, 120);
      context.lineTo(240, 120);
      context.lineTo(240, 140);
      context.lineTo(220, 140);
      context.lineTo(220, 120);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //黑褲(v1)
      context.beginPath();
      context.moveTo(110, 250);
      context.lineTo(190, 250);
      context.lineTo(190, 270);
      context.lineTo(200, 270);
      context.lineTo(200, 300);
      context.lineTo(210, 300);
      context.lineTo(210, 330);
      context.lineTo(180, 330);
      context.lineTo(180, 310);
      context.lineTo(170, 310);
      context.lineTo(170, 290);
      context.lineTo(160, 290);
      context.lineTo(160, 280);
      context.lineTo(140, 280);
      context.lineTo(140, 290);
      context.lineTo(130, 290);
      context.lineTo(130, 310);
      context.lineTo(120, 310);
      context.lineTo(120, 330);
      context.lineTo(90, 330);
      context.lineTo(90, 300);
      context.lineTo(100, 300);
      context.lineTo(100, 270);
      context.lineTo(110, 270);
      context.lineTo(110, 250);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //鞋(左v1)
      context.beginPath();
      context.moveTo(80, 330);
      context.lineTo(120, 330);
      context.lineTo(120, 350);
      context.lineTo(80, 350);
      context.lineTo(80, 330);
      context.closePath();
      context.fillStyle = "#aaaaaa";
      context.fill();

      //鞋(右)
      context.beginPath();
      context.moveTo(180, 330);
      context.lineTo(210, 330);
      context.lineTo(210, 320);
      context.lineTo(220, 320);
      context.lineTo(220, 350);
      context.lineTo(180, 350);
      context.lineTo(180, 330);
      context.closePath();
      context.fillStyle = "#aaaaaa";
      context.fill();

      //黑膠針(黑)
      context.beginPath();
      context.moveTo(220, 110);
      context.lineTo(230, 110);
      context.lineTo(230, 80);
      context.lineTo(240, 80);
      context.lineTo(240, 60);
      context.lineTo(250, 60);
      context.lineTo(250, 40);
      context.lineTo(240, 40);
      context.lineTo(240, 30);
      context.lineTo(230, 30);
      context.lineTo(230, 40);
      context.lineTo(220, 40);
      context.lineTo(220, 60);
      context.lineTo(230, 60);
      context.lineTo(230, 70);
      context.lineTo(220, 70);
      context.lineTo(220, 110);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //黑膠針(白)
      context.beginPath();
      context.moveTo(190, 90);
      context.lineTo(230, 90);
      context.lineTo(230, 110);
      context.lineTo(190, 110);
      context.lineTo(190, 90);
      context.closePath();
      context.fillStyle = "#aaaaaa80";
      context.fill();
    }
    function drawing2() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      //黑膠頭
      context.beginPath();
      context.moveTo(80, 80);
      context.lineTo(90, 80);
      context.lineTo(90, 60);
      context.lineTo(100, 60);
      context.lineTo(100, 50);
      context.lineTo(120, 50);
      context.lineTo(120, 40);
      context.lineTo(170, 40);
      context.lineTo(170, 50);
      context.lineTo(190, 50);
      context.lineTo(190, 60);
      context.lineTo(200, 60);
      context.lineTo(200, 80);
      context.lineTo(210, 80);
      context.lineTo(210, 130);
      context.lineTo(200, 130);
      context.lineTo(200, 150);
      context.lineTo(190, 150);
      context.lineTo(190, 160);
      context.lineTo(170, 160);
      context.lineTo(170, 170);
      context.lineTo(120, 170);
      context.lineTo(120, 160);
      context.lineTo(100, 160);
      context.lineTo(100, 150);
      context.lineTo(90, 150);
      context.lineTo(90, 130);
      context.lineTo(80, 130);
      context.lineTo(80, 80);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //黑膠頭(紅)
      context.beginPath();
      context.moveTo(120, 90);
      context.lineTo(130, 90);
      context.lineTo(130, 80);
      context.lineTo(160, 80);
      context.lineTo(160, 90);
      context.lineTo(170, 90);
      context.lineTo(170, 120);
      context.lineTo(160, 120);
      context.lineTo(160, 130);
      context.lineTo(130, 130);
      context.lineTo(130, 120);
      context.lineTo(120, 120);
      context.lineTo(120, 90);
      context.closePath();
      context.fillStyle = "#BD2727";
      context.fill();

      //黑膠頭(白)
      context.beginPath();
      context.moveTo(140, 100);
      context.lineTo(150, 100);
      context.lineTo(150, 110);
      context.lineTo(140, 110);
      context.closePath();
      context.fillStyle = "#FFFFFF";
      context.fill();

      //白踢
      context.beginPath();
      context.moveTo(120, 170);
      context.lineTo(180, 170);
      context.lineTo(180, 250);
      context.lineTo(120, 250);
      context.lineTo(120, 170);
      context.closePath();
      context.fillStyle = "#d9d9d9";
      context.fill();

      //紅外套(左)
      context.beginPath();
      context.moveTo(90, 160);
      context.lineTo(120, 160);
      context.lineTo(120, 170);
      context.lineTo(140, 170);
      context.lineTo(140, 180);
      context.lineTo(130, 180);
      context.lineTo(130, 200);
      context.lineTo(120, 200);
      context.lineTo(120, 250);
      context.lineTo(90, 250);
      context.lineTo(90, 210);
      context.lineTo(80, 210);
      context.lineTo(80, 220);
      context.lineTo(70, 220);
      context.lineTo(70, 230);
      context.lineTo(50, 230);
      context.lineTo(50, 200);
      context.lineTo(60, 200);
      context.lineTo(60, 190);
      context.lineTo(70, 190);
      context.lineTo(70, 180);
      context.lineTo(80, 180);
      context.lineTo(80, 170);
      context.lineTo(90, 170);
      context.lineTo(90, 160);
      context.closePath();
      context.fillStyle = "#DF2525";
      context.fill();

      //手(左)
      context.beginPath();
      context.moveTo(40, 220);
      context.lineTo(60, 220);
      context.lineTo(60, 240);
      context.lineTo(40, 240);
      context.lineTo(40, 220);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //紅外套(右)
      context.beginPath();
      context.moveTo(170, 160);
      context.lineTo(190, 160);
      context.lineTo(190, 150);
      //------------
      context.lineTo(215, 150);
      context.lineTo(215, 160);
      context.lineTo(250, 160);
      context.lineTo(250, 180);
      context.lineTo(200, 180);
      //------------
      context.lineTo(210, 180);
      context.lineTo(210, 190);
      context.lineTo(220, 190);
      context.lineTo(220, 210);
      context.lineTo(230, 210);
      context.lineTo(230, 230);
      context.lineTo(210, 230);
      context.lineTo(210, 240);
      context.lineTo(190, 240);
      context.lineTo(190, 250);
      context.lineTo(180, 250);
      context.lineTo(180, 210);
      context.lineTo(170, 210);
      context.lineTo(170, 160);
      context.closePath();
      context.fillStyle = "#DF2525";
      context.fill();

      //手(右)
      context.beginPath();
      context.moveTo(240, 160);
      context.lineTo(260, 160);
      context.lineTo(260, 180);
      context.lineTo(240, 180);
      context.lineTo(240, 160);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //黑褲(v2)
      context.beginPath();
      context.moveTo(110, 250);
      context.lineTo(190, 250);
      context.lineTo(190, 270);
      context.lineTo(200, 270);
      context.lineTo(200, 300);
      context.lineTo(210, 300);
      context.lineTo(210, 330);
      context.lineTo(180, 330);
      context.lineTo(180, 310);
      context.lineTo(170, 310);
      context.lineTo(170, 290);
      context.lineTo(160, 290);
      context.lineTo(160, 280);
      context.lineTo(140, 280);
      //----
      context.lineTo(110, 280);
      context.lineTo(110, 290);
      context.lineTo(90, 290);
      context.lineTo(90, 310);
      context.lineTo(60, 310);
      context.lineTo(60, 260);
      context.lineTo(70, 260);
      context.lineTo(70, 250);
      context.lineTo(110, 250);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //鞋(左v2)
      context.beginPath();
      context.moveTo(50, 310);
      context.lineTo(90, 310);
      context.lineTo(90, 330);
      context.lineTo(50, 330);
      context.lineTo(50, 310);
      context.closePath();
      context.fillStyle = "#aaaaaa";
      context.fill();

      //鞋(右)
      context.beginPath();
      context.moveTo(180, 330);
      context.lineTo(210, 330);
      context.lineTo(210, 320);
      context.lineTo(220, 320);
      context.lineTo(220, 350);
      context.lineTo(180, 350);
      context.lineTo(180, 330);
      context.closePath();
      context.fillStyle = "#aaaaaa";
      context.fill();

      //黑膠針(黑)
      context.beginPath();
      context.moveTo(220, 110);
      context.lineTo(230, 110);
      context.lineTo(230, 80);
      context.lineTo(240, 80);
      context.lineTo(240, 60);
      context.lineTo(250, 60);
      context.lineTo(250, 40);
      context.lineTo(240, 40);
      context.lineTo(240, 30);
      context.lineTo(230, 30);
      context.lineTo(230, 40);
      context.lineTo(220, 40);
      context.lineTo(220, 60);
      context.lineTo(230, 60);
      context.lineTo(230, 70);
      context.lineTo(220, 70);
      context.lineTo(220, 110);
      context.closePath();
      context.fillStyle = "#252525";
      context.fill();

      //黑膠針(白)
      context.beginPath();
      context.moveTo(190, 90);
      context.lineTo(230, 90);
      context.lineTo(230, 110);
      context.lineTo(190, 110);
      context.lineTo(190, 90);
      context.closePath();
      context.fillStyle = "#aaaaaa80";
      context.fill();
    }
    // 每隔三秒執行函式1，然後再隔三秒執行函式2，一直重複
    drawing();
    this.museboytTimer = setInterval(() => {
      // console.log("museboy計時器");
      drawing(); // 執行函式1
      setTimeout(() => {
        drawing2(); // 執行函式2
      }, 500); // 三秒後執行函式2
    }, 1000); // 六秒後執行函式1
  },
  methods: {},
  beforeUnmount() {
    clearInterval(this.museboytTimer);
  },
};
</script>

<style scoped lang="scss">
.museboybox {
  width: 200px;

  #museboy {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 200;
    transform: translate(450px, 120px);
  }
}
</style>

<template>
  <main>
    <router-view />
  </main>
</template>
<style>
/* 隱藏全站scrollbar */
/* html {
  overflow-y: -moz-hidden-unscrollable;
  height: 100%;
} */

/* 隱藏滾軸 */
@media screen and (min-width: 1200px) {
  html::-webkit-scrollbar {
    width: 10px;
    background-color: #23232330;
    border-radius: 10px;
  }

  html::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.4, rgb(172, 182, 229)),
      color-stop(0.8, rgb(116, 235, 213))
    );
  }
}
html {
  -ms-overflow-style: scrollbar;
}
body {
  /* height: 100%; */
  width: 100%;
  box-sizing: border-box;
  /* width: calc(100vw + 18px); */
  /* overflow-y: scroll;
  overflow-x: hidden; */
}
</style>

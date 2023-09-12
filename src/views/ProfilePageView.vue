<template>
  <div class="profilepage">
    <section>
      <div class="hd">
        <div class="bg">
          <div class="pic"><img src="" alt="" /></div>
          <article class="txt">
            <h1>{{ mem.memname }}<button>追蹤</button></h1>
            <div>
              <fontAwesome :icon="['fa', 'location-dot']" />{{ mem.loc }}
            </div>
            <p>{{ mem.intro }}</p>
          </article>
          <div class="fol">
            <div>
              <span>{{ mem.songcount }}</span>
              <h4>音樂</h4>
            </div>
            <div>
              <span>{{ mem.fans }}</span>
              <h4>粉絲</h4>
            </div>
            <div>
              <span>{{ mem.follower }}</span>
              <h4>追蹤數</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="tabs">
        <button @click="tabtype = 0" class="tab"><h2>活動</h2></button>
        <button @click="tabtype = 1" class="tab"><h2>音樂</h2></button>
        <button @click="tabtype = 2" class="tab"><h2>公開歌單</h2></button>
      </div>
      <div class="line"></div>
    </section>
    <section v-if="tabtype === 0" class="activity">activity</section>
    <section v-else-if="tabtype === 1" class="music">music</section>
    <section v-else-if="tabtype === 2" class="songlist">songlist</section>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/profilepage";
</style>
<script src="./js/ProfilePageView"></script>

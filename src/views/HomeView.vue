<template>
  <player ref="player"></player>
  <!-- 頂部輪播區 -廖妍榛 -->
  <section class="index_topCarousel">
    <swiper
      class="topSwiper"
      :initialSlide="0"
      :modules="modules"
      :effect="'fade'"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <swiper-slide v-for="(item, index) in topBanner" :key="index">
        <img class="pic" :src="require(`/public/image/index/${item.image}`)" />
      </swiper-slide>
    </swiper>
  </section>

  <!-- 音樂謬思就是音樂的發生地 -廖妍榛 -->
  <div class="index_centerSlogn">
    <div class="index_centerH1">
      <h1>Making Waves</h1>
    </div>
    <div class="index_joinUs">
      <span></span>
    </div>
    <div class="index_centerP">
      <p>音樂謬思，就是音樂的發生地</p>
    </div>
  </div>

  <!--本週熱門歌曲輪播 - 黃珮菁 -->
  <section class="index_WeekTopmusic">
    <h2>本週熱門歌曲．Popular Songs This Week</h2>
    <swiper
      class="mySwiper"
      :initialSlide="4"
      :effect="slide"
      :slideToClickedSlide="false"
      :grabCursor="false"
      :centeredSlides="true"
      :breakpoints="{
        '414': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 5,
        },
      }"
      :slidesPerView="1"
      :slidesPerGroup="1"
      :speed="0.001"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide v-for="(item, sid) in songs" :key="sid">
        <div class="card">
          <div class="pic">
            <img :src="require(`/public/image/index/${item.image}`)" />
            <div class="play" @click="openplayer()">
              <fontAwesome class="i" :icon="['fa', 'play']" />
            </div>
          </div>

          <div class="text" @click="gotosinglemusic(item.sid)">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.singer }}<span>播放量{{ item.views }}</span>
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>

  <section class="index_wave">
    <div class="wave"></div>
  </section>
  <!-- 本週熱門專輯 -廖妍榛 -->
  <section class="index_WeekTopAlbum">
    <h2>本週熱門專輯．Popular Album This Week</h2>
    <div class="index_albumBox">
      <Grid center square :border="false">
        <GridItem v-for="(item, index) in album" :key="index">
          <div class="imgbox">
            <img :src="require(`/public/image/index/${item.image}`)" />
            <span class="ranking">
              {{ item.ranking }}<br />
              <span class="name"
                >{{ item.name }}<br />
                <span class="alb">{{ item.alb }}</span>
              </span>
            </span>
          </div>
        </GridItem>
      </Grid>
    </div>
  </section>

  <div class="wave">
    <svg
      width="1699"
      height="271"
      viewBox="0 0 1699 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="max-width: 100%; max-height: 100%"
    >
      <path
        d="M5.27764 199.464L147.14 123.465L284.676 177.219L383.117 133.267L508.459 159.401L623.839 85.5109L730.256 141.742L810.159 99.2665L922.26 126.455L1069.42 50.0344L1189.08 105.211L1249.5 35.6963L1353.27 92.1384L1451.44 19.6185L1594.93 72.8979L1689 19.6185"
        stroke="white"
        stroke-width="3"
        stroke-dasharray="0,0,0,1898.704833984375"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount="1000"
          dur="2.5s"
          values="0,0,0,1898.704833984375; 
                  0,949.3524169921875,949.3524169921875,0; 
                  1898.704833984375,0,0,0"
          keyTimes="0; 0.5; 1"
          fill="freeze"
        ></animate>
      </path>
      <path
        d="M6.11919 234.64L147.982 158.641L285.517 212.395L383.958 168.443L509.301 194.578L624.68 120.687L731.098 176.919L811.001 134.443L923.101 161.632L1070.26 85.211L1189.92 140.388L1250.35 70.8728L1354.12 127.315L1452.28 54.795L1595.78 108.074L1689.84 54.795"
        stroke="white"
        stroke-width="3"
        stroke-dasharray="0,0,0,1898.70458984375"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount="1000"
          dur="2.5s"
          values="0,0,0,1898.70458984375; 
                  0,949.352294921875,949.352294921875,0; 
                  1898.70458984375,0,0,0"
          keyTimes="0; 0.5; 1"
          fill="freeze"
        ></animate>
      </path>
      <path
        d="M11.1192 269.64L152.982 193.641L290.517 247.395L388.958 203.443L514.301 229.578L629.68 155.687L736.098 211.919L816.001 169.443L928.101 196.632L1075.26 120.211L1194.92 175.388L1255.35 105.873L1359.12 162.315L1457.28 89.795L1600.78 143.074L1694.84 89.795"
        stroke="white"
        stroke-width="3"
        stroke-dasharray="0,0,0,1898.7044677734375"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount="1000"
          dur="2.5s"
          values="0,0,0,1898.7044677734375; 
                  0,949.3522338867188,949.3522338867188,0; 
                  1898.7044677734375,0,0,0"
          keyTimes="0; 0.5; 1"
          fill="freeze"
        ></animate>
      </path>
    </svg>
  </div>

  <!-- 音樂轉盤 -廖妍榛 -->
  <!-- 功能還在處理中 -->
  <section class="index_revolve">
    <h2>轉出你的音樂．Revolve</h2>
    <div class="step">
      <div class="pic">
        <img
          :src="`${publicPath}image/index/index_revolveBook.svg`"
          alt="選出你現在的情緒"
        />
        <div class="txt">
          <p>選出你現在的情緒</p>
        </div>
      </div>
      <div class="pic">
        <img
          :src="`${publicPath}image/index/index_revolveCd.svg`"
          alt="音樂旋轉挑選中"
        />
        <div class="txt">
          <p>音樂旋轉挑選中</p>
        </div>
      </div>
      <div class="pic">
        <img
          :src="`${publicPath}image/index/index_revolveNote.svg`"
          alt="轉出你的情緒音樂!"
        />
        <div class="txt">
          <p>屬於你的情緒音樂！</p>
        </div>
      </div>
    </div>
    <div class="index_dj">
      <div class="index_dj_box">
        <div class="dj_left">
          <div class="song_info">
            <div class="song_title">
              <fontAwesome :icon="['fa', 'music']" />
              <span>第一首歌</span>
            </div>
            <div class="timebox">
              <span class="song_time">03:30:02</span>
              <fontAwesome :icon="['fa', 'fa-clock']" />
            </div>
          </div>
          <div class="plate" id="plate_left">
            <span></span>
          </div>
          <div class="dj_buttons">
            <button class="button prev obj_Radius">
              <fontAwesome :icon="['fa', 'fa-backward-step']" />
            </button>
            <button class="button play obj_Radius">
              <fontAwesome :icon="['fa', 'fa-play']" />
            </button>
            <button class="button pause obj_Radius">
              <fontAwesome :icon="['fa', 'fa-pause']" />
            </button>
            <button class="button stop obj_Radius">
              <fontAwesome :icon="['fa', 'fa-stop']" />
            </button>
            <button class="button next obj_Radius">
              <fontAwesome :icon="['fa', 'fa-step-forward']" />
            </button>
          </div>
        </div>
        <div class="dj_center">
          <div class="plates_vols">
            <div class="vol vol_left">
              <input
                class="left_vol obj_Radius"
                type="range"
                name="vol_left"
                id="volume_left"
                min="0"
                max="100"
              />
            </div>
            <div class="vol vol_right">
              <input
                class="right_vol obj_Radius"
                type="range"
                name="volume_right"
                id="volume_right"
                min="0"
                max="100"
              />
            </div>
          </div>
          <div class="vol vol_mix">
            <input
              class="mix_vol obj_Radius"
              type="range"
              name="volume_mix"
              id="volume_mix"
              min="0"
              max="100"
            />
          </div>
        </div>
        <div class="dj_right">
          <div class="song_info">
            <div class="song_title">
              <fontAwesome :icon="['fa', 'music']" />
              <span>第二首歌</span>
            </div>
            <div class="timebox">
              <span class="song_time">03:30:02</span>
              <fontAwesome :icon="['fa', 'fa-clock']" />
            </div>
          </div>
          <div class="plate" id="plate_right">
            <span></span>
          </div>
          <div class="dj_buttons">
            <button class="button prev obj_Radius">
              <fontAwesome :icon="['fa', 'fa-backward-step']" />
            </button>
            <button class="button play obj_Radius">
              <fontAwesome :icon="['fa', 'fa-play']" />
            </button>
            <button class="button pause obj_Radius">
              <fontAwesome :icon="['fa', 'fa-pause']" />
            </button>
            <button class="button stop obj_Radius">
              <fontAwesome :icon="['fa', 'fa-stop']" />
            </button>
            <button class="button next obj_Radius">
              <fontAwesome :icon="['fa', 'fa-step-forward']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 屬於你的歌 -廖妍榛 -->
  <section class="index_emo">
    <h2>屬於你的歌．Your Song</h2>
    <div class="index_test_page_box">
      <img
        :src="`${publicPath}image/index/index_test_boxwrap.svg`"
        alt="音樂測驗外框"
      />
      <ul class="index_test_box">
        <img
          class="decoration"
          :src="`${publicPath}image/index/index_test_topbottom.png`"
          alt="音樂冊頁裝飾"
        />
        <li
          @click="gameStart()"
          :class="{ index_nextpage: quesOne }"
          class="first_test"
        >
          <img
            class="test_startbtn"
            :src="`${publicPath}image/index/index_test_startbtn.svg`"
            alt="測驗開始"
          />
          <MuseBoy class="index_boy_one" />
        </li>
        <!-- 問題一 -->
        <li v-if="quesOne === true" class="ques quesEnter">
          <Typed
            :initialques="ques[0].title"
            :initialopt1="ques[0].ans[0]"
            :initialopt2="ques[0].ans[1]"
            :initialopt3="ques[0].ans[2]"
            :class="{ index_nextpage: quesTwo }"
            @click="nextQuesTwo()"
          ></Typed>
        </li>
        <div
          v-if="quesOne === true"
          class="index_pic_box"
          :class="{ index_nextpage: quesTwo }"
        >
          <img
            class="test_cloud test_cloud_rtl"
            :src="`${publicPath}image/index/index_test_cloud.png`"
            alt="雲朵"
          />
          <img
            class="test_cloud test_cloud_ltr"
            :src="`${publicPath}image/index/index_test_cloud.png`"
            alt="雲朵"
          />
          <img
            class="test_clock"
            :src="`${publicPath}image/index/index_test_clock.png`"
            alt="時鐘"
          />
        </div>
        <!-- 要復原的話要塞到li裡面
          <h2 :class="{ index_nextpage: quesTwo }">{{ ques[0].title }}</h2>
          <p @click="nextQuesTwo()" :class="{ index_nextpage: quesTwo }">
            {{ ques[0].ans[0] }}
          </p>
          <p @click="nextQuesTwo()" :class="{ index_nextpage: quesTwo }">
            {{ ques[0].ans[1] }}
          </p>
          <p @click="nextQuesTwo()" :class="{ index_nextpage: quesTwo }">
            {{ ques[0].ans[2] }}
          </p> -->
        <!-- 問題二 -->
        <li v-if="quesTwo === true" class="ques quesEnter">
          <Typed
            :initialques="ques[1].title"
            :initialopt1="ques[1].ans[0]"
            :initialopt2="ques[1].ans[1]"
            :initialopt3="ques[1].ans[2]"
            :class="{ index_nextpage: quesThree }"
            @click="nextQuesThree()"
          ></Typed>
        </li>
        <div
          v-if="quesTwo === true"
          :class="{ index_nextpage: quesThree }"
          class="index_pic_box"
        >
          <img
            class="test_shooting test_shooting_one"
            :src="`${publicPath}image/index/index_test_shooting.png`"
            alt="流星"
          />
          <img
            class="test_shooting test_shooting_two"
            :src="`${publicPath}image/index/index_test_shooting.png`"
            alt="流星"
          />
          <img
            class="test_shooting test_shooting_three"
            :src="`${publicPath}image/index/index_test_shooting.png`"
            alt="流星"
          />
        </div>
        <!-- 要復原的話要塞到li裡面
          <h2 :class="{ index_nextpage: quesThree }">{{ ques[1].title }}</h2>
          <p @click="nextQuesThree()" :class="{ index_nextpage: quesThree }">
            {{ ques[1].ans[0] }}
          </p>
          <p @click="nextQuesThree()" :class="{ index_nextpage: quesThree }">
            {{ ques[1].ans[1] }}
          </p>
          <p @click="nextQuesThree()" :class="{ index_nextpage: quesThree }">
            {{ ques[1].ans[2] }}
          </p> -->
        <!-- 問題三 -->
        <li v-if="quesThree === true" class="ques quesEnter">
          <Typed
            :initialques="ques[2].title"
            :initialopt1="ques[2].ans[0]"
            :initialopt2="ques[2].ans[1]"
            :initialopt3="ques[2].ans[2]"
            :class="{ index_nextpage: quesFour }"
            @click="nextQuesFour()"
          ></Typed>
        </li>
        <div
          v-if="quesThree === true"
          :class="{ index_nextpage: quesFour }"
          class="index_pic_box"
        >
          <img
            class="test_cake test_sweet"
            :src="`${publicPath}image/index/index_test_cake.png`"
            alt="草莓蛋糕"
          />
          <img
            class="test_chef test_sweet"
            :src="`${publicPath}image/index/index_test_chef.png`"
            alt="蛋糕師傅"
          />
          <img
            class="test_pudding test_sweet"
            :src="`${publicPath}image/index/index_test_pudding.png`"
            alt="布丁"
          />
          <img
            class="test_mon test_sweet"
            :src="`${publicPath}image/index/index_test_mon.png`"
            alt="黃色蒙布朗"
          />
          <img
            class="test_eatgirl test_sweet"
            :src="`${publicPath}image/index/index_test_eatice.png`"
            alt="吃冰妹妹"
          />
          <img
            class="test_banana test_drop_banana"
            :src="`${publicPath}image/index/index_test_banana.png`"
            alt="落地香蕉皮"
          />
        </div>
        <!-- 要復原的話要塞到li裡面 <li v-if="quesThree === true" class="ques quesEnter">
          <h2 :class="{ 'index_nextpage': quesFour }">{{ ques[2].title }}</h2>
          <p @click="nextQuesFour()" :class="{ 'index_nextpage': quesFour }">{{ ques[2].ans[0] }}</p>
          <p @click="nextQuesFour()" :class="{ 'index_nextpage': quesFour }">{{ ques[2].ans[1] }}</p>
          <p @click="nextQuesFour()" :class="{ 'index_nextpage': quesFour }">{{ ques[2].ans[2] }}</p>
        </li> -->
        <!-- 問題四 -->
        <li v-if="quesFour === true" class="ques quesEnter">
          <Typed
            :initialques="ques[3].title"
            :initialopt1="ques[3].ans[0]"
            :initialopt2="ques[3].ans[1]"
            :initialopt3="ques[3].ans[2]"
            :class="{ index_nextpage: quesFive }"
            @click="nextQuesFive()"
          ></Typed>
        </li>
        <div
          v-if="quesFour === true"
          :class="{ index_nextpage: quesFive }"
          class="index_pic_box"
        >
          <img
            class="test_choco test_redlove"
            :src="`${publicPath}image/index/index_test_love.png`"
            alt="紅巧克力"
          />
          <img
            class="test_choco test_loveAllB"
            :src="`${publicPath}image/index/index_test_loveAllB.png`"
            alt="巧克力紅緞帶"
          />
          <img
            class="test_choco test_loveGreen"
            :src="`${publicPath}image/index/index_test_loveGreen.png`"
            alt="白巧克力綠緞帶"
          />
          <img
            class="test_choco test_loveRed"
            :src="`${publicPath}image/index/index_test_loveRed.png`"
            alt="紅巧克力白緞帶"
          />
        </div>
        <!-- 要復原的話要塞到li裡面 <li v-if="quesFour === true" class="ques quesEnter">
          <h2 :class="{ 'index_nextpage': quesFive }">{{ ques[3].title }}</h2>
          <p @click="nextQuesFive()" :class="{ 'index_nextpage': quesFive }">{{ ques[3].ans[0] }}</p>
          <p @click="nextQuesFive()" :class="{ 'index_nextpage': quesFive }">{{ ques[3].ans[1] }}</p>
          <p @click="nextQuesFive()" :class="{ 'index_nextpage': quesFive }">{{ ques[3].ans[2] }}</p>
        </li> -->
        <!-- 問題五 -->
        <li v-if="quesFive === true" class="ques quesEnter">
          <Typed
            :initialques="ques[4].title"
            :initialopt1="ques[4].ans[0]"
            :initialopt2="ques[4].ans[1]"
            :initialopt3="ques[4].ans[2]"
            :class="{ index_nextpage: quesEnd }"
            @click="endBtn()"
          ></Typed>
        </li>
        <div
          v-if="quesFive === true"
          :class="{ index_nextpage: quesEnd }"
          class="index_pic_box"
        >
          <img
            class="test_note"
            :src="`${publicPath}image/index/index_test_mznote.png`"
            alt="星星與音符"
          />
          <img
            class="test_museteam"
            :src="`${publicPath}image/index/index_test_greenboy.png`"
            alt="Bboy"
          />
          <img
            class="test_museteam"
            :src="`${publicPath}image/index/index_test_blueboy.png`"
            alt="Bboy"
          />
          <img
            class="test_museteam"
            :src="`${publicPath}image/index/index_test_leader.png`"
            alt="樂隊"
          />
          <img
            class="test_museteam"
            :src="`${publicPath}image/index/index_test_member_one.png`"
            alt="樂隊"
          />
          <img
            class="test_museteam"
            :src="`${publicPath}image/index/index_test_member_two.png`"
            alt="樂隊"
          />
          <img
            class="test_museteam"
            :src="`${publicPath}image/index/index_test_member_three.png`"
            alt="樂隊"
          />
        </div>
        <!-- 要復原的話要塞到li裡面 <li v-if="quesFive === true" class="ques quesEnter">
          <h2 :class="{ index_nextpage: quesEnd }">{{ ques[4].title }}</h2>
          <p @click="endBtn()" :class="{ index_nextpage: quesEnd }">
            {{ ques[4].ans[0] }}
          </p>
          <p @click="endBtn()" :class="{ index_nextpage: quesEnd }">
            {{ ques[4].ans[1] }}
          </p>
          <p @click="endBtn()" :class="{ index_nextpage: quesEnd }">
            {{ ques[4].ans[2] }}
          </p>
        </li> -->
        <!-- 找尋音樂中 等待 2 秒 -->
        <li v-if="quesEnd === true" class="ques quesEnter">
          <p
            id="findUrMuz"
            class="index_findurmusic"
            :class="{ index_nextpage: startMuz }"
          >
            正在找尋屬於你的音樂 ...{{ timerValue }}
          </p>
        </li>
        <!-- 音樂出現 -->
        <li v-if="startMuz === true" class="ques quesEnter">
          <div class="index_playCD" id="index_playCD">
            <span></span>
            <div class="tag_clickme">Click Center!</div>
            <audio
              id="myMuz"
              ref="myMuz"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Leo%20-%20Trying.mp3"
              autoplay
            ></audio>
            <button @click="turnMusic()" id="musicOff">Off or On</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/index.scss";
</style>
<script src="./js/HomeView.js"></script>

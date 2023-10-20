<template>
  <player
    :s_id="playerId"
    :allSid="allSid"
    @change-s-id="changeSId"
    ref="player"
  ></player>
  <div class="profilepage">
    <section class="hd">
      <div
        class="cover-image"
        :style="{
          backgroundImage: `url(${publicPath}dataimage/member/${memData.cover_pic})`,
        }"
      >
        <div class="profile-container">
          <img
            :src="`${publicPath}dataimage/member/${memData.mem_pic}`"
            :alt="`${memData.mem_name}照片`"
          />
        </div>
        <div class="txt">
          <article class="intro">
            <h1>
              {{ memData.mem_name }}
              <!-- 當AKA沒有和name同名或不是空值，則顯示AKA -->
              <span
                v-if="
                  memData.mem_aka != memData.mem_name && memData.mem_aka != null
                "
                >（{{ memData.mem_aka }}）</span
              >
              <!-- 如果是本人，就不顯示追蹤按鈕 -->
              <FolBtnBig
                v-if="login_mem_id != pageMemid"
                :functype="1"
                :folnum="pageMemid"
              ></FolBtnBig>
            </h1>
            <p class="loc">
              <fontAwesome class="i" :icon="['fa', 'location-dot']" />{{
                memData.county
              }}
            </p>
            <p class="itl" :class="{ itlmore: isReadMore }" ref="itl">
              {{ memData.intro }}
            </p>
            <button
              class="readmoreBtn"
              v-if="isReadmoreBtn"
              @click="readmore()"
            >
              <span> 顯示更{{ isReadMore ? "少" : "多" }}</span>
            </button>
          </article>
          <div class="fol">
            <div>
              <!-- 若數字超過千就轉換 -->
              <span v-if="memData.song_count > 1000">
                <CountUp
                  v-if="showCountUp"
                  :end="changeNum(memData.song_count)"
                  :duration="6"
                  :decimals="0"
                />
                <span>K</span>
              </span>
              <span v-else>
                <CountUp
                  v-if="showCountUp"
                  :end="changeNum(memData.song_count)"
                  :duration="6"
                  :decimals="0"
                />
              </span>
              <h4>音樂</h4>
            </div>
            <div>
              <!-- 若數字超過千就轉換 -->
              <span v-if="memData.fol_num > 1000">
                <CountUp
                  v-if="showCountUp"
                  :end="changeNum(memData.fol_num)"
                  :duration="6"
                  :decimals="1"
                />
                <span>K</span>
              </span>
              <span v-else>
                <CountUp
                  v-if="showCountUp"
                  :end="changeNum(memData.fol_num)"
                  :duration="6"
                  :decimals="0"
                >
                </CountUp>
              </span>
              <h4>粉絲</h4>
            </div>
            <div>
              <!-- 若數字超過千就轉換 -->
              <span v-if="memData.crefol_count > 1000">
                <CountUp
                  v-if="showCountUp"
                  :end="changeNum(memData.crefol_count)"
                  :duration="6"
                  :decimals="1"
                />
                <span>K</span>
              </span>
              <span v-else>
                <CountUp
                  v-if="showCountUp"
                  :end="changeNum(memData.crefol_count)"
                  :duration="6"
                  :decimals="0"
                />
              </span>
              <h4>追蹤數</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <main class="main">
      <!-- tab -->
      <div class="tabs">
        <button
          @click="changTab(0)"
          class="tab"
          :class="{ active: tabtype == 0 }"
        >
          <h2>動態</h2>
        </button>
        <button
          @click="changTab(1)"
          class="tab"
          :class="{ active: tabtype == 1 }"
        >
          <h2>音樂</h2>
        </button>
        <button
          @click="changTab(2)"
          class="tab"
          :class="{ active: tabtype == 2 }"
        >
          <h2>公開歌單</h2>
        </button>
      </div>
      <div class="line"></div>
      <!-- 由tab切換之顯示內容 -->
      <!-- 活動 -->
      <section v-show="tabtype === 0" class="activity container">
        <div v-show="this.songData.length > 0">
          <h3>天氣推歌</h3>
          <section class="content">
            <div class="card">
              <div class="weathercard">
                <div class="begin" v-show="weatherRShow == false">
                  <div class="typewrap">
                    <Typed
                      v-if="typeshow == true"
                      :initialques="`今天天氣如何？`"
                      :initialopt1="`來首和窗外天空相配的好歌吧！ `"
                    ></Typed>
                  </div>
                  <div class="aftertype">
                    <div>
                      <select
                        v-model="weatherLoc"
                        required
                        id="selectweatherLoc"
                      >
                        <option value="" disabled>請選擇你的所在地點</option>
                        <option value="基隆">基隆</option>
                        <option value="臺北">台北</option>
                        <option value="新北">新北</option>
                        <option value="桃園市">桃園</option>
                        <option value="新竹">新竹</option>
                        <option value="臺中">台中</option>
                        <option value="彰師大">彰化</option>
                        <option value="嘉義">嘉義</option>
                        <option value="臺南">台南</option>
                        <option value="高雄">高雄</option>
                        <option value="恆春">屏東</option>
                        <option value="臺東">臺東</option>
                        <option value="花蓮">花蓮</option>
                        <option value="宜蘭">宜蘭</option>
                        <option value="澎湖">澎湖</option>
                        <option value="金門">金門</option>
                        <option value="馬祖">馬祖</option>
                      </select>
                    </div>
                    <div>
                      <button class="obj_Radius" @click="fetchWeather">
                        天氣發現好歌
                      </button>
                    </div>
                  </div>
                </div>
                <!-- 天氣結果 -->
                <div v-if="weatherRShow" class="result">
                  <!-- <h4>目前天氣</h4> -->
                  <div class="pic">
                    <div>
                      <img
                        :src="`${publicPath}image/weather/${weather.resultImg}`"
                        :alt="weather.result"
                        style="width: 128px; height: 128px"
                      />
                      <div style="font-size: 40px; margin-left: 50px">
                        {{ weather.temp }}
                        <span style="font-size: 20px">°C</span>
                      </div>
                    </div>
                    <div>
                      <p>我在{{ weatherLoc }}，天氣{{ weather.result }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="song" :class="{ bg: weatherRShow }">
                <div class="pic">
                  <img
                    :src="`${publicPath}dataimage/song/${weatherSong.s_img}`"
                    alt="天氣推歌"
                  />

                  <div
                    v-if="weatherRShow"
                    class="play"
                    @click="openPlayer(weatherSong.s_id)"
                  >
                    <fontAwesome class="i" :icon="['fa', 'play']" />
                  </div>
                </div>
                <div class="inf" v-if="weatherRShow">
                  <h4>{{ weatherNoSong.msg }}</h4>
                  <div class="txt">
                    <span>{{ weatherSong.s_name }}</span>
                  </div>
                  <p>
                    <fontAwesome class="i" :icon="['fa', 'tags']" /><span>{{
                      weatherSong.mcat_name
                    }}</span>
                  </p>
                  <p>
                    <fontAwesome class="i" :icon="['fa', 'user-large']" />
                    <span>{{ memData.mem_name }}</span>
                  </p>
                  <div>
                    <span class="btn"
                      ><AddSlBtn :addSlSid="weatherSong.s_id"></AddSlBtn
                    ></span>
                    <span class="btn"><AddFavBtn></AddFavBtn></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <h3>有話想說</h3>
        <section class="content">
          <div v-for="(item, index) in act" class="act">
            <div class="pic">
              <img
                :src="`${publicPath}dataimage/member/${memData.mem_pic}`"
                :alt="`${memData.mem_name}照片`"
              />
            </div>
            <div class="text">
              <span class="date">{{ item.date }}</span>
              <p>
                <span class="txt">{{ item.content }}</span>
              </p>
              <div class="likespan">
                <button id="like" @click="like($event, index)">
                  <fontAwesome
                    :icon="['fa', 'thumbs-up']"
                    class="i"
                    style="color: #ffffff"
                  />
                </button>
                {{ item.num }}
              </div>
            </div>
          </div>
        </section>
      </section>

      <!-- 音樂 -->
      <section v-show="tabtype === 1" class="music container">
        <!-- 假如沒有專輯就不顯示專輯區塊 -->
        <div v-if="albData.length > 0" class="album">
          <h3>專輯． Album</h3>
          <div class="content">
            <!-- 假如專輯數量 <4 就不渲染輪播 -->
            <div v-if="albData.length < 4">
              <div v-for="(item, index) in albData" :key="item.alb_id">
                <div class="card" @click="gotosinglealbum(item.alb_id)">
                  <div class="pic">
                    <img
                      :src="`${publicPath}dataimage/album/${item.alb_img}`"
                      :alt="item.alb_name"
                    />
                    <!-- <button></button> -->
                  </div>
                  <div class="txt">
                    <div class="inf">
                      <h4>{{ item.alb_name }}</h4>
                      <span>{{ item.mem_name }}</span>
                      <span>{{ item.upload_date }}</span>
                    </div>
                    <!-- <div class="tag" v-if="item.mcatid">
                      <fontAwesome class="i" :icon="['fa', 'tags']" />
                      <div>
                        <span
                          v-for="(tagitem, index) in item.mcatid.slice(0, 3)"
                          >{{ tagitem }}</span
                        >
                        <span v-if="item.mcatid.length > 3">... </span>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- 假如專輯數量 >4 就渲染輪播 -->
            <swiper
              v-else
              class="mySwiper"
              :scrollbar="true"
              :modules="modules"
              :slidesPerView="1"
              :slidesPerGroup="1"
              :breakpoints="{
                '700': {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                '1024': {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
              }"
            >
              <!-- 單一專輯 -->
              <swiper-slide v-for="(item, index) in albData" :key="item.alb_id">
                <div class="card" @click="gotosinglealbum(item.alb_id)">
                  <div class="pic">
                    <img
                      :src="`${publicPath}dataimage/album/${item.alb_img}`"
                      :alt="item.alb_name"
                    />
                    <!-- <button></button> -->
                  </div>
                  <div class="txt">
                    <div class="inf">
                      <h4>{{ item.alb_name }}</h4>
                      <span>{{ item.mem_name }}</span>
                      <span>{{ item.upload_date }}</span>
                    </div>
                    <!-- <div class="tag" v-if="item.mcatid">
                      <fontAwesome class="i" :icon="['fa', 'tags']" />
                      <div>
                        <span
                          v-for="(tagitem, index) in item.mcatid.slice(0, 3)"
                          >{{ tagitem }}</span
                        >
                        <span v-if="item.mcatid.length > 3">... </span>
                      </div>
                    </div> -->
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="song">
          <h3>所有歌曲． Songs</h3>

          <!-- 判斷是否有data -->
          <div v-if="songData.length == 0" class="nodata">
            {{ memData.mem_name }}目前沒有上傳歌曲
          </div>

          <div v-else class="content">
            <ol>
              <li
                v-for="(item, index) in songData.slice(0, songnum)"
                :key="item.s_id"
              >
                <span class="index">{{ index + 1 }}</span>
                <div class="pic">
                  <img
                    :src="`${publicPath}dataimage/song/${item.s_img}`"
                    :alt="item.s_name"
                  />
                  <div class="play" @click="openPlayer(item.s_id)">
                    <fontAwesome class="i" :icon="['fa', 'play']" />
                  </div>
                </div>
                <h4 v-line-clamp="2" @click="gotosinglemusic(item.s_id)">
                  {{ item.s_name }}
                </h4>
                <span class="time">{{ item.s_length }}</span>
                <span> <AddSlBtn :addSlSid="item.s_id"></AddSlBtn></span>
                <span> <AddFavBtn></AddFavBtn></span>
              </li>
              <button
                v-if="songData.length > 5"
                class="showmore"
                @click.prevent="showMoreSong()"
              >
                {{ isShowMoreSong ? "收起歌曲" : "顯示更多" }}
                <fontAwesome
                  v-show="isShowMoreSong === false"
                  :icon="['fa', 'angle-down']"
                  style="color: #fff"
                />
                <fontAwesome
                  v-show="isShowMoreSong === true"
                  :icon="['fa', 'angle-up']"
                  style="color: #fff"
                />
              </button>
            </ol>
          </div>
        </div>
      </section>

      <!-- 公開歌單 -->
      <section v-show="tabtype === 2" class="songlist container">
        <!-- 判斷是否有data -->

        <div v-if="slData.length === 0" class="nodata">
          {{ memData.mem_name }}目前沒有公開歌單
        </div>

        <div
          v-else
          class="sl-list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
        >
          <div class="col" v-for="(item, index) in slData" :key="item.sl_id">
            <!-- 單一歌單 -->
            <div
              v-if="item.sl_pic == null"
              class="sl-item"
              :style="{
                backgroundImage: `url(${publicPath}dataimage/song/${item.sl_pic})`,
              }"
              @click.self.prevent="gotosonglist(item.sl_id)"
            >
              <div class="txt">
                <div>
                  <h4>
                    {{ item.sl_name }}
                  </h4>
                  <div>
                    <span>共有{{ item.song_count }}首歌</span>
                    <span>{{ item.creater_name }}</span>
                  </div>
                </div>
                <PlayBtnBig @click="openPlayerSl(item.sl_id)"></PlayBtnBig>
              </div>
            </div>
            <div
              v-else
              class="sl-item"
              :style="{
                backgroundImage: `url(${publicPath}dataimage/song/${item.sl_pic})`,
              }"
              @click.self.prevent="gotosonglist(item.sl_id)"
            >
              <div class="txt">
                <div>
                  <h4>
                    {{ item.sl_name }}
                  </h4>
                  <div>
                    <span>共有{{ item.song_count }}首歌</span>
                    <span>{{ item.creater_name }}</span>
                  </div>
                </div>
                <PlayBtnBig @click="openPlayerSl(item.sl_id)"></PlayBtnBig>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/profilepage";
</style>
<script src="./js/ProfilePageView"></script>

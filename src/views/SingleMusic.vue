<template>
    <player :s_id="id" ref="player"></player>
    <main class="singleMusic">
        <!-- 上方大圖 -->
        <div class="banner" v-for="songItem in songs" :key="songItem.id">
            <div class="overlay"></div>
            <img class="backPic" :src="`${publicPath}dataimage/song/${songItem.songpic}`" :alt="songItem.songname">
        </div>
        <!-- 以下是 1200px 內容區 -->
        <section class="inner">
            <div class="topInf" v-for="songItem in songs" :key="songItem.id">
                <div class="singlePic">
                    <img :src="`${publicPath}dataimage/song/${songItem.songpic}`" :alt="songItem.songname">
                </div>
                <div class="singleInf">
                    <div class="song">
                        <h1 class="songName">{{ songItem.songname }}</h1>
                        <h2 class="singer">{{ songItem.singer }}</h2>
                    </div>
                    <div class="iconBar">
                        <div class="countArea">
                            <div class="timeline">
                                <p>時長</p>
                                <p>{{ songItem.time }}</p>
                            </div>
                            <div class="played">
                                <p>播放次數</p>
                                <p>{{ songItem.played }}</p>
                            </div>
                            <div class="liked">
                                <fontAwesome :icon="['fa', 'heart']" style="color:  #fff;" />
                                <p>{{ songItem.liked }}</p>
                            </div>
                            <div class="shared">
                                <fontAwesome :icon="['fa', 'share']" style="color: #fff;" />
                                <p>{{ songItem.shared }}</p>
                            </div>
                        </div>
                        <div class="buttonArea">
                            <ShareBtn></ShareBtn>
                            <AddSlBtn :addSlSid="songItem.id"></AddSlBtn>
                            <AddFavBtn></AddFavBtn>
                            <PlayBtnBig @click="openPlayer(songItem.id)"></PlayBtnBig>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainInf" v-for="songItem in songs" :key="songItem.id">
                <div class="singerInf">
                    <router-link :to="`/home/profilepage/${songItem.mem_id}`" class="singer">
                        <div class="singerPic">
                            <img :src="`${publicPath}dataimage/member/${songItem.singerpic}`" alt="songItem.singer">
                        </div>
                        <p class="singerName">{{ songItem.singer }}</p>
                    </router-link>

                    <!-- 使用 v-if 檢查 songItem.album 是否為空值 -->
                    <router-link v-if="songItem.album" :to="`/home/singlealbum/${songItem.alb_id}`" :alt="songItem.album"
                        class="album">
                        <div class="albumPic">
                            <img :src="`${publicPath}dataimage/album/${songItem.albumpic}`" :alt="songItem.album">
                        </div>
                        <p>專輯</p>
                        <p class="albumName">{{ songItem.album }}</p>
                    </router-link>

                    <div class="date">
                        <p>發布時間</p>
                        <p class="releasDate">{{ songItem.date }}</p>
                    </div>
                    <p class="memInf">
                        {{ songItem.meminf }}
                    </p>
                </div>

                <div class="detail">
                    <div class="songInf">
                        <h3>歌曲介紹</h3>
                        <p class="aboutSong">
                            {{ songItem.songinf }}
                        </p>
                        <div class="songCat">
                            <fontAwesome :icon="['fa', 'tags']" style="color:#fff;padding-right:10px;" />
                            <router-link :to="`/home/findmusic/${songTypes[0]?.mcat_id}`">
                                <p class="categorize lang">{{ songTypes[0]?.type }}、</p>
                            </router-link>
                            <router-link :to="`/home/findmusic/${songTypes[1]?.mcat_id}`">
                                <p class="categorize style">{{ songTypes[1]?.type }}、</p>
                            </router-link>
                            <router-link :to="`/home/findmusic/${songTypes[2]?.mcat_id}`">
                                <p class="categorize mood">{{ songTypes[2]?.type }}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="messageBoard">
                        <div class="board">
                            <h3>留言板</h3>
                            <div class="sendArea">
                                <input type="text" v-model="msg_con" placeholder="  我想對創作者說...">
                                <button class="send" @click="addNewMessage">
                                    <fontAwesome :icon="['fa', 'paper-plane']" style="color:#74EBD5;" size="2xl" />
                                </button>
                            </div>
                            <div class="message" v-for="messageItem in messages.slice(0, num)" :key="messageItem.msg_id">
                                <div class="infBar">
                                    <div class="user">
                                        <div class="pic">
                                            <img :src="`${publicPath}dataimage/member/${messageItem.mem_pic}`"
                                                :alt="messageItem.mem_name">
                                        </div>
                                        <router-link :to="`/home/profilepage/${messageItem.mem_id}`">
                                            <p class="userName">{{ messageItem.mem_name }}</p>
                                        </router-link>
                                    </div>

                                    <div tabindex="0" class="more-group">
                                        <button class="more" @click="toggleReportBtn(messageItem)">
                                            <fontAwesome :icon="['fa', 'ellipsis-vertical']"
                                                style="color:#aaa;cursor: pointer;" />
                                        </button>
                                        <ReportBtn :msg_id="messageItem.msg_id" class="report-btn"
                                            v-if="messageItem.showReportBtn"
                                            @close-report-btn="toggleReportBtn(messageItem)"></ReportBtn>
                                    </div>
                                </div>
                                <p class="txt">
                                    {{ messageItem.msg_con }}
                                </p>
                                <p class="date">{{ messageItem.msg_date }}</p>
                                <!-- 按讚留言先隱藏 -->
                                <!-- <div class="likeMes" v-if="messageItem">
                                    <p class="likeCount">{{ messageItem.msg_like }}</p>
                                    <LikeMesBtn :messageItem="messageItem"></LikeMesBtn>
                                </div> -->
                            </div>
                            <button v-if="messages.length > 3" class="readMore" @click.capture="showMore">
                                {{ txt }}
                                <fontAwesome v-if="isShow" :icon="['fa', 'angle-down']" style="color:#fff;" />
                                <fontAwesome v-else :icon="['fa', 'angle-up']" style="color:#fff;" />
                            </button>
                        </div>
                    </div>
                    <div class="otherSong">
                        <h3>專輯其他歌曲</h3>
                        <!-- 使用 v-if 檢查 otherSongs 的長度 -->
                        <div v-if="otherSongs.length === 0">
                            沒有其他相關歌曲
                        </div>
                        <div v-else>
                            <div class="song" v-for="(songItem, index) in otherSongs.slice(0, num2)" :key="songItem.id">
                                <div class="list">
                                    <div class="number">{{ index + 1 }}</div>
                                    <div class="songPic">
                                        <img :src="`${publicPath}dataimage/song/${songItem.songpic}`"
                                            :alt="songItem.songname">
                                        <div class="play" @click="openPlayer(songItem.id)">
                                            <fontAwesome class="i" :icon="['fa', 'play']" color="#fff" />
                                        </div>
                                    </div>
                                    <p class="songName" @click="gotosinglemusic(songItem.id)">
                                        {{ songItem.songname }}
                                    </p>
                                </div>
                                <div class="btnArea">
                                    <ShareBtn></ShareBtn>
                                    <AddSlBtn></AddSlBtn>
                                    <AddFavBtn></AddFavBtn>
                                </div>
                            </div>
                            <button v-if="otherSongs.length > 3" class="readMore" @click.capture="showMoreSong">
                                {{ txt2 }}
                                <fontAwesome v-if="isShowSong" :icon="['fa', 'angle-down']" style="color:#fff;" />
                                <fontAwesome v-else :icon="['fa', 'angle-up']" style="color:#fff;" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/singlemusic.scss";
</style>
<script src="./js/SingleMusic.js"></script>
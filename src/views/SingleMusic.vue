<template>
    <player ref="player"></player>
    <main class="singleMusic">
        <!-- 上方大圖 -->
        <div class="banner" v-for="(songItem, songIndex) in songs" :key="songIndex">
            <div class="overlay"></div>
            <img class="backPic" :src="require(`/public/image/SingleMusic/${songItem.bannerPic}`)" alt="songItem.bannerPic">
        </div>
        <!-- 以下是 1200px 內容區 -->
        <section class="inner">
            <div class="topInf" v-for="(songItem, songIndex) in songs" :key="songIndex">
                <div class="singlePic">
                    <img :src="require(`/public/image/SingleMusic/${songItem.songPic}`)" alt="songItem.songName">
                </div>
                <div class="singleInf">
                    <div class="song">
                        <h1 class="songName">{{ songItem.songName }}</h1>
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
                            <AddSlBtn></AddSlBtn>
                            <AddFavBtn></AddFavBtn>
                            <PlayBtnBig @click="openPlayer()"></PlayBtnBig>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainInf" v-for="(songItem, songIndex) in songs" :key="songIndex">
                <div class="singerInf">
                    <router-link to="/home/profilepage" class="singer">
                        <div class="singerPic">
                            <img :src="require(`/public/image/SingleMusic/${songItem.singerPic}`)" alt="songItem.singer">
                        </div>
                        <p class="singerName">{{ songItem.singer }}</p>
                    </router-link>
                    <router-link to="/home/singlealbum" class="album">
                        <div class="albumPic">
                            <img :src="require(`/public/image/SingleMusic/${songItem.albumPic}`)" alt="songItem.album">
                        </div>
                        <p>專輯</p>
                        <p class="albumName">{{ songItem.album }}</p>
                    </router-link>
                    <div class="date">
                        <p>發布時間</p>
                        <p class="releasDate">{{ songItem.date }}</p>
                    </div>
                    <p class="albumInf">
                        {{ songItem.albumInf }}
                    </p>
                </div>
                <div class="detail">
                    <div class="songInf">
                        <h3>歌曲介紹</h3>
                        <p class="aboutSong">
                            {{ songItem.songInf }}
                        </p>
                        <div class="songCat">
                            <fontAwesome :icon="['fa', 'tags']" style="color:#fff;padding-right:10px;" />
                            <a class="categorize lang">{{ songItem.type1 }}</a>
                            <a class="categorize style">{{ songItem.type2 }}</a>
                            <a class="categorize mood">{{ songItem.type3 }}</a>
                        </div>
                    </div>
                    <div class="messageBoard">
                        <div class="board">
                            <h3>留言板</h3>
                            <div class="sendArea">
                                <input type="text" v-model="newMessage">
                                <button class="send" @click="addNewMessage">
                                    <fontAwesome :icon="['fa', 'paper-plane']" style="color:#74EBD5;" size="2xl" />
                                </button>
                            </div>
                            <div class="message" v-for="(messageItem, messageIndex) in messages.slice(0, num)"
                                :key="messageIndex">
                                <div class="infBar">
                                    <div class="user">
                                        <div class="pic">
                                            <img :src="require(`/public/image/SingleMusic/${messageItem.userPic}`)"
                                                alt="messageItem.userName">
                                        </div>
                                        <p class="userName">{{ messageItem.userName }}</p>
                                    </div>
                                    <p class="date">
                                        {{ messageItem.date }}
                                    <div tabindex="0" class="more-group">
                                        <button class="more">
                                            <fontAwesome :icon="['fa', 'ellipsis-vertical']" style="color:#aaa;" />
                                        </button>
                                        <ReportBtn class="report-btn"></ReportBtn>
                                    </div>
                                    </p>
                                </div>
                                <p class="txt">
                                    {{ messageItem.message }}
                                </p>
                                <div class="likeMes" v-if="messageItem">
                                    <p class="likeCount">{{ messageItem.like }}</p>
                                    <LikeMesBtn :messageItem="messageItem"></LikeMesBtn>
                                </div>
                            </div>
                            <button class="readMore" @click.prevent="showMore">
                                {{ txt }}
                                <fontAwesome v-if="isShow" :icon="['fa', 'angle-down']" style="color:#fff;" />
                                <fontAwesome v-else :icon="['fa', 'angle-up']" style="color:#fff;" />
                            </button>
                        </div>
                    </div>
                    <div class="otherSong">
                        <h3>專輯其他歌曲</h3>
                        <div class="song" v-for="(item, index) in otherSongs.slice(0, num2)" :key="index">
                            <div class="list">
                                <div class="number">{{ item.id }}</div>
                                <div class="songPic">
                                    <img :src="require(`/public/image/SingleMusic/${item.albumPic}`)" alt="item.name">
                                    <div class="play" @click="openPlayer()">
                                        <fontAwesome class="i" :icon="['fa', 'play']" />
                                    </div>
                                </div>
                                <router-link to="/home/singlemusic" class="songName">
                                    {{ item.name }}
                                </router-link>
                            </div>
                            <div class="btnArea">
                                <ShareBtn></ShareBtn>
                                <AddSlBtn></AddSlBtn>
                                <AddFavBtn></AddFavBtn>
                            </div>
                        </div>
                        <button class="readMore" @click.prevent="showMoreSong">
                            {{ txt2 }}
                            <fontAwesome v-if="isShowSong" :icon="['fa', 'angle-down']" style="color:#fff;" />
                            <fontAwesome v-else :icon="['fa', 'angle-up']" style="color:#fff;" />
                        </button>
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
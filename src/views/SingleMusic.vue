<template>
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
                            <PlayBtnBig></PlayBtnBig>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainInf" v-for="(songItem, songIndex) in songs" :key="songIndex">
                <div class="singerInf">
                    <div class="singer">
                        <div class="singerPic">
                            <img :src="require(`/public/image/SingleMusic/${songItem.singerPic}`)" alt="songItem.singer">
                        </div>
                        <a href="singerPage" class="singerName">{{ songItem.singer }}</a>
                    </div>
                    <div class="album">
                        <div class="albumPic">
                            <img :src="require(`/public/image/SingleMusic/${songItem.albumPic}`)" alt="songItem.album">
                        </div>
                        <p>專輯</p>
                        <a href="albumPage" class="albumName">{{ songItem.album }}</a>
                    </div>
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
                                <input type="text">
                                <button class="send">
                                    <fontAwesome :icon="['fa', 'paper-plane']" style="color:#74EBD5;" size="2xl" />
                                </button>
                            </div>
                            <div class="message" v-for="(messageItem, messageIndex) in messages" :key="messageIndex"
                                v-if="showAllMessages || messageIndex < 3 || messages.length <= 3">
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
                                        <button class="more" @click="toggleReportBtn">
                                            <fontAwesome :icon="['fa', 'ellipsis-vertical']" style="color:#aaa;" />
                                        </button>
                                        <ReportBtn v-if="showReportBtn"></ReportBtn>
                                    </p>

                                </div>
                                <p class="txt">
                                    {{ messageItem.message }}
                                </p>
                                <div class="likeMes" v-if="messageItem">
                                    <p class="likeCount">{{ messageItem.like }}</p>
                                    <!--<button class="btn_likeMes" @click="likeMessage(messageItem)">
                                        <font-awesome-icon :icon="['fa', 'thumbs-up']"/>
                                    </button>-->
                                    <LikeMesBtn :messageItem="messageItem"></LikeMesBtn>
                                </div>
                            </div>

                            <a href="#" class="readMore" @click="toggleMessages">
                                {{ showAllMessages ? '收起' : '查看更多' }}
                                <fontAwesome :icon="['fa', 'angle-down']" style="color:#fff;" />
                            </a>
                        </div>
                    </div>
                    <div class="otherSong">
                        <h3>專輯其他歌曲</h3>
                        <div class="song" v-for="(item, index) in otherSongs" :key="index" v-if="showAllSongs || index < 3">
                            <div class="list">
                                <div class="number">{{ item.id }}</div>

                                <div class="songPic">
                                    <img :src="require(`/public/image/SingleMusic/${item.albumPic}`)" alt="item.name">
                                </div>
                                <p class="songName">
                                    {{ item.name }}
                                </p>
                            </div>
                            <div class="btnArea">
                                <ShareBtn></ShareBtn>
                                <AddSlBtn></AddSlBtn>
                                <AddFavBtn></AddFavBtn>
                            </div>
                        </div>
                        <a href="#" class="readMore" @click="toggleSongs">
                            <fontAwesome :icon="['fa', 'angle-down']" style="color:#fff;" />
                        </a>
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
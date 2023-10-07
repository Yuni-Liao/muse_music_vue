<template>
    <player ref="player"></player>
    <main class="singleAlbum">
        <!-- 上方大圖 -->
        <div class="banner" v-for="albumItem in album" :key="albumItem.id">
            <div class="overlay"></div>
            <img class="backPic" :src="`${publicPath}dataimage/album/${albumItem.albumpic}`"
                :alt="albumItem.albumname">
        </div>
        <!-- 以下是 1200px 內容區 -->
        <section class="inner">
            <div class="topInf" v-for="albumItem in album" :key="albumItem.id">
                <div class="albumPic">
                    <img :src="`${publicPath}dataimage/album/${albumItem.albumpic}`" :alt="album.albumname">
                </div>
                <div class="albumInf">
                    <div class="album">
                        <p>專輯</p>
                        <h1 class="albumName">{{ albumItem.albumname }}</h1>
                        <h2 class="singer">{{ albumItem.singer }}</h2>
                    </div>
                    <div class="iconBar">
                        <div class="countArea">
                            <div class="played">
                                <p>播放次數</p>
                                <p>{{ played }}</p>
                            </div>
                            <div class="shared">
                                <fontAwesome :icon="['fa', 'share']" style="color: #fff;" />
                                <p>{{ albumItem.shared }}</p>
                            </div>
                        </div>
                        <div class="buttonArea">
                            <ShareBtn></ShareBtn>
                            <PlayBtnBig @click="openPlayer()"></PlayBtnBig>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainInf" v-for="albumItem in album" :key="albumItem.id">
                <div class="singerInf">
                    <router-link :to="`/home/profilepage/${albumItem.singer_id}`" class="singer">
                        <div class="singerPic">
                            <img :src="`${publicPath}dataimage/member/${albumItem.singerpic}`" :alt="albumItem.singer">
                        </div>
                        <p class="singerName">{{ albumItem.singer }}</p>
                    </router-link>
                    <div class="date">
                        <p>發布時間</p>
                        <p class="releasDate">{{ albumItem.date }}</p>
                    </div>
                    <p class="albumInf">
                        {{ albumItem.albuminf }}
                    </p>
                </div>
                <div class="detail">
                    <div class="playList">
                        <ol class="musicTable">
                            <li class="playListHeader">
                                <span class="id">#</span>
                                <span class="pic"></span>
                                <h3>歌曲</h3>
                                <span class="time">
                                    <fontAwesome :icon="['fa', 'fa-clock']" />
                                </span>
                                <span class="more"></span>
                            </li>
                            <li v-for="(item, index) in songs" :key="id" class="songArea">
                                <span class="id">{{ index + 1 }}</span>
                                <span class="pic">
                                    <img :src="`${publicPath}dataimage/song/${item.songpic}`" />
                                    <div class="play" @click="openPlayer()">
                                        <fontAwesome class="i" :icon="['fa', 'play']" />
                                    </div>
                                </span>
                                <h3 v-line-clamp="2" class="name" @click="gotosinglemusic(item.id)">
                                    <!-- <router-link to="/home/singlemusic">{{ item.name }}</router-link> -->
                                    {{ item.name }}
                                </h3>
                                <span class="time">{{ item.time }}</span>
                                <div class="btnArea">
                                    <!-- 更多_按鈕 -->
                                    <ShareBtn></ShareBtn>
                                    <AddSlBtn></AddSlBtn>
                                    <AddFavBtn></AddFavBtn>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/singlealbum.scss";
</style>
<script src="./js/SingleAlbum.js"></script>
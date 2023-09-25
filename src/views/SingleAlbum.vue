<template>
    <player ref="player"></player>
    <main class="singleAlbum">
        <!-- 上方大圖 -->
        <div class="banner" v-for="(albumItem, albumIndex) in album" :key="albumIndex">
            <div class="overlay"></div>
            <img class="backPic" :src="require(`/public/image/SingleAlbum/${albumItem.bannerPic}`)"
                alt="albumItem.bannerPic">
        </div>
        <!-- 以下是 1200px 內容區 -->
        <section class="inner">
            <div class="topInf" v-for="(albumItem, albumIndex) in album" :key="albumIndex">
                <div class="albumPic">
                    <img :src="require(`/public/image/SingleAlbum/${albumItem.albumPic}`)" alt="albumItem.songName">
                </div>
                <div class="albumInf">
                    <div class="album">
                        <p>專輯</p>
                        <h1 class="albumName">{{ albumItem.albumName }}</h1>
                        <h2 class="singer">{{ albumItem.singer }}</h2>
                    </div>
                    <div class="iconBar">
                        <div class="countArea">
                            <div class="played">
                                <p>播放次數</p>
                                <p>{{ albumItem.played }}</p>
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
            <div class="mainInf" v-for="(albumItem, albumIndex) in album" :key="albumIndex">
                <div class="singerInf">
                    <router-link to="/home/profilepage" class="singer">
                        <div class="singerPic">
                            <img :src="require(`/public/image/SingleMusic/${albumItem.singerPic}`)" alt="albumItem.singer">
                        </div>
                        <p class="singerName">{{ albumItem.singer }}</p>
                    </router-link>
                    <div class="date">
                        <p>發布時間</p>
                        <p class="releasDate">{{ albumItem.date }}</p>
                    </div>
                    <p class="albumInf">
                        {{ albumItem.albumInf }}
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
                            <li v-for="(albumItem, albumIndex) in songs" :key="albumIndex" class="songArea">
                                <span class="id">{{ albumItem.id }}</span>
                                <span class="pic"><img :src="require(`/public/image/SingleMusic/${albumItem.albumPic}`)" />
                                    <div class="play" @click="openPlayer()">
                                        <fontAwesome class="i" :icon="['fa', 'play']" />
                                    </div>
                                </span>
                                <h3 class="name"><router-link to="/home/singlemusic">{{ albumItem.name }}</router-link></h3>
                                <span class="time">{{ albumItem.time }}</span>
                                <div class="btnArea">
                                    <!-- 更多_按鈕 -->
                                    <AddFavBtn></AddFavBtn>
                                    <AddSlBtn></AddSlBtn>
                                    <ShareBtn></ShareBtn>
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
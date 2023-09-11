<template>
    <main class="singleAlbum">
        <!-- 上方大圖 -->
        <div class="banner" v-for="(albumItem, albumIndex) in album" :key="albumIndex">
            <div class="overlay"></div>
            <img class="backPic" :src="require(`/public/image/SingleAlbum/${albumItem.bannerPic}`)" alt="albumItem.bannerPic">
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
                            <PlayBtnBig></PlayBtnBig>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainInf" v-for="(albumItem, albumIndex) in album" :key="albumIndex">
                <div class="singerInf">
                    <div class="singer">
                        <div class="singerPic">
                            <img :src="require(`/public/image/SingleMusic/${albumItem.singerPic}`)" alt="albumItem.singer">
                        </div>
                        <a href="singerPage" class="singerName">{{ albumItem.singer }}</a>
                    </div>
                    <div class="date">
                        <p>發布時間</p>
                        <p class="releasDate">{{ albumItem.date }}</p>
                    </div>
                    <p class="albumInf">
                        {{ albumItem.albumInf }}
                    </p>
                </div>
                <div class="detail">
                    <div class="otherSong">
                        <h3>專輯其他歌曲</h3>
                        <div class="song" v-for="(item, index) in otherSongs" :key="index">
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
                                <AddSlBtn></AddSlBtn>
                                <AddFavBtn></AddFavBtn>
                            </div>
                        </div>
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
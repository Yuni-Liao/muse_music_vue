<template>
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
                            <PlayBtnBig></PlayBtnBig>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainInf" v-for="(albumItem, albumIndex) in album" :key="albumIndex">
                <div class="singerInf">
                    <a href="/profilepage" class="singer">
                        <div class="singerPic">
                            <img :src="require(`/public/image/SingleMusic/${albumItem.singerPic}`)" alt="albumItem.singer">
                        </div>
                        <p class="singerName">{{ albumItem.singer }}</p>
                    </a>
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
                        <table class="musicTable">
                            <thead>
                                <tr class="playListHeader">
                                    <th></th>
                                    <th></th>
                                    <th>歌曲名稱</th>
                                    <th>創作者</th>
                                    <th>時長</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(albumItem, albumIndex) in songs" :key="albumIndex" class="songArea">
                                    <td class="id">{{ albumItem.id }}</td>
                                    <td class="pic">
                                        <a href="/singlemusic"> <img :src="require(`/public/image/SingleMusic/${albumItem.albumPic}`)"
                                                alt="albumItem.name"></a>
                                    </td>
                                    <td class="name"><a href="/singlemusic">{{ albumItem.name }}</a></td>
                                    <td class="singer"><a href="/profilepage">{{ albumItem.singer }}</a></td>
                                    <td class="time">{{ albumItem.time }}</td>
                                    <td class="btnArea">
                                        <AddFavBtn></AddFavBtn>
                                        <AddSlBtn></AddSlBtn>
                                        <button class="moreBtn" @click="toggleMoreBtn(albumItem)">
                                            <fontAwesome :icon="['fa', 'ellipsis']" style="color:#AAAAAA;" />
                                        </button>
                                        <div class="moreBtnAlert" v-if="albumItem.showMoreBtn">
                                            <button class="close" @click="closeMoreBtn(albumItem)">
                                                <fontAwesome :icon="['fa', 'fa-xmark']" style="color:#ffffff;" />
                                            </button>
                                            <a href="#">
                                                <img src="../../public/image/icon/share.png">
                                                <p>分享</p>
                                            </a>
                                            <a href="#" class="addFav">
                                                <img src="../../public/image/icon/addFav.png">
                                                <p>加入我的最愛</p>
                                            </a>
                                            <a href="#" class="addSl">
                                                <img src="../../public/image/icon/addSl.png">
                                                <p>加入歌單</p>
                                            </a>
                                            <a href="#" class="readSong">
                                                <img src="../../public/image/icon/eyeopen.png" alt="" class="eyeopen">
                                                <p>檢視歌曲</p>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
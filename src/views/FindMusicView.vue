<template>
    <player ref="player"></player>
    <div class="banner">
        <div class="wrapper">
            <div class="find">
                <p>探索</p>
            </div>
            <div class="container1">
                <div class="title">
                    <h1>{{ foundObject.styleName }}</h1>
                    <p>共{{ foundObject.count }}首歌</p>
                </div>
                <div class="btn">
                    <PlayBtnBig @click="openPlayer"></PlayBtnBig>
                </div>
            </div>
        </div>
    </div>
    <div class="listWrapper">
        <div class="songList">
            <table>
                <thead>
                    <tr class="listTitle">
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
<<<<<<< HEAD
                            <img :src="require(`/public/image/SingleMusic/${albumItem.albumPic}`)" alt="albumItem.name">
=======
                            <img :src="require(`/public/image/SingleMusic/${albumItem.albumPic}`)"
                                alt="albumItem.name" @click="openPlayer">
                        </td>
                        <td class="name">
                            <router-link to="/singlemusic">
                                {{ albumItem.name }}
                            </router-link>
>>>>>>> be0216d7611cde9b567e8da101368ce6b596558a
                        </td>
                        <td class="singer">
                            <router-link :to="albumItem.link">
                                {{ albumItem.singer }}
                            </router-link>
                        </td>
                        <td class="time">{{ albumItem.time }}</td>
                        <td class="btnArea">
                            <!-- <AddFavBtn></AddFavBtn>
                            <AddSlBtn></AddSlBtn> -->
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
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/findmusic.scss";
</style>
<script src="./js/FindMusicView.js"></script>
<template>
    <player @playMusic="handlePlayMusic" :s_id="s_id" ref="player"></player>
    <div class="banner"
    :style="{
        backgroundImage: `url(${publicPath}dataimage/find/${foundObject.mcat_pic})`
    }"
    >
        <div class="wrapper">
            <div class="find">
                <p>探索</p>
            </div>
            <div class="container1">
                <div class="title">
                    <h1>{{ foundObject.mcat_name }}</h1>
                    <p>共首歌</p>
                </div>
                <div class="btn">
                    <!-- <PlayBtnBig @click="openPlayer"></PlayBtnBig> -->
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
                    <tr v-for="(s, index) in songs" :key="s.s_id" class="songArea">
                        <td class="id">{{ index + 1 }}</td>
                        <td class="pic">
                            <img :src="`${publicPath}dataimage/song/${s.s_img}`"
                            alt="albumItem.name"
                                @click="openPlayer(s.s_id)">
                                <fontAwesome class="f_play" :icon="['fa', 'play']" @click="openPlayer(s.s_id)"/>
                        </td>
                        <td class="name">
                            <!-- <router-link to="/home"> -->
                            {{ s.s_name }}
                            <!-- </router-link> -->
                        </td>
                        <td class="singer">
                            <router-link :to="`/home/profilepage/${s.mem_id}`">
                                {{ s.h_name }}
                            </router-link>
                        </td>
                        <td class="time">{{ s.s_length }}</td>
                        <td class="btnArea">
                            <!-- <AddFavBtn></AddFavBtn>
                            <AddSlBtn></AddSlBtn> -->
                            <button class="moreBtn" @click="toggleMoreBtn(s, $event)">
                                <fontAwesome :icon="['fa', 'ellipsis']" style="color:#AAAAAA;" />
                            </button>
                            <div class="moreBtnAlert" v-if="s.showMoreBtn" >
                                <a class="shareBtn" >
                                    <ShareBtn></ShareBtn>
                                    <!-- <img src="../../public/image/icon/share.png"> -->
                                    <p>分享</p>
                                </a>
                                <a class="addFav">
                                    <AddFavBtn></AddFavBtn>
                                    <!-- <img src="../../public/image/icon/addFav.png"> -->
                                    <p>加入我的最愛</p>
                                </a>
                                <a class="addSl"  @click.stop>
                                    <AddSlBtn @click.stop></AddSlBtn>
                                    <!-- <img src="../../public/image/icon/addSl.png"> -->
                                    <p>加入歌單</p>
                                </a>
                                <a class="readSong">
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
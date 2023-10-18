<template>
    <player 
    :s_id="s_id"
    :allSid="allSid"
    @change-s-id="changeSId" ref="player"></player>
    <div class="banner" v-if="foundObject && foundObject.mcat_pic"
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
                    <p>共{{ allSid.length }}首歌</p>
                </div>
                <div class="btn">
                    <PlayBtnBig @click="openPlayer(songs[0].s_id)"></PlayBtnBig>
                </div>
            </div>
        </div>
    </div>
    <div class="listWrapper">
        <div class="songList">
            <table>
                <thead>
                    <tr class="listTitle">
                        <th>#</th>
                        <th></th>
                        <th>歌曲名稱</th>
                        <th class="member">創作者</th>
                        <th>時長</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(s, index) in songs" :key="s.s_id" class="songArea" @click="openPlayer(s.s_id)">
                        <td class="id">{{ index + 1 }}</td>
                        <td class="pic">
                            <img :src="`${publicPath}dataimage/song/${s.s_img}`"
                            alt="albumItem.name"
                                >
                                <fontAwesome class="f_play" :icon="['fa', 'play']" />
                        </td>
                        <td class="name">
                            <router-link  :to="`/home/singlemusic/${s.s_id}`" @click="stopPropagation" >
                            {{ s.s_name }}
                            </router-link>
                        </td>
                        <td class="singer">
                            <router-link :to="`/home/profilepage/${s.mem_id}`" @click="stopPropagation">
                                {{ s.h_name }}
                            </router-link>
                        </td>
                        <td class="time">{{ s.s_length }}</td>
                        <td class="btnArea" @click="stopPropagation">
                            <!-- <AddFavBtn></AddFavBtn>
                            <AddSlBtn></AddSlBtn> -->
                            <button class="moreBtn" @click="toggleMoreBtn(s, $event)">
                                <fontAwesome :icon="['fa', 'ellipsis']" style="color:#AAAAAA;" />
                            </button>
                            <div class="moreBtnAlert" v-if="s.showMoreBtn" >
                                <a class="shareBtn" >
                                    <ShareBtn></ShareBtn>
                                    <p>分享</p>
                                </a>
                                <a class="addFav">
                                    <AddFavBtn></AddFavBtn>
                                    <p>加入我的最愛</p>
                                </a>
                                <a class="addSl"  @click.stop>
                                    <AddSlBtn @click.stop></AddSlBtn>
                                    <p>加入歌單</p>
                                </a>
                                <a class="readSong">
                                    <router-link  :to="`/home/singlemusic/${s.s_id}`">
                                        <img src="../../public/image/icon/eyeopen.png" alt="" class="eyeopen">
                                        <p>檢視歌曲</p>
                                    </router-link>
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
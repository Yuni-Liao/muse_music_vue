<template>
    <!-- -------------懸浮播放器範圍 -->
    <div class="player" v-if="playerOpen">
    <div class="player" v-if="playerOpen">
        <div class="player_left" v-for="item in songList" :key="item.id">
            <img @click="showModal" class="screen" src="/image/icon/screen.svg" alt="">
            <img class="musicPic" :src="item.cover" alt="">
            <div class="songInfo">
                <p>{{ item.songTitle }}</p>
                <span>{{ item.singer }}</span>
            </div>
            <!-- <audio controls id="myAudio" ref="music">
                <source :src="getSrc(item.audio)" type="audio/mpeg">
            </audio> -->
        </div>

        <div class="player_center">
            <div class="playerControls">
                <div id="prev" class="backwardBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl"
                        style="color: #fff; margin: 15px; cursor: pointer;" />
                </div>
                <div id="play">
                    <!-- <audio id="myAudio" ref="music" src="https://yildirimzlm.s3.us-east-2.amazonaws.com/Post+Malone+-+rockstar+ft.+21+Savage+(Official+Audio).mp3"></audio> -->
                    <audio id="myAudio" ref="music" src="audio/Busy Day Ahead.mp3" loop></audio>
                    <fontAwesome :icon="['fa', 'play']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"
                        v-if="!isPlaying" @click="playMusic" />
                    <fontAwesome :icon="['fa', 'pause']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"
                        v-else @click="pauseMusic" />

                </div>
                <div id="next" class="forwargBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl"
                        style="color: #fff; margin: 15px; cursor: pointer;" />
                </div>
            </div>

            <div class="timeBar">
                <p>{{ formatTime(currentTime) }}</p>
                <input class="input-range--custom" type="range" v-model="currentTime" @input="seekToTime" step="0.01">
                <p>{{ formatTime(totalTime) }}</p>
            </div>

        </div>
        <div class="player_right">
            <!-- <fontAwesome class="loopSong" @click="toggleLoop" :class="{ 'loopSong-active': isLooping }" :icon="['fa', 'arrow-rotate-right']" size="xl" style="color: #fff; cursor: pointer; margin-right: 10px;" /> -->
            <img v-if="!isMuted" src="/image/icon/volume.svg" alt="" @click="toggleMute">
            <img v-if="isMuted" src="/image/icon/muted.svg" alt="" @click="toggleMute">
            <input type="range" id="volumeSlider" v-model="volume" min="0" max="100">
            <p><span>{{ volume }}</span></p>
        </div>
    </div>


    <!-- -------------蓋板播放器範圍------------- -->
    <div class="modal" v-if="isModalVisible" :style="{
        backgroundImage: `url( ${require('@/assets/image/songPic.png')} )`,
        backgroundSize: '100% auto',
        backgroundRepeat: no - repeat,
    }">
        <div class="modal-content">
            <div class="playerTop">
                <img src="~@/assets/image/muse_logo_2.png" alt="">
                <div class="playerTab">
                    <h3 style="color: #74EBD5;">正在播放</h3>
                    <h3 @click="showLyrics = !showLyrics;" :style="{ color: showLyrics ? '#74EBD5' : 'white' }">歌詞</h3>
                </div>
                <div class="playerClose">
                    <fontAwesome @click="closeModal" class="close" :icon="['fa', 'xmark']" size="2xl"
                        style="color: #fff;" />
                </div>
            </div>
            <div class="playerBottom">
                <div class="songSection">
                    <img src="/image/SingleMusic/songPic.png" alt="">
                    <div class="titleBtns">
                        <h4>Say it</h4>
                        <div class="btns">
                            <ShareBtn />
                            <AddSlBtn />
                            <AddFavBtn />
                        </div>
                    </div>
                    <h5>George Makridis</h5>
                    <div class="timeBarr">
                        <p>{{ formatTime(currentTime) }}</p>
                        <input class="input-range--custom" type="range" v-model="currentTime" @input="seekToTime" step="0.01" >
                        <p>{{ formatTime(totalTime) }}</p>
                    </div>
                    <div class="fcbtns">
                        <img v-if="!isMuted" src="/image/icon/volume.svg" alt="" @click="toggleMute">
                        <img v-if="isMuted" src="/image/icon/muted.svg" alt="" @click="toggleMute">
                        <div class="awsome">
                            <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" />
                            <fontAwesome :icon="['fa', 'play']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" v-if="!isPlaying" @click="playMusic" />
                            <fontAwesome :icon="['fa', 'pause']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" v-else @click="pauseMusic" />
                            <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" />
                        </div>
                        <fontAwesome :icon="['fa', 'arrow-rotate-right']" style="color: #fff; cursor: pointer;" />

                    </div>
                </div>
                <div v-show="showLyrics" class="lyricsSection">
                    <p>
                        Tryin' my best to take it slowly
                        To play it cool and keep it low key
                        But I'm just a man I ain't a priest
                        My mind's stuck on one thing
                        And it ain't exactly holy
                        No, it won't ever be the time to

                        Cross that line with you
                        But if only you knew
                        We'd be causin' a commotion
                        No more hopin'
                        I leave my girl
                        You leave your man
                        Show you my world
                        Drink your potion
                        Unlimited oxytocin, Oh!
                        I can't fake it

                        Girl, I'm breaking
                        Tension's got me
                        Tryin' my best to take it slowly
                        To play it cool and keep it low key
                        But I'm just a man I ain't a priest
                        My mind's stuck on one thing
                        And it ain't exactly holy
                        No, it won't ever be the time to

                        Cross that line with you
                        But if only you knew
                        We'd be causin' a commotion
                        No more hopin'
                        I leave my girl
                        You leave your man
                        Show you my world
                        Drink your potion
                        Unlimited oxytocin, Oh!
                        I can't fake it

                        Girl, I'm breaking
                        Tension's got me
                    </p>
                </div>
            </div>

        </div>

    </div>
</template>
  
<script>
import ShareBtn from '@/components/ShareBtn.vue';
import AddSlBtn from '@/components/AddSlBtn.vue';
import AddFavBtn from '@/components/AddFavBtn.vue';

export default {
    name: "player",
    components: {
        ShareBtn,
        AddSlBtn,
        AddFavBtn,
    },
    data() {
        return {
            //播放器狀態預設關閉
            playerOpen: false,
            songList: [
                {
                    cover: '/image/SingleMusic/songPic.png',
                    songTitle: 'Say it',
                    singer: 'George Makridis',
                    audio: 'Busy Day Ahead.mp3',
                }
            ],
            isPlaying: false,
            progressWidth: '0px',
            isMuted: false,
            currentVolume: 0.5,
            isModalVisible: false,
            showLyrics: false,
            volume: 50,
            showPlayer: false,
            currentTime: 0,
            totalTime: 0,

        }
    },
    methods: {
        // getSrc(src) {
        // return require("audio/" + src)
        // },
        playMusic() {
        //播放音樂
        // 播放音樂
        this.playerOpen = true;//先執行顯示
            this.$nextTick(() => {//再執行播放
                this.$refs.music.play();
                this.isPlaying = true;
                
            });

        },
        pauseMusic() {
            // 暫停音樂
            this.$refs.music.pause();
            this.isPlaying = false;
        },

        toggleMute() {
            if (this.isMuted) {
                this.$refs.music.volume = this.currentVolume;
            } else {
                this.currentVolume = this.$refs.music.volume;
                this.$refs.music.volume = 0;
            }
            this.isMuted = !this.isMuted;
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        togglePlayer() {
            this.showPlayer = !this.showPlayer;
        },
        seekToTime() {
            const audio = document.getElementById("myAudio");
            audio.currentTime = this.currentTime;
        },

    },
    mounted() {
        // const audio = this.$refs.myAudio;

        // audio.onloadedmetadata = () => {
        // this.totalTime = audio.duration;
        // };

        // audio.ontimeupdate = () => {
        // this.currentTime = audio.currentTime;
        // };

    },
    computed: {
        formatTime() {
            const format = (time) => {
                const minutes = Math.floor(time / 60);
                const seconds = Math.floor(time % 60);
                return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            };
            return (time) => format(time);
        }
    },
    watch: {
        volume: function (newVolume) {
            const audioElement = document.getElementById("myAudio");
            audioElement.volume = newVolume / 100;
        },

    }
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/component/player.scss";
</style>
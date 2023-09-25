<template>
    <!-- -------------懸浮播放器範圍 -->
    <div class="player" v-if="playerOpen" ref="player">
        <div class="player_left">
            <img @click="showModal" class="screen" src="/image/icon/screen.svg" alt="">
            <img class="musicPic" :src="currentSong.cover" alt="">
            <div class="songInfo">
                <p>{{ currentSong.songTitle }}</p>
                <span>{{ currentSong.singer }}</span>
            </div>
            <!-- 音檔 -->
            <audio id="myAudio" ref="music" @timeupdate="updateTime" @ended="songEnded">
                <source :src="'/audio/' + currentSong.audio" type="audio/mpeg">
            </audio>
        </div>

        <div class="player_center">
            <div class="playerControls">
                <!-- 上一首按鈕 -->
                <div id="prev" class="backwardBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl"
                        style="color: #fff; margin: 15px; cursor: pointer;" @click="prevSong" />
                </div>
                <!-- 播放按钮 -->
                <div id="play">
                    <fontAwesome :icon="['fa', 'play']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" 
                        v-if="!isPlaying"
                        @click="playMusic"
                    />
                    <!-- 暫停按钮 -->
                    <fontAwesome :icon="['fa', 'pause']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" 
                        v-else
                        @click="pauseMusic"
                    />
                </div>
                <!-- 下一首按鈕 -->
                <div id="next" class="forwargBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl"
                        style="color: #fff; margin: 15px; cursor: pointer;" @click="nextSong" />
                </div>
            </div>
            <!-- 時間進度條 -->
            <div class="timeBar">
                <p>{{ formatTime(currentTime) }}</p>
                <input class="input-range--custom" type="range" v-model="currentTime" @input="seekToTime" :min="0" :max="totalTime" step="0.01">
                <p>{{ formatTime(totalTime) }}</p>
            </div>
        </div>
        <!-- 控制音量和歌詞顯示 -->
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
        // backgroundImage: `url( ${require('@/assets/image/songPic.png')} )`,
        backgroundImage: `url('${currentSong.cover}')`,
        backgroundSize: '100% auto',
        backgroundRepeat: no-repeat,
        backgroundPosition:'center 20%',
    }">
    
        <!-- 歌曲信息和控制按钮 -->
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
                    <img class="musicPic" :src="currentSong.cover" alt="">
                    <div class="titleBtns">
                        <h4>{{ currentSong.songTitle }}</h4>
                        <div class="btns">
                            <ShareBtn />
                            <AddSlBtn />
                            <AddFavBtn />
                        </div>
                    </div>
                    <h5>{{ currentSong.singer }}</h5>
                    <div class="timeBarr">
                        <p>{{ formatTime(currentTime) }}</p>
                            <input class="input-range--custom" type="range" v-model="currentTime" @input="seekToTime" :min="0" :max="totalTime" step="0.01">
                        <p>{{ formatTime(totalTime) }}</p>
                    </div>
                    <div class="fcbtns">
                        <img v-if="!isMuted" src="/image/icon/volume.svg" alt="" @click="toggleMute">
                        <img v-if="isMuted" src="/image/icon/muted.svg" alt="" @click="toggleMute">
                        <div class="awsome">
                            <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" @click="prevSong" />
                            <fontAwesome :icon="['fa', 'play']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" v-if="!isPlaying" @click="playMusic"
                                class="play_pause" />
                            <fontAwesome :icon="['fa', 'pause']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" v-else @click="pauseMusic"
                                class="play_pause" />
                            <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" @click="nextSong" />
                        </div>
                        <fontAwesome :icon="['fa', 'arrow-rotate-right']" style="color: #fff; cursor: pointer;" />
                    </div>
                </div>
                <!-- 歌词内容 -->
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
            currentSongIndex: 0,
            songList: [
                {
                    cover: '/image/SingleMusic/songPic2.png',
                    songTitle: 'Cant Fight This Feel',
                    singer: 'Raquel Castro',
                    audio: 'Cant_Fight_This_Feel.mp3',
                },
                {
                    cover: '/image/SingleMusic/smile.png',
                    songTitle: 'Moon Mother',
                    singer: 'Richard Farrell',
                    audio: 'Moon_Mother.mp3',
                },
                {
                    cover: '/image/SingleMusic/songPic.png',
                    songTitle: 'Say it',
                    singer: 'George Makridis',
                    audio: 'Busy_Day_Ahead.mp3',
                },
            ],
            //播放器狀態預設關閉
            playerOpen: false,
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
        playMusic() {
            this.playerOpen = true;
            this.$nextTick(() => {
                const audioElement = document.getElementById("myAudio");
                if (audioElement && typeof audioElement.play === 'function') {
                    audioElement.play();
                    this.isPlaying = true;
                } else {
                    console.error('音樂無法播放。');
                }
            });
        },
        pauseMusic() {
            const audioElement = document.getElementById("myAudio");
            if (audioElement) {
                audioElement.pause();
                this.isPlaying = false;
            }
        },
        nextSong() {
            if (this.currentSongIndex < this.songList.length - 1) {
                this.currentSongIndex += 1;//更新目前索引
                this.playMusic();
            } else {
                this.currentSongIndex = 0;//回到第一首
                this.playMusic();
            }
            this.loadAndPlayCurrentSong();
        },
        prevSong() {
            if (this.currentSongIndex > 0) {
                this.currentSongIndex -= 1;
                this.playMusic();
            } else {
                this.currentSongIndex = this.songList.length - 1;
                this.playMusic();
            }
            this.loadAndPlayCurrentSong();
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
        seekToTime() {
            const audio = document.getElementById("myAudio");
            audio.currentTime = this.currentTime;
        },
        updateTime() {
            const audioElement = document.getElementById("myAudio");
            if (audioElement) {
                this.currentTime = audioElement.currentTime;
                this.totalTime = audioElement.duration;
            }
        },
        loadAndPlayCurrentSong() {
            const audioElement = document.getElementById("myAudio");
            if (audioElement) {
                // 暂停當前播放的音樂
                audioElement.pause();

                // 更新音樂
                audioElement.src = `/audio/${this.currentSong.audio}`;

                // 重新載入新的音樂
                audioElement.load();

                // 播放新的音樂
                audioElement.play()
                .then(() => {
                    this.isPlaying = true;
                    // 在音乐准备好后设置totalTime
                    audioElement.onloadedmetadata = () => {
                        this.totalTime = audioElement.duration;
                    };
                })
                .catch((error) => {
                    console.error('音樂播放失敗：', error);
                });
            }
        },
        songEnded() {
            // 歌曲播完後重置
            this.isPlaying = false;
            this.currentTime = 0;
        },
    },
    computed: {
        currentSong() {
            return this.songList[this.currentSongIndex];
        },
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
        volume: function(newVolume) {
            const audioElement = document.getElementById("myAudio");
            audioElement.volume = newVolume / 100;
        },
    }
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/component/player.scss";
</style>

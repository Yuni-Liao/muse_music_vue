<template>
    <!-- -------------懸浮播放器範圍 -->
    <div class="player" :s_id="currentSong.s_id" v-if="playerOpen && currentSong" ref="player">
        <div class="player_left">
            <img @click="showModal" class="screen" :src="`${publicPath}image/icon/screen.svg`" alt="放大視窗">
            <img class="musicPic"
            :src="`${publicPath}dataimage/song/${currentSong.s_img}`">
            <div class="songInfo">
                <p>{{ currentSong.s_name }}</p>
                <span>{{ currentSong.mem_name }}</span>
            </div>
            <div id="play" class="phone-play">
                    <fontAwesome :icon="['fa', 'play']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"
                        v-if="!isPlaying" @click="playMusic" />
                    <!-- 暫停按钮 -->
                    <fontAwesome :icon="['fa', 'pause']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"
                        v-else @click="pauseMusic" />
            </div>
            <!-- 音檔 -->
            <audio id="myAudio" ref="music" @timeupdate="updateTime" @ended="songEnded">
                <source 
                :src="`${publicPath}audio/${currentSong.s_src}`" type="audio/mpeg">
            </audio>
        </div>

        <div class="player_center">
            <div class="playerControls">
                <!-- 上一首按鈕 -->
                <div id="prev" class="backwardBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl"
                        style="color: #fff;  cursor: pointer;" @click="prevSong" />
                </div>
                <!-- 播放按钮 -->
                <div id="play">
                    <fontAwesome :icon="['fa', 'play']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"
                        v-if="!isPlaying" @click="goingMusic" />
                    <!-- 暫停按钮 -->
                    <fontAwesome :icon="['fa', 'pause']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"
                        v-else @click="pauseMusic" />
                </div>
                <!-- 下一首按鈕 -->
                <div id="next" class="forwargBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl"
                        style="color: #fff; cursor: pointer;" @click="nextSong" />
                </div>
            </div>
            <!-- 時間進度條 -->
            <div class="timeBar">
                <p>{{ formatTime(currentTime) }}</p>
                <input class="input-range--custom" type="range" v-model="currentTime" @input="seekToTime" :min="0"
                    :max="totalTime" step="0.01">
                <p>{{ formatTime(totalTime) }}</p>
            </div>
        </div>
        <!-- 控制音量 -->
        <div class="player_right">
            <img v-if="!isMuted" :src="`${publicPath}image/icon/volume.svg`" @click="toggleMute">
            <img v-if="isMuted" :src="`${publicPath}image/icon/muted.svg`" @click="toggleMute">
            <input type="range" id="volumeSlider" v-model="volume" min="0" max="100">
            <p><span>{{ volume }}</span></p>
        </div>
    </div>

    <!-- -------------蓋板播放器範圍------------- -->
    <div class="modal" :s_id="currentSong.s_id" v-if="isModalVisible" :style="{
        backgroundImage: 
        `url(${publicPath}dataimage/song/${currentSong.s_img})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 20%',
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
                    <div class="pic">
                        <img class="musicPic" 
                        :src="`${publicPath}dataimage/song/${currentSong.s_img}`" alt="封面">
                    </div>
                    <div class="titleBtns">
                        <h4>{{ currentSong.s_name }}</h4>
                        <div class="btns">
                            <ShareBtn />
                            <AddSlBtn />
                            <AddFavBtn />
                        </div>
                    </div>
                    <h5>{{ currentSong.mem_name }}</h5>
                    <div class="timeBarr">
                        <p>{{ formatTime(currentTime) }}</p>
                        <input class="input-range--custom" type="range" v-model="currentTime" @input="seekToTime" :min="0"
                            :max="totalTime" step="0.01">
                        <p>{{ formatTime(totalTime) }}</p>
                    </div>
                    <div class="fcbtns">
                        <img v-show="!isMuted" :src="`${publicPath}image/icon/volume.svg`" @click="toggleMute">
                        <img v-show="isMuted" :src="`${publicPath}image/icon/muted.svg`" @click="toggleMute">
                        <div class="awsome">
                            <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" @click="prevSong" />
                            <fontAwesome :icon="['fa', 'play']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" v-if="!isPlaying" @click="goingMusic"
                                class="play_pause" />
                            <fontAwesome :icon="['fa', 'pause']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" v-else @click="pauseMusic"
                                class="play_pause" />
                            <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl"
                                style="color: #fff; margin: 15px; cursor: pointer;" @click="nextSong" />
                        </div>
                        <fontAwesome :icon="['fa', 'arrow-rotate-right']" style="color: #fff; cursor: pointer;"
                            @click="replay" />
                    </div>
                </div>
                <!-- 歌詞 -->
                <div v-show="showLyrics" class="lyricsSection">
                    <p>
                        {{ currentSong.s_lyrics }}
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
    emits: ['change-s-id'],
    props: {
        s_id: {
            type: String, // 假設 s_id 是字符串
            required: true, // 如果需要 s_id，則將其標記為必需
        },
        alb_id:{
            type: String,
            required: false,
        },
        allSid:{
            type: Array,
            required:false,
        }
    },
    data() {
        
        return {
            
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // currentSongIndex: 0,
            songList: [],
            //播放器狀態預設關閉
            playerOpen: false,
            isPlaying: false,
            progressWidth: '0px',
            isMuted: false,
            currentVolume: 0.5,
            isModalVisible: false,
            showLyrics: false,
            volume: 100,
            showPlayer: false,
            currentTime: 0,
            totalTime: 0,
        }
    },
    methods: {
        async playMusic() {

            await this.filterSarr();

            // console.log("filterSarr後", this.songList);

            // 顯示播放器
            this.playerOpen = true;

            this.$nextTick(() => {
                const audioElement = document.getElementById("myAudio");
                if (audioElement && typeof audioElement.play === 'function') {
                    // 步骤3：檢查是否存在有效的 s_id
                    if (this.s_id) {
                        // 步骤4：查找特定的 s_id 對應的歌曲
                        const song = this.songList.find(item => item.s_id === this.s_id);
                        // console.log('步骤4：比對到的歌曲:', song);
                        if (song) {
                            // 步骤5：檢查陣列的歌曲 s_id是否與 props中的 s_id匹配
                            if (this.currentSong && this.currentSong.s_id === this.s_id) {
                                // 重置歌曲時間
                                audioElement.load();
                                
                                // 步骤6：播放音樂
                                audioElement.play()
                                .then(() => {
                                    // console.log('步骤6：音樂已成功播放。');
                                    this.isPlaying = true;
                                })
                                .catch((error) => {
                                    console.error('步骤5：音樂播放失敗：', error);
                                });
                            } else {
                                console.log('步骤4：歌曲信息不匹配，不播放歌曲。');
                            }
                        } else {
                            console.warn('步骤3：找不到匹配的歌曲信息。');
                        }
                    } else {
                        console.error('步骤2：當前歌曲不存在。');
                    }
                } else {
                    console.error('步骤1：音樂無法播放。');
                }
            });
        },
        async fetchSong() {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getPlayerSong.php?`
            );
            fetch(apiURL)
            .then(async (response) => {
                this.songList = await response.json();
                // console.log('原songList:', this.songList);
            })
            .catch((error) => {
                console.error("發生錯誤:", error.message);
            });
        },
        filterSarr() {
            if (this.allSid && this.allSid.length > 0) {
                // 假如 allSid 存在且包含 s_id
                // 根據 allSid 篩選歌曲列表
                this.songList = this.songList.filter(item =>
                    this.allSid.includes(item.s_id)
                );

                // 篩選後的結果
                // console.log('篩選後的歌曲列表:', this.songList);
            }
        },
        pauseMusic() {
            const audioElement = document.getElementById("myAudio");
            if (audioElement) {
                audioElement.pause();
                this.isPlaying = false;
            }
        },
        goingMusic() {
            const audioElement = document.getElementById("myAudio");
            if (audioElement) {
                audioElement.play();
                this.isPlaying = true;
            }
        },
        // changeSId(newSId) {
        //     // 使用從子組件接收的新 s_id 更新 s_id 數據
        //     this.s_id = newSId;
        // },
        nextSong() {
            const currentIndex = this.songList.findIndex(song => song.s_id === this.s_id);
            const nextIndex = (currentIndex + 1) % this.songList.length;
            const nextSId = this.songList[nextIndex].s_id;

            if (nextIndex >= 0 && nextIndex < this.songList.length) {
                // 只有當 nextIndex 在合理的範圍內時才更新 s_id
                this.$emit('change-s-id', nextSId);
                this.playMusic();
            }
        },
        prevSong() {
            const currentIndex = this.songList.findIndex(song => song.s_id === this.s_id);
            const nextIndex = (currentIndex - 1 + this.songList.length) % this.songList.length;
            const nextSId = this.songList[nextIndex].s_id;

            if (nextIndex >= 0 && nextIndex < this.songList.length) {
                // 只有當 nextIndex 在合理的範圍內時才更新 s_id
                this.$emit('change-s-id', nextSId);
                this.playMusic();
            }
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
                // 檢查歌曲時間 不會顯示NaN
                if (!isNaN(this.currentTime) && !isNaN(this.totalTime)) {
                    this.currentTime = Math.floor(this.currentTime);
                    this.totalTime = Math.floor(this.totalTime);
                } else {
                    this.currentTime = 0;
                    this.totalTime = 0;
                }
            }
        },
        loadAndPlayCurrentSong() {
            const audioElement = document.getElementById("myAudio");
            if (audioElement) {
                // 暂停當前播放的音樂
                audioElement.pause();

                // 更新音樂
                audioElement.src = `${this.publicPath}audio/${this.currentSong.s_src}`;

                // 重新加载新的音樂
                audioElement.load();

                // 播放新的音樂
                audioElement.play()
                    .then(() => {
                        this.isPlaying = true;
                        // 音樂準備好後重置時間
                        audioElement.onloadedmetadata = () => {
                            this.totalTime = audioElement.duration;
                        };
                    })
                    .catch((error) => {
                        console.error('音樂播放失敗', error);
                    });
            }
        },
        songEnded() {
            // 歌曲播完後重置
            this.isPlaying = false;
            this.currentTime = 0;
        },
        replay() {
            //蓋板播放器 歌曲重播
            const audioElement = document.getElementById("myAudio");
            if (this.isPlaying) {
                audioElement.pause();
            }
            audioElement.currentTime = 0;
            audioElement.play()
                .then(() => {
                    this.isPlaying = true;
                })
        }
    },
    computed: {
        currentSong() {
            return this.songList.find(item => item.s_id === this.s_id);
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
        volume: function (newVolume) {
            const audioElement = document.getElementById("myAudio");
            audioElement.volume = newVolume / 100;
        },
    },
    mounted() {
        this.fetchSong();
    },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/component/player.scss";
</style>
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
                        v-if="!isPlaying" @click="playMusic" />
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
    <div class="modal" v-if="isModalVisible" :style="{
        backgroundImage: 
        `url(${publicPath}dataimage/song/${currentSong.s_img})`,
        backgroundSize: '100% auto',
        backgroundRepeat: no - repeat,
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
                                style="color: #fff; margin: 15px; cursor: pointer;" v-if="!isPlaying" @click="playMusic"
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
    emits: ['playMusic'],

    props: {
        s_id: {
            type: String, // 假設 s_id 是字符串
            required: true // 如果需要 s_id，則將其標記為必需
        }
    },
    data() {
        
        return {
            
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            currentSongIndex: 0,
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
                //顯示播放器
                this.playerOpen = true;
                // 获取歌曲数据
                await this.fetchSong(this.s_id); 

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
        // async playMusic() {
        //     if (this.s_id) { // 检查是否存在有效的 s_id
        //         const s_id = this.s_id;

        //         // 获取歌曲数据
        //         await this.fetchSong(s_id);

        //         this.$nextTick(() => {
        //             const audioElement = document.getElementById("myAudio");
        //             if (audioElement && typeof audioElement.play === 'function') {
        //                 audioElement.addEventListener('canplaythrough', () => {
        //                     // 检查从数据库中获取的歌曲的 s_id 是否与 props 中的 s_id 匹配
        //                     if (this.currentSong && this.currentSong.s_id === s_id) {
        //                         audioElement.play()
        //                             .then(() => {
        //                                 console.log('音乐已成功播放。');
        //                                 // 使用 $emit 触发 playMusic 事件，传递 s_id 作为参数
        //                                 this.$emit('playMusic', s_id);
        //                                 this.isPlaying = true;
        //                             })
        //                             .catch((error) => {
        //                                 console.error('音乐播放失败：', error);
        //                             });
        //                     } else {
        //                         console.log('歌曲信息不匹配，不播放歌曲。');
        //                     }
        //                 });
        //             } else {
        //                 console.log('playMusic 被调用了，s_id 是', s_id);
        //                 console.error('音乐无法播放。');
        //             }
        //         });
        //     } else {
        //         console.error('当前歌曲不存在。');
        //     }
        // },

        async fetchSong() {
            // const s_id = this.$route.params.s_id;
            const apiURL = new URL(
                `http://localhost/muse_music/public/api/getPlayerSong.php?`
            );
            fetch(apiURL)
            .then(async (response) => {
                this.songList = await response.json();
            })
            .catch((error) => {
                console.error("發生錯誤:", error.message);
            });
        },
        // async fetchSong(s_id) {
        //     console.log('Fetching song with s_id:', s_id);
        //     const apiURL = new URL(
        //         `http://localhost/muse_music/public/api/getPlayerSong.php?s_id=${s_id}`
        //     );
        //     try {
        //         const response = await fetch(apiURL);
        //         if (response.ok) {
        //             this.songList = await response.json();
        //         } else {
        //             console.error("獲取歌曲數據失敗:", response.status);
        //         }
        //     } catch (error) {
        //         console.error("發生錯誤:", error.message);
        //     }
        // },
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
                // 暂停当前播放的音乐
                audioElement.pause();

                // 更新音乐
                audioElement.src = `${this.publicPath}audio/${this.currentSong.s_src}`;

                // 重新加载新的音乐
                audioElement.load();

                // 播放新的音乐
                audioElement.play()
                    .then(() => {
                        this.isPlaying = true;
                        // 音乐准备好后重置时间
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
        volume: function (newVolume) {
            const audioElement = document.getElementById("myAudio");
            audioElement.volume = newVolume / 100;
        },
    },
    mounted() {
        this.fetchSong();
        // fetchSong();
    },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/component/player.scss";
</style>
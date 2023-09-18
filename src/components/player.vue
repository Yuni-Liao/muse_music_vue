<template>
    <!-- -------------懸浮播放器範圍 -->
    <div class="player" v-if="playerOpen" >
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
                <div  id="prev" class="backwardBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" />
                </div >
                <div id="play">
                    <!-- <audio id="myAudio" ref="music" src="https://yildirimzlm.s3.us-east-2.amazonaws.com/Post+Malone+-+rockstar+ft.+21+Savage+(Official+Audio).mp3"></audio> -->
                    <audio id="myAudio" ref="music" src="audio/Busy Day Ahead.mp3" loop></audio>
                    <fontAwesome :icon="['fa', 'play']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" 
                        v-if="!isPlaying"
                        @click="playMusic"
                    />
                    <fontAwesome :icon="['fa', 'pause']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" 
                        v-else
                        @click="pauseMusic"
                    />
                   
                </div>
                <div id="next" class="forwargBtn controlsItem">
                    <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"  />
                </div>
            </div>
            <div id="music-progress" class="music-progress" @click="playMusic" >
                <div id="progress-bar" class="music-progress-bar" :style="{ width: progressWidth }"></div>
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
   <div class="modal" 
        v-if="isModalVisible" :style="{
        backgroundImage: `url( ${require('@/assets/image/songPic.png')} )`,
        backgroundSize: '100% auto',
        backgroundRepeat: no-repeat,
    }">
        <div class="modal-content">
            <div class="playerTop">
                <img src="~@/assets/image/muse_logo_2.png" alt="">
                <div class="playerTab">
                    <h3 style="color: #74EBD5;">正在播放</h3>
                    <h3 @click="showLyrics = !showLyrics; " :style="{ color: showLyrics ? '#74EBD5' : 'white' }">歌詞</h3>
                </div>
                <div class="playerClose">
                <fontAwesome @click="closeModal" class="close" :icon="['fa', 'xmark']" size="2xl" style="color: #fff;"  />
                </div>
            </div>
            <div class="playerBottom">
                <div class="songSection">
                    <img src="/image/SingleMusic/songPic.png" alt="">
                    <div class="titleBtns">
                        <h4>Say it</h4>
                        <div class="btns">
                            <ShareBtn/>
                            <AddSlBtn/>
                            <AddFavBtn/>
                        </div>
                    </div>
                    <h5>George Makridis</h5>
                    <!-- <div id="music-progress" class="progress" @click="playMusic">
                        <div id="progress-bar" class="bar" :style="{ width: progressWidth }"></div>
                    </div> -->
                    <div class="fcbtns">
                        <img v-if="!isMuted" src="/image/icon/volume.svg" alt="" @click="toggleMute" >
                        <img v-if="isMuted" src="/image/icon/muted.svg" alt="" @click="toggleMute">
                        <div class="awsome">
                            <fontAwesome :icon="['fa', 'fa-backward-step']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" />
                            <fontAwesome :icon="['fa', 'play']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" 
                                v-if="!isPlaying"
                                @click="playMusic"
                            />
                            <fontAwesome :icon="['fa', 'pause']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;" 
                                v-else
                                @click="pauseMusic"
                            />
                            <fontAwesome :icon="['fa', 'fa-step-forward']" size="2xl" style="color: #fff; margin: 15px; cursor: pointer;"  />
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
        }
    },
    methods: {
        // getSrc(src) {
        // return require("audio/" + src)
        // },
        playMusic() {
        // 播放音樂
        this.playerOpen = true;//先執行顯示
            this.$nextTick(() => {//再執行播放
                this.$refs.music.play();
                this.isPlaying = true;
                this.updateProgress();
            });
        },
        pauseMusic() {
        // 暫停音樂
        this.$refs.music.pause();
        this.isPlaying = false;
        },
        updateProgress() {
        const audio = this.$refs.music;
        audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        this.progressWidth = (currentTime / duration) * 100 + "%";
        });
        },
        toggleMute(){
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
        
    },
    watch: {
                volume: function(newVolume) {
                    const audioElement = document.getElementById("myAudio");
                    audioElement.volume = newVolume / 100;
                }
            }
};
</script>
  
<style scoped lang="scss">
    @import "@/assets/scss/mixin/_mixin.scss";

    #ShareBtn {
    @include music_btn_circle(25px);
    };
    #AddFavBtn {
    @include music_btn_circle(25px);
    }
    #AddSlBtn {
    @include music_btn_circle(25px);
    margin:  0px 10px;
    }
    .player{
        // display: none;
         display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        background-color: rgba(25, 25, 25, 0.5);
        backdrop-filter:blur(5px);
        box-shadow: 3px 1px 3px #aaa;
        position: fixed;
        bottom: 0;
        z-index: 100;
        .player_left{
            display: flex;
            .screen{
                cursor: pointer;
                width: 25px;
                margin: 0px 20px 0px 0px;
            }
            .musicPic{
                width: 50px;
                margin: 0px 20px ;
            }
            .songInfo{
                display: flex;
                flex-direction: column;
                text-align: center;
                text-align: left;
                p{
                    color: #fff;
                }
                span{
                    color: #aaa;
                }
            }
       }
       .player_center{
        display: flex;
        flex-direction: column;
        margin: 0px 50px;
        .playerControls{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin: -30px 0px;
        }
        .music-progress{
            width: 550px;
            height: 4px;
            cursor: pointer;
            border-radius: 50px;
            background-color: #aaa;
            margin-top: 30px;
            /* 拖拉線 */
            .music-progress-bar{
                width: 0px;
                height: 4px;
                background-color: #fff;
                border-style: solid;
                border-radius: 50px;
            }
        }
        }
       .player_right{
        display: flex;
        align-items: center;
        cursor: pointer;
        img{
            width: 20px;
            margin: 0px 10px;
        }
        input{
            width: 80px;
            height: 3px;
            border-radius: 50px;
            color: #fff;
        }
        input[type="range"]::-webkit-slider-thumb{
            background-color: #fff;
        }
        p{
            color: #aaa;
            margin-left: 5px;
        }
        .loopSong{
            transition: color 0.3s;
        }
        .loopSong-active{
            color: #74EBD5;
        }
       }
    }

// -------------蓋板播放器範圍
.modal {
//   display: none;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .modal-content{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter:blur(5px);
    //display: flex;
    //justify-content: space-between;
    .playerTop{
        display: flex;
        justify-content: space-between;
        img{
            width: 70px;
            height: 80px;
            margin: 30px 0px 0px 30px;
        }
        .playerTab{
            display: flex;
            margin-top: 50px;
            margin-left: -40px;
            h3{
                color: #fff;
                margin: 30px;
                cursor: pointer;
            }
        }
        .playerClose{
            margin: 30px 30px 0px 0px;
            cursor: pointer;
        }
    
    }
    .playerBottom{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .songSection{
            display: flex;
            flex-direction: column;
            img{
                width: 250px;
            }
            .titleBtns{
                display: flex;
                justify-content: space-between;
                margin: 10px 0px;
                h4{
                    color: #fff;
                }
            }
            h5{
                color: #aaa;
                margin-left: -150px;
            }
            .progress{
                width: 100%;
                height: 3px;
                cursor: pointer;
                border: 1px solid #aaa;
                border-radius: 50px;
                background-color: #aaa;
                margin-top: 10px;
                .bar{
                    width: 0px;
                    height: 3px;
                    background-color: #fff;
                    border-style: solid;
                    border-radius: 50px;
                }
            }
            .fcbtns{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;
                img{
                    width: 15px;
                    cursor: pointer;
                }
            }
        }
        .lyricsSection{
            width: 250px;
            max-height: 350px;
            padding: 30px;
            margin: 0px 50px;
            overflow-y: scroll; 
            
            p{
                color: #fff;
            }
        }
        .lyricsSection::-webkit-scrollbar {
                width: 5px; 
        }
        .lyricsSection::-webkit-scrollbar-thumb{
            background-color: #5D5DDB;
            height: 7px;
            border-radius: 4px;
        }
        .lyricsSection::-webkit-scrollbar-track-piece{
            background: #fff;
            
        }
    }
    }
  }
  
   
    
</style>
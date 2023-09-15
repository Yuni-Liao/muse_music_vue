<template>
    <!-- -------------懸浮播放器範圍 -->
    <div class="player" >
        <div class="player_left" v-for="item in songList" :key="item.id">
            <img @click="showModal" class="screen" src="/image/icon/screen.svg" alt="">
            <img class="musicPic" :src="item.cover" alt="">
            <div class="songInfo">
                <p>{{ item.songTitle }}</p>
                <span>{{ item.singer }}</span>
            </div>
        </div>

        <div class="player_center">
            <div class="playerControls">
                <div id="prev" class="backwardBtn controlsItem">
                    <img  src="/image/icon/backward.svg" alt="">
                </div >
                <div id="play">
                    <audio id="myAudio" ref="music" src="https://yildirimzlm.s3.us-east-2.amazonaws.com/Post+Malone+-+rockstar+ft.+21+Savage+(Official+Audio).mp3"></audio>
                    <img
                        v-if="!isPlaying"
                        @click="playMusic"
                        style="width: 25px;"
                        src="/image/icon/play.svg" alt="Play" />
                    <img
                        v-else
                        @click="pauseMusic"
                        style="width: 25px;"
                        src="/image/icon/pause.svg"
                        alt="Pause"/>
                </div>
                <div id="next" class="forwargBtn controlsItem">
                    <img  src="/image/icon/forward.svg" alt="">
                </div>
            </div>
            <div id="music-progress" class="music-progress" @click="playMusic">
                <div id="progress-bar" class="music-progress-bar" :style="{ width: progressWidth }"></div>
            </div>
    </div>
    <div class="player_right">
        <img v-if="!isMuted" src="/image/icon/volume.svg" alt="" @click="toggleMute">
        <img v-if="isMuted" src="/image/icon/muted.svg" alt="" @click="toggleMute">
    </div>
   </div>
   <!-- -------------懸浮播放器範圍 -->

   <!-- -------------蓋板播放器範圍 -->
   <div class="modal" 
        v-if="isModalVisible" :style="{
        backgroundImage: `url( ${require('@/assets/image/songPic.png')} )`,
        backgroundSize: '100% auto',
    }">
        <div class="modal-content">
            <div class="playerLogo">
                <img src="~@/assets/image/muse_logo_2.png" alt="">
            </div>
            <div class="playSection">
                <div class="playLyrics">
                    <h4 style="color: #74EBD5;">正在播放</h4>
                    <h4>歌詞</h4>
                </div>
                <img src="/image/SingleMusic/songPic.png" alt="">
            </div>
            <div class="playerClose">
                <fontAwesome @click="closeModal" class="close" :icon="['fa', 'xmark']" size="2xl" style="color: #fff;"  />
            </div>
        </div>
        
   </div>
<!-- -------------蓋板播放器範圍 -->
</template>
  
<script>
export default {
    name: "player",
    data() {
        return {
            songList: [{
                cover: '/image/SingleMusic/songPic.png',
                songTitle: 'Say it',
                singer: 'George Makridis',
                
            }],
            isPlaying: false,
            progressWidth: '0px',
            isMuted: false,
            currentVolume: 0.5,
            isModalVisible: false,
        }
    },
    methods: {
        playMusic() {
        // 播放音樂
        this.$refs.music.play();
        this.isPlaying = true;
        this.updateProgress();
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
        // -------------蓋板播放器範圍
        showModal() {
        this.isModalVisible = true;
        },
        closeModal() {
        this.isModalVisible = false;
        }
    },
};
</script>
  
<style scoped lang="scss">
    .player{
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
                margin: 0px 10px 0px 0px;
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
            img{
            width: 13px;
            margin: 15px 10px;
            cursor: pointer;
            }
           
        }
        .music-progress{
            width: 550px;
            height: 3px;
            cursor: pointer;
            border: 1px solid #aaa;
            border-radius: 50px;
            background-color: #aaa;
            margin-top: -10px;
            /* 拖拉線 */
            .music-progress-bar{
                position: relative;
                width: 0px;
                height: 3px;
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
  height: 100vh;
  
  }
  .modal-content{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter:blur(5px);
    display: flex;
    justify-content: space-between;
    .playerLogo{
        img{
            width: 80px;
            margin-left: 50px;
            margin-top: 30px;
        }
    }
    .playSection{
        margin-top: 70px;
       .playLyrics{
            display: flex;
        h4{
            color: #fff;
            margin: 50px;
        }
       }
    }
    .playerClose{
        margin-top: 30px;
        margin-right: 50px;
    }
  }
</style>
<template>
   <div id="player" >
     <div class="player_left" v-for="item in songList">
        <img class="screen" src="/image/icon/screen.svg" alt="">
        <img class="musicPic" :src="item.src" alt="">
        <div class="songInfo">
            <p>{{ item.songTitle }}</p>
            <span>{{ item.singer }}</span>
        </div>
    </div>
    <div class="player_center">
        <div class="playerControls">
            <div id="prev" class="backwardBtn controlsItem">
                <img  src="/image/icon/backward.svg" alt="">
            </div>
            <div id="play" class="playBtn controlsItem">
                <fontAwesome  :icon="['fa', 'play']" style="color: #fff; width: 30px; height: 30px; cursor: pointer;;" />
                <div class="background"></div>
            </div>
            <div id="next" class="forwargBtn controlsItem">
                <img  src="/image/icon/forward.svg" alt="">
            </div>
        </div>
        <audio src="https://yildirimzlm.s3.us-east-2.amazonaws.com/Post+Malone+-+rockstar+ft.+21+Savage+(Official+Audio).mp3"></audio>
        <div class="music-progress">
            <div id="progress-bar" class="music-progress-bar"></div>
            <div class="music-progress__time">
                <span class="music-progress__time-item music-current-time">00:00</span>
                <span class="music-progress__time-item music-duration-time">00:00</span>
            </div>
        </div>
    </div>
    <div class="player_right">
        <img  src="/image/icon/shuffle.svg" alt="">
        <img  src="/image/icon/volume.svg" alt="">
        <div class="volumeLine">
            <section></section>
        </div>
    </div>
   </div>
</template>
  
<script>
export default {
    name: "player",
    data() {
        return {
            songList: [{
                src: '/image/SingleMusic/songPic.png',
                songTitle: 'Say it',
                singer: 'George Makridis',
            }],
        }
    },
};
</script>
  
<style scoped lang="scss">
    #player{
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
                margin: 0px 30px;
            }
            .musicPic{
                width: 50px;
                margin: 0px 30px;
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
            cursor: pointer;
            
            /* 拖拉線 */
            .music-progress-bar{
                position: relative;
                width: 0;
                height: 3px;
                background-color: purple;
                border-radius: 50px;
                
            }
            /* 圓點 */
            .music-progress-bar::after {
                content: '';
                position: absolute;
                top: -1px;
                background-color: white;
                width: 6px;
                height: 6px;
                border-radius: 50px;
                box-sizing: border-box;
            }
            /* 底線 */
            .music-progress-bar::before {
                content: '';
                position: absolute;
                top:0;
                left: 0;
                width: 550px;
                height: 3px;
                border-radius: 50px;
                filter: drop-shadow(0px 0px 4px rgba(46, 45, 45, 1));
                background: rgba(255, 255, 255, .3);
            }
            .music-progress__time{
                display: flex;
                justify-content: space-between;
                span{
                    color: #aaa;
                }
            }
        }
        }
       .player_right{
        display: flex;
        align-items: center;
        img{
            width: 20px;
            margin: 0px 10px;
        }
        .volumeLine{
            width: 60px;
            height: 3px;
            background-color: #fff;
            border-radius: 50px;
            margin-right: 30px;
        }
       }
    }
</style>
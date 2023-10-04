<template>
    <div class="index_dj">
        <div class="index_dj_box">
            <div class="dj_left">
                <div class="song_info">
                    <div class="song_title">
                        <fontAwesome :icon="['fa', 'music']" />
                        <span>{{ currentSongName }}</span>
                    </div>
                    <div class="timebox">
                        <span class="song_time">{{ currentSongTime }}</span>
                        <fontAwesome :icon="['fa', 'fa-clock']" />
                    </div>
                </div>
                <div class="plate" id="plate_left">
                    <span :class="{ active: isActive }"></span>
                </div>
                <div class="dj_buttons">
                    <button class="button prev obj_Radius" id="indexPrevBtn" @click="playPrevSong()">
                        <fontAwesome :icon="['fa', 'fa-backward-step']" />
                    </button>
                    <button class="button play obj_Radius" id="indexPlayBtn" @click="playSong(songIndex)">
                        <fontAwesome :icon="playIcon" />
                    </button>
                    <button class="button stop obj_Radius" id="indexStopBtn" @click="stopSong()">
                        <fontAwesome :icon="['fa', 'fa-stop']" />
                    </button>
                    <button class="button next obj_Radius" id="indexNextBtn" @click="playNextSong()">
                        <fontAwesome :icon="['fa', 'fa-step-forward']" />
                    </button>
                </div>
            </div>
            <div class="dj_center">
                <div class="plates_vols">
                    <div class="vol vol_left" @click="leftInputVolume()">
                        <input class="left_vol obj_Radius" type="range" v-model="leftVolumeValue" name="vol_left"
                            id="volume_left" min="0" max="100" @input="leftInputVolume" />
                    </div>
                    <div class="vol vol_right" @click="rightInputVolume()">
                        <input class="right_vol obj_Radius" type="range" v-model="rightVolumeValue" name="volume_right"
                            id="volume_right" min="0" max="100" @input="rightInputVolume" />
                    </div>
                </div>
                <div class="vol vol_cd">
                    <input class="mix_vol obj_Radius" @click="cdSongVolume()" type="range" v-model="cdVolumeValue"
                        name="volume_cd" id="volume_cd" min="0" max="100" @input="cdSongVolume" />
                </div>
            </div>
            <div class="dj_right">
                <div class="special_buttons topbuttons">
                    <button class="button prev obj_Radius" id="oneBtn" @click="indexPlaySound(`muzA`)">
                        🎹
                    </button>
                    <button class="button play obj_Radius" id="twoBtn" @click="indexPlaySound(`muzH`)">
                        🎹
                    </button>
                    <button class="button pause obj_Radius" id="threeBtn" @click="indexPlaySound(`muzI`)">
                        🎹
                    </button>
                    <button class="button stop obj_Radius" id="fourBtn" @click="indexPlaySound(`muzJ`)">
                        🎹
                    </button>
                </div>
                <div class="special_buttons centerbuttons">
                    <button class="button prev obj_Radius" id="fiveBtn" @click="indexPlaySound(`muzG`)">
                        🥁
                    </button>
                    <button class="button play obj_Radius" id="sixBtn" @click="indexPlaySound(`muzB`)">
                        🥁
                    </button>
                    <button class="button pause obj_Radius" id="sevenBtn" @click="indexPlaySound(`muzC`)">
                        🥁
                    </button>
                    <button class="button stop obj_Radius" id="drumBtn" @click="indexPlaySound(`muzD`)">
                        🥁
                    </button>
                </div>
                <div class="special_buttons bottombuttons">
                    <button class="button prev obj_Radius" id="nineBtn" @click="indexPlaySound(`muzK`)">
                        🎼
                    </button>
                    <button class="button pause obj_Radius" id="guitarBtn" @click="indexPlaySound(`muzF`)">
                        🎸
                    </button>
                    <button class="button play obj_Radius" id="tenBtn" @click="indexPlaySound(`muzL`)">
                        💿
                    </button>
                    <button class="button stop obj_Radius" id="clapBtn" @click="indexPlaySound(`muzE`)">
                        👏🏻
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// 轉盤區塊  - 廖妍榛
.index_dj {
    @include layout(1100px);
    display: flex;
    flex-flow: column wrap;
    margin-top: 5%;

    .index_dj_box {
        display: flex;
        justify-content: space-between;
        background-image: linear-gradient(#000, #333, #555, #444, #222, #000 95%);
        box-shadow: 5px 5px 10px #000;
        border-radius: 10px;
        padding: 0.5% 2.5%;
        border: 2px solid #000;

        .dj_left,
        .dj_right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 325px;

            .song_title {
                span {
                    color: $white;
                    font-weight: bold;
                    margin-left: 10px;
                }
            }

            .song_info {
                height: fit-content;
                display: flex;
                justify-content: space-between;
                color: #fff;
                padding: 10px;
                border: 2px solid $blue;
                border-radius: 20px;
                background: linear-gradient($dark, #000);
            }

            .timebox {
                .song_time {
                    margin-right: 5px;
                }
            }

            .plate {
                @include rect(195px);
                margin: 5% 0;
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
                border-radius: 200px;
                background: repeating-radial-gradient(circle,
                        #000000 0%,
                        #000000 1%,
                        $dark 2%);
                border: 2px solid $green;
                animation: run 2s linear infinite;
                animation-play-state: paused;
                box-shadow: 1px 1px $white;
                position: relative;

                span {
                    background-image: url("/public/image/index/index_dj_logo.png");
                    @include rect(140px);
                    background-size: contain;
                    position: absolute;
                    top: 13.5%;
                    left: 13.5%;
                }

                span.active {
                    animation: run 7s 0s linear infinite;
                }
            }
        }

        // 轉盤底下的按鈕們 - 廖妍榛
        .dj_buttons {
            button {
                align-self: center;
                color: $dark;
                background: linear-gradient($dark, $blue);
                padding: 10px 20px;
            }

            button:active {
                background: linear-gradient($blue, $dark);
                color: $dark;
            }
        }

        .special_buttons {
            button {
                align-self: center;
                @include rect(60px, 50px);
                margin: 0.5rem;
            }
        }

        .topbuttons {
            button {

                background: linear-gradient(rgb(241, 241, 142), rgb(210, 210, 41));
            }

            button:active {
                background: linear-gradient(rgb(210, 210, 41), rgb(247, 247, 192));
            }
        }

        .centerbuttons {
            button {

                background: linear-gradient(rgb(235, 140, 211), rgb(216, 49, 185));
            }

            button:active {
                background: linear-gradient(rgb(233, 61, 190), rgb(251, 227, 245));
            }
        }

        .bottombuttons {
            button {

                background: linear-gradient(rgb(150, 241, 142), rgb(74, 220, 72));
            }

            button:active {
                background: linear-gradient(rgb(74, 220, 72), rgb(197, 246, 196));
            }
        }

        //中間的音量拉條 - 廖妍榛
        .dj_center {
            display: flex;
            align-self: center;
            flex-direction: column;
            flex-grow: 1;

            .plates_vols {
                margin: 20px;
                flex-grow: 1;
                display: flex;
                justify-content: space-around;

                .vol_left {
                    align-self: flex-start;
                    margin-right: 5%;
                }

                .vol_right {
                    align-self: flex-end;
                }
            }

            .vol {
                width: 20%;
            }

            .vol_cd {
                display: flex;
                align-self: center;
                margin: 20px;
                height: 20%;
                width: 50%;

                input {
                    align-self: center;
                    transform: rotate(0deg);
                    margin: 0px;
                }
            }
        }
    }

    // 中間三根的拉條外觀  - 廖妍榛
    input {
        @include rect(195px, 80px);
        cursor: pointer;
        margin: 50px -80px;
        -webkit-appearance: none;
        appearance: none;
        box-sizing: border-box;
        // position: absolute;
        border: 2px solid #353535;
        padding: 0 1rem;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        background: linear-gradient(-90deg,
                #343535 1rem,
                rgba(68, 84, 99, 0) 1.5rem,
                rgba(40, 50, 59, 0) calc(100% - 1.5rem),
                #070707 calc(100% - 1rem)),
            linear-gradient(90deg, #595858 0.125rem, transparent 0.125rem) repeat-x 4px 25%,
            linear-gradient(90deg, #595858 0.125rem, transparent 0.125rem) repeat-x 4px 75%,
            linear-gradient(-90deg, #3a3b3b, #000000);
        background-size: 100% 100%, 0.625rem 23%, 0.625rem 23%, 100% 100%;
    }

    // 調整拉條軌道  - 廖妍榛
    input::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        appearance: none;
        height: 7.5px;
        box-shadow: inset 0 0 0 1px $dark;
        background: linear-gradient(-90deg, $dark, #111);
    }

    // 調整拉條按鈕  - 廖妍榛
    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -1.65625em;
        border: none;
        width: 2.5em;
        height: 3.75em;
        border-radius: 0.25em;
        box-shadow: inset 0 0 1px $white;
        background: radial-gradient(at 50% 0, $white, #0000 70%) no-repeat 50% 0,
            radial-gradient(at 50% 100%, $white, #0000 100%) no-repeat 50% 100%,
            linear-gradient(90deg,
                #d9d9d9,
                #878787 25%,
                #d9d9d9 25%,
                $white 47%,
                #d9d9d9 48%,
                $pink,
                #d9d9d9,
                $white 52%,
                $white 75%,
                #cbcbcb 75%,
                #d9d9d9);
        background-size: 100% 8px;
    }
}


// 播放音樂時的轉盤動畫  - 廖妍榛
@keyframes run {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

// 右半部按鈕效果
</style>
<script>
import { Howl, Howler } from 'howler';

export default {
    name: "IndexPlayer",
    data() {
        return {
            // 轉盤動畫
            isActive: false,
            // 播放鍵按鈕改變
            isPlaying: false,

            // 存放音樂
            cdSound: null,
            cdAudio: null,
            currentLeftAudio: null,
            currentRightAudio: null,

            // 拉條的預設input位置
            cdVolumeValue: 50,
            leftVolumeValue: 0,
            rightVolumeValue: 0,

            // 左右拉條的音樂
            leftSongURL: "//tw.yisell.com/2IxLwF/yisell/yays2020111852017888/sound/yisell_sound_2011033115173287398_88016.mp3",
            rightSongURL: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_200804081705251913_88011.mp3",
            // 目前音樂的資料存放
            currentSongName: "點擊播放一起聽 ^^",
            currentSongTime: "00:00:00",
            currentSongIndex: 0,
            songIndex: 0,

            //右邊一堆按鈕的陣列
            voiceList: [
                {
                    name: "muzA", //六弦琴
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_2008040913595742245_88011.mp3"
                },
                {
                    name: "muzB", //牛鈴
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_2008040914572333111_88011.mp3"
                },
                {
                    name: "muzC", //民族鼓
                    voice: "//tw.yisell.com/2IxLwF/yisell/ycys2020111852017888/sound/yisell_sound_2014081414195949420_66366.mp3"
                },
                {
                    name: "muzD", //鼓聲
                    voice: "//tw.yisell.com/2IxLwF/yisell/ycys2020111852017888/sound/yisell_sound_201408141431355112_66366.mp3"
                },
                {
                    name: "muzE", //掌聲
                    voice: "//tw.yisell.com/2IxLwF/yisell/ybys2020111852017888/sound/yisell_sound_2014031523453683073_88366.mp3"
                },
                {
                    name: "muzF", //吉他聲
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_2008040113564043882_88011.mp3"
                },
                {
                    name: "muzG", //小手鼓
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_2008041014263566386_88011.mp3"
                },
                {
                    name: "muzH", //模擬鋼琴聲
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_2008030614450613720_88011.mp3"
                },
                {
                    name: "muzI", //克林巴琴
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_200804081705251913_88011.mp3"
                },
                {
                    name: "muzJ", //Clock bells
                    voice: "https://assets.mixkit.co/active_storage/sfx/1069/1069-preview.mp3"
                },
                {
                    name: "muzK", //輕音樂
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_2007_11_9_1_37_274127.mp3"
                },
                {
                    name: "muzL", //123 go
                    voice: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_2008040817004736835_88011.mp3"
                },
            ],

            // 轉盤音樂的陣列
            songList: [
                {
                    name: "Good Night",
                    songURL: "https://cms-public-artifacts.artlist.io/content/music/aac/840070_839468_Yonatan_Riklis_-_Maple_Leaf_Rag_-_AO-001096-1_-_Master_-_90bpm_-_260323_-_BOV_-_ORG_-_2444.aac",
                    songTime: "01:30:20",
                },
                {
                    name: "Say GoodBye",
                    songURL: "//tw.yisell.com/2IxLwF/yisell/yays2020111852017888/sound/yisell_sound_2011071001335667082_88016.mp3",
                    songTime: "01:20:20",
                },
                {
                    name: "High High",
                    songURL: "https://assets.mixkit.co/active_storage/sfx/689/689-preview.mp3",
                    songTime: "01:00:05",
                }
            ],
        }
    },
    computed: {
        // 播放鍵icon
        playIcon() {
            return this.isPlaying ? ['fa', 'fa-pause'] : ['fa', 'fa-play']
        },
        // 轉盤動畫
        plateRun() {
            return this.isActive ? true : false
        },
        // 下方拉條
        volumeControl() {
            const leftVolume = this.globalVolume - this.globalVolume / 2;
            const rightVolume = this.globalVolume / 2;
            return {
                leftVolume,
                rightVolume,
            };
        },
    },
    methods: {
        // 停止播放全域音樂
        stopAllSong() {
            if (this.cdSound) {
                this.cdSound.stop();
            }
            if (this.currentLeftAudio) {
                this.currentLeftAudio.stop();
            }
            if (this.currentRightAudio) {
                this.currentRightAudio.stop();
            }
            if (this.sound) {
                this.sound.stop();
            }
        },
        // 右邊小按鈕們
        indexPlaySound(soundName) {
            const sound = new Howl({
                src: [this.getAudioSrc(soundName)],
                autoplay: true,
                volume: 0.5,
                onend: function () {
                    console.log('Done');
                },
            })
        },
        getAudioSrc(soundName) {
            const audio = this.voiceList.find((item) => item.name === soundName);
            return audio ? audio.voice : null;
        },

        // 左邊黑膠唱片
        playSong(songIndex) {
            if (this.cdSound) {

                if (this.cdSound.playing()) {
                    this.cdSound.pause();
                    this.isPlaying = false;
                    this.isActive = false;
                }
                else {
                    this.cdSound.play();
                    this.isPlaying = true;
                    this.isActive = true;
                }

            } else {
                this.leftPlaySong();
                this.rightPlaySong();
                const selectedSong = this.songList[songIndex];

                if (selectedSong) {
                    this.cdSound = new Howl({
                        src: [selectedSong.songURL],
                        autoplay: true,
                        volume: 1,
                        onend: () => {
                            console.log('Done');
                        }
                    });

                    this.isPlaying = true;
                    this.isActive = true;
                    this.currentSongIndex = songIndex;
                    this.currentSongName = selectedSong.name;
                    this.currentSongTime = selectedSong.songTime;
                } else {
                    console.error('No songs.');
                }
            }
        },

        // 重置音樂
        stopSong() {
            if (this.cdSound) {
                this.cdSound.stop();
                this.isPlaying = false;
                this.isActive = false;
            }
            console.log('stop');
        },
        // 上一首
        playPrevSong() {
            if (this.cdSound) {
                this.cdSound.stop();
                this.isPlaying = false;
                this.isActive = false;
            }

            // 如果沒歌了就return
            if (this.songList.length === 0) {
                return;
            }

            // 計算索引值, 上一首 -1
            this.currentSongIndex = (this.currentSongIndex - 1 + this.songList.length) % this.songList.length;

            // 換一首歌就要播一次拉條的音樂
            this.leftPlaySong();
            this.rightPlaySong();

            const selectedSong = this.songList[this.currentSongIndex];

            if (selectedSong) {
                this.cdSound = new Howl({
                    src: [selectedSong.songURL],
                    autoplay: true,
                    volume: 1,
                    onend: () => {
                        console.log('Done');
                    }
                });
                this.isPlaying = true;
                this.isActive = true;
                this.currentSongName = selectedSong.name;
                this.currentSongTime = selectedSong.songTime;
            } else {
                console.error('No songs.');
            }
        },

        // 下一首
        playNextSong() {
            if (this.cdSound) {
                this.cdSound.stop();
                this.isPlaying = false;
                this.isActive = false;
            }


            if (this.songList.length === 0) {
                return;
            }

            this.currentSongIndex = (this.currentSongIndex + 1) % this.songList.length;

            // 換一首歌就要播一次拉條的音樂
            this.leftPlaySong();
            this.rightPlaySong();

            const selectedSong = this.songList[this.currentSongIndex];

            if (selectedSong) {
                this.cdSound = new Howl({
                    src: [selectedSong.songURL],
                    autoplay: true,
                    volume: 1,
                    onend: () => {
                        console.log('Done');
                    }
                });

                this.isPlaying = true;
                this.isActive = true;
                this.currentSongName = selectedSong.name;
                this.currentSongTime = selectedSong.songTime;
            } else {
                console.error('No songs.');
            }
        },

        // 左邊input拉條
        leftPlaySong() {
            if (this.currentLeftAudio) {
                this.currentLeftAudio.stop();
            }
            this.currentLeftAudio = new Howl({
                src: [this.leftSongURL],
                autoplay: true,
                volume: this.leftVolumeValue / 100,
                onend: function () {
                    console.log('Left Done');
                }
            });
        },

        // 右邊input拉條
        rightPlaySong() {
            if (this.currentRightAudio) {
                this.currentRightAudio.stop();
            }

            this.currentRightAudio = new Howl({
                src: [this.rightSongURL],
                autoplay: true,
                volume: this.rightVolumeValue / 100,
                onend: function () {
                    console.log('Right Done');
                }
            });
        },

        // 調整音量
        cdSongVolume() {
            if (this.cdSound) {
                this.cdSound.volume(this.cdVolumeValue / 100);
            }
            console.log('CD Volume:', this.cdVolumeValue);
        },

        rightInputVolume() {
            if (this.currentRightAudio) {
                if (this.rightInputVolume === 0) {
                    this.currentRightAudio.stop();
                }
                else {
                    this.currentRightAudio.volume(this.rightVolumeValue / 100);

                }
            }
            console.log('Right Volume:', this.rightVolumeValue);
        },

        leftInputVolume() {
            if (this.currentLeftAudio) {
                if (this.leftInputVolume === 0) {
                    this.currentLeftAudio.stop();
                } else {
                    this.currentLeftAudio.volume(this.leftVolumeValue / 100);
                }
            }
            console.log('Left Volume:', this.leftVolumeValue);
        },

    },
}

</script>
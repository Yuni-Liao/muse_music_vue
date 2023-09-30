<template>
    <div class="index_dj">
        <div class="index_dj_box">
            <div class="dj_left">
                <div class="song_info">
                    <div class="song_title">
                        <fontAwesome :icon="['fa', 'music']" />
                        <span>第一首歌</span>
                    </div>
                    <div class="timebox">
                        <span class="song_time">03:30:02</span>
                        <fontAwesome :icon="['fa', 'fa-clock']" />
                    </div>
                </div>
                <div class="plate" id="plate_left">
                    <span></span>
                </div>
                <div class="dj_buttons">
                    <button class="button prev obj_Radius" id="indexPrevBtn" @click="playSong()">
                        <fontAwesome :icon="['fa', 'fa-backward-step']" />
                    </button>
                    <button class="button play obj_Radius" id="indexPlayBtn">
                        <fontAwesome :icon="['fa', 'fa-play']" />
                    </button>
                    <button class="button pause obj_Radius" id="indexPauseBtn">
                        <fontAwesome :icon="['fa', 'fa-pause']" />
                    </button>
                    <button class="button stop obj_Radius" id="indexStopBtn">
                        <fontAwesome :icon="['fa', 'fa-stop']" />
                    </button>
                    <button class="button next obj_Radius" id="indexNextBtn">
                        <fontAwesome :icon="['fa', 'fa-step-forward']" />
                    </button>
                </div>
            </div>
            <div class="dj_center">
                <div class="plates_vols">
                    <div class="vol vol_left" @click="leftInputSong(`leftSong`)">
                        <input class="left_vol obj_Radius" type="range" v-model="leftVolumeValue" name="vol_left"
                            id="volume_left" min="0" max="100" @input="leftAdjustVolume" />
                    </div>
                    <div class="vol vol_right" @click="rightInputSong(`rightSong`)">
                        <input class="right_vol obj_Radius" type="range" v-model="rightVolumeValue" name="volume_right"
                            id="volume_right" min="0" max="100" @input="rightAdjustVolume" />
                    </div>
                </div>
                <div class="vol vol_mix">
                    <input class="mix_vol obj_Radius" type="range" v-model="globalVolume" name="volume_mix" id="volume_mix"
                        min="0" max="100" />
                </div>
            </div>
            <div class="dj_right">
                <!-- <div class="song_info">
                    <div class="song_title">
                        <fontAwesome :icon="['fa', 'music']" />
                        <span>第二首歌</span>
                    </div>
                    <div class="timebox">
                        <span class="song_time">03:30:02</span>
                        <fontAwesome :icon="['fa', 'fa-clock']" />
                    </div>
                </div>
                <div class="plate" id="plate_right">
                    <span></span>
                </div> -->
                <div class="special_buttons">
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
                <div class="special_buttons">
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
                <div class="special_buttons">
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
                <!-- <div class="dj_buttons">
                    <button class="button prev obj_Radius">
                        <fontAwesome :icon="['fa', 'fa-backward-step']" />
                    </button>
                    <button class="button play obj_Radius">
                        <fontAwesome :icon="['fa', 'fa-play']" />
                    </button>
                    <button class="button pause obj_Radius">
                        <fontAwesome :icon="['fa', 'fa-pause']" />
                    </button>
                    <button class="button stop obj_Radius">
                        <fontAwesome :icon="['fa', 'fa-stop']" />
                    </button>
                    <button class="button next obj_Radius">
                        <fontAwesome :icon="['fa', 'fa-step-forward']" />
                    </button>
                </div> -->
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
                height: 50px;
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
                    animation: run 7s 0s linear infinite;
                    position: absolute;
                    top: 13.5%;
                    left: 13.5%;
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
                color: $dark;
                background: linear-gradient(lightpink, lightblue);
                padding: 10px 20px;
            }

            button:active {
                background: linear-gradient(lightblue, $purple);
                color: $dark;
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

            .vol_mix {
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
            currentLeftAudio: null,
            currentRightAudio: null,
            leftVolumeValue: 50,
            rightVolumeValue: 0,
            globalVolume: 50,
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
            songList: [
                {
                    name: "Good Night",
                    songURL: "//tw.yisell.com/2IxLwF/yisell/yays2020111852017888/sound/yisell_sound_2011071001335667082_88016.mp3"
                },
                {
                    name: "Say GoodBye",
                    songURL: "//tw.yisell.com/2IxLwF/yisell/yays2020111852017888/sound/yisell_sound_2011071001335667082_88016.mp3"
                },
                {
                    name: "High High",
                    songURL: "https://assets.mixkit.co/active_storage/sfx/689/689-preview.mp3"
                }
            ],
            inputSongList: [
                {
                    name: "leftSong",
                    songURL: "//tw.yisell.com/2IxLwF/yisell/yays2020111852017888/sound/yisell_sound_2011033115173287398_88016.mp3",
                },
                {
                    name: "rightSong",
                    songURL: "//tw.yisell.com/2IxLwF/yisell/pays2020111852017888/sound/yisell_sound_200804081705251913_88011.mp3",
                },
            ]
        }
    },
    computed: {
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
        // 右邊小按鈕們
        indexPlaySound(soundName) {
            const sound = new Howl({
                src: [this.getAudioSrc(soundName)],
                autoplay: true,
                volume: 0.5,
                onend: function () {
                    console.log('Done');
                }
            })
        },
        getAudioSrc(soundName) {
            const audio = this.voiceList.find((item) => item.name === soundName);
            return audio ? audio.voice : null;
        },
        // 左邊黑膠唱片
        playSong(songName) {
            const randomIndex = Math.floor(Math.random() * this.songList.length);
            const selectedSong = this.songList[randomIndex];

            if (selectedSong) {
                const cdSound = new Howl({
                    src: [selectedSong.songURL],
                    autoplay: true,
                    volume: 1,
                    onend: function () {
                        console.log('Done');
                    }
                });
            } else {
                console.error('No songs.');
            }
        },

        // 左邊input拉條
        leftInputSong(inputSongName) {
            if (this.currentLeftAudio) {
                this.currentLeftAudio.stop();
            }

            const inputSound = new Howl({
                src: [this.getInputSrc(inputSongName)],
                autoplay: true,
                onend: function () {
                    console.log('Done');
                }
            });
            inputSound.volume(this.leftVolumeValue / 100);
            this.currentLeftAudio = inputSound;
            this.updateGlobalVolume(); //更新全局音量
            console.log('Left Volume:', this.leftVolumeValue);
        },

        // 右邊input拉條
        rightInputSong(inputSongName) {
            if (this.currentRightAudio) {
                this.currentRightAudio.stop();
            }

            const inputSound = new Howl({
                src: [this.getInputSrc(inputSongName)],
                autoplay: true,
                onend: function () {
                    console.log('Done');
                }
            });
            inputSound.volume(this.rightVolumeValue / 100);
            this.currentRightAudio = inputSound;
            this.updateGlobalVolume(); //更新全局音量
            console.log('Right Volume:', this.rightVolumeValue);
        },
        getInputSrc(inputSongName) {
            const inputAudio = this.inputSongList.find(item => item.name === inputSongName);
            return inputAudio ? inputAudio.songURL : null;
        },

        // //下方拉條更新音量 ---- 還沒寫完
        updateGlobalVolume() {
            const newLeftVolume = this.leftVolumeValue;
            const newRightVolume = this.rightVolumeValue;
            this.globalVolume = (newLeftVolume + newRightVolume) / 2;
            if (this.currentLeftAudio) {
                this.currentLeftAudio.volume(this.leftVolumeValue / 100);
            }
            if (this.currentRightAudio) {
                this.currentRightAudio.volume(this.rightVolumeValue / 100);
            }
        }
    }
}
</script>
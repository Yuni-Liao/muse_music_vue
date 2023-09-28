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
                    <button class="button prev obj_Radius" id="indexPrevBtn">
                        <fontAwesome :icon="['fa', 'fa-backward-step']" />
                    </button>
                    <button class="button play obj_Radius" id="indexPlayBtn" @click="indexPlay">
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
                    <div class="vol vol_left">
                        <input class="left_vol obj_Radius" type="range" name="vol_left" id="volume_left" min="0"
                            max="100" />
                    </div>
                    <div class="vol vol_right">
                        <input class="right_vol obj_Radius" type="range" name="volume_right" id="volume_right" min="0"
                            max="100" />
                    </div>
                </div>
                <div class="vol vol_mix">
                    <input class="mix_vol obj_Radius" type="range" name="volume_mix" id="volume_mix" min="0" max="100" />
                </div>
            </div>
            <div class="dj_right">
                <div class="song_info">
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
                </div>
                <!-- <div class="special_buttons">
                    <button class="button prev obj_Radius" id="oneBtn" @click="indexPlaySound(`cat_a`)">
                        😄
                    </button>
                    <button class="button play obj_Radius" id="twoBtn" @click="indexPlaySound(`cat_b`)">
                        😛
                    </button>
                    <button class="button pause obj_Radius" id="threeBtn" @click="indexPlaySound(`cat_c`)">
                        😍
                    </button>
                    <button class="button stop obj_Radius" id="fourBtn" @click="indexPlaySound(`cat_d`)">
                        🤑
                    </button>
                </div> -->
                <div class="dj_buttons">
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


export default {
    name: "IndexPlayer",
    data() {
        return {
            voiceList: [
                {
                    name: "cat_a",
                    voive: "audio/indexPlayer/cat_a.mp3"
                },
                {
                    name: "cat_b",
                    voive: "audio/indexPlayer/cat_b.mp3"
                },
                {
                    name: "cat_c",
                    voive: "audio/indexPlayer/cat_c.mp3"
                },
                {
                    name: "cat_d",
                    voive: "audio/indexPlayer/cat_d.mp3"
                },
            ],
        }
    },
    methods: {
        test() {
            alert('hi')
        },
        indexPlaySound(soundName) {
            const sound = new Howl({
                src: [this.getAudioSrc(soundName)],
                autoplay: true,
                volume: 0.5,
                onend: function () {
                    console.log('Finished!');
                }
            })
        },
        getAudioSrc(soundName) {
            const audio = this.voiceList.find((item) => item.name === soundName);
            return audio ? audio.voive : null;
        },
    }
}
</script>
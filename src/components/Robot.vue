<template>
    <div class="pageTop_robot">
        <img id="pageTop" alt="pagetop_icon" :src="`${publicPath}image/icon/pageTop.svg`" href="#top"
            @click="scrollToTop" />
        <img alt="robot_icon" :src="`${publicPath}image/icon/robot.svg`" @click="openRobot" />
    </div>

    <div class="robot" v-show="isOpen">
        <div class="container">
            <div class="main">
                <div class="box">
                    <div class="title">
                        <img :src="`${publicPath}image/icon/robot_in.svg`" alt="logo" class="logo" /> <!-- logo -->
                        <span class="title-hn">MUSE 智慧客服</span>
                        <div class="closebtn" @click="openRobot">
                            <div class="close"></div>
                            <div class="close"></div>
                        </div>
                    </div>
                    <div id="content" class="content"> <!-- 對話介面 -->
                        <div v-for="(item, index) in info" :key="index"> <!-- 所有對話框 -->
                            <div class="info_r info_default" v-if="item.type === 'leftinfo'"> <!-- 客服對話框 -->
                                <div class="con_r con_text"> <!-- 客服對話框文字框 -->
                                    <div>{{ item.content }}</div> <!-- 客服對話框文字 -->
                                    <div v-for="(item2, index) in item.question" :key="index" div class="con_que"
                                        @click="() => clickRobot(item2.content, item2.id)">
                                        <!-- 輸入後可能想問robotQuestion -->
                                        <div class="czkj-question-msg">
                                            {{ item2.id }}
                                            {{ item2.content }}
                                        </div>
                                    </div>
                                </div>
                                <div class="time_r">{{ item.time }}</div> <!-- 客服目前時間 -->
                            </div>

                            <div class="info_l" v-if="item.type === 'rightinfo'"> <!-- 提問對話框 -->
                                <div class="con_r con_text con_i">
                                    <span class="con_l">{{ item.content }}</span> <!-- 提問對話框文字框 -->
                                </div>
                                <div class="time_l">{{ item.time }}</div> <!-- 提問目前時間 -->
                            </div>
                        </div>
                    </div>

                    <div class="question_wrap">您可能會感興趣的問題：</div>
                    <div class="question-container"><!-- 問題小框 -->
                        <div v-for="(faq, index) in robotfaq" :key="index" class="question"
                            @click="sentMsgById(faq.question, faq.id)">
                            {{ faq.question }}
                        </div>
                    </div>

                    <div class="setproblem"> <!-- 輸入框 -->
                        <textarea placeholder="Type a message... " id="text" v-model="customerText"
                            @keyup.enter="sentMsg()"></textarea>
                        <img :src="`${publicPath}image/icon/send.svg`" @click="sentMsg()" class="setproblems" alt="enter">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // name: "onlineCustomer",
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            customerText: "",
            info: [
                {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    name: "robot",
                    content:
                        "逼逼！您需要什麼幫助？",
                    question: [],
                },
            ],
            timer: null,
            robotfaq: [
                {
                    id: 1,
                    question: "上傳音樂要付錢嗎？",
                    answer: `上傳音樂作品到MUSE平台讓樂迷聆聽是完全免費的！
                    只要點擊導覽列小頭像，登入或註冊成為會員，即可免費上傳作品。`,
                    short: "只要擁有會員，即可免費上傳作品到MUSE平台！",
                    keywords: "上傳付錢收費"
                },
                {
                    id: 2,
                    question: "要怎麼上傳音樂？",
                    answer: `音樂上傳的頁面在「會員專區」裡的「個人頁面管理」，進到頁面後點選「歌曲上傳」即可進行上傳！
                    音樂上傳後需要待管理員審核(1~3天)，經審核後作品就會在平台上線，供樂迷聆聽。`,
                    short: "「會員專區」裡的「個人頁面管理」，進到頁面後點選「歌曲上傳」即可進行上傳！",
                    keywords: "上傳"
                },
                {
                    id: 3,
                    question: "上傳的音樂檔案有規定的格式嗎？",
                    answer: `上傳的檔案須為 MP3 (MPEG-1 Audio Layer-3) 編碼格式，且位元率至少需為 192 kbit/s；
                    如作品為 WAV / WMA / MP4 等其他編碼格式，需先自行使用轉檔軟體進行轉檔。`,
                    short: "上傳的檔案須為 MP3格式，如作品為其他編碼格式，需自行進行轉檔！",
                    keywords: "上傳格式"
                },
                {
                    id: 4,
                    question: "可以上傳翻唱的作品嗎？",
                    answer: `上傳的作品必須是您或您所屬團體的原創性作品。
                    音樂作品中若包含他人的著作則需取得合法授權，亦須遵守MUSE之使用條款。`,
                    short: "上傳的作品必須是您或您所屬團體的原創性作品！",
                    keywords: "上傳翻唱原創"
                },
                {
                    id: 5,
                    question: "為什麼無法上傳音樂？",
                    answer: `1.您的網頁瀏覽器可能需要更新，請確認瀏覽器為最新版本。
                    2.嘗試在隱私 / 無痕模式視窗中操作，排除瀏覽器外掛 / 擴充功能的干擾。
                    3.如若仍無法解決問題，可填寫表單獲得協助。`,
                    short: "請確認瀏覽器為最新版本，或嘗試在隱私 / 無痕模式視窗中操作。也可填寫表單獲得協助！",
                    keywords: "上傳無法錯誤"
                },
                {
                    id: 6,
                    question: "音樂上傳後會不會被拿去賣錢？",
                    answer: `MUSE平台為音樂人社群平台，作品僅會使用於推廣使用，不會把創作者的作品賣掉喔！`,
                    short: "作品僅只用於推廣，不會進行販售！",
                    keywords: "賣錢販售推廣"
                },
                {
                    id: 7,
                    question: "所有人都可以收聽我的作品嗎？",
                    answer: `只要是經過管理員審核的作品，就會公開在MUSE平台上，所有聽眾都可以輕鬆收聽！`,
                    short: "經過管理員審核後，即公開於平台上供免費聆聽！",
                    keywords: "收聽資格"
                },
                {
                    id: 8,
                    question: "我的最愛跟建立歌單有什麼差別？",
                    answer: `我的最愛屬於預設歌單，只要樂迷按「愛心」該首音樂就會加入我的最愛。
                    建立歌單則是樂迷可以依照喜好創建個人歌單，只要樂迷按「+」建立歌單並加入歌曲，即可將喜歡的歌曲們加入到該歌單中。
                    在「會員專區」裡的「我的最愛歌曲」及「我的歌單」可詳閱清單和內容歌曲。`,
                    short: "我的最愛屬於預設歌單，建立歌單則是樂迷可以依照喜好創建個人歌單。皆可在會員專區中查看！",
                    keywords: "我的最愛建立歌單"
                },
                {
                    id: 9,
                    question: "所有人都可以上傳音樂嗎？",
                    answer: `作品只要是您或您所屬團體的原創性作品，每一位使用者皆可以到「會員專區」裡的「個人頁面管理」上傳音樂！
                    音樂上傳後需要待管理員審核(1~3天)，經審核後作品就會在平台上線，供樂迷聆聽。`,
                    short: "只要擁有會員，即可免費上傳作品到MUSE平台！",
                    keywords: "上傳資格"
                },
                {
                    id: 10,
                    question: "如果有人在我的音樂底下留不當言論可以怎麼處理？",
                    answer: `可以點選該則留言後方的「…」，再點擊檢舉按鈕，並輸入相關內容送出，
                    管理員會再審核該則留言是否不當，經確認屬實會移除該則留言。`,
                    short: "可以點選該則留言後方的「…」，再點選檢舉按鈕，即可輸入相關內容進行檢舉！",
                    keywords: "不當言論留言檢舉"
                }
            ],
            // robotfaq: [],
            isOpen: false,
        };
    },
    created() {
        this.showTimer();
    },

    methods: {

        scrollToTop() {
            const scrollToTop = () => {
                const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentPosition > 0) {
                    const newPosition = currentPosition - 30;
                    window.scrollTo(0, newPosition);
                    requestAnimationFrame(scrollToTop);
                }
            };
            scrollToTop();
        },

        //開關robot
        openRobot() {
            this.isOpen = !this.isOpen;
        },

        // 發送使用者的訊息並將其附加到聊天歷史記錄中
        sentMsg() {
            clearTimeout(this.timer);
            this.showTimer();
            let text = this.customerText.trim();
            if (text !== "") {
                var obj = {
                    type: "rightinfo",
                    time: this.getTodayTime(),
                    content: text,
                };
                this.info.push(obj);
                this.appendRobotMsg(text);
                this.customerText = "";
                this.$nextTick(() => {
                    var contentHeight = document.getElementById("content");
                    contentHeight.scrollTop = contentHeight.scrollHeight;
                });
            }
        },

        // 基於使用者輸入生成機器人回覆，並將其附加到聊天中
        appendRobotMsg(text) {
            clearTimeout(this.timer);
            this.showTimer();
            text = text.trim();
            let answerText = "";
            let flag = false;

            for (let i = 0; i < this.robotfaq.length; i++) {
                if (this.robotfaq[i].keywords && text.indexOf(this.robotfaq[i].keywords) !== -1) {
                    // 发送问题是否与keywords相符
                    if (text === this.robotfaq[i].keywords) {
                        flag = false; // 完全相符时走您想要问的是
                    } else {
                        flag = true;
                        answerText = this.robotfaq[i].short;
                    }
                    break;
                }
            }
            if (flag) {
                let obj = {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    name: "robot",
                    content: answerText + "<br/><a href='" + this.moreInfoLink + "?pageId=" + this.moreInfoPageId + "'>前往更詳細的回覆</a>",
                    question: [],
                };
                this.info.push(obj);
            } else {
                answerText = "逼！您想要問的是？";
                let matchingQuestions = this.getMatchingQuestions(text);
                if (matchingQuestions.length > 0) {
                    let obj = {
                        type: "leftinfo",
                        time: this.getTodayTime(),
                        name: "robot",
                        content: answerText,
                        question: matchingQuestions,
                    };
                    this.info.push(obj);
                } else {
                    // 如果發送問題沒有與keyword相符字元，顯示id1-5筆問題
                    let defaultQuestions = [];
                    for (let i = 1; i <= 5; i++) {
                        let defaultQuestion = this.robotfaq.find(item => item.id === i);
                        if (defaultQuestion) {
                            defaultQuestions.push({
                                content: defaultQuestion.question,
                                id: defaultQuestion.id,
                            });
                        }
                    }
                    let obj = {
                        type: "leftinfo",
                        time: this.getTodayTime(),
                        name: "robot",
                        content: answerText,
                        question: defaultQuestions,
                    };
                    this.info.push(obj);
                }
            }
            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            });
        },

        // 查找與使用者輸入匹配的預定義問題
        getMatchingQuestions(text) {
            let matchingQuestions = [];
            for (let i = 0; i < this.robotfaq.length; i++) {
                if (this.robotfaq[i].keywords & text.indexOf(this.robotfaq[i].keywords) !== -1) {
                    matchingQuestions.push({
                        content: this.robotfaq[i].question,
                        id: this.robotfaq[i].id,
                    });
                }
            }

            if (matchingQuestions.length === 0) {
                // 如果發送問題沒有與keyword相符字元，顯示id1-5筆問題
                for (let i = 1; i <= 5; i++) {
                    let defaultQuestion = this.robotfaq.find(item => item.id === i);
                    if (defaultQuestion) {
                        matchingQuestions.push({
                            content: defaultQuestion.question,
                            id: defaultQuestion.id,
                        });
                    }
                }
            }
            return matchingQuestions;
        },

        // 處理使用者點擊預定義問題，並發送使用者的問題和機器人的回覆
        sentMsgById(val, id) {
            clearTimeout(this.timer);
            this.showTimer();

            // 查找相符問題
            const robotAnswer = this.robotfaq.find(item => item.id === id);

            // 創建提問
            const userQuestion = {
                type: "rightinfo",
                time: this.getTodayTime(),
                name: "user",
                content: val,
                question: [],
            };

            // 創建回答
            const robotReply = {
                type: "leftinfo",
                time: this.getTodayTime(),
                name: "robot",
                content: robotAnswer.short,
                question: [],
            };

            // 添加對話至列表
            this.info.push(userQuestion);
            this.info.push(robotReply);

            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            });
        },

        // 當使用者點擊預定義問題時觸發
        clickRobot(val, id) {
            this.sentMsgById(val, id);
        },

        // 處理使用者閒置的計時器，以及觸發機器人的初始訊息
        showTimer() {
            this.timer = setTimeout(this.endMsg, 1000 * 60);
        },

        // 獲取當前時間
        getTodayTime() {
            var day = new Date();
            let seconds = day.getSeconds();
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            let minutes = day.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            let time =
                day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate() + " " + day.getHours() + ":" + minutes + ":" + seconds;
            return time;
        },
    },

    // mounted() {
    //     fetch('robotfaq.json')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(json => {
    //             this.robotfaq = json
    //         })
    // },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/component/muse_robot.scss";
</style>

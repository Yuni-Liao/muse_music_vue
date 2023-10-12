<template>
    <div class="pageTop_robot">
        <img id="pageTop" alt="pagetop_icon" :src="`${publicPath}image/icon/pageTop.svg`" href="#top"
            @click="scrollToTop" />
        <img alt="robot_icon" :src="`${publicPath}image/icon/robot.svg`" @click="openRobot" />
    </div>

    <div class="robot_warp" v-show="isOpen" @click="closeRobot" ref="robotWarp">
        <div class="robot">
            <div class="container">
                <div class="main">
                    <div class="box">
                        <div class="title">
                            <img :src="`${publicPath}image/icon/robot_in.svg`" alt="logo" class="logo" /> <!-- logo -->
                            <span class="title-hn">MUSE 智慧客服</span>
                            <div class="closebtn" @click="openRobot"> <!-- x -->
                                <div class="close"></div>
                                <div class="close"></div>
                            </div>
                        </div>
                        <div id="content" class="content"> <!-- 對話介面 -->
                            <div v-for="(item, index) in info" :key="index"> <!-- 所有對話框 -->
                                <div class="info_r info_default" v-if="item.type === 'leftinfo'"> <!-- 客服對話框 -->
                                    <div class="con_r con_text"> <!-- 客服對話框文字框 -->
                                        <div v-html="item.content"></div>
                                        <!-- 客服對話框文字 -->
                                        <div v-for="(item2, index) in item.question" :key="index" class="con_que"
                                            @click="() => clickRobot(item2.content, item2.id)">
                                            <!-- 輸入後可能想問robotQuestion -->
                                            <div class="czkj-question-msg" v-html="item2.content">
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
                        <div class="question-container" ref="questionContainer" @wheel="handleScroll"><!-- 問題小框 -->
                            <div v-for="(faq, index) in faqArray" :key="index" class="question"
                                @click="sentMsgById(faq.que, faq.faq_id)">
                                {{ faq.que }}
                            </div>
                        </div>

                        <div class="setproblem"> <!-- 輸入框 -->
                            <textarea placeholder="Type a message... " id="text" v-model="customerText"
                                @keyup.enter="sentMsg()"></textarea>
                            <img :src="`${publicPath}image/icon/send.svg`" @click="sentMsg()" class="setproblems"
                                alt="enter">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            // faq資料
            faqArray: [],

            // 輸入框
            customerText: "",

            info: [
                {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    content: "逼逼！您需要什麼幫助？",
                },
            ],

            // 時間
            timer: null,

            //開關robot預設
            isOpen: false,
        };
    },
    created() {
        this.showTimer();
    },

    methods: {
        // 導入faq資料庫資訊
        fetchFaqArray() {
            const apiURL = new URL(`${this.$store.state.phpPublicPath}getFaqs.php?`);
            fetch(apiURL).then(async (response) => {
                this.faqArray = await response.json();
            });
        },

        //top
        scrollToTop() {
            const scrollToTop = () => {
                const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentPosition > 0) {
                    const newPosition = currentPosition - 200;
                    window.scrollTo(0, newPosition);
                    requestAnimationFrame(scrollToTop);
                }
            };
            scrollToTop();
        },

        //開關robot
        openRobot() {
            this.isOpen = !this.isOpen;
            if (!this.isOpen) {
                // 如果robot被收起，清空id:content，只留初始的info
                this.info = [
                    {
                        type: "leftinfo",
                        time: this.getTodayTime(),
                        content: "逼逼！您需要什麼幫助？",
                    },
                ];
            }
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
                this.customerText = ""; //清空輸入框
            }
        },

        // 基於使用者輸入生成機器人回覆，並將其附加到聊天中
        appendRobotMsg(text) {
            clearTimeout(this.timer);
            this.showTimer();
            text = text.trim();
            let answerText = "";

            answerText = "逼！您想要問的是？";
            let matchingQuestions = this.getMatchingQuestions(text);
            if (matchingQuestions.length > 0) {
                let obj = {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    content: answerText,
                    question: matchingQuestions,
                };
                this.info.push(obj);
            } else {
                // 如果無匹配問題，顯示1-5的問題
                let defaultQuestions = [];
                for (let i = 1; i <= 5; i++) {
                    let defaultQuestion = this.faqArray.find(item => Number(item.faq_id) === i);
                    if (defaultQuestion) {
                        defaultQuestions.push({
                            content: defaultQuestion.que,
                            id: defaultQuestion.faq_id,
                        });
                    }
                }
                let obj = {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    content: answerText,
                    question: defaultQuestions,
                };
                this.info.push(obj);
            }
            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            }); //對話框畫面定位下方
        },

        // 查找與使用者輸入匹配的預定義問題
        getMatchingQuestions(text) {
            let matchingQuestions = [];
            text = text.trim(); // 去除空格

            for (let i = 0; i < this.faqArray.length; i++) {
                const keywords = this.faqArray[i].keyword;
                for (let j = 0; j < keywords.length; j++) {
                    if (text.includes(keywords[j])) {
                        matchingQuestions.push({
                            content: this.faqArray[i].que,
                            id: this.faqArray[i].faq_id,
                        });
                        break;
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
            const robotAnswer = this.faqArray.find(item => item.faq_id === id);

            // 創建提問
            const userQuestion = {
                type: "rightinfo",
                time: this.getTodayTime(),
                name: "user",
                content: val,
            };

            // 創建回答
            const robotReply = {
                type: "leftinfo",
                time: this.getTodayTime(),
                name: "robot",
                content: robotAnswer.short_ans +
                    // `<br><a href='/home/about#faq${id}'>逼！點這看更多答案</a>`
                    `<br><a href='/chd103/g2/home/about#faq${id}'>逼！點這看更多答案</a>`,
            };

            // 添加對話至列表
            this.info.push(userQuestion);
            this.info.push(robotReply);

            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            }); //對話框畫面定位下方
        },

        // 當使用者點擊預定義問題時觸發
        clickRobot(val, id) {
            this.sentMsgById(val, id);
        },

        // 觸發機器人的初始訊息
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

        //問題小框水平滾軸滑鼠滾輪感應
        handleScroll(event) {
            // 阻止滾輪事件繼續傳播，以防止外部滾動
            event.preventDefault();
            // 獲取滾動容器的引用
            const container = this.$refs.questionContainer;
            // 計算滾動距離，根據滑鼠滾輪事件的deltaX屬性
            const delta = event.deltaX || event.deltaY;
            // 調整滾動容器的滾動位置
            container.scrollLeft += delta;
        },
    },
    mounted() {
        // 獲取faq資料庫資訊
        this.fetchFaqArray();
    },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/component/muse_robot.scss";
</style>

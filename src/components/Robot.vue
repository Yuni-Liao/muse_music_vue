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
                                    <div>{{ item.content }}</div>
                                    <!-- 客服對話框文字 -->
                                    <div v-for="(item2, index) in item.question" :key="index" div class="con_que"
                                        @click="() => clickRobot(item2.content, item2.id)">
                                        <!-- 輸入後可能想問robotQuestion -->
                                        <div class="czkj-question-msg">
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
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            robotfaq: [],
            customerText: "",
            info: [
                {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    content:
                        "逼逼！您需要什麼幫助？",
                },
            ],
            timer: null,
            isOpen: false,
        };
    },
    created() {
        this.showTimer();
    },

    methods: {
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
                    content: answerText,
                    question: defaultQuestions,
                };
                this.info.push(obj);
            }
            // }
            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            }); //對話框畫面定位下方
        },

        // 查找與使用者輸入匹配的預定義問題
        getMatchingQuestions(text) {
            let matchingQuestions = [];
            text = text.trim(); // 將輸入轉換去除空格
            for (let i = 0; i < this.robotfaq.length; i++) {
                const keywords = this.robotfaq[i].keywords;
                if (keywords.includes(text)) { // 使用關鍵字包含判斷部分匹配
                    matchingQuestions.push({
                        content: this.robotfaq[i].question,
                        id: this.robotfaq[i].id,
                    });
                }
            }
            return matchingQuestions;
        },


        // getMatchingQuestions(text) {
        //     let matchingQuestions = [];
        //     text = text.trim(); // 將輸入轉換去除空格
        //     for (let i = 0; i < this.robotfaq.length; i++) {
        //         const keywords = this.robotfaq[i].keywords.split(' '); // 將關鍵字拆分成陣列
        //         for (let j = 0; j < keywords.length; j++) {
        //             if (text.includes(keywords[j])) { // 如果輸入文字包含關鍵字的一部分
        //                 matchingQuestions.push({
        //                     content: this.robotfaq[i].question,
        //                     id: this.robotfaq[i].id,
        //                 });
        //             }
        //         }
        //     }
        //     return matchingQuestions;
        // },


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
            };

            // 創建回答
            const robotReply = {
                type: "leftinfo",
                time: this.getTodayTime(),
                name: "robot",
                content: robotAnswer.short,
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

    mounted() {
        fetch('/data/robotfaq.json')
            .then(res => {
                return res.json()
            })
            .then(json => {
                this.robotfaq = json
            })
    },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/component/muse_robot.scss";
</style>

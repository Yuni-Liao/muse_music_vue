<template>
    <button id="ReportBtn" @click="toggleReportWindow">
        <fontAwesome :icon="['fa', 'circle-exclamation']" style="color:#252525;" />
    </button>

    <!-- 跳窗頁面 -->
    <div class="report" v-show="showReportWindow">
        <p class="title">檢舉留言</p>
        <div class="repInf">
            <label for="rep_rsn" class="label">檢舉原因:</label>
            <input type="text" v-model="rep_rsn" placeholder="  我想檢舉...">
        </div>
        <div class="btngroup">
            <button class="closeBtn default_Btn obj_Radius" @click="closeReportWindow">取消</button>
            <button class="saveBtn default_Btn obj_Radius" @click="submitReport">送出</button>

        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    msg_id: Number
})
const emits = defineEmits(['closeReportBtn']);
const store = useStore();
//console.log(props.msg_id);
const showReportWindow = ref(false);
const login_mem_id = localStorage.getItem('mem_id');
const rep_rsn = ref('');

function toggleReportWindow() {
    showReportWindow.value = !showReportWindow.value;
}

function closeReportWindow() {
    emits('closeReportBtn');
    showReportWindow.value = false;
}

function submitReport() {
    if (rep_rsn.value !== '') {
        const url = `${store.state.phpPublicPath}postReportMsg.php`;
        const headers = {
            Accept: 'application/json',
        };

        const formData = new FormData();
        formData.append('mem_id', login_mem_id);
        formData.append('msg_id', props.msg_id);
        formData.append('rep_rsn', rep_rsn.value);

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    console.log('完成！');
                    window.location.reload();
                } else {
                    throw new Error('檢舉失敗');
                }
            })
            .catch((error) => {
                console.error('發生錯誤:', error);
            });
    }
}
</script>

<!-- <script>
export default {
    emits: ['closeReportBtn'], // 声明可以触发的自定义事件
    props: {
        msg_id: Number,
    },
    data() {
        return {
            showReportWindow: false,
            login_mem_id: "",
            rep_rsn: '',
        };
    },
    methods: {
        toggleReportWindow() {
            this.showReportWindow = !this.showReportWindow;
        },
        closeReportWindow() {
            this.$emit('close-report-btn');
            this.showReportWindow = false;
        },
        //送出檢舉訊息
        submitReport() {
            // this.$emit('report-submitted');
            // this.$emit('close-report-btn'); 
            // this.showReportWindow = false;

            if (this.rep_rsn !== "") {
                const url = `${this.$store.state.phpPublicPath}postReportMsg.php`;
                let headers = {
                    Accept: "application/json",
                };

                // 創建新留言對象
                const formData = new FormData();
                formData.append("mem_id", this.login_mem_id);
                formData.append("msg_id", this.msg_id);
                formData.append("rep_rsn", this.rep_rsn);

                // 發送新留言到後端
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log('完成！');
                        } else {
                            throw new Error("檢舉失敗");
                        }
                    })
                    .then(() => {
                        //window.location.reload();
                    })
                    .catch((error) => {
                        console.error("發生錯誤:", error);
                    });
            }
        }
    },
    mounted() {
        this.login_mem_id = localStorage.getItem('mem_id');
    }
};
</script> -->

<style scoped lang="scss">
#ReportBtn {
    @include music_btn_circle(25px);
}

//這邊是檢舉彈窗
.report {
    width: 300px;
    height: auto;
    border: $green 3px solid;
    background-color: #2b2b2bf6;
    box-shadow: 0px 0px 50px #00000030;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 400;

    .title {
        font-size: 28px;
        color: $white;
        display: flex;
        justify-content: center;
        padding: 20px 0 0;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
    }

    .repInf {
        display: flex;
        flex-direction: column;
        padding: 10px;

        label {
            color: $white;
            display: flex;
            margin: 10px 0;
            padding: 0 10px;
        }

        // textarea {
        //     height: 80px;
        // }
    }

    .btngroup {
        .closeBtn {
            @include rect(100px, auto);
            margin: auto;
            font-size: 14px;
            line-height: 1.5;
            border: 0px;
            margin: 10px 20px 20px 0;
            @include btnColor($white, false);
        }

        .saveBtn {
            @include rect(100px, auto);
            @include btnColor($green, false);
            font-size: 14px;
            line-height: 1.5;

        }
    }
}
</style>
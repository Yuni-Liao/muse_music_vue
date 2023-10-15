<template>
    <button id="ReportBtn" @click="toggleReportWindow">
        <fontAwesome :icon="['fa', 'circle-exclamation']" style="color:#252525;" />
    </button>

    <!-- 跳窗頁面 -->
    <div class="report" v-show="showReportWindow">
        <p class="title">檢舉留言</p>
        <div class="repInf">
            <label for="rep_rsn" class="label">檢舉原因:</label>
            <!-- <input type="text" v-model="rep_rsn" placeholder="  我想檢舉..."> -->
            <input type="text" v-model="rep_rsn" placeholder="  檢舉內容需超過3個字">

        </div>
        <div class="btngroup">
            <button class="closeBtn default_Btn obj_Radius" @click="closeReportWindow">取消</button>
            <button class="saveBtn default_Btn obj_Radius" @click="submitReport" :disabled="rep_rsn.length < 3">送出</button>

        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const props = defineProps({
    msg_id: Number
})
const emits = defineEmits(['closeReportBtn']);
const store = useStore();
const showReportWindow = ref(false);
const login_mem_id = localStorage.getItem('mem_id');
const rep_rsn = ref('');

// function toggleReportWindow() {
//     showReportWindow.value = !showReportWindow.value;
// }

function toggleReportWindow() {
    const router = useRouter();
    if (login_mem_id === null) {
        // 限制登入才可使用檢舉功能
        alert("使用會員功能，請先進行登入");
        window.location.reload();
    } else {
        showReportWindow.value = !showReportWindow.value;
    }
}

function closeReportWindow() {
    emits('closeReportBtn');
    showReportWindow.value = false;
}

function submitReport() {
    if (rep_rsn.value.length > 3) {
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
    } else {
        //只有等於3才出現跳窗???
        alert('內文需要超過三個字');
        window.location.reload();
    }
}
</script>

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
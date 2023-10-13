<template>
    <button id="ReportBtn" @click="toggleReportWindow">
        <fontAwesome :icon="['fa', 'circle-exclamation']" style="color:#252525;" />
    </button>

    <!-- 跳窗頁面 -->
    <div class="report" v-show="showReportWindow">
        <p class="title">檢舉留言</p>
        <div class="repInf">
            <label for="rep_rsn" class="label">檢舉原因:</label>
            <textarea type="textarea"></textarea>
        </div>
        <div class="btngroup">
            <button class="closeBtn default_Btn obj_Radius" @click="closeReportWindow">取消</button>
            <button class="saveBtn default_Btn obj_Radius" @click="submitReport">送出</button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showReportWindow: false
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
        submitReport() {
            this.$emit('report-submitted');
            this.$emit('close-report-btn'); 
            this.showReportWindow = false;
        }
    }
};
</script>

<style scoped lang="scss">
#ReportBtn {
    @include music_btn_circle(25px);
}

//這邊是檢舉彈窗
.report {
    width: 300px;
    height: 300px;
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

        textarea {
            height: 80px;
        }
    }

    .btngroup {
        .closeBtn {
            @include rect(100px, auto);
            margin: auto;
            font-size: 14px;
            line-height: 1.5;
            border: 0px;
            margin: 10px 20px 0 0;
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
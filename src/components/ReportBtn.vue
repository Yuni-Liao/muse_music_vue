<template>
    <button id="ReportBtn" @click="ReportBtn()">
        <fontAwesome :icon="['fa', 'circle-exclamation']" style="color:#252525;" />
    </button>
</template>
<script>
export default {
    name: "ReportBtn",
    methods: {
        ReportBtn() {
            // 此處撰寫功能code，測試用內容可清除
            alert("檢舉留言");
        },
    },
};
</script>

<style scoped lang="scss">
#ReportBtn {
    @include music_btn_circle(25px);
}
</style>
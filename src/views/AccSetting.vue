<template>
    <main class="acc_setting">
        <div class="acc_sidebar">
            <ul class="obj_Radius">
                <li>編輯個人檔案</li>
                <li>帳號資訊</li>
                <li>帳號安全驗證</li>
                <li>更改密碼</li>
            </ul>
        </div>
        <div class="acc_editprofile obj_Radius">
            <h1>編輯個人檔案</h1>
            <div class="acc_box">
                <div class="acc_name acc_item">
                    <p>使用者名稱</p>
                    <input class="name_box obj_Radius" type="text">
                </div>
                <div class="acc_mail acc_item">
                    <p>E-mail</p>
                    <input class="mail_box obj_Radius" type="mail">
                </div>
                <div class="acc_birthday acc_item">
                    <p>出生日期</p>
                    <input class="bth_box obj_Radius" type="date">
                </div>
                <div class="acc_zonebox acc_item">
                    <div class="nation">
                        <p>國家或地區</p>
                        <input class="nation_box obj_Radius" type="text" readonly placeholder="臺灣">
                        <select class="city obj_Radius" id="city">
                            <option v-for="(item, index) in cityName" :key="index" value="{{ item }}">{{ item }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="btn">
                <button @click="saveBtn()" class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">儲存變更</button>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/accsetting.scss";
</style>
<script src="./js/AccSetting.js"></script>
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
                            <option value="台北市">台北市</option>
                            <option value="新北市">新北市</option>
                            <option value="基隆市">基隆市</option>
                            <option value="桃園市">桃園市</option>
                            <option value="新竹市">新竹市</option>
                            <option value="新竹縣">新竹縣</option>
                            <option value="苗栗縣">苗栗縣</option>
                            <option value="臺中市">臺中市</option>
                            <option value="彰化縣">彰化縣</option>
                            <option value="南投縣">南投縣</option>
                            <option value="雲林縣">雲林縣</option>
                            <option value="嘉義縣">嘉義縣</option>
                            <option value="嘉義市">嘉義市</option>
                            <option value="臺南市">臺南市</option>
                            <option value="高雄市">高雄市</option>
                            <option value="屏東縣">屏東縣</option>
                            <option value="宜蘭縣">宜蘭縣</option>
                            <option value="花蓮縣">花蓮縣</option>
                            <option value="臺東縣">臺東縣</option>
                            <option value="澎湖縣">澎湖縣</option>
                            <option value="金門縣">金門縣</option>
                            <option value="連江縣">連江縣</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="btn">
                <button class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">儲存變更</button>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/accsetting.scss";
</style>
<script src="./js/AccSetting.js"></script>
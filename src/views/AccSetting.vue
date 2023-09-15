<!-- 帳號設定 --廖妍榛 -->
<template>
    <main class="acc_setting">
        <nav class="acc_sidebar">
            <ul class="obj_Radius">
                <li @click="setCurrentTab('showMe')" :class="{ active: currentTabType === 'showMe' }">
                    編輯個人檔案</li>
                <li @click="setCurrentTab('showMyAcc')" :class="{ active: currentTabType === 'showMyAcc' }">帳號資訊</li>
                <li @click="setCurrentTab('showAccSafe')" :class="{ active: currentTabType === 'showAccSafe' }">帳號安全驗證</li>
                <li @click="setCurrentTab('showChangePsw')" :class="{ active: currentTabType === 'showChangePsw' }">更改密碼
                </li>
            </ul>
        </nav>
        <!-- 編輯個人檔案 -->
        <div v-if="currentTab == 'showMe'" class=" acc_editprofile obj_Radius">
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
                            <option v-for="(   item, index   ) in    cityName   " :key="index" value="{{ item }}">{{ item
                            }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="btn">
                <button @click="saveBtn()" class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">儲存變更</button>
            </div>
        </div>
        <!-- 帳號資訊 -->
        <div v-else-if="currentTab == 'showMyAcc'" class="acc_editprofile obj_Radius acc_info_box">
            <h1>帳號: ooxxx123
                <fontAwesome @click="editAccount()" :icon="['far', 'pen-to-square']" size="2xs" style="cursor: pointer;" />
            </h1>
            <div class="acc_box">
                <div class="acc_name acc_item">
                    <p>會員網址: </p>
                    <input class="name_box obj_Radius" type="text" readonly placeholder="https://www.muse.com/ooxx123">
                    <span @click="copyLink()">
                        <fontAwesome :icon="['fa', 'copy']" size="xl"
                            style="margin-left: 30%; cursor: pointer; color: #74EBD5" />
                    </span>
                    <span>帳號僅能變更一次</span>
                </div>
                <div class="acc_btn">
                    <button @click="saveBtn()" class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">儲存變更</button>
                </div>
            </div>
        </div>
        <!-- 帳號安全驗證 -->
        <div v-else-if="currentTab == 'showAccSafe'" class="obj_Radius acc_safe_wrap">
            <h1>帳號安全驗證
            </h1>
            <div class="acc_safe_box">
                <div class="acc_safe_item">
                    <div class="txt">
                        <fontAwesome :icon="['far', 'circle-xmark']"
                            style="color: #FE1C6C; margin-right: 3%; text-align: center; width: 50px;" />
                        <span>未完成</span>
                    </div>
                    <p>驗證手機號碼</p><button @click="setSafeBtn()"
                        class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">設定</button>
                </div>
                <div class="acc_safe_item">
                    <div class="txt">
                        <fontAwesome :icon="['far', 'circle-check']"
                            style="color: #ffffff; margin-right: 3%; text-align: center; width: 50px;" />
                        <span>已完成</span>
                    </div>
                    <p>驗證電子信箱</p><button @click="setSafeBtn()"
                        class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">設定</button>
                </div>
                <div class="acc_safe_item">
                    <div class="txt">
                        <fontAwesome :icon="['far', 'circle-xmark']"
                            style="color: #FE1C6C; margin-right: 3%; text-align: center; width: 50px;" />
                        <span>未完成</span>
                    </div>
                    <p>完善會員詳細資料</p>
                    <button @click="setSafeBtn()" class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">設定</button>
                </div>
            </div>
        </div>
        <!-- 更改密碼 -->
        <div v-else class="acc_editprofile obj_Radius">
            <h1>更改密碼</h1>
            <div class="acc_box">
                <div class="acc_name acc_item" v-for="(    psw, index   ) in    changePsw   " :key="index">
                    <p>{{ psw.title }}</p>
                    <input class="name_box obj_Radius" type="password">
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
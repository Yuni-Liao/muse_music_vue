<!-- 帳號設定 --廖妍榛 -->
<template>
    <main class="acc_setting">
        <nav class="acc_sidebar">
            <ul class="obj_Radius">
                <li @click="setCurrentTab('showMe')" :class="{ active: currentTabType === 'showMe' }">
                    個人檔案</li>
                <li @click="setCurrentTab('showMyAcc')" :class="{ active: currentTabType === 'showMyAcc' }">帳號資訊</li>
                <li @click="setCurrentTab('showAccSafe')" :class="{ active: currentTabType === 'showAccSafe' }">安全驗證</li>
                <li @click="setCurrentTab('showChangePsw')" :class="{ active: currentTabType === 'showChangePsw' }">更改密碼
                </li>
            </ul>
        </nav>
        <!-- 編輯個人檔案 -->
        <div v-if="currentTab == 'showMe'" class=" acc_editprofile obj_Radius">
            <h1>編輯個人檔案</h1>
            <div class="acc_box">
                <div class="acc_name acc_item">
                    <p>會員姓名</p>
                    <input class="name_box obj_Radius" type="text" v-model="memInfo[0].mem_name">
                </div>
                <div class="acc_mail acc_item">
                    <p>E-mail</p>
                    <input class="mail_box obj_Radius" type="mail" v-model="memInfo[0].email">
                </div>
                <div class="acc_zonebox acc_item">
                    <div class="nation">
                        <p>國家或地區</p>
                        <input class="nation_box obj_Radius" type="text" readonly placeholder="臺灣">
                        <select class="city obj_Radius" id="city" v-if="editCity" v-model="memInfo[0].county">
                            <option v-for="(item, index) in cityName" :key="index" :value="item">{{ item
                            }}
                            </option>
                        </select>
                        <input class="city obj_Radius" type="text" v-else v-model="memInfo[0].county">
                        <fontAwesome @click="toggleEditCity" :icon="['far', 'pen-to-square']" size="lg"
                            style="cursor: pointer; margin-left: 3%;" />
                    </div>
                </div>
            </div>
            <div class="btn">
                <button @click="saveBtn()" class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">儲存變更</button>
            </div>
        </div>
        <!-- 帳號資訊 -->
        <div v-else-if="currentTab == 'showMyAcc'" class="acc_editprofile obj_Radius">
            <h1>帳號: <span class="accEmailEdit">{{ memInfo[0].email }}</span>
            </h1>
            <div class="acc_box">
                <div class="acc_name acc_item">
                    <p>會員網址: </p>
                    <input class="name_box obj_Radius" type="text" ref="copyInput" readonly v-model="urlCopy">
                    <span @click="copyLink()">
                        <fontAwesome :icon="['fa', 'copy']" size="xl"
                            style="cursor: pointer; color: #74EBD5; margin-left: 30%; " />
                    </span>
                </div>
            </div>
        </div>
        <!-- 帳號安全驗證 -->
        <div v-else-if="currentTab == 'showAccSafe'" class="  obj_Radius acc_safe_wrap">
            <h1>帳號安全驗證
            </h1>
            <div class="acc_safe_box acc_item">
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
                    <p>會員詳細資料</p>
                    <button @click="setSafeBtn()" class="acc_savebtn default_Btn obj_Rounded btn_XS_NoBorder">設定</button>
                </div>
            </div>
        </div>
        <!-- 更改密碼 -->
        <div v-else class="acc_editprofile obj_Radius">
            <h1>更改密碼</h1>
            <div class="acc_box">
                <div class="acc_name acc_item">
                    <p>{{ changePsw[0].title }}</p>
                    <input class="name_box obj_Radius" type="password">
                </div>
                <div class="acc_name acc_item">
                    <p>{{ changePsw[1].title }}</p>
                    <input class="name_box obj_Radius" type="password">
                </div>
                <div class="acc_name acc_item">
                    <p>{{ changePsw[2].title }}</p>
                    <input class="name_box obj_Radius" type="password" v-model="memChangePsw">
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
<template>
    <div class="admin_table_box">
        <h1>管理員管理</h1>
        <Table size="large" highlight-row stripe class="admin_table cellHeight" width="1000" :columns="columns"
            :data="adminList">
            <template #deleteBtn="{ row }">
                <fontAwesome @click="deleteBtn(row)" :icon="['fa', 'trash']" style="cursor: pointer;" />
            </template>
        </Table>
        <div class="btn_box">
            <Button type="primary" @click="createAdmin()" class="admin_add" style="margin: 50px 0px;">新增</Button>
        </div>
    </div>

    <!-- 新增管理員帳號 -->
    <div v-if="addBox == true" class="addAdmin obj_Radius">
        <p>管理員姓名:</p>
        <input type="text" id="name" name="name" v-model="addItem.name" class="obj_Radius"
            style="margin-bottom:10px; width: 250px;">
        <p>管理員帳號:</p><input type="text" id="adminAcc" name="link" class="obj_Radius" v-model="addItem.acc"
            style="margin-bottom:10px; width: 250px;">
        <p>管理員密碼:</p><input type="text" id="adminPsw" name="link" class="obj_Radius" v-model="addItem.admin_psw"
            style="margin-bottom:10px; width: 250px;">
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="saveBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/Backend/admmgmt.scss";
</style>
<script src="../js/Backendjs/AdmMgmt.js"></script>

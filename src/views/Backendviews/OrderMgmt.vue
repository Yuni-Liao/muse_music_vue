<template>
    <div class="ordermgmt_box">
        <h1>周邊販售管理 | 訂單管理</h1>
        <div class="search_warp">
            <Select v-model="model" placeholder="選擇訂單狀態" style="width:165px; margin-left: 60%;  padding: 10px;" class="select_stat">
                <Option v-for="item in cityList" :value="item.value" :key="item.value" class="select_into">{{ item.label }}</Option>
            </Select>
            <Input v-model.trim="inputvalue" placeholder="輸入訂單編號"
                style="width: 180px; margin-bottom: 2%; padding: 10px;">
            <Input v-model="value" />
            <template #append>
                <Button icon="ios-search" style="background-color: #515a6e; color: #fff;"></Button>
            </template>
            </Input>
        </div>
        <Table highlight-row stripe class="order_mgmt_table cellHeight" width="1150" height="500" :columns="ordercolumns"
            :data="filterWithInput">
            <template #editBtn="{ row }">
                <fontAwesome @click="editBtn(row)" :icon="['far', 'pen-to-square']" style="cursor: pointer;" />
            </template>
        </Table>
    </div>

    <!-- 編輯彈窗 -->
    <div v-if="editBox == true" class="editfaq obj_Radius">
        <div class="list">
            <div class="item">
                <p>訂單日期：</p>
                <input type="text" id="ord_date" name="name" v-model="editItem.ord_date" class="obj_Radius" readonly>
            </div>
            <div class="item">
                <p>訂單編號：</p>
                <input type="text" id="ord_id" name="name" class="obj_Radius" v-model="editItem.ord_id" readonly>
            </div>
            <div class="item">
                <p>會員帳號：</p>
                <input type="text" id="mem_acc" name="name" class="obj_Radius" v-model="editItem.mem_acc" readonly>
            </div>
        </div>
        <div class="list">
            <div class="item">
                <p>會員姓名：</p>
                <input type="text" id="mem_name" name="name" class="obj_Radius" v-model="editItem.mem_name" readonly>
            </div>
            <div class="item">
                <p>付款方式：</p>
                <input type="text" id="ord_pay" name="name" class="obj_Radius" v-model="editItem.ord_pay" readonly>
            </div>
            <div class="item">
                <p>運送方式：</p>
                <input type="text" id="ord_ship" name="name" class="obj_Radius" v-model="editItem.ord_ship" readonly>
            </div>
        </div>
        <div class="list">
            <div class="item">
                <p>收件者：</p>
                <input type="text" id="ord_name" name="name" class="obj_Radius" v-model="editItem.ord_name" readonly>
            </div>
            <div class="item">
                <p>收件電話：</p>
                <input type="text" id="ord_tel" name="name" class="obj_Radius" v-model="editItem.ord_tel" readonly>
            </div>
            <div class="item">
                <p>訂單狀態：</p>
                <Select v-model="editItem.ord_stat" :disabled="editItem.ord_stat === '已取消' || editItem.ord_stat === '已完成'" style="width:200px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </div>
        <div class="list">
            <div class="item add_item">
                <p>收件地址：</p>
                <input type="text" id="ord_add" name="name" class="obj_Radius" v-model="editItem.ord_add"
                    style=" width: 90%;" readonly>
            </div>
        </div>
        <table class="ordersitem_table">
            <thead>
                <tr>
                    <th>#</th>
                    <td>商品編號</td>
                    <th>商品名稱</th>
                    <th>商品金額</th>
                    <th>數量</th>
                    <th>小計</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in getEditData()" :key="item.ord_id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.prod_id }}</td>
                    <td>{{ item.prod_name }}</td>
                    <td>{{ item.prod_price }}</td>
                    <td>{{ item.ord_pcs }}</td>
                    <td>{{ item.prod_price * item.ord_pcs }}</td>
                </tr>
            </tbody>
            <tfoot>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>總金額 $ {{ editItem.ord_total_price }}</td>
            </tfoot>
        </table>
        <div class="btngroup">
            <button @click="closeBtn()" class="default_Btn obj_Radius closeBtn">取消</button>
            <button @click="editSaveBtn()" class="saveBtn default_Btn  obj_Radius">儲存</button>
        </div>
    </div>
</template>

<style scoped lang="scss">@import "~@/assets/scss/page/Backend/ordermgmt.scss";</style>
<script src="../js/Backendjs/OrderMgmt.js"></script>

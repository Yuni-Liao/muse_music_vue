<!-- yuni測試 -->
<template>
    <!-- 燈箱：登入 -->
    <div id="lightBox" style="display:none">
        <table border="1" align="center" cellspacing="0" id="tableLogin">
            <tr>
                <td>帳號</td>
                <td><input type="text" name="memId" id="memId"></td>
            </tr>
            <tr>
                <td>密碼</td>
                <td><input type="password" name="memPsw" id="memPsw"></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="button" id="btnLogin" value="登入">
                    <input type="button" id="btnLoginCancel" value="取消">
                </td>
            </tr>
        </table>
    </div>

    <!-- wrapper -->
    <div id="wrapper">
        <!-- 登入bar -->
        <div id="bar" style="position: absolute;top:0;right: 20px">
            <span id="memName">&nbsp;</span> <!-- 使用者姓名 -->
            <span id="spanLogin">登入</span>
        </div>

        <div id="content">
            <center>
                <h1>這是首頁</h1>
            </center>
            <center>
                <h1><a href="discuss.html">前往討論區</a></h1>
            </center>
        </div>

        <div id="footer"></div>

    </div>
</template>
<style scoped lang="scss">
#lightBox {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(66, 66, 66, .6);
}

#tableLogin {
    position: absolute;
    width: 300px;
    top: 0;
    right: 0;
    bottom: 25%;
    left: 0;
    margin: auto;
    background-color: #FFCCDD;
    border: 1px dotted deepPink;
}

#tableLogin td {
    padding: 2px 2px;
    height: 20px;
    border-style: none;
    border-bottom: 1px dotted deeppink;
}

#tableLogin input {
    background-color: #FFCCDD;
    font-size: 16px;
    padding-left: 2px;
}

#btnLogin,
#btnLoginCancel {
    margin-left: 5px;
    padding: 2px;
}

#spanLogin:hover {
    cursor: pointer;
    text-decoration: underline;
    margin-left: 20px;
}
</style>

<script src="./js/text.js"></script>
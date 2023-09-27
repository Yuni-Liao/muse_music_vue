//import $ from 'jquery';

export default {
    // 這頁是yuni測試

    // methods: {

    // },
    mounted() {
        function $id(id) {
            return document.getElementById(id);
        }
        function showLoginForm() {
            //檢查登入bar面版上 spanLogin 的字是登入或登出
            //如果是登入，就顯示登入用的燈箱(lightBox)
            //如果是登出
            //將登入bar面版上，登入者資料清空 
            //spanLogin的字改成登入
            //將頁面上的使用者資料清掉
            if ($id('spanLogin').innerHTML == "登入") {
                $id('lightBox').style.display = 'block';
            } else {
                //-----------------------------------使用Ajax 回server端登出
                $.ajax({
                    url: "http://localhost:8080/muse/muse_music/public/phps/ajaxLogout.php",
                    dataType: "json",
                    success(response) { //已parse完
                        $id("memName").innerText = "";
                        $id("spanLogin").innerText = "登入";
                    },
                    error(xhr, status, error) {
                        console.log(status, error);
                    }
                });

            }

        }//showLoginForm

        function sendForm() {
            //-----------------------------------使用Ajax 回server端,取回登入者姓名, 放到頁面上    
            let memId = $id("memId").value;
            let memPsw = $id("memPsw").value;
            // let URL = "."; //for 打包時(視實際狀況來寫)
            //let URL = "public/phps"; //for 打包時(視實際狀況來寫)
            let URL = "http://localhost/muse/muse_music/public/phps/"; // for開發時
            let member;

            $.ajax({
                url: `${URL}ajaxLogin.php`,
                method: "post",
                contentType: "application/x-www-form-urlencoded",
                data: { memId, memPsw },
                dataType: "json",
                success(response) { //response為已parse完的結果
                    member = response;
                    if (member.memId) {
                        $id("memName").innerText = member.memName;
                        $id("spanLogin").innerText = "登出";
                    } else {
                        alert("帳密錯誤~");
                    }
                },
                error(xhr, status, error) {
                    console.log(status, error);
                }
            });
            //-----------------------------------

            //將登入表單上的資料清空，並隱藏起來
            $id('lightBox').style.display = 'none';
            $id('memId').value = '';
            $id('memPsw').value = '';
        }

        function cancelLogin() {
            //將登入表單上的資料清空，並將燈箱隱藏起來
            $id('lightBox').style.display = 'none';
            $id('memId').value = '';
            $id('memPsw').value = '';
        }

        window.addEventListener("load", function () {
            //===設定spanLogin.onclick 事件處理程序是 showLoginForm

            $id('spanLogin').onclick = showLoginForm;

            //===設定btnLogin.onclick 事件處理程序是 sendForm
            $id('btnLogin').onclick = sendForm;

            //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
            $id('btnLoginCancel').onclick = cancelLogin;

        }, false);
    }
}
// function $id(id) {
//     return document.getElementById(id);
// }



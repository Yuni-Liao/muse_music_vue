
<?php
// 這頁是yuni測試

header("Access-Control-Allow-Origin: *");

session_start();
if( isset($_SESSION["memId"]) ) {
    session_unset();
    echo json_encode(["msg"=>"已登出"]);
}
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");


try {
    require_once("./connectMusemusic.php");
        // 新增後台管理員帳號

        // 準備 SQL
        $sql = "insert into  admin_acc (admin_id,name, acc, admin_psw) 
        values 
        (:admin_id,:name, :acc, :admin_psw)";

        $addAdmin = $pdo->prepare($sql);

        $addAdmin->bindValue(":admin_id", $_POST["admin_id"]);
        $addAdmin->bindValue(":name", $_POST["name"]);
        $addAdmin->bindValue(":acc", $_POST["acc"]);
        $addAdmin->bindValue(":admin_psw", $_POST["admin_psw"]);

        // 執行 SQL 更新
        $addAdmin->execute();

        // 如果更新成功
        $responseMessage = "更新成功";

} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
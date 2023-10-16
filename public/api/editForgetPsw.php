<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");

try {
        // 引入連線工作的檔案
        require_once("./connectMusemusic.php");

        // 準備update SQL
        $sql = "

        UPDATE member SET mem_psw = :password
        
        WHERE email = :email";

        $editPsw = $pdo->prepare($sql);

        $editPsw->bindValue(":password", $_POST["password"]);
        $editPsw->bindValue(":email", $_POST["email"]);

        // 執行 SQL 更新
        $editPsw->execute();

        // 如果更新成功
        $responseMessage = "更新成功";

    echo json_encode($responseMessage);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}

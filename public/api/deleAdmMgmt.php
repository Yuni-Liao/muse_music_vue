<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');


try {
    require_once("./connectMusemusic.php");
        // 刪除後台管理員帳號

        // 準備 SQL
        $sql = "delete from admin_acc where admin_id = :admin_id";

        $data = json_decode(file_get_contents('php://input'), true);
        
        $deleteAdmin = $pdo->prepare($sql);

        if (isset($data['admin_id'])) {
            $deleteAdmin = $pdo->prepare($sql);
            $deleteAdmin->bindValue(":admin_id", $data["admin_id"]);
        // 執行 SQL 更新
        $deleteAdmin->execute();

        $rowCount = $deleteAdmin->rowCount();

        if ($rowCount > 0) {
            $responseMessage = "刪除成功";
        } else {
            $responseMessage = "未找到符合條件的紀錄";
        }
    }

} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');


try {
    require_once("./connectMusemusic.php");
        // 刪除首頁輪播圖 - 廖妍榛

        // 準備 SQL
        $sql = "delete from carousel where car_id = :car_id";

        $data = json_decode(file_get_contents('php://input'), true);
        
        $deleteCar = $pdo->prepare($sql);

        if (isset($data['car_id'])) {
            $deleteCar = $pdo->prepare($sql);
            $deleteCar->bindValue(":car_id", $data["car_id"]);
        // 執行 SQL 更新
        $deleteCar->execute();

        $rowCount = $deleteCar->rowCount();

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
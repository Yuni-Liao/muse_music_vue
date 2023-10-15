<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");


try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");
    // 獲取傳遞參數
    $msgrep_id = $_POST["msgrep_id"];

    // 準備 SQL
    $sql = "
        DELETE FROM msg_rep WHERE msg_rep.msgrep_id = :msgrep_id";

    $deleteRepMsg = $pdo->prepare($sql);
    $deleteRepMsg->bindValue(":msgrep_id", $msgrep_id);

    // 執行sql
    if ($deleteRepMsg->execute()) {
        $successResponse = [
            "message" => "刪除成功",
        ];
        echo json_encode($successResponse);
    } else {
        // 如果執行失敗，可以生成一個錯誤響應
        $errorResponse = [
            "error" => [
                "message" => "刪除失敗",
                "details" => "無法執行 SQL 語句",
            ],
        ];
        echo json_encode($errorResponse);
    }
} catch (Exception $e) {
    $errorResponse = [
        "error" => [
            "message" => "刪除失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];

    echo json_encode($errorResponse);
}

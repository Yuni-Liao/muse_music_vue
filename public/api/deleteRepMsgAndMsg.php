<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");

try {
    // 引入連線工作的檔案
    require_once("./connectMusemusic.php");

    // 從GET請求中獲取msg_id
    $msg_id = $_POST["msg_id"];

    // 準備sql
    $sqlDeleteMsgRep = "DELETE FROM msg_rep WHERE msg_id = :msg_id";
    $delMsgRep = $pdo->prepare($sqlDeleteMsgRep);
    $delMsgRep->bindValue(":msg_id", $msg_id);

    $sqlDeleteMsg = "DELETE FROM msg WHERE msg_id = :msg_id";
    $delMsg = $pdo->prepare($sqlDeleteMsg);
    $delMsg->bindValue(":msg_id", $msg_id);

    $pdo->beginTransaction();

    // 執行sql
    if ($delMsgRep->execute() && $delMsg->execute()) {
        $pdo->commit();
        $successResponse = [
            "message" => "刪除成功",
        ];
        echo json_encode($successResponse);
    } else {
        $pdo->rollBack();
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
?>

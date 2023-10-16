<?php
//前台 - 單曲頁面 - 檢舉留言 - 郭凱芸
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");

try {
    // 引入連線工作的檔案
    require_once("./connectMusemusic.php");

    // 通過 $_POST 取得 POST 参数
    $msgrep_id = $_POST["msgrep_id"];
    $mem_id = $_POST["mem_id"];
    $msg_id = $_POST["msg_id"];
    $rep_rsn = $_POST["rep_rsn"];

    $sql = "
    INSERT INTO `msg_rep`(`msgrep_id`, `mem_id`, `msg_id`, `rep_rsn`, `rep_date`) 
    VALUES (:msgrep_id, :mem_id,:msg_id,:rep_rsn,CURRENT_TIMESTAMP);
    ";

    $newMessage = $pdo->prepare($sql);
    $newMessage->bindValue(":msgrep_id", $msgrep_id);
    $newMessage->bindValue(":mem_id", $mem_id);
    $newMessage->bindValue(":msg_id", $msg_id);
    $newMessage->bindValue(":rep_rsn", $rep_rsn);

    if ($newMessage->execute()) {
        $successResponse = [
            "message" => "新增成功",
        ];
        echo json_encode($successResponse);
    } else {
        // 如果執行失敗，可以生成一個錯誤響應
        $errorResponse = [
            "error" => [
                "message" => "新增失敗",
                "details" => "無法執行 SQL 語句",
            ],
        ];
        echo json_encode($errorResponse);
    }
} catch (Exception $e) {
    $errorResponse = [
        "error" => [
            "message" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];

    echo json_encode($errorResponse);
}

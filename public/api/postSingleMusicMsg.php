<?php
//前台 - 單曲頁面 - 留言區新增留言 - 郭凱芸
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");

try {
    // 引入連線工作的檔案
    require_once("./connectMusemusic.php");

    // 通过 $_POST 获取 POST 参数
    $msg_id = $_POST["msg_id"];
    $mem_id = $_POST["mem_id"];
    $s_id = $_POST["s_id"];
    $msg_con = $_POST["msg_con"];
    $msg_like = $_POST["msg_like"];

    $sql = "
    INSERT INTO msg 
    (msg_id, mem_id, s_id, msg_con, msg_date, msg_like) 
    VALUES 
    (:msg_id, :mem_id, :s_id, :msg_con, CURRENT_TIMESTAMP, :msg_like)";

    $newMessage = $pdo->prepare($sql);
    $newMessage->bindValue(":msg_id", $msg_id); // 使用正确的变量名
    $newMessage->bindValue(":mem_id", $mem_id); // 使用正确的变量名
    $newMessage->bindValue(":s_id", $s_id); // 使用正确的变量名
    $newMessage->bindValue(":msg_con", $msg_con); // 使用正确的变量名
    $newMessage->bindValue(":msg_like", $msg_like); // 使用正确的变量名

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

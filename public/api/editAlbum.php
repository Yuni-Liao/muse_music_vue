<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");

    //準備sql
    $sql = "
    UPDATE `album` SET 
    alb_name=:alb_name, alb_intro=:alb_intro, alb_img=:alb_img
    WHERE 
    alb_id =:alb_id;";
    $editSong = $pdo->prepare($sql);
    $editSong->bindValue(":alb_id", $_POST["alb_id"]);
    $editSong->bindValue(":alb_img", $_POST["alb_img"]);
    $editSong->bindValue(":alb_name", $_POST["alb_name"]);
    $editSong->bindValue(":alb_intro", $_POST["alb_intro"]);


    // 執行sql
    if ($editSong->execute()) {
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

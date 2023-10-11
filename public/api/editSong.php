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
    UPDATE `song` SET 
    s_name=:s_name, s_intro=:s_intro, show_stat=:show_stat, update_date = CURRENT_TIMESTAMP
    WHERE 
    s_id =:s_id;";
    $editSong = $pdo->prepare($sql);
    $editSong->bindValue(":s_id", $_POST["s_id"]);
    $editSong->bindValue(":s_name", $_POST["s_name"]);
    $editSong->bindValue(":s_intro", $_POST["s_intro"]);
    $editSong->bindValue(":show_stat", $_POST["show_stat"]);

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

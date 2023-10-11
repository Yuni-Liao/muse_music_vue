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
    INSERT INTO album 
    (`alb_id`, `alb_name`, `alb_intro`, `alb_img`, `upload_date`, `update_date`, `mem_id`, `share_num`) 
    VALUES
    (NULL, :alb_name, :alb_intro, :alb_img, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, :memid, '0');
    ";
    $editSong = $pdo->prepare($sql);
    $editSong->bindValue(":alb_name", $_POST["alb_name"]);
    $editSong->bindValue(":alb_intro", $_POST["alb_intro"]);
    $editSong->bindValue(":alb_img", $_POST["alb_img"]);
    $editSong->bindValue(":memid", $_POST["memid"]);



    // 執行sql
    if ($editSong->execute()) {
        $lastInsertId = $pdo->lastInsertId();

        echo json_encode($lastInsertId);

        // 获取最后插入的 s_id 值
        // $lastInsertId = $pdo->lastInsertId();
        // echo "成功插入新记录，s_id 为 $lastInsertId";
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

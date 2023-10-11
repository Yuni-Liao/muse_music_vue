<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");
    $slidArray = json_decode($_POST["selectedSls"]); //從前端獲取的已選擇歌曲的 s_id 陣列

    //foreach迴圈把它們一一加到歌單中
    foreach ($slidArray as $sl_id) {
        $sql = "
        INSERT INTO `slitem` (`sl_id`, `s_id`, `update_date`) 
        VALUES (:sl_id,:s_id, CURRENT_TIMESTAMP)";
        $addSongtoSl = $pdo->prepare($sql);
        $addSongtoSl->bindValue(":sl_id", $sl_id);
        $addSongtoSl->bindValue(":s_id", $_POST["s_id"]);

        // 執行sql
        if (!$addSongtoSl->execute()) {
            // 如果執行失敗，設定錯誤響應，並在此處中斷迴圈
            $errorResponse = [
                "error" => [
                    "message" => "新增失敗",
                    "details" => "無法執行 SQL 語句",
                ],
            ];

            echo json_encode($errorResponse);
            return; // 中斷迴圈
        }
    }
    $successResponse = [
        "message" => "新增成功",
    ];
    echo json_encode($successResponse);
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

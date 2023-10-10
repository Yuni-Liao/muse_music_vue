<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");


    $slarrArray = json_decode($_POST["slarr"]);
    $sidarrArray = json_decode($_POST["sidarr"]);

    //foreach迴圈把它們一一加到歌單中
    for ($i = 0; $i < count($sidarrArray); $i++) {
        $sl = $slarrArray[$i];
        $sid = $sidarrArray[$i];

        $sql = "
        UPDATE `song` SET 
        s_length=:sl
        WHERE 
        s_id =:sid";

        $addSongtoSl = $pdo->prepare($sql);
        $addSongtoSl->bindValue(":sl", $sl);
        $addSongtoSl->bindValue(":sid", $sid);

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

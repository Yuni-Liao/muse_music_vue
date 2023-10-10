<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");

    $acttype = $_POST["acttype"];
    $sidArray = json_decode($_POST["selectedSongs"]); //從前端獲取的已選擇歌曲的 s_id 陣列
    //準備sql
    //foreach迴圈把它們一一執行動作

    foreach ($sidArray as $s_id) {
        //1: 把歌曲加入alb_id 2: 把歌曲的 alb_id set null

        if ($acttype == "1") {
            $sql = "UPDATE song SET alb_id=:alb_id WHERE s_id=:s_id;";
            $editSongofAlbum = $pdo->prepare($sql);
            $editSongofAlbum->bindValue(":s_id", $s_id);
            $editSongofAlbum->bindValue(":alb_id", $_POST["alb_id"]);
        } elseif ($acttype == "2") {

            $sql = "UPDATE song SET song.alb_id= null WHERE song.s_id=:s_id;";
            $editSongofAlbum = $pdo->prepare($sql);
            $editSongofAlbum->bindValue(":s_id", $s_id);
        }


        // 執行sql
        if (!$editSongofAlbum->execute()) {
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

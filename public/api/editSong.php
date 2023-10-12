<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {

    if (isset($_FILES["s_img"])) {
        switch ($_FILES["s_img"]["error"]) {
            case UPLOAD_ERR_OK:
                $dir = "../dataimage/song/";
                if (!file_exists($dir)) {
                    mkdir($dir);
                }

                $from = $_FILES["s_img"]["tmp_name"];

                //取得副檔名
                $tempfrom = $_FILES["s_img"]["name"];
                $tempfileInfo = pathinfo($tempfrom);
                $fileExtension = $tempfileInfo['extension'];
                //檔案命名:ID+副檔名
                $filename = $_POST["s_id"] . "." . $fileExtension;
                $to = $dir . $filename;

                move_uploaded_file($from, $to);
            case UPLOAD_ERR_INI_SIZE:
                // echo json_encode("上傳檔案太大, 不得超過", ini_get("upload_max_filesize"));
                $result = ["error" => true, "msg" => "上傳檔案太大, 不得超過1MB"];
                echo json_encode($result);
                break;
            case UPLOAD_ERR_FORM_SIZE:
                //echo json_encode("上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組");
                $result = ["error" => true, "msg" => "上傳檔案太大"];
                echo json_encode($result);
                break;
            case UPLOAD_ERR_PARTIAL:
                $result = ["error" => true, "msg" => "上傳檔案不完整, 請再試一次"];
                echo json_encode($result);
                break;
        }
    } else {
        $filename = $_POST["s_img"];
    }


    //引入連線工作的檔案
    require_once("./connectMusemusic.php");

    //準備sql
    $sql = "
    UPDATE `song` SET 
    s_name=:s_name, s_intro=:s_intro, update_date = CURRENT_TIMESTAMP
    WHERE 
    s_id =:s_id;";
    $editSong = $pdo->prepare($sql);
    $editSong->bindValue(":s_id", $_POST["s_id"]);
    $editSong->bindValue(":s_name", $_POST["s_name"]);
    $editSong->bindValue(":s_intro", $_POST["s_intro"]);

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

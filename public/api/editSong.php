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
                $tempfilename = $_FILES["s_img"]["name"];
                $tempfileInfo = pathinfo($tempfilename);
                $fileExtension = $tempfileInfo['extension'];
                //檔案命名:ID+副檔名
                $filename = $_POST["s_id"] . "." . $fileExtension;
                $to = $dir . $filename;

                move_uploaded_file($from, $to);
                break;

            case UPLOAD_ERR_INI_SIZE:
                echo json_encode(["error" => "上傳檔案太大, 不得超過 " . ini_get("upload_max_filesize")]);
                exit();
            case UPLOAD_ERR_FORM_SIZE:
                echo json_encode(["error" => "上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組"]);

                exit();
            case UPLOAD_ERR_PARTIAL:
                echo json_encode(["error" => "上傳檔案不完整, 請再試一次"]);
                exit();
        }
    } else {
        $filename = $_POST["s_img"];
    }


    //引入連線工作的檔案
    require_once("./connectMusemusic.php");
    $pdo->beginTransaction();

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
    $editSong->execute();
    // 執行sql

    $pdo->commit();
    $result = ["error" => false, "msg" => "交易成功"];
    echo json_encode($result);
} catch (Exception $e) {

    $pdo->rollBack(); //捨棄交易
    $result = [
        "error" => [
            "msg" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];

    echo json_encode($result);
}

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {

    //新增專輯 (alb_img獻給空字串) -> 取得alb_id 
    // ->上傳複製檔案.更改檔名 -> 更改資料庫中alb_img的值 ->把歌曲加入專輯


    //引入連線工作的檔案
    require_once("./connectMusemusic.php");

    //開啟一個交易
    $pdo->beginTransaction();
    $memid = $_POST["memid"];
    $alb_img = ""; //先把圖片名稱設空字串
    $alb_name = $_POST["alb_name"];
    $alb_intro = $_POST["alb_intro"];
    //把歌曲加入alb_id
    $sidAddArray = json_decode($_POST["selectedAddSongs"]); //從前端獲取的已選擇歌曲的 s_id 陣列

    //新增專輯
    $sql1 = "
        INSERT INTO album (`alb_id`, `alb_name`, `alb_intro`, `alb_img`, `upload_date`, `update_date`, `mem_id`, `share_num`) 
        VALUES (null, :alb_name, :alb_intro, :alb_img, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, :memid, '0');
        ";
    $addAlbum = $pdo->prepare($sql1);
    //$addAlbum->bindValue(":alb_id", $alb_id);
    $addAlbum->bindValue(":alb_name", $alb_name);
    $addAlbum->bindValue(":alb_intro", $alb_intro);
    $addAlbum->bindValue(":alb_img", $alb_img);
    $addAlbum->bindValue(":memid", $memid);
    $addAlbum->execute();

    $alb_id = $pdo->lastInsertId();

    //處理圖片檔案

    if (isset($_FILES["alb_img"])) {

        switch ($_FILES["alb_img"]["error"]) {
            case UPLOAD_ERR_OK:
                $dir = "../dataimage/album/";
                if (!file_exists($dir)) {
                    mkdir($dir);
                }

                $from = $_FILES["alb_img"]["tmp_name"];

                //取得副檔名
                $tempfrom = $_FILES["alb_img"]["name"];
                $tempfileInfo = pathinfo($tempfrom);
                $fileExtension = $tempfileInfo['extension'];
                //檔案命名:ID+副檔名
                $filename = $alb_id . "." . $fileExtension;
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
        $filename = "pre.jpg"; //預設圖片
    }

    //更改資料庫圖片名稱
    $alb_img = $filename;

    $sql3 = "UPDATE album SET alb_img=:alb_img WHERE alb_id=:alb_id;";
    $changealbImg = $pdo->prepare($sql3);
    $changealbImg->bindValue(":alb_id", $alb_id);
    $changealbImg->bindValue(":alb_img", $alb_img);
    $changealbImg->execute();

    //把歌曲加上專輯編號 ( 把歌加入專輯 ) 

    if (count($sidAddArray) > 0) {
        foreach ($sidAddArray as $i => $s_id1) {


            $sql2 = "UPDATE song SET alb_id=:alb_id WHERE s_id=:s_id;";
            $addSongofAlbum = $pdo->prepare($sql2);
            $addSongofAlbum->bindValue(":s_id", $s_id1);
            $addSongofAlbum->bindValue(":alb_id", $alb_id);
            $addSongofAlbum->execute();
        }
    }

    $pdo->commit();
    $result = ["error" => false, "msg" => "交易成功"];
    echo json_encode($result);
} catch (Exception $e) {
    $pdo->rollBack(); //捨棄交易
    $errorResponse = [
        "error" => [
            "message" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($errorResponse);
}

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
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
                $filename = "";
                $filename = $_POST["alb_id"] . "." . $fileExtension;
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
        $filename = $_POST["alb_img"];
    }
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");
    //開啟一個交易
    $pdo->beginTransaction();

    $alb_id = $_POST["alb_id"];
    //$alb_img = $_POST["alb_img"];
    $alb_name = $_POST["alb_name"];
    $alb_intro = $_POST["alb_intro"];

    //把歌曲加入alb_id
    $sidAddArray = json_decode($_POST["selectedAddSongs"]); //從前端獲取的已選擇歌曲的 s_id 陣列

    //把歌曲的 alb_id set null
    $sidDelArray = json_decode($_POST["selectedDelSongs"]); //從前端獲取的已選擇歌曲的 s_id 陣列

    //編輯專輯
    $sql1 = "
    UPDATE album SET 
    alb_name = :alb_name, alb_intro = :alb_intro ,alb_img=:alb_img, update_date = CURRENT_TIMESTAMP where alb_id = :alb_id;";
    $editAlbum = $pdo->prepare($sql1);
    $editAlbum->bindValue(":alb_id", $alb_id);
    $editAlbum->bindValue(":alb_img", $filename);
    $editAlbum->bindValue(":alb_name", $alb_name);
    $editAlbum->bindValue(":alb_intro", $alb_intro);
    $editAlbum->execute();

    if (count($sidAddArray) > 0) {
        foreach ($sidAddArray as $i => $s_id1) {


            $sql2 = "UPDATE song SET alb_id=:alb_id WHERE s_id=:s_id;";
            $addSongofAlbum = $pdo->prepare($sql2);
            $addSongofAlbum->bindValue(":s_id", $s_id1);
            $addSongofAlbum->bindValue(":alb_id", $alb_id);
            $addSongofAlbum->execute();
        }
    }

    if (count($sidDelArray) > 0) {
        foreach ($sidDelArray as $i => $s_id2) {

            $sql3 = "UPDATE song SET song.alb_id= null WHERE s_id=:s_id;";
            $delSongofAlbum = $pdo->prepare($sql3);
            $delSongofAlbum->bindValue(":s_id", $s_id2);
            $delSongofAlbum->execute();
        }
    }


    $pdo->commit();
    $result = ["error" => false, "msg" => "交易成功"];
    echo json_encode($result);
} catch (Exception $e) {
    $pdo->rollBack(); //捨棄交易
    // $result = ["error" => true, "msg" => "系統錯誤, 請通知系統維護人員"];
    // echo json_encode($result);
    $errorResponse = [
        "error" => [
            "message" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($errorResponse);
}

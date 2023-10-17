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
    $s_src = ""; //先把音檔名稱設空字串
    $s_img = ""; //先把圖片名稱設空字串
    $s_name = $_POST["s_name"];
    $s_intro = $_POST["s_intro"];
    $s_length = $_POST["s_length"];
    //把歌曲加入alb_id
    $scatdArray = json_decode($_POST["scatselected"]); //從前端獲取的已選擇歌曲的 s_id 陣列

    //新增歌曲
    $sql1 = "
    INSERT INTO song 
    (s_id, mem_id, alb_id, s_name, s_intro, s_img, s_src, s_lyrics, s_length, s_stat, upload_date, update_date, play_num, fav_num, share_num, show_stat) VALUES (NULL, :memid, NULL, :s_name, :s_intro, :s_img, :s_src,:s_intro, :s_length, '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '0', '0', '0', '0');";
    $addSong = $pdo->prepare($sql1);
    $addSong->bindValue(":s_name", $s_name);
    $addSong->bindValue(":s_intro", $s_intro);
    $addSong->bindValue(":s_img", $s_img);
    $addSong->bindValue(":s_src", $s_src);
    $addSong->bindValue(":s_intro", $s_intro);
    $addSong->bindValue(":s_length", $s_length);
    $addSong->bindValue(":memid", $memid);
    $addSong->execute();

    $s_id = $pdo->lastInsertId();

    //處理圖片檔案

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
                $imgfilename = $s_id . "." . $fileExtension;
                $to = $dir . $imgfilename;

                move_uploaded_file($from, $to);
                break;

            case UPLOAD_ERR_INI_SIZE:
                echo json_encode(["error" => true, "msg" => "上傳檔案太大, 不得超過 " . ini_get("upload_max_filesize")]);
                exit();
            case UPLOAD_ERR_FORM_SIZE:
                json_encode(["error" => true, "msg" => "上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組"]);
                exit();
            case UPLOAD_ERR_PARTIAL:
                $result = ["error" => true, "msg" => "上傳檔案不完整, 請再試一次"];
                echo json_encode($result);
                exit();
        }
    } else {
        $imgfilename = "pre.jpg"; //預設圖片
    }

    //處理音樂檔案
    if (isset($_FILES["s_src"])) {

        switch ($_FILES["s_src"]["error"]) {
            case UPLOAD_ERR_OK:
                $dir = "../audio/";
                if (!file_exists($dir)) {
                    mkdir($dir);
                }

                $from = $_FILES["s_src"]["tmp_name"];

                //取得副檔名
                $tempfrom = $_FILES["s_src"]["name"];
                $tempfileInfo = pathinfo($tempfrom);
                $fileExtension = $tempfileInfo['extension'];
                //檔案命名:ID+副檔名
                $songfilename = $s_id . "." . $fileExtension;
                $to = $dir . $songfilename;

                move_uploaded_file($from, $to);
                break;

            case UPLOAD_ERR_INI_SIZE:
                echo json_encode(["error" => true, "msg" => "上傳檔案太大, 不得超過 " . ini_get("upload_max_filesize")]);
                exit();
            case UPLOAD_ERR_FORM_SIZE:
                json_encode(["error" => true, "msg" => "上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組"]);
                exit();
            case UPLOAD_ERR_PARTIAL:
                $result = ["error" => true, "msg" => "上傳檔案不完整, 請再試一次"];
                echo json_encode($result);
                exit();
        }
    } else {
        $result = ["error" => true, "msg" => "沒有上傳音樂檔案"];
        echo json_encode($result);
        exit();
    }

    //更改資料庫圖片名稱
    $s_img = $imgfilename;
    $s_src = $songfilename;

    $sql3 = "UPDATE song SET s_img=:s_img ,s_src=:s_src WHERE s_id=:s_id;";
    $changeSongInfo = $pdo->prepare($sql3);
    $changeSongInfo->bindValue(":s_id", $s_id);
    $changeSongInfo->bindValue(":s_img", $s_img);
    $changeSongInfo->bindValue(":s_src", $s_src);
    $changeSongInfo->execute();

    //把歌曲加上專輯編號 ( 把歌加入專輯 ) 

    if (count($scatdArray) > 0) {
        foreach ($scatdArray as $i => $mcat_id) {


            $sql2 = "INSERT INTO song_cat (s_id, mcat_id) VALUES (:s_id, :mcat_id);";
            $addSongCat = $pdo->prepare($sql2);
            $addSongCat->bindValue(":s_id", $s_id);
            $addSongCat->bindValue(":mcat_id", $mcat_id);
            $addSongCat->execute();
        }
    }

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

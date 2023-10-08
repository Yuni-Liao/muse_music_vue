<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

try {
    //連線
    require_once("./connectMusemusic.php");

    // 都還沒寫完 - 廖妍榛
    switch ($_FILES["img"]["error"]) {

    case UPLOAD_ERR_OK :
        $dir = "../dataimage/carousel/";
        if( !file_exists($dir) ){
            mkdir($dir);
        }

        $from = $_FILES["img"]["tmp_name"];
        $filename = basename($_FILES['img']['name']);
        $to = $dir . $filename;
            if (copy($from, $to)) {
                //準備sql
                $sql = "update carousel set name = :name, img = :img,           link = :link where car_id = :car_id";
                $carousel = $pdo->prepare($sql);
                $carousel->bindValue(":car_id", $_POST["car_id"]);
                $carousel->bindValue(":name", $_POST["name"]);
                $carousel->bindValue(":img",  $filename);
                $carousel->bindValue(":link", $_POST["link"]);
                //執行sql
                $carousel->execute();

                echo json_encode("上傳成功");
        }
        break;
    case UPLOAD_ERR_INI_SIZE :
        echo json_encode("上傳檔案太大, 不得超過", ini_get("upload_max_filesize"));
        break;
    case UPLOAD_ERR_FORM_SIZE :
        echo json_encode("上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組");
        break;
    case UPLOAD_ERR_PARTIAL :
        echo json_encode("上傳檔案不完整, 請再試一次");
        break;
    case UPLOAD_ERR_NO_FILE :
        echo json_encode("檔案未選");
        break;
} 

} catch (PDOException $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    }
?>

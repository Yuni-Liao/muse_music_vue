<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

try {
    switch ($_FILES["image"]["error"]) {

        case UPLOAD_ERR_OK :
            $dir = "../image/index/";
            if( !file_exists($dir) ){
                mkdir($dir);
            }

            $from = $_FILES["image"]["tmp_name"];
            $filename = basename($_FILES['image']['name']);
            $to = $dir . basename($_FILES['image']['name']);

            copy($from, $to);
            echo json_encode("上傳成功");    
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

    //連線
    require_once("./connectMusemusic.php");

    //準備sql
    $sql = "insert into carousel (car_id, name, img, link, update_time) values 
    (:carId, :name, :img, :link, :updateTime)";
    $carousel = $pdo->prepare($sql);
    $carousel->bindValue(":carId", $_POST["car_id"]);
    $carousel->bindValue(":name", $_POST["name"]);
    $carousel->bindValue(":img", $_POST["img"]);
    $carousel->bindValue(":link", $_POST["link"]);
    $carousel->bindValue(":updateTime", $_POST["updateTime"]);
    //執行sql
    $carousel->execute();
}
catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";  
}

?>

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");


try {
    
    if(isset($_FILES["img"])){
        switch ($_FILES["img"]["error"]) {
            case UPLOAD_ERR_OK:
                $dir = "../dataimage/index/carousel/";
                if (!file_exists($dir)) {
                    mkdir($dir);
                }

                $from = $_FILES["img"]["tmp_name"];

                $filename = basename($_FILES['img']['name']);
            
                $to = $dir . basename($_FILES['img']['name']);
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
    }else{
        $filename = $_POST["img"];
        echo json_encode("更新成功"); 
    }

    require_once("./connectMusemusic.php");
        // 後台 首頁輪播管理 新增首頁輪播圖 - 廖妍榛

        // 準備 SQL
        $sql = "insert into  carousel (car_id , name, img, link) 
        values 
        (:car_id, :name, :img, :link)";

        $addCarousel = $pdo->prepare($sql);

        $addCarousel->bindValue(":car_id", $_POST["car_id"]);
        $addCarousel->bindValue(":name", $_POST["name"]);
        $addCarousel->bindValue(":img", $filename);
        $addCarousel->bindValue(":link", $_POST["link"]);

        //執行sql
        $addCarousel->execute();

        // 如果更新成功
        $result =["error" => false, "msg" => "新增成功"];

} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
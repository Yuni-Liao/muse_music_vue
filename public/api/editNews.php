<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");


try {   
    if (isset($_FILES["news_pic"])) {

        switch ($_FILES["news_pic"]["error"]) {
            case UPLOAD_ERR_OK:
                $dir = "../dataimage/news/";
                if (!file_exists($dir)) {
                    mkdir($dir);
                }
                $from = $_FILES["news_pic"]["tmp_name"];

                $filename = basename($_FILES['news_pic']['name']);

                $to = $dir . basename($_FILES['news_pic']['name']);
                copy($from, $to);
                echo json_encode("更新成功");
                break;
            case UPLOAD_ERR_INI_SIZE:
                echo json_encode("上傳檔案太大, 不得超過", ini_get("upload_max_filesize"));
                break;
            case UPLOAD_ERR_FORM_SIZE:
                echo json_encode("上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組");
                break;
            case UPLOAD_ERR_PARTIAL:
                echo json_encode("上傳檔案不完整, 請再試一次");
                break;
            case UPLOAD_ERR_NO_FILE:
                $filename = $_POST["news_pic"];
                break;
        }
    } else {
        $filename = $_POST["news_pic"];
        echo json_encode("更新成功");
    }


        date_default_timezone_set('Asia/Taipei');
        $localTime = date('Y-m-d H:i:s');
    

        require_once("./connectMusemusic.php");
        
        $sql = "update news set
               
                news_name = :news_name, 
                singer = :singer,
                news_date = :news_date,
                news_place = :news_place,
                news_update = :news_update,
                news_con = :news_con,
                news_pic = :news_pic,
                news_area = :news_area
                WHERE news_id = :news_id";

        $editNews = $pdo->prepare($sql);
        
        $editNews->bindValue(":news_id", $_POST["news_id"]);
        $editNews->bindValue(":news_name", $_POST["news_name"]);
        $editNews->bindValue(":singer", $_POST["singer"]);
        $editNews->bindValue(":news_date", $_POST["news_date"]);
        $editNews->bindValue(":news_place", $_POST["news_place"]);
        $editNews->bindValue(":news_update", $localTime);
        $editNews->bindValue(":news_con", $_POST["news_con"]);
        $editNews->bindValue(":news_pic", $filename);
        $editNews->bindValue(":news_area", $_POST["news_area"]);

        // 執行 SQL 更新
        $editNews->execute();

        $result =["error" => false, "msg" => "編輯成功"];
    }catch (PDOException $e) {
        $result = ["error" => true, "msg" => $e->getMessage()];
    }
    echo json_encode($result);
?>

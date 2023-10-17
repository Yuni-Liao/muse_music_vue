<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');


try {   

    if(isset($_FILES["news_pic"])){
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
        $filename = $_POST["news_pic"];
        echo json_encode("更新成功"); 
    }
        // 引入連線工作的檔案
        require_once("./connectMusemusic.php");

        // 準備update SQL
        $sql = "insert into news (singer, news_name, news_date, news_place, news_con, news_area, news_pic) 
        values (:singer, :news_name, :news_date, :news_place, :news_con, :news_area, :news_pic)";

        $editNews = $pdo->prepare($sql);

        $editNews->bindValue(":singer", $_POST["add_singer"]);
        $editNews->bindValue(":news_name", $_POST["add_news_name"]);
        $editNews->bindValue(":news_date", $_POST["add_news_date"]);
        $editNews->bindValue(":news_place", $_POST["add_news_place"]);
        $editNews->bindValue(":news_con", $_POST["add_news_con"]);
        $editNews->bindValue(":news_area", $_POST["add_news_area"]);
        $editNews->bindValue(":news_pic", $filename);
        // 執行 SQL 更新
        $editNews->execute();

        // 如果更新成功
        $responseMessage = "更新成功";

    echo json_encode($responseMessage);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
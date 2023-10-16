<?php
    header('Access-Control-Allow-Origin: http://localhost:8080');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header("Access-Control-Allow-Origin: *");
    header("Content-Type:application/json;charset=utf-8");

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
    
            // 連線
            require_once("./connectMusemusic.php");
    
            // 準備 SQL
            $sql = "update carousel SET link = :link, name = :name, img = :img where car_id = :car_id";

                $carousel = $pdo->prepare($sql);
                $carousel->bindValue(":car_id", $_POST["car_id"]);
                $carousel->bindValue(":link", $_POST["link"]);
                $carousel->bindValue(":name", $_POST["name"]);
                $carousel->bindValue(":img", $filename); //
                //執行sql
                $carousel->execute();

                $result =["error" => false, "msg" => "編輯成功"];
    }catch (PDOException $e) {
        $result = ["error" => true, "msg" => $e->getMessage()];
    }
    echo json_encode($result);
?>
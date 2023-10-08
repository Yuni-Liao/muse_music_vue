<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
    switch ($_FILES["img"]["error"]) {

        case UPLOAD_ERR_OK :
            $dir = "../dataimage/index/carousel";
            if( !file_exists($dir) ){
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
    //連線
    require_once("./connectMusemusic.php");

    //準備sql
    $sql = "update carousel set link =:link, name =:name, img =:img where car_id =:car_id";
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['car_id'], $data['link'], $data['name'], $filename)) {
        $carousel = $pdo->prepare($sql);
        $carousel->bindValue(":car_id", $data["car_id"]);
        $carousel->bindValue(":link", $data["link"]);
        $carousel->bindValue(":name", $data["name"]);
        $carousel->bindValue(":img",  $filename);
        //執行sql
        $carousel->execute();
        echo json_encode("編輯成功");
    }else {
        echo json_encode("缺少必要Data");
    }

} catch (PDOException $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    }

?>

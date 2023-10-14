<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');


try {
    switch ($_FILES["prod_pic"]["error"]) {

        case UPLOAD_ERR_OK:
            $dir = "../image/ShopImage/";
            if (!file_exists($dir)) {
                mkdir($dir);
            }
            $from = $_FILES["prod_pic"]["tmp_name"];

            $filename = basename($_FILES['prod_pic']['name']);

            $to = $dir . basename($_FILES['prod_pic']['name']);
            copy($from, $to);
            echo json_encode("上傳成功");
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
            echo json_encode("檔案未選");
            break;
    }
    // 引入連線工作的檔案
    require_once("./connectMusemusic.php");
    //準備sql
    $sql = "insert into product
    (prod_id,prod_type, prod_name, prod_singer, prod_inf,prod_int,prod_pic, prod_price,prod_date,show_stat,chat_num) 
    values 
    (21,:prod_type, :prod_name, :prod_singer,:prod_int, :prod_inf,:prod_pic,:prod_price,CURRENT_TIMESTAMP,'1','0')";

    $addProd = $pdo->prepare($sql);
    $addProd->bindValue(":prod_type", $_POST["addprod_type"]);
    $addProd->bindValue(":prod_name", $_POST["addprod_name"]);
    $addProd->bindValue(":prod_singer", $_POST["addprod_singer"]);
    $addProd->bindValue(":prod_inf", $_POST["addprod_inf"]);
    $addProd->bindValue(":prod_int", $_POST["addprod_int"]);
    $addProd->bindValue(":prod_pic", $filename);
    $addProd->bindValue(":prod_price", $_POST["addprod_price"]);

    // 執行 SQL 更新
    $addProd->execute();

    // 如果更新成功
    $responseMessage = "更新成功";

    echo json_encode($responseMessage);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}

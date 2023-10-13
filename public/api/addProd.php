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
    (prod_id, prod_type, prod_name, prod_singer, prod_price, prod_inf,prod_date,show_stat,chat_num) values 
    (NULL, :prod_type, :prod_name, :prod_singer,:prod_price, :prod_inf, CURRENT_TIMESTAMP,'1','0')";

    $addProd = $pdo->prepare($sql);
    $addProd->bindValue(":prod_id", $_POST["prod_id"]);
    $addProd->bindValue(":prod_type", $_POST["prod_type"]);
    $addProd->bindValue(":prod_name", $_POST["prod_name"]);
    $addProd->bindValue(":prod_singer", $_POST["prod_singer"]);
    $addProd->bindValue(":prod_price", $_POST["prod_price"]);
    $addProd->bindValue(":prod_inf", $_POST["prod_inf"]);
    $addProd->bindValue(":prod_date", $_POST["prod_date"]);
    $addProd->bindValue(":show_stat", $_POST["show_stat"]);
    $addProd->bindValue(":prod_pic", $filename);

    // 執行sql
    if ($addProd->execute()) {
        $successResponse = [
            "message" => "新增成功",
        ];
        echo json_encode($successResponse);
    } else {
        // 如果執行失敗，可以生成一個錯誤響應
        $errorResponse = [
            "error" => [
                "message" => "新增失敗",
                "details" => "無法執行 SQL 語句",
            ],
        ];
        echo json_encode($errorResponse);
    }
} catch (Exception $e) {
    $errorResponse = [
        "error" => [
            "message" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];

    echo json_encode($errorResponse);
}

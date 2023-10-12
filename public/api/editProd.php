<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");

// 後台 - 商品管理 - 編輯商品 - 郭凱芸 (上傳圖片功能還沒好)
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

    // 引入連線工作的檔案
    if (isset($_POST["prod_type"]) && isset($_POST["prod_name"])) {
        require_once("./connectMusemusic.php");

        // 準備sql prod_pic = :prod_pic,
        $sql = "update product set
                prod_type = :prod_type,
                prod_name = :prod_name, 
                prod_singer = :prod_singer,
                prod_price = :prod_price,
                prod_inf = :prod_inf,
                prod_int = :prod_int,
                prod_date = :prod_date,
                prod_pic = :prod_pic,
                show_stat = :show_stat,
                chat_num = :chat_num
                where prod_id = :prod_id";

        $editProd = $pdo->prepare($sql);

        $editProd->bindValue(":prod_id", $_POST["prod_id"]);
        $editProd->bindValue(":prod_name", $_POST["prod_name"]);
        $editProd->bindValue(":prod_price", $_POST["prod_price"]);
        $editProd->bindValue(":prod_date", $_POST["prod_date"]);
        $editProd->bindValue(":prod_type", $_POST["prod_type"]);
        $editProd->bindValue(":prod_singer", $_POST["prod_singer"]);
        $editProd->bindValue(":prod_inf", $_POST["prod_inf"]);
        $editProd->bindValue(":prod_int", $_POST["prod_int"]);
        $editProd->bindValue(":prod_pic", $filename);
        $editProd->bindValue(":show_stat", $_POST["show_stat"]);
        $editProd->bindValue(":chat_num", $_POST["chat_num"]);

        // 執行 SQL 更新
        $editProd->execute();

        // 如果更新成功
        $responseMessage = "更新成功";
    } else {
        // 如果商品名稱或價格為空
        $responseMessage = "商品種類或商品名稱不能為空值";
    }

    echo json_encode($responseMessage);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";  
}

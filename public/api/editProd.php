<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");

// 後台 - 商品管理 - 編輯商品 - 郭凱芸 (上傳圖片功能還沒好)
try {
    // 引入連線工作的檔案
    if (isset($_POST["prod_type"]) && isset($_POST["prod_name"])) {
        require_once("./connectMusemusic.php");

        // 準備sql
        $sql = "update product set
                prod_type = :prod_type,
                prod_name = :prod_name, 
                prod_singer = :prod_singer,
                prod_price = :prod_price,
                prod_inf = :prod_inf,
                prod_int = :prod_int,
                prod_date = :prod_date,
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
        $editProd->bindValue(":show_stat", $_POST["show_stat"]);
        $editProd->bindValue(":chat_num", $_POST["chat_num"]);

        // 執行 SQL 更新
        $editProd->execute();

        // 如果问题更新成功，设置响应消息为 "更新成功"
        $responseMessage = "更新成功";
    } else {
        // 如果商品名稱或價格為空，設置回應消息為 "商品種類或商品名稱不能為空值"
        $responseMessage = "商品種類或商品名稱不能為空值";
    }

    echo json_encode($responseMessage);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";  
}

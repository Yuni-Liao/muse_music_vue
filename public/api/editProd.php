<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");

// 後台 - 商品管理 - 編輯商品 - 郭凱芸
try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");

    // 準備sql
    // 先刪除了圖片
    $sql = "update `product` set 
    prod_name = :prod_name, 
    prod_singer=:prod_singer, 
    prod_price = :prod_price,
    prod_inf=:prod_inf, 
    prod_int=:prod_int,
    show_stat=:show_stat, 
    prod_date = :prod_date, 
    chat_num=:chat_num,
    prod_type = :prod_type 
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

    // 執行sql
    if ($editProd->execute()) {
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

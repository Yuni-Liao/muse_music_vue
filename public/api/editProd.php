<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// 後台 - 商品管理 - 編輯商品 - 郭凱芸
// 獲取前端發送的數據
$prod_id = $_POST['id'];
$prod_name = $_POST['name'];
$prod_price = $_POST['price'];
$prod_date = $_POST['date'];
$prod_type = $_POST['prod_type']; // 獲取商品分類

try {
    require_once("./connectMusemusic.php");

    // 更新數據庫中的數據，包括商品分類
    $sql = "UPDATE product SET prod_name = :prod_name, prod_price = :prod_price, prod_date = :prod_date, prod_type = :prod_type WHERE prod_id = :prod_id";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':prod_id', $prod_id);
    $stmt->bindParam(':prod_name', $prod_name);
    $stmt->bindParam(':prod_price', $prod_price);
    $stmt->bindParam(':prod_date', $prod_date);
    $stmt->bindParam(':prod_type', $prod_type); // 插入商品分類到數據庫

    $stmt->execute();

    // 返回成功響應
    echo json_encode(["message" => "商品更新成功"]);
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "商品更新失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}

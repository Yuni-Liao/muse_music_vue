<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");


try {
    require_once("./connectMusemusic.php");
    // 取得所有資料
    $sql = "select * from news";
    $news = $pdo->query($sql);

    if ($news->rowCount() === 0) {
        echo json_encode(["message" => "查無商品"]);
    } else {
        $newsData = $news->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($newsData);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>
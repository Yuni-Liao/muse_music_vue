<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 

// 後台 - 檢舉留言管理 - 郭凱芸
try {
    require_once("./connectMusemusic.php");
    //取得所有留言資料
    $sql = "select * from msg";
    $msg = $pdo->query($sql);

    if($msg->rowCount()===0){
        echo json_encode(["message" => "查無商品"]);
    }else{
        $msgData = $msg->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($msgData);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>

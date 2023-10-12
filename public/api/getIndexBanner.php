<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json"); 

// 前台 - 首頁輪播渲染 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $sql = "select * from carousel where status = 1";
    $carousel = $pdo->query($sql);

    if($carousel->rowCount()===0){
        echo json_encode(["message" => "查無輪播圖"]);
    }else{
        $carouselData = $carousel->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($carouselData);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>


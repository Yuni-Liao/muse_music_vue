<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");

// 後台排行榜 - select 的全部專輯id && name - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $sql = "select alb_id, alb_name from album";

    
    $albumRank = $pdo->query($sql);

    if($albumRank->rowCount()===0){
        echo json_encode(["message" => "查無資料"]);
    }else{
        $albumRank = $albumRank->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($albumRank);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>


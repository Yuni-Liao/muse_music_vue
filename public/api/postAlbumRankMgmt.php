<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json"); 

// 後台 - 專輯排行榜 畫面 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $sql = "select sub.rank_id, sub.mem_id, sub.alb_name, sub.share_num from (
        select a.alb_id, ar.rank_id, a.mem_id, a.alb_name, a.share_num from album a join alb_rank ar ON a.alb_id = ar.alb_id
        order by a.share_num DESC) as sub
    order by sub.rank_id ASC";

    
    $albumRank = $pdo->query($sql);

    if($albumRank->rowCount()===0){
        echo json_encode(["message" => "查無輪播圖"]);
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


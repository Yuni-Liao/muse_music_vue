<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json"); 

// 後台 - 單曲排行榜 畫面 - 廖妍榛
try {
    require_once("./connectMusemusic.php");
    $sql = "select rank_id, mem_id, s_name from song s join s_rank sr where s.s_id = sr.s_id order by s.play_num DESC";
    $songRank = $pdo->query($sql);

    if($songRank->rowCount()===0){
        echo json_encode(["message" => "查無輪播圖"]);
    }else{
        $songRank = $songRank->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($songRank);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>


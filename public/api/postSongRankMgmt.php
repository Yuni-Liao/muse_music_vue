<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");

// 後台 - 單曲排行榜 畫面 - 廖妍榛
try {
    require_once("./connectMusemusic.php");
    
    $sql ="select sub.rank_id, sub.mem_id, sub.s_name, sub.share_num
    from (
        select sr.rank_id, s.mem_id, s.s_name, s.share_num
        from s_rank sr
        join song s on sr.s_id = s.s_id
        order by s.share_num DESC
    ) as sub
    order by sub.rank_id ASC";

    $songRank = $pdo->query($sql);

    if($songRank->rowCount()===0){
        echo json_encode(["message" => "查無資料"]);
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


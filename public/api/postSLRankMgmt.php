<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");


try {
    require_once("./connectMusemusic.php");

    $sql = "select sub.rank_id, sub.mem_id, sub.sl_id, sub.sl_name, sub.fol_num from (
        select sl.sl_id, slr.rank_id, sl.mem_id, sl.sl_name, sl.fol_num from song_list sl join sl_rank slr ON sl.sl_id = slr.sl_id
        order by sl.fol_num DESC) as sub
    order by sub.rank_id ASC limit 10";

    
    $SLRank = $pdo->query($sql);

    if($SLRank->rowCount()===0){
        echo json_encode(["message" => "查無資料"]);
    }else{
        $SLRank = $SLRank->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($SLRank);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>
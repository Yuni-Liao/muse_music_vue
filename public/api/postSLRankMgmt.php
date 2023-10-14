<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");


try {
    require_once("./connectMusemusic.php");

    $sql = "SELECT sl_id, mem_id, sl_name, fol_num
    FROM song_list 
    
    ORDER BY fol_num ASC
    LIMIT 10";

    
$SLRankResult = $pdo->query($sql);

if ($SLRankResult->rowCount() === 0) {
    echo json_encode(["message" => "查無資料"]);
} else {
    $SLRankData = $SLRankResult->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($SLRankData);
}
} catch (PDOException $e) {

$errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
echo json_encode($errorResponse);
}
?>
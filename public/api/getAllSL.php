<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");


try {
    require_once("./connectMusemusic.php");

    $sql = "select sl_id, sl_name from song_list";

    
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
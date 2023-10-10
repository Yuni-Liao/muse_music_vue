<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");

// 後台 - 排行榜管理 - 編輯專輯排行 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $sql = "update alb_rank set alb_id = :alb_id where rank_id = :rank_id";

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data["alb_id"], $data["rank_id"])) {
        $editAlbum = $pdo->prepare($sql);
        $editAlbum->bindValue(":alb_id", $data["alb_id"]);
        $editAlbum->bindValue(":rank_id", $data["rank_id"]);
        $editAlbum->execute();

        echo json_encode(["message" => "編輯成功"]);
    }else {
        echo json_encode(["error" => "缺少必要Data"]);
    }

} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>
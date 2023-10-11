<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");

// 後台 - 排行榜管理 - 編輯單曲排行 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $sql = "update s_rank set s_id = :s_id where rank_id = :rank_id";

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data["s_id"], $data["rank_id"])) {
        $editSong = $pdo->prepare($sql);
        $editSong->bindValue(":s_id", $data["s_id"]);
        $editSong->bindValue(":rank_id", $data["rank_id"]);
        $editSong->execute();

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


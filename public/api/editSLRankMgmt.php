<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


try {
    require_once("./connectMusemusic.php");

    $sql = "update sl_rank set sl_id = :s_id where rank_id = :rank_id";

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data["sl_id"])) {
        $editSL = $pdo->prepare($sql);
        $editSL->bindValue(":sl_id", $data["sl_id"]);
        $editSL->bindValue(":rank_id", $data["rank_id"]);
        $editSL->execute();

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
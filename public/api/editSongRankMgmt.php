<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json"); 

// 後台 - 排行榜管理 - 編輯單曲排行 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $sql = "update s_rank sr join song s on sr.s_id = s.s_id set sr.s_id = :sr_s_id where s.s_name = :s_s_name";

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['sr_s_id'], $data['s_s_name'])) {
        $editMem = $pdo->prepare($sql);
        $editMem->bindValue(":sr_s_id", $data["sr_s_id"]);
        $editMem->bindValue(":s_s_name", $data["s_s_name"]);
        $editMem->execute();

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


<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json"); 

// 前台 - 編輯帳號設定 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $sql = "update member set mem_name = :mem_name, email = :email, county = :county, mem_psw = :mem_psw where mem_id = :mem_id";

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['mem_name'], $data['email'], $data['county'], $data['mem_id'], $data['mem_psw'])) {
        $editMem = $pdo->prepare($sql);
        $editMem->bindValue(":mem_name", $data["mem_name"]);
        $editMem->bindValue(":email", $data["email"]);
        $editMem->bindValue(":county", $data["county"]);
        $editMem->bindValue(":mem_id", $data["mem_id"]);
        $editMem->bindValue(":mem_psw", $data["mem_psw"]);
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


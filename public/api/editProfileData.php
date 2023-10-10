<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

try {
    require_once("./connectMusemusic.php");

    $sql = "UPDATE member SET name = :mem_name, introduction = :intro, county = :county, socialMedia = :socialMedia WHERE mem_id = :mem_id";
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['name'], $data['introduction'], $data['county'], $data['socialMedia'], $data['mem_id'])) {
        $editPro = $pdo->prepare($sql);
        $editPro->bindValue(":mem_name", $data["name"]);
        $editPro->bindValue(":intro", $data["introduction"]);
        $editPro->bindValue(":county", $data["county"]);
        $editPro->bindValue(":socialMedia", $data["socialMedia"]);
        $editPro->bindValue(":mem_id", $data["mem_id"]);
        $editPro->execute();

        echo json_encode(["message" => "編輯成功"]);
    } else {
        echo json_encode(["error" => "缺少必要 Data"]);
    }
} catch (PDOException $e) {
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>

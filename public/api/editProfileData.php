<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json;charset=utf-8");

try {
    require_once("./connectMusemusic.php");

    // $sql = "UPDATE member SET mem_name = :mem_name, intro = :intro, county = :county, social_media = :social_media, mem_pic = :mem_pic, cover_pic= :cover_pic WHERE mem_id = :mem_id";
    /// 1016 - 廖妍榛
    $sql = "UPDATE member SET mem_aka = :mem_aka, intro = :intro, county = :county, social_media = :social_media WHERE mem_id = :mem_id";
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['mem_aka'], $data['intro'], $data['county'], $data['social_media'], $data['mem_id'])) {
        $editPro = $pdo->prepare($sql);
        $editPro->bindValue(":mem_aka", $data["mem_aka"]);
        $editPro->bindValue(":intro", $data["intro"]);
        $editPro->bindValue(":county", $data["county"]);
        $editPro->bindValue(":social_media", $data["social_media"]);
        /// 1016 - 廖妍榛
        // $editPro->bindValue(":mem_pic", $data["mem_pic"]);
        // $editPro->bindValue(":cover_pic", $data["cover_pic"]);
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

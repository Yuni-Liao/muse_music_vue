<?php
try {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    // mem_id是否有get到
    if (isset($_GET['mem_id'])) {
        $mem_id = $_GET['mem_id'];

        require_once("./connectMusemusic.php");

        $sql = "SELECT * FROM member WHERE mem_id = :mem_id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':mem_id', $mem_id, PDO::PARAM_INT);
        $stmt->execute();

        //如果有回傳資料
        if ($stmt->rowCount() === 0) {
            echo json_encode(["message" => "查無資料"]);
        } else {
            $memberdata = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($memberdata); 
        }
    } else {
        echo json_encode(["message" => "目前尚未有 'mem_id'"]);
    }
} catch (PDOException $e) {
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}

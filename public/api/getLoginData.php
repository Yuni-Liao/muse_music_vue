<?php

session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once("./connectMusemusic.php");

try {
    // 检查是否有mem_id參數
    if (isset($_GET['mem_id'])) {
        // mem_id
        $mem_id = $_GET['mem_id'];

        // 檢查是否登錄
        if (isset($_SESSION['mem_id']) && $_SESSION['mem_id'] == $mem_id) {
            // 獲取mem_id
            $sql = "SELECT * FROM member WHERE mem_id = :mem_id";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":mem_id", $mem_id, PDO::PARAM_INT);
            $stmt->execute();

            // 檢查數據
            if ($stmt->rowCount() > 0) {
                $memberdata = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($memberdata); // 返回JSON
            } else {
                echo json_encode(["message" => "查無資訊"]);
            }
        } else {
            echo json_encode(["message" => "未登錄"]);
        }
    } else {
        echo json_encode(["message" => " mem_id 未提供"]);
    }
} catch (PDOException $e) {
    error_log("查詢失败：" . $e->getMessage());
    echo json_encode(["message" => "查詢失败"]);
}

<?php
//新增單曲留言失敗中QQ
try {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json");

    // 取得前端發送的JSON數據
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data);

    if ($data === null) {
        // 如果JSON解析失敗
        echo json_encode(["success" => false, "msg" => "无效的JSON数据"]);
        exit;
    }

    // 取得單曲頁面新留言内容
    $newMessage = $data->message;

    // SQL新增回傳到msg表格
    $sql = "INSERT INTO msg (mem_id, s_id, msg_con, msg_date, msg_like) VALUES (:mem_id, :s_id, :msg_con, :msg_date, :msg_like)";
    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':mem_id', $mem_id, PDO::PARAM_INT);
    $stmt->bindParam(':s_id', $s_id, PDO::PARAM_INT);
    $stmt->bindParam(':msg_con', $newMessage->message, PDO::PARAM_STR);
    $stmt->bindParam(':msg_date', $newMessage->date, PDO::PARAM_STR);
    $stmt->bindParam(':msg_like', $newMessage->like, PDO::PARAM_INT);

    $mem_id = 1; // 先假設 mem_id 是 1
    $s_id = 1; // 先假設 s_id 是 1

    if ($stmt->execute()) {
        // 返回成功和新留言对象
        echo json_encode(["success" => true, "message" => $newMessage]);
    } else {
        echo json_encode(["success" => false, "msg" => "留言失败"]);
    }
} catch (Exception $e) {
    $errorResponse = ["success" => false, "msg" => "留言发生错误：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>

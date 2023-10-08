<?php
//新增單曲留言失敗中QQ
try {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json");

    //取得單曲頁面 新留言内容
    $newMessage = $_POST['message'];

    // SQL新增  回傳到msg表格
    $sql = "INSERT INTO msg (msg_id, mem_id, s_id, msg_con,msg_date, msg_like) VALUES (:msg_id, :mem_id, :s_id, :msg_con, :msg_date, :msg_like)";
    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':msg_id', $msg_id, PDO::PARAM_INT);
    $stmt->bindParam(':mem_id', $mem_id, PDO::PARAM_INT);
    $stmt->bindParam(':s_id', $s_id, PDO::PARAM_INT);
    $stmt->bindParam(':msg_con', $newMessage, PDO::PARAM_STR);
    $stmt->bindParam(':msg_date', $msg_date, PDO::PARAM_STR);
    $stmt->bindParam(':msg_like', $msg_like, PDO::PARAM_STR);

    $mem_id = 1; // 先假設 mem_id 是 1
    $s_id = 1; // 先假設 s_id 是 1

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "msg" => "留言成功"]);
    } else {
        echo json_encode(["success" => false, "msg" => "留言失敗"]);
    }
} catch (Exception $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["success" => false, "msg" => "留言發生錯誤：" . $e->getMessage()];
    echo json_encode($errorResponse);
}

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

try {
    require_once("./connectMusemusic.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['mem_acc']) && isset($_POST['mem_psw']) ) {
        $mem_acc = $_POST['mem_acc'];
        $mem_psw = $_POST['mem_psw'];
        

        if (empty($mem_acc) || empty($mem_psw) ) {
            echo json_encode(["error" => "帳號密碼為必填欄位"]);
        } else {
            // sql 新增會員資料
            $sql = "INSERT INTO member (mem_acc, mem_psw) VALUES (:mem_acc, :mem_psw)";
            $registerpsw = $pdo->prepare($sql);
            $registerpsw->bindValue(":mem_acc",$mem_acc);
            $registerpsw->bindValue(":mem_psw",$mem_psw);
            
            if ($registerpsw->execute()) {
                $mem_id = $pdo->lastInsertId();
                echo json_encode(["message" => "註冊成功", "mem_id" => $mem_id]);
            } else {
              
                $errorInfo = $pdo->errorInfo();
                echo json_encode(["error" => "註冊失敗", "message" => $errorInfo[2]]);
            }
        }
    } else {
        
        echo json_encode(["error" => "請填寫帳號、密碼"]);
    }
} catch (PDOException $e) {
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>

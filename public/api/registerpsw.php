<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

try {
    require_once("./connectMusemusic.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['mem_acc']) && isset($_POST['mem_psw']) && isset($_POST['mem_id']) ) {
        $mem_id = $_POST['mem_id'];
        $mem_acc = $_POST['mem_acc'];
        $mem_psw = $_POST['mem_psw'];

        if (empty($mem_acc) || empty($mem_psw)) {
            echo json_encode(["error" => "帳號密碼為必填欄位"]);
        } else {
            // sql 更新會員資料
            $sql = "UPDATE member SET mem_psw = :mem_psw , mem_acc = :mem_acc WHERE mem_id=:mem_id  ";
            $updatePsw = $pdo->prepare($sql);
            $updatePsw->bindValue(":mem_id", $mem_id);
            $updatePsw->bindValue(":mem_acc", $mem_acc);
            $updatePsw->bindValue(":mem_psw", $mem_psw);
            
            if ($updatePsw->execute()) {

                $mem_id = $pdo->lastInsertId();

                $response = [
                    'mem_id' => $mem_id,
                    'message' => '註冊成功!!',
                ];
        
                echo json_encode($response);
            } else {
                $errorInfo = $updatePsw->errorInfo();
                echo json_encode(["error" => "密碼更新失敗", "message" => $errorInfo[2]]);
            }
        }
    } else {
        echo json_encode(["error" => "請填帳號、密碼"]);
    }
} catch (PDOException $e) {
    $errorResponse = ["message" => "錯誤查詢：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>

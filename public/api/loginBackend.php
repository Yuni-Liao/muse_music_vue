<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once("./connectMusemusic.php");

$response = [];

try {
    if (isset($_POST['acc']) && isset($_POST['admin_psw'])) {
        $acc = trim($_POST['acc']);
        $admin_psw = trim($_POST['admin_psw']);
        
        // 比對資料
        $sql = "SELECT * FROM admin_acc WHERE acc=:acc AND admin_psw=:admin_psw";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":acc", $acc);
        $stmt->bindParam(":admin_psw", $admin_psw);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $response = ["success" => true, "message" => "登入成功"];
        } else {
            $response = ["message" => "帳號或密碼不正確"];
        }
    } else {
        $response = ["message" => "帳密沒有輸入"];
    }
} catch (PDOException $e) {
    $response = ["message" => "登入失敗：" . $e->getMessage()];
}

header('Content-Type: application/json');
echo json_encode($response);
?>

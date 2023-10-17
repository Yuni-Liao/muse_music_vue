<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

try {
    require_once("./connectMusemusic.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['mem_name']) && isset($_POST['mem_aka']) && isset($_POST['email'])) {
        $mem_name = $_POST['mem_name'];
        $mem_aka = $_POST['mem_aka'];
        $email = $_POST['email'];

        if (empty($mem_name) || empty($mem_aka) || empty($email)) {
            echo json_encode(["error" => "姓名、暱稱、信箱為必填欄位"]);
        } else {
            // sql 新增會員資料
            $sql = "INSERT INTO member (mem_name, mem_aka, email) VALUES (:mem_name, :mem_aka, :email)";
            $data = json_decode(file_get_contents('php://input'), true);
            $register = $pdo->prepare($sql);
            $register->bindValue(":mem_name", $data["mem_name"]);
            $register->bindValue(":mem_aka",$data["mem_aka"]);
            $register->bindValue(":email", $data["email"]);
            
            if ($register->execute()) {
                $mem_id = $pdo->lastInsertId();
                echo json_encode(["message" => "註冊成功", "mem_id" => $mem_id]);
            } else {
              
                $errorInfo = $pdo->errorInfo();
                echo json_encode(["error" => "註冊失敗", "message" => $errorInfo[2]]);
            }
        }
    } else {
        
        echo json_encode(["error" => "請填寫姓名、暱稱、信箱"]);
    }
} catch (PDOException $e) {
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>

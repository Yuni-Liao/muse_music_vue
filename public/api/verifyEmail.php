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
            // 拿到資料庫email做驗證
            $getEmailQuery = "SELECT email FROM member WHERE mem_name = :mem_name AND mem_aka = :mem_aka";
            $getEmailStatement = $pdo->prepare($getEmailQuery);
            $getEmailStatement->bindValue(":mem_name", $mem_name);
            $getEmailStatement->bindValue(":mem_aka", $mem_aka);
            $getEmailStatement->execute();
            $result = $getEmailStatement->fetch(PDO::FETCH_ASSOC);

            if ($result && isset($result['email'])) {
                // 產生驗證碼
                $verificationCode = generateVerificationCode();

                // 更新驗證碼
                $updateVerificationCodeQuery = "UPDATE member SET verification_code = :verification_code WHERE email = :email";
                $updateStatement = $pdo->prepare($updateVerificationCodeQuery);
                $updateStatement->bindValue(":verification_code", $verificationCode);
                $updateStatement->bindValue(":email", $result['email']);
                $updateStatement->execute();

                $to = $result['email']; // 信箱
                $subject = "驗證碼"; // 驗證碼
                $message = "您的驗證碼是：" . $verificationCode; // 内容

                // 发送
                if (mail($to, $subject, $message)) {
                    echo json_encode(["message" => "驗證碼已發送"]);
                } else {
                    echo json_encode(["error" => "驗證碼發送失敗"]);
                }
            } else {
                echo json_encode(["error" => "用戶信箱不存在"]);
            }
        }
    } else {
        echo json_encode(["error" => "請填寫姓名、暱稱、信箱"]);
    }
} catch (PDOException $e) {
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}

// 生成驗證碼
function generateVerificationCode($length = 6) {
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $code = '';
    for ($i = 0; $i < $length; $i++) {
        $code .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $code;
}

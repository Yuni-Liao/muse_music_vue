<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

try {
    require_once("./connectMusemusic.php");

    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = validate($_POST['username']);
        $password = validate($_POST['password']);

        // 帳密輸入時，自動去掉空格~~~
        $username = trim($username);
        $password = trim($password);

        if (empty($username) || empty($password)) {
            echo json_encode(["error" => "帳號和密碼為必填欄位"]);
        } else {
            // 綁定帳密做資料庫查詢
            $sql = "SELECT * FROM member WHERE mem_acc = :username AND mem_psw = :password";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":username", $username);
            $stmt->bindParam(":password", $password);
            $stmt->execute();

            // 檢查帳密
            if ($stmt->rowCount() > 0) {

                // 查詢會員帳密
                $sql = "SELECT mem_name FROM member WHERE mem_acc = :username";
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(':username', $username);
                $stmt->execute();
                $result = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($result) {
                    $userName = $result['mem_name'];
                    echo json_encode(["message" => "登入成功", "mem_name" => $userName]);
                }
            } else {
                echo json_encode(["error" => "帳戶密碼不正確"]);
            }
        }
    } else {
        echo json_encode(["error" => "帳號和密碼為必填欄位"]);
    }
} catch (PDOException $e) {
    // 錯誤處理 
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}

function validate($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

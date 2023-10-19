<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

try {
    require_once("./connectMusemusic.php");

    if (isset($_POST['acc']) && isset($_POST['admin_psw'])) { 
        $username = validate($_POST['acc']);
        $password = validate($_POST['admin_psw']);

        // 帳密輸入時，自動去掉空格~~~
        $username = trim($username);
        $password = trim($password);

        if (empty($username) || empty($password)) {
            echo json_encode(["error" => "帳號和密碼為必填欄位"]);
        } else {
            // 綁定帳密做資料庫查詢
            $sql = "SELECT * FROM admin_acc WHERE acc = :username AND admin_psw = :password";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":username", $username);
            $stmt->bindParam(":password", $password);
            $stmt->execute();

            // 檢查帳密
            if ($stmt->rowCount() > 0) {
                // 查詢管理員帳密，新增id綁定
                $sql = "SELECT admin_id, name FROM admin_acc WHERE acc = :username";
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(':username', $username);
                $stmt->execute();
                $result = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($result) {
                    // 新增會員id
                    $userId = $result['admin_id'];
                    $userName = $result['name'];
                    echo json_encode(["message" => "登入成功", "admin_id" => $userId, "name" => $userName]);
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
?>

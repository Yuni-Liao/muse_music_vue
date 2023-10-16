<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

try {
    require_once("./connectMusemusic.php");

    if ($_SERVER["REQUEST_METHOD"]=="POST") {
        // 從 POST 請求中獲取用戶輸入的帳號和密碼
        // $mem_acc = validate($_POST['mem_acc']);
        // $mem_psw = validate($_POST['mem_psw']);
        // $mem_name = validate($_POST['mem_name']);
        // $mem_aka = validate($_POST['mem_aka']);
        // $email = validate($_POST['email']);
        
        $mem_name = $_POST['mem_name'];
        $mem_aka = $_POST['mem_aka'];
        $email = $_POST['email'];

        
        // 帳密輸入時，自動去掉空格
        // $mem_acc = trim($mem_acc);
        // $mem_psw = trim($mem_psw);

        // if (empty($mem_acc) || empty($mem_psw) || empty($mem_name) || empty($mem_aka) || empty($email)) {
        if ( empty($mem_name) || empty($mem_aka) || empty($email)) {
            echo json_encode(["error" => "帳號、密碼、姓名、暱稱、信箱為必填欄位"]);
        } else {
            // 準備 SQL 語句以新增帳號和密碼到資料庫
            $sql = "INSERT INTO member ( mem_name, mem_aka, email) VALUES ( :mem_name, :mem_aka, :email)";
            // INSERT INTO `member`(`mem_name`, `mem_acc`, `email`) VALUES ('[value-1]','[value-2]','[value-3]');
            $register = $pdo->prepare($sql);
            // $register->bindValue(":mem_acc", $mem_acc);
            // $register->bindValue(":mem_psw", $mem_psw);
            $register->bindValue(":mem_name", $mem_name);
            $register->bindValue(":mem_aka", $mem_aka);
            $register->bindValue(":email", $email);

            if ($register->execute()) {
                $mem_id = $pdo->lastInsertId(); // 獲取新插入的 mem_id

                // 插入成功後，獲得 mem_id，您可以在這裡處理它，例如將其返回給客戶端
                echo json_encode(["message" => "註冊成功", "mem_id" => $mem_id]);
            } else {
                echo json_encode(["error" => "註冊失敗"]);
            }
        }
    } else {
        echo json_encode(["error" => "請使用 POST 請求註冊"]);
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

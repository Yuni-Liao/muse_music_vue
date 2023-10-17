<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json"); 

// 後台 - 管理員管理畫面渲染 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    // 之後要改動態 - 廖妍榛
    // $admin_id = $_GET['admin_id'];
    // $sql = "select * from admin_acc where admin_id = " . $admin_id;
    // $adminAcc = $pdo->query($sql);
    $sql = "select * from admin_acc";
    $adminAcc = $pdo->query($sql);

    if($adminAcc->rowCount()===0){
        echo json_encode(["message" => "查無資料"]);
    }else{
        $adminAccData = $adminAcc->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($adminAccData);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>


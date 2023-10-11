<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json"); 

// 前台 - 帳號設定 - 廖妍榛
try {
    require_once("./connectMusemusic.php");

    $mem_id = $_GET['mem_id'];
    $sql = "select * from member where mem_id = " . $mem_id;
    $member = $pdo->query($sql);

    if($member->rowCount()===0){
        echo json_encode(["message" => "查無資料"]);
    }else{
        $memberData = $member->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberData);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>


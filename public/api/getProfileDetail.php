<?php
try {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
     // 引入包含數據庫連接的文件（connectMusemusic.php）
     require_once("./connectMusemusic.php");
;
     // 執行 SQL 查詢以獲取數據
     $mem_id = $_GET['mem_id'];
$sql = "SELECT * FROM member WHERE mem_id = " . $mem_id;
$member = $pdo->query($sql);

     // 如果找到數據，將其取回並以 JSON 格式返回
     if ($member->rowCount() === 0) {
         echo json_encode(["message" => "查無資料"]);
     } else {
         $memberdata = $member->fetchAll(PDO::FETCH_ASSOC);
         echo json_encode($memberdata); // 返回 JSON 字串
     }
 } catch (PDOException $e) {
     $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
     echo json_encode($errorResponse);
 }
 ?>



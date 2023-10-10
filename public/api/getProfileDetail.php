<?php
   
     // 圖片上傳
//      if ($_FILES["member_imageURL"]["error"] === 0) {
//         $dir = "../dataimage/member/";
//         if (!file_exists($dir)) {
//             mkdir($dir);
//         }
//         $from = $_FILES["member_imageURL"]["tmp_name"];
//         $filename = basename($_FILES["member_imageURL"]["name"]);
//         $to = $dir . $filename;
//         copy($from, $to);

//         $mem_pic = $filename;
//         $cover_pic =$filename;

//         // SQL 新增 
//         $sql = "INSERT INTO member (mem_pic, cover_pic) VALUES (:mem_pic, :cover_pic)";
//         $member = $pdo->prepare($sql);


//     } else {
//         echo json_encode(["error" => true, "msg" => "資料未上傳成功"]); // 如果沒有圖片，預設回應
//     }

   

// } catch (PDOException $e) {
//     $result = ["error" => true, "msg" => $e->getMessage()];
//     echo json_encode($result);
// }
try {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
     // 引入包含數據庫連接的文件（connectMusemusic.php）
     require_once("./connectMusemusic.php");
//      if ($_FILES["member_imageURL"]["error"] === 0) {
//         $dir = "../dataimage/member/";
//         if (!file_exists($dir)) {
//             mkdir($dir);
//         }
//         $from = $_FILES["member_imageURL"]["tmp_name"];
//         $filename = basename($_FILES["member_imageURL"]["name"]);
//         $to = $dir . $filename;
//         copy($from, $to);

//         $mem_pic = $filename;
//         $cover_pic =$filename;
     // 執行 SQL 查詢以獲取數據
     $sql = "SELECT * FROM member WHERE mem_id = 1";
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



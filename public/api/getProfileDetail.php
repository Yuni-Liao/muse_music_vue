<?php
   header('Access-Control-Allow-Origin:*');
   header("Content-Type:application/json;charset=utf-8");
   

try {

     // 圖片上傳
     if ($_FILES["member_imageURL"]["error"] === 0) {
        $dir = "../dataimage/member/";
        if (!file_exists($dir)) {
            mkdir($dir);
        }
        $from = $_FILES["member_imageURL"]["tmp_name"];
        $filename = basename($_FILES["member_imageURL"]["name"]);
        $to = $dir . $filename;
        copy($from, $to);

        $mem_pic = $filename;
        $cover_pic =$filename;

        // SQL 新增 
        $sql = "INSERT INTO member (mem_pic, cover_pic, mem_name, intro, county, social_media) VALUES (:mem_pic, :cover_pic, :mem_name, :intro, :county, :social_media)";
        $member = $pdo->prepare($sql);

    } else {
        echo json_encode(["error" => true, "msg" => "資料未上傳成功"]); // 如果沒有圖片，預設回應
    }

    require_once("./connectMusemusic.php");
    $mem_id = $_GET["mem_id"];
    $mem_name = $_GET["mem_name"];
    $intro = $_GET["intro"];
    $county = $_GET["county"];
    $social_media = $_GET["social_media"];
    
// 更新會員資料
$updateSql = "UPDATE member SET mem_name = :mem_name, intro = :intro, county = :county, social_media = :social_media WHERE mem_id = :mem_id";
$updateMember = $pdo->prepare($updateSql);
$updateMember->bindValue(":mem_name", $mem_name);
$updateMember->bindValue(":intro", $intro);
$updateMember->bindValue(":county", $county);
$updateMember->bindValue(":social_media", $social_media);
$updateMember->bindValue(":mem_id", $mem_id);

if ($member->execute() && $updateMember->execute()) {
    // 更新成功，獲取已更新的會員資料
    $sql = "SELECT * FROM member WHERE mem_id = :mem_id";
    $member = $pdo->prepare($sql);
    $member->bindValue(":mem_id", 1);
    $member->execute();
    $updatedMember = $member->fetch(PDO::FETCH_ASSOC);

    $result = ["error" => false, "msg" => "會員資料更新成功", "data" => $updatedMember];
} else {
    // 更新失敗
    $result = ["error" => true, "msg" => "會員資料更新失敗"];
}
} catch (PDOException $e) {
    $result = ["error" => true, "msg" => $e->getMessage()];
    echo json_encode($result);
}
    

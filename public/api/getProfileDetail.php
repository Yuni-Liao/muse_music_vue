<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type: application/json;charset=utf-8");

try {
    require_once("./connectMusemusic.php");

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
        $cover_pic = "";
        $mem_aka = $_POST["mem_aka"];
        $intro = $_POST["intro"];
        $county = $_POST["county"];
        $social_media = $_POST["social_media"];

        // SQL 新增 
        $sql = "INSERT INTO member (mem_pic, cover_pic, mem_aka, intro, county, social_media) VALUES (:mem_pic, :cover_pic, :mem_name, :intro, :county, :social_media)";
        $member = $pdo->prepare($sql);

        $member->bindValue(":mem_pic", $mem_pic);
        $member->bindValue(":cover_pic", $cover_pic);
        $member->bindValue(":mem_aka", $mem_aka);
        $member->bindValue(":intro", $intro);
        $member->bindValue(":county", $county);
        $member->bindValue(":social_media", $social_media);
        $member->execute();

        $result = ["error" => false, "msg" => "新增成功"];
        echo json_encode($result);
    } else {
        echo "資料未上傳成功"; // 如果沒有圖片，預設回應
    }
} catch (PDOException $e) {
    $result = ["error" => true, "msg" => $e->getMessage()];
    echo json_encode($result);
}

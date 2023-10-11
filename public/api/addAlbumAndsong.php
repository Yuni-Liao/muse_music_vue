<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");
    //開啟一個交易
    $pdo->beginTransaction();
    $memid = $_POST["memid"];
    $alb_id = $_POST["alb_id"];
    $alb_img = $_POST["alb_img"];
    $alb_name = $_POST["alb_name"];
    $alb_intro = $_POST["alb_intro"];
    //把歌曲加入alb_id
    $sidAddArray = json_decode($_POST["selectedAddSongs"]); //從前端獲取的已選擇歌曲的 s_id 陣列

    //新增專輯
    $sql1 = "
    INSERT INTO album (`alb_id`, `alb_name`, `alb_intro`, `alb_img`, `upload_date`, `update_date`, `mem_id`, `share_num`) 
    VALUES (:alb_id, :alb_name, :alb_intro, :alb_img, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, :memid, '0');
    ";
    $addAlbum = $pdo->prepare($sql1);
    $addAlbum->bindValue(":alb_id", $alb_id);
    $addAlbum->bindValue(":alb_name", $alb_name);
    $addAlbum->bindValue(":alb_intro", $alb_intro);
    $addAlbum->bindValue(":alb_img", $alb_img);
    $addAlbum->bindValue(":memid", $memid);
    $addAlbum->execute();

    if (count($sidAddArray) > 0) {
        foreach ($sidAddArray as $i => $s_id1) {


            $sql2 = "UPDATE song SET alb_id=:alb_id WHERE s_id=:s_id;";
            $addSongofAlbum = $pdo->prepare($sql2);
            $addSongofAlbum->bindValue(":s_id", $s_id1);
            $addSongofAlbum->bindValue(":alb_id", $alb_id);
            $addSongofAlbum->execute();
        }
    }

    $pdo->commit();
    $result = ["error" => false, "msg" => "交易成功"];
    echo json_encode($result);
} catch (Exception $e) {
    $pdo->rollBack(); //捨棄交易
    // $result = ["error" => true, "msg" => "系統錯誤, 請通知系統維護人員"];
    // echo json_encode($result);
    $errorResponse = [
        "error" => [
            "message" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($errorResponse);
}

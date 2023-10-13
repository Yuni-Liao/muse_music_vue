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

    $s_id = $_POST["s_id"];
    $reviewtype = $_POST["reviewtype"]; //1:批准 2:拒絕

    //把歌曲加入alb_id
    $SongCatsArray = json_decode($_POST["selectedSongCats"]); //從前端獲取的已選擇歌曲的 mcat_id 陣列
    //修改審核結果
    if ($reviewtype == 1) {
        //批准-> 審核狀態s_stat = 1 已審核，審核結果 show_stat= 1 審核通過 
        $sql1 = "UPDATE song SET s_stat = '1', show_stat = '1' WHERE s_id = :s_id;";
    } elseif ($reviewtype == 2) {
        //駁回-> 審核狀態s_stat = 1 已審核，審核結果 show_stat= 0 未過 
        $sql1 = "UPDATE song SET s_stat = '1', show_stat = '0' WHERE s_id = :s_id;";
    }
    $reviewsong = $pdo->prepare($sql1);
    $reviewsong->bindValue(":s_id", $s_id);
    $reviewsong->execute();

    //覆寫歌曲類別

    if ($reviewtype = 1) {

        $sql2 = " DELETE FROM song_cat WHERE s_id =:s_id";
        $delSongCats = $pdo->prepare($sql2);
        $delSongCats->bindValue(":s_id", $s_id);
        $delSongCats->execute();

        foreach ($SongCatsArray as $i => $SongCat) {

            $sql3 = "INSERT INTO song_cat ( s_id , mcat_id) VALUES (:s_id, :mcat_id)";
            $editSongCats = $pdo->prepare($sql3);
            $editSongCats->bindValue(":s_id", $s_id);
            $editSongCats->bindValue(":mcat_id", $SongCat);
            $editSongCats->execute();
        }
    }


    $pdo->commit();
    $result = ["error" => false, "msg" => "交易成功"];
    echo json_encode($result);
} catch (Exception $e) {
    $pdo->rollBack(); //捨棄交易
    // $result = ["error" => true, "msg" => "系統錯誤, 請通知系統維護人員"];
    // echo json_encode($result);
    $result = [
        "error" => [
            "msg" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($result);
}

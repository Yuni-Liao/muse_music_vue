<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $sid = $_GET['sid'];
    //$sid = 6;

    //SQL指令: 單曲頁面 查詢同專輯的其他歌曲資料
    $sql = "select
    s.s_id as id,
    s.s_img as songpic,
    s.s_name as songname,
    s.upload_date as date,
    a.alb_name as album
    from song s
    inner join album a ON s.alb_id = a.alb_id
    where s.alb_id = (SELECT alb_id FROM song WHERE s_id = $sid)
    and s.s_id != $sid;";

    $singleMusicSong = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($singleMusicSong->rowCount() === 0) {
        echo "查無歌曲資料";
    } else {
        $sRow = $singleMusicSong->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($sRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
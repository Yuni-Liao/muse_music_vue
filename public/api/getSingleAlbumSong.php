<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $salid = $_GET['salid'];
    //$salid = 1;
    //SQL指令: 查詢專輯歌曲資料
    $sql = "select
    al.alb_id,
    al.alb_name,
    al.update_date,
    al.mem_id,
    m.mem_name as singer,
    s.s_id as id,
    s.s_length as time,
    s.s_img as songPic,
    s.s_name as name
    from album al
    join song s on al.alb_id = s.alb_id
    join member m on al.mem_id = m.mem_id
    where al.alb_id = $salid
    order by s.s_id;";

    $singleAlbumSong = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($singleAlbumSong->rowCount() === 0) {
        echo "查無歌曲資料";
    } else {
        $sRow = $singleAlbumSong->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($sRow);//送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}

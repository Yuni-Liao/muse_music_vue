<!-- 單曲頁面：抓取同專輯其他首歌曲的資料 -->
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $slid = $_GET['otsid'];
    // $otsid = 1;

    //SQL指令: 單曲頁面 查詢同專輯的其他歌曲資料
    $sql = "select 
    al.alb_id ,
    s.s_id as id,
    s.s_name as name,
    s.s_img as albumPic
    from album al
    join song s on s.alb_id = al.alb_id
    where al.alb_id =$otsid;";

    $singleAlbumSong = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($singleAlbumSong->rowCount() === 0) {
        echo "查無歌曲資料";
    } else {
        $sRow = $singleAlbumSong->fetch(PDO::FETCH_ASSOC);
        echo json_encode($sRow);//送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
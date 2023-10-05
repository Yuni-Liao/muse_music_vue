<!-- 單曲頁面：抓取留言資料 -->
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $slid = $_GET['msgid'];
    // $msgid = 6;

    //SQL指令: 單曲頁面 查詢同專輯的其他歌曲資料
    $sql = "select
    m.msg_id as id,
    m.mem_id,
    m.s_id,
    m.msg_con as message,
    m.msg_date as date,
    m.msg_like as liked,
    me.mem_pic as userPic,
    me.mem_name as userName
    from msg m
    left join member me ON m.mem_id = me.mem_id
    where m.s_id = $msgid
    order by m.msg_date DESC;";

    $singleAlbumSong = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($singleAlbumSong->rowCount() === 0) {
        echo "查無歌曲資料";
    } else {
        $sRow = $singleAlbumSong->fetch(PDO::FETCH_ASSOC);
        echo json_encode($sRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
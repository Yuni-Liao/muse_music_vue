
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");
    //執行sql指令並取得pdoStatement
    //SQL指令: 查詢新歌推薦前10名
    $sql = "
        select
            s.mem_id,
            s.s_img , 
            s.s_name, 
            m.mem_name as h_name,
            s.upload_date ,
            s.play_num
        from 
            member m 
        join 
            song s on m.mem_id = s.mem_id
        order by 
            s.upload_date desc
        limit 10;
    ";
    $song = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($song->rowCount() === 0) {
        echo "查無歌單資料";
    } else {
        $sRow = $song->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($sRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
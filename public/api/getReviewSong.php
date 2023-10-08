
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement

    $sql = "select(@sno=@sno=1) as no, s.upload_date as submitTime, s.s_name as songName, s.s_length as timeRange, s.mem_id ,m.mem_acc as memberAcc, s.s_stat as songStatus, s.s_id
    from song s join member m on s.mem_id = m.mem_id,(select @sno:=0) as sno
    where s_stat = false
    order by  upload_date desc;";

    $reviewSong = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($reviewSong->rowCount() === 0) {
        echo "無待審核歌曲";
    } else {
        $result = $reviewSong->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
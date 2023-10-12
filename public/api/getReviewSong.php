
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement

    $sql = "select s.upload_date , s.s_name , s.s_length , s.mem_id ,m.mem_acc, s.s_stat , s.s_id, s.s_src
    from song s join member m on s.mem_id = m.mem_id
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
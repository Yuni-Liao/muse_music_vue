<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //SQL指令: 查詢後臺會員
    $sql = "
        select 
            mem_id, 
            mem_name,
            mem_acc, 
            fol_num,
            (SELECT COUNT(*) FROM song s WHERE s.mem_id = m.mem_id) AS song_count,
            (SELECT COUNT(*) FROM album a WHERE a.mem_id = m.mem_id) AS alb_count
        FROM member m;
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
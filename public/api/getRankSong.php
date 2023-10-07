
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $sql = "select r.rank_id, r.s_id, s.s_name, s.mem_id as mem_id , m.mem_name as mem_name, s.s_img, s.play_num
    from s_rank r join song s on r.s_id= s.s_id
                join member m on s.mem_id = m.mem_id
    order by r.rank_id
    limit 10;";

    $songRank = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($songRank->rowCount() === 0) {
        echo "查無歌單資料";
    } else {
        $result = $songRank->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
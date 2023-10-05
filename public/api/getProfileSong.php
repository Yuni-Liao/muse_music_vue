<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $memid = $_GET['memid'];
    //$memid = 1;

    //SQL指令: 查詢會員歌曲
    $sql = "select s_id, s_name, s_length,s_img
    from song
    where mem_id= $memid
    order by upload_date;";

    $s = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($s->rowCount() === 0) {
        echo "查無資料";
    } else {
        $result = $s->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}

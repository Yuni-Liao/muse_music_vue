<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $msgid = $_GET['msgid'];
    //$msgid = 1;

    //SQL指令: 單曲頁面 取得留言資料
    $sql = "select
    s.s_id,
    m.msg_id,
    m.mem_id,
    m.msg_con,
    m.msg_date,
    m.msg_like,
    me.mem_id,
    me.mem_pic,
    me.mem_name
    from song s
    join msg m on m.s_id = s.s_id
    left join member me on m.mem_id = me.mem_id
    where s.s_id = $msgid
    order by m.msg_date DESC;";

    $singleMusicMsg = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($singleMusicMsg->rowCount() === 0) {
        echo "查無歌曲資料";
    } else {
        $mRow = $singleMusicMsg->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($mRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
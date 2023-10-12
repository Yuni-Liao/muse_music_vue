<?php
//前台 - 單曲頁面 - 留言區資料庫渲染 - 郭凱芸
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $msgid = $_GET['msgid'];

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
        FROM song s
        JOIN msg m ON m.s_id = s.s_id
        LEFT JOIN member me ON m.mem_id = me.mem_id
        WHERE s.s_id = :msgid
        ORDER BY m.msg_date DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':msgid', $msgid, PDO::PARAM_INT);
    $stmt->execute();

    //如果找得資料，取回資料，送出json
    if ($stmt->rowCount() === 0) {
        echo "查無歌曲資料";
    } else {
        $mRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($mRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}

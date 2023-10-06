<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //$sid = $_GET['sid'];
    $sid = 6;
    //SQL指令: 單曲頁面：抓取該首歌曲的資料
    $sql = "select
    s.s_id as id,
    s.s_img as songpic,
    s.s_name as songname,
    m.mem_name as singer,
    m.mem_pic as singerPic,
    a.alb_img as albumPic,
    s.upload_date as date,
    m.intro as albumInf,
    s.s_intro as songInf,
    s.s_length as time,
    s.play_num as played,
    s.fav_num as liked,
    s.share_num as shared,
    a.alb_name as album
    from song s
    left join album a on s.alb_id = a.alb_id
    left join member m on s.mem_id = m.mem_id
    where s.s_id = $sid;";

    $singleMusic = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($singleMusic->rowCount() === 0) {
        echo "查無專輯資料";
    } else {
        $aRow = $singleMusic->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($aRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}

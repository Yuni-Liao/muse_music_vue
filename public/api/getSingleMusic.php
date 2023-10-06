<!-- 單曲頁面：抓取該首歌曲的資料 -->
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //$sid = $_GET['sid'];
    $sid = 1;
    //SQL指令: 查詢專輯內容
    //
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
    mc.mcat_name as type,
    s.s_length as time,
    s.play_num as played,
    s.fav_num as liked,
    s.share_num as shared,
    a.alb_name as album
    from song s
    left join album a on s.alb_id = a.alb_id
    left join member m on s.mem_id = m.mem_id
    left join song_cat sc on s.s_id = sc.s_id
    left join music_cat mc on sc.mcat_id = mc.mcat_id
    where s.s_id = $sid;";

    $singleAlbum = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($singleAlbum->rowCount() === 0) {
        echo "查無專輯資料";
    } else {
        $aRow = $singleAlbum->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($aRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}

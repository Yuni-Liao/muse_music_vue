<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //$sid = $_GET['sid'];
    $sid = 6;
    //SQL指令: 單曲頁面：抓取該首歌曲分類
    $sql = "select
    group_concat(mc.mcat_name) as types
    from song s
    inner join song_cat sc on s.s_id = sc.s_id
    inner join music_cat mc on sc.mcat_id = mc.mcat_id
    where s.s_id = $sid;";

    $singleMusicType = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($singleMusicType->rowCount() === 0) {
        echo "查無專輯資料";
    } else {
        $row = $singleMusicType->fetch(PDO::FETCH_ASSOC);
        $types = explode(",", $row["types"]);
        echo json_encode($types); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}

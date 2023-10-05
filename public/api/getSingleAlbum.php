<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $salid = $_GET['salid'];
    // $salid = 1;
    //SQL指令: 查詢專輯內容
    $sql = "select 
    al.alb_id,
    al.alb_name,
    al.alb_intro,
    al.alb_img,
    al.mem_id as singer_id,
    al.share_num,
    m.mem_name as singer,
    m.mem_pic as singerPic,
    s.s_id,
    s.s_name,
    s.s_img,
    s.s_length
    from album al
    join member m on al.mem_id = m.mem_id
    join song s on s.alb_id = al.alb_id
    where al.alb_id = $salid";

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

<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //$salid = $_GET['salid'];
    $salid = 1;
    //SQL指令: 查詢專輯內容
    $sql = "select 
    al.alb_id,
    al.alb_name as albumname,
    al.alb_intro as albuminf,
    al.alb_img as albumpic,
    al.mem_id as singer_id,
    al.share_num as shared,
    al.upload_date as date,
    m.mem_name as singer,
    m.mem_pic as singerpic
    from album al
    join member m on al.mem_id = m.mem_id
    where al.alb_id = $salid;";

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
}

<?php
//這份 PHP 除了密碼以外，把 MEMBER 資料表的資料全抓回來了，有需要的話可以重複利用

try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //$memid = $_GET['memid'];
    $memid = 1;

    //SQL指令: 查詢會員資料
    $sql = "select mem_id, mem_name, mem_aka, mem_acc, email, bind_acc, stat, county, intro, mem_pic, cover_pic, privacy,r_date, social_media, fol_num
    from member 
    where mem_id = $memid;";

    $memData = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($memData->rowCount() === 0) {
        echo "查無此會員";
    } else {
        $mRow = $memData->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($mRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}

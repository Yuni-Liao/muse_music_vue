
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $slid = $_GET['slid'];
    // $slid = 1;
    //SQL指令: 查詢歌單歌曲
    $sql = "select  sli.s_id, s.s_img , s.s_name, s.mem_id as singer_id, m.mem_name as singer ,s.alb_id ,a.alb_name, s.s_length,sli.update_date
    from slitem sli join song s on sli.s_id = s.s_id 
                    left join album a on a.alb_id = s.alb_id 
                    join member m on s.mem_id= m.mem_id
    where ( sli.sl_id = $slid)
    order by sli.update_date;";

    $songlistSongs = $pdo->query($sql);
    //如果找得資料，取回資料，送出json
    if ($songlistSongs->rowCount() === 0) {
        echo "查無歌單資料";
    } else {
        $sRow = $songlistSongs->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($sRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
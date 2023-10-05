
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $slid = $_GET['slid'];
    // $slid = 1;

    //SQL指令: 查詢歌單資料
    //含抓歌單圖片(歌單中第一首歌的歌曲圖片)
    $sql = "select 
    sl.sl_id, 
    sl.mem_id as creater_id, 
    m.mem_name as creater_name, 
    m.mem_pic as creater_pic, 
    sl.sl_name, 
    sl.fol_num, 
    sl.share_num,
    (select s_img
     from song
     where s_id = (select s_id 
                    from slitem 
                    where sl_id = sl.sl_id 
                    limit 1)
    ) as sl_pic
    from song_list sl 
    join member m on sl.mem_id = m.mem_id
    where  sl.sl_id = $slid;";

    $songlistDetail = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($songlistDetail->rowCount() === 0) {
        echo "查無歌曲資料";
    } else {
        $slRow = $songlistDetail->fetch(PDO::FETCH_ASSOC);
        echo json_encode($slRow);; //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
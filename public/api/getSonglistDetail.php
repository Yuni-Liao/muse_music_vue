
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $slid = $_GET['slid'];
   // $slid = 1;
    //SQL指令: 用於抓到 @dynamic_s_id的值，用於抓歌單圖片(歌單中第一首歌的歌曲圖片)
    $sql1 = "select @dynamic_s_id := s_id 
    from slitem 
    where sl_id = $slid limit 1;";

    //SQL指令: 查詢歌曲資料
    $sql2 = "select sl.sl_id, sl.mem_id as creater_id, m.mem_name as creater_name, m.mem_pic as creater_pic, sl.sl_name, sl.fol_num, sl.share_num,
    (select s_img sl_fol
     from song
     where s_id = @dynamic_s_id) as sl_pic
    from song_list sl join member m on sl.mem_id = m.mem_id
    where  sl.sl_id = $slid;";

    $pdo->query($sql1); //僅需執行，修改@dynamic_s_id變數
    $songlistDetail = $pdo->query($sql2);
    $slRow = $songlistDetail->fetch(PDO::FETCH_ASSOC);
    echo json_encode($slRow);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
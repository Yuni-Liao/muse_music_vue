
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    // $loginMemId = $_GET['loginMemId'];
    $loginMemId = 1;


    //SQL指令: 查詢我創建的歌單
    //count(*): 歌單中的歌曲數量
    $sql1 = "select sl.sl_id, sl.sl_name, sl.mem_id as creater_id, m.mem_name as creater_name, sl.public, sl.update_date,
    (select count(*) from slitem where slitem.sl_id = sl.sl_id) as song_count,
    (select s.s_img
    from song s
    where s.s_id = (select s_id 
                    from slitem sli
                    where sli.sl_id = sl.sl_id 
                    limit 1)
    )as sl_pic
    from song_list sl join member m on sl.mem_id = m.mem_id
    where sl.mem_id = $loginMemId
    order by sl.update_date desc";

    $MyCreatesl = $pdo->query($sql1);
    $result = $MyCreatesl->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
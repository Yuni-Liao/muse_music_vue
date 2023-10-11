
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");


    //SQL指令: 查詢歌單資料
    //含抓歌單圖片(歌單中第一首歌的歌曲圖片)
    $sql = "select  sl.sl_id,sl.sl_name, sl.fol_num,m.mem_name as creater_name,sl.mem_id as creater_id,
    (select s_img
    from song
    where s_id = (select s_id 
                   from slitem 
                   where sl_id = sl.sl_id 
                   limit 1)
   ) as sl_pic
    
    FROM song_list sl
    JOIN member m on sl.mem_id = m.mem_id
    ORDER BY sl.fol_num DESC LIMIT 10";

    $SLRank = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($SLRank->rowCount() != 0) {
        $slRow = $SLRank->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($slRow);; //送出json字串
    }
} catch (Exception $e) {
    $errorResponse = [
        "error" => [
            "message" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];

    echo json_encode($errorResponse);
}
?>

<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");


    //SQL指令: 查詢歌單資料
    //含抓歌單圖片(歌單中第一首歌的歌曲圖片)
    $sql = "SELECT sl.sl_id, sl.sl_name, sl.fol_num, m.mem_name AS creater_name, sl.mem_id AS creater_id,
    (SELECT s_img
     FROM song
     WHERE s_id = (SELECT s_id
                   FROM slitem
                   WHERE sl_id = sl.sl_id
                   LIMIT 1)
    ) AS sl_pic,
    r.rank_id  -- Add the rank_id column from sl_rank
FROM song_list sl
JOIN member m ON sl.mem_id = m.mem_id
LEFT JOIN sl_rank r ON sl.sl_id = r.sl_id -- Assuming there is a relationship between sl_list and sl_rank
ORDER BY sl.fol_num DESC
LIMIT 10";

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
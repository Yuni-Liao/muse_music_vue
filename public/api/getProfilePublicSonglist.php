<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $memid = $_GET['memid'];
    //$memid = 1;

    //SQL指令: 查詢會員創建之公開歌單
    $sql = "select  sl.sl_id, sl.sl_name, sl.mem_id as creater_id, m.mem_name as creater_name, sl.public,
    (select count(*) from slitem where slitem.sl_id = sl.sl_id) as song_count,
    (select s.s_img
    from song s
    where s.s_id = (select s_id 
                    from slitem sli
                    where sli.sl_id = sl.sl_id 
                    limit 1)
                    )as sl_pic
    from song_list sl join member m on sl.mem_id = m.mem_id
    where (sl.mem_id = $memid)and  (sl.public=1)
    order by sl.update_date desc ;";

    $sl = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($sl->rowCount() === 0) {
        echo "查無此會員公開歌單";
    } else {
        $result = $sl->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result); //送出json字串
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

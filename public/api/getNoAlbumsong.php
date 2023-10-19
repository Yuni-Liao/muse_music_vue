<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $memid = $_GET['memid'];
    //SQL指令: 查詢該會員中，未有專輯編號的歌曲
    $sql = "
    select s_id as id, s_name as name, s_img as songPic, s_intro, show_stat, s_length as time,update_date as s_update_date,alb_id
    from song 
    where mem_id = $memid and (alb_id is null or  alb_id = '') and (show_stat = 1)
    order by s_update_date desc;";

    $songs = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($songs->rowCount() != 0) {
        $result = $songs->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);; //送出json
    } else {
        $nosongResponse = [];
        echo json_encode($nosongResponse);
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

<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $memid = $_GET['memid'];
    $stat = $_GET['stat'];
    //$memid = 1;

    //SQL指令: 查詢會員歌曲

    if ($stat == 1) {
        //$stat == 1 代表是個人主頁要查詢的，要過濾掉 審核狀態待審核 和 公開狀態是私人 的歌曲
        $sql = "select s_id, s_name, s_length,s_img, s_intro, update_date, show_stat,s_stat
        from song
        where (mem_id= $memid) and (show_stat = 1) and (s_stat = 1)
        order by upload_date desc;";
    } else {
        //代表是個人主頁管理要撈資料，要將所有歌曲撈回
        $sql = "select s_id, s_name, s_length,s_img, s_intro, update_date, show_stat,s_stat
        from song
        where mem_id= $memid 
        order by upload_date desc;";
    }

    //SQL指令: 查詢會員歌曲

    $s = $pdo->query($sql);

    $result = $s->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result); //送出json字串

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

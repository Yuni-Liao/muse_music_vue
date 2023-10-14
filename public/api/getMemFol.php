<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $memid = $_GET['mem_id'];
    //SQL指令: 查詢該會員中，未有專輯編號的歌曲
    $sql = "
    select sl_id from sl_fol where mem_id = $memid;";

    $stmt = $pdo->query($sql);
    $stmt->execute();


    $sl_ids = $stmt->fetchAll(PDO::FETCH_COLUMN, 0); // 獲取sl_id結果並把他組成陣列 

    echo json_encode($sl_ids);
} catch (Exception $e) {
    $result = [
        "error" => [
            "msg" => "查詢失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($result);
}

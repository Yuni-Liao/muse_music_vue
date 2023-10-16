<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");
    $pdo->beginTransaction();
    //執行sql指令並取得pdoStatement
    $memid = $_GET['mem_id'];


    //SQL指令: 查詢該會員追蹤的歌單
    $sql = "
    select sl_id from sl_fol where mem_id = $memid;";

    $stmt = $pdo->query($sql);
    $stmt->execute();
    $sl_ids = $stmt->fetchAll(PDO::FETCH_COLUMN, 0); // 獲取sl_id結果並把他組成陣列 

    //查詢該會員追蹤的創作者
    $sql2 = "
    select cre_id from cre_fol where mem_id = $memid;";

    $stmt2 = $pdo->query($sql2);
    $stmt2->execute();
    $cre_ids = $stmt2->fetchAll(PDO::FETCH_COLUMN, 0); // 獲取cre_id結果並把他組成陣列 



    //查詢該會員追蹤的音樂快訊
    $sql3 = "
    select news_id from news_fol where mem_id = $memid;";

    $stmt3 = $pdo->query($sql3);
    $stmt3->execute();
    $news_ids = $stmt3->fetchAll(PDO::FETCH_COLUMN, 0); // 獲取news_id結果並把他組成陣列 


    $pdo->commit();
    $resultobj = array(
        "sl_fol" => $sl_ids,
        "cre_fol" => $cre_ids,
        "news_fol" => $news_ids
    );
    echo json_encode($resultobj);
} catch (Exception $e) {
    $pdo->rollBack(); //捨棄交易
    $result = [
        "error" => [
            "msg" => "查詢失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($result);
}

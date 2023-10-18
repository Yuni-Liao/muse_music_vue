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

    //查詢該會員追蹤的創作者的資訊
    $sql22 = "
    select cre.cre_id,m.mem_name,m.mem_acc,m.mem_pic,m.mem_aka from cre_fol cre join member m on cre.cre_id = m.mem_id where cre.mem_id =$memid;";

    $stmt22 = $pdo->query($sql22);
    $stmt22->execute();
    $cre_list = $stmt22->fetchAll(PDO::FETCH_ASSOC); // 獲取cre_id結果


    //查詢該會員追蹤的音樂快訊
    $sql3 = "
    select news_id from news_fol where mem_id = $memid;";

    $stmt3 = $pdo->query($sql3);
    $stmt3->execute();
    $news_ids = $stmt3->fetchAll(PDO::FETCH_COLUMN, 0); // 獲取news_id結果並把他組成陣列 

    //查詢該會員追蹤的音樂快訊資訊
    $sql33 = "
    select 
    nf.news_id,
    n.singer,
    n.news_name,
    YEAR(n.news_date) AS year,
    MONTH(n.news_date) AS month,
    DAY(n.news_date) AS day,
    n.news_place,
    NOW() AS news_update,
    n.news_pic,
    CASE 
    WHEN DAYOFWEEK( n.news_date) = 1 THEN '日'
    WHEN DAYOFWEEK( n.news_date) = 2 THEN '一'
    WHEN DAYOFWEEK( n.news_date) = 3 THEN '二'
    WHEN DAYOFWEEK( n.news_date) = 4 THEN '三'
    WHEN DAYOFWEEK( n.news_date) = 5 THEN '四'
    WHEN DAYOFWEEK( n.news_date) = 6 THEN '五'
    WHEN DAYOFWEEK( n.news_date) = 7 THEN '六'
    END AS chinese_day_of_week 
    from news_fol nf join news n on nf.news_id = n.news_id
    where nf.mem_id = $memid;";

    $stmt33 = $pdo->query($sql33);
    $stmt33->execute();
    $news_list = $stmt33->fetchAll(PDO::FETCH_ASSOC); // 獲取news_id結果並把他組成陣列 



    $pdo->commit();
    $resultobj = array(
        "sl_fol" => $sl_ids,
        "cre_fol" => $cre_ids,
        "news_fol" => $news_ids,
        "cre_list" => $cre_list,
        "news_list" => $news_list,
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

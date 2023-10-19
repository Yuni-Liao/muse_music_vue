<?php
    try{
        //引入連線工作的檔案
        header('Access-Control-Allow-Origin:*');
        header("Content-Type:application/json;charset=utf-8");
        require_once("./connectMusemusic.php");

        //執行sql指令並取得pdoStatement
        $nid = $_GET['nid'];
        //$nid = 1;
        $sql = "select news_id, news_name, news_pic, news_place, singer, news_con 
                from news
                WHERE news_id = $nid;";

        $newsDetail = $pdo->query($sql);

        //如果找得資料，取回資料，送出json
    if ($newsDetail->rowCount() != 0) {
        $nRow = $newsDetail->fetch(PDO::FETCH_ASSOC);
        echo json_encode($nRow);; //送出json字串
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
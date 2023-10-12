<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    //SQL指令: 連接music_cat資料庫
    require_once("./connectMusemusic.php");

    $s_id = $_GET['s_id'];
    //$s_id = 1;
    //執行sql指令並取得pdoStatement
    $sql = "select mcat_id
    from song_cat
    where s_id = $s_id;";

    $songcat = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($songcat->rowCount() === 0) {
        echo "查無資料";
    } else {
        $result = $songcat->fetchAll(PDO::FETCH_NUM);
        echo json_encode($result); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}

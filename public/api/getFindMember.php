<?php
try{
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");
    //執行sql指令並取得pdoStatement
    //SQL指令: 連接member資料庫
    $sql = "select * from member;";

    $styles = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($styles->rowCount() === 0) {
        echo "查無資料";
    } else {
        $styRow = $styles->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($styRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
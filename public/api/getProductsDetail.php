
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $sql = "select * from product";
    $prods = $pdo->prepare($sql);
    $prods->execute();

    if ($prods->rowCount() === 0) {
        echo "查無資料";
    } else {
        $prodRow = $prods->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
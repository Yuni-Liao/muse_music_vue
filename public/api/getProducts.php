
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //SQL指令: 抓取商城商品
    $sql = "select * from product where show_stat = 1";
    $prods = $pdo->prepare($sql);
    $prods->execute();

    //如果找得資料，取回資料，送出json
    if ($prods->rowCount() === 0) {
        echo "查無資料";
    } else {
        $prodRow = $prods->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRow); //送出json字串
    }
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
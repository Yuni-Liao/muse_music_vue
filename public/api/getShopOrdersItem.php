<?php
try{
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //SQL指令: 查詢orderitem
    $sql = "select o.ord_id, o.prod_id, o.ord_price, o.ord_pcs, p.prod_name, p.prod_pic 
    from orders_item o join product p 
        on o.prod_id = p.prod_id;";

    $orderitem = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($orderitem->rowCount() === 0) {
        echo "查無資料";
    } else {
        $orderitemRow = $orderitem->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($orderitemRow); //送出json字串
    }

} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
<?php
try{
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    
    $slid = $_GET['slid'];
    // $slid = isset($_GET['slid']) ? $_GET['slid'] : null;
    // echo "slid的值: $slid";
    // $slid = 1;

    //SQL指令: 查詢orderitem
    $sql = "select oi.ord_id, oi.prod_id, oi.ord_price, oi.ord_pcs, p.prod_name, p.prod_pic, o.ord_date, o.ord_name, o.ord_tel, o.ord_add, o.ord_pay, o.ord_ship, o.ord_total_price, o.ord_stat 
    from orders_item oi 
        join product p on oi.prod_id = p.prod_id 
        join orders o on oi.ord_id = o.ord_id 
    where oi.ord_id = $slid;";

    $orderItem = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($orderItem->rowCount() === 0) {
        echo "查無資料";
    } else {
        $orderItemRow = $orderItem->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($orderItemRow); //送出json字串
    }

} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
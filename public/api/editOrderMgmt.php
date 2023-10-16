<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");


try {
    // 引入連線工作的檔案
    require_once("./connectMusemusic.php");

    // 準備update SQL
    $sql = "UPDATE orders SET
        ord_stat = :ord_stat,
        ord_date = :ord_date,
        ord_pay = :ord_pay,
        ord_ship = :ord_ship,
        ord_name = :ord_name,
        ord_tel = :ord_tel,
        ord_add = :ord_add,
        ord_total_price = :ord_total_price
        WHERE ord_id = :ord_id";

    $editFaq = $pdo->prepare($sql);

    $editFaq->bindValue(":ord_stat", $_POST["ord_stat"]);
    $editFaq->bindValue(":ord_date", $_POST["ord_date"]);
    $editFaq->bindValue(":ord_pay", $_POST["ord_pay"]);
    $editFaq->bindValue(":ord_ship", $_POST["ord_ship"]);
    $editFaq->bindValue(":ord_name", $_POST["ord_name"]);
    $editFaq->bindValue(":ord_tel", $_POST["ord_tel"]);
    $editFaq->bindValue(":ord_add", $_POST["ord_add"]);
    $editFaq->bindValue(":ord_total_price", $_POST["ord_total_price"]);
    $editFaq->bindValue(":ord_id", $_POST["ord_id"]);

    // 執行 SQL 更新
    $editFaq->execute();

    // 如果更新成功
    $responseMessage = "更新成功";

    echo json_encode($responseMessage);
} catch (Exception $e) {
    echo json_encode(array("error" => "更新失败：" . $e->getMessage()));
}
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");


try {
    require_once("./connectMusemusic.php");

    // 檢查請求方法
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // 獲取傳遞參數
        $faq_id = $_POST["faq_id"];

        // 準備 SQL
        $sql = "DELETE FROM faq WHERE faq_id = :faq_id";

        $deleteFaq = $pdo->prepare($sql);

        // 绑定參数
        $deleteFaq->bindValue(":faq_id", $faq_id);

        // 執行 SQL 更新
        $deleteFaq->execute();

        $rowCount = $deleteFaq->rowCount();

        if ($rowCount > 0) {
            $responseMessage = "删除成功";
        } else {
            $responseMessage = "未找到符合条件的记录";
        }

        echo json_encode($responseMessage);
    } else {
        echo json_encode("不是有效的 POST 请求");
    }

} catch (Exception $e) {
    echo "错误行号: ", $e->getLine(), "<br>";
    echo "错误原因: ", $e->getMessage(), "<br>";
}
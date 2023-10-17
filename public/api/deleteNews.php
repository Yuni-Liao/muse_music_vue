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
        $news_id = $_POST["news_id"];

        // 準備 SQL
        $sql = "DELETE FROM news WHERE news_id = :news_id";

        $deletenews = $pdo->prepare($sql);

        // 绑定參数
        $deletenews->bindValue(":news_id", $news_id);

        // 執行 SQL 更新
        $deletenews->execute();

        $rowCount = $deletenews->rowCount();

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
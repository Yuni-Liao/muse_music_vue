<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



try {
        // 引入連線工作的檔案
        require_once("./connectMusemusic.php");

        // 準備update SQL
        $sql = "insert into news (singer, news_name, news_date, news_place, news_con, news_area) values (:singer, :news_name, :news_date, :news_place, :news_con, :news_area)";

        $editNews = $pdo->prepare($sql);

        $editNews->bindValue(":singer", $_POST["add_singer"]);
        $editNews->bindValue(":news_name", $_POST["add_news_name"]);
        $editNews->bindValue(":news_date", $_POST["add_news_date"]);
        $editNews->bindValue(":news_place", $_POST["add_news_place"]);
        $editNews->bindValue(":news_con", $_POST["add_news_con"]);
        $editNews->bindValue(":news_area", $_POST["add_news_area"]);

        // 執行 SQL 更新
        $editNews->execute();

        // 如果更新成功
        $responseMessage = "更新成功";

    echo json_encode($responseMessage);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
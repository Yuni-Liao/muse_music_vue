<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
    //引入連線工作的檔案
    require_once("./connectMusemusic.php");

    $pdo->beginTransaction();
    $mem_id = $_POST["mem_id"];
    $fol_id = $_POST["fol_id"];
    $fol_type = $_POST["fol_type"]; // 0追蹤歌單 1追蹤創作者 2追蹤音樂快訊
    $is_Fol = $_POST["is_fol"]; // true做取消追蹤動作，false做追蹤動作

    //判斷 資料表名稱 及 追蹤的欄位名稱
    $table_name = "";
    $fol_column = "";

    if ($fol_type == 0) {
        $table_name = "sl_fol";
        $fol_column = "sl_id";
    } elseif ($fol_type == 1) {
        $table_name = "cre_fol";
        $fol_column = "cre_id";
    } elseif ($fol_type == 2) {
        $table_name = "news_fol";
        $fol_column = "news_id";
    }

    if (empty($table_name) || empty($fol_column)) {
        exit("Invalid fol_type");
    }

    if ($is_Fol == "false") {
        $sql1 = "INSERT INTO $table_name (mem_id, $fol_column, fol_date) VALUES (:mem_id, :fol_id, CURRENT_TIMESTAMP)";
    } elseif ($is_Fol == "true") {
        $sql1 = "DELETE FROM $table_name WHERE mem_id = :mem_id AND $fol_column = :fol_id";
    } else {
        exit("Invalid is_fol value");
    }

    $addfolsl = $pdo->prepare($sql1);
    $addfolsl->bindValue(":fol_id", $fol_id);
    $addfolsl->bindValue(":mem_id", $mem_id);
    $addfolsl->execute();

    // 執行交易
    if ($pdo->commit()) {
        $result = ["error" => false, "msg" => "交易成功"];
        echo json_encode($result);
    } else {
        $pdo->rollBack(); // 捨棄交易
        $result = [
            "error" => [
                "msg" => "新增失败",
                "line" => $e->getLine(),
                "details" => $e->getMessage(),
            ],
        ];
        echo json_encode($result);
    }
} catch (Exception $e) {

    $pdo->rollBack(); //捨棄交易
    $result = [
        "error" => [
            "msg" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($result);
}

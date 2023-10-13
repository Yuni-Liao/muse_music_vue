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
    $fol_type = $_POST["fol_type"]; // 0追蹤歌單, 1追蹤創作者, 2追蹤音樂快訊
    $is_Fol = $_POST["is_fol"]; //true 做取消追蹤動作 false做追蹤動作
    $dataType = gettype($is_Fol);

    if ($fol_type == 0) {

        if ($is_Fol == "false") {
            $sql1 = "INSERT INTO sl_fol (mem_id, sl_id, fol_date)VALUES (:mem_id,:sl_id, CURRENT_TIMESTAMP);";
            $addfolsl = $pdo->prepare($sql1);
            $addfolsl->bindValue(":sl_id", $fol_id);
            $addfolsl->bindValue(":mem_id", $mem_id);
            $addfolsl->execute();
        } elseif ($is_Fol == "true") {
            $sql2 = "DELETE FROM sl_fol where mem_id = :mem_id and sl_id = :sl_id;";
            $delfolsl = $pdo->prepare($sql2);
            $delfolsl->bindValue(":sl_id", $fol_id);
            $delfolsl->bindValue(":mem_id", $mem_id);
            $delfolsl->execute();
        } else {
            exit();
        };
    }

    //執行交易
    if ($pdo->commit()) {
        $result = ["error" => false, "msg" => "交易成功"];
        echo json_encode($result);
    } else {
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

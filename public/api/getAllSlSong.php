<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");


require_once("connectMusemusic.php");

try {
    $pdo->beginTransaction();

    // 执行 SQL 查询以检索数据
    $sql = "SELECT SL_ID, GROUP_CONCAT(S_ID) AS S_ID_LIST FROM SLITEM GROUP BY SL_ID";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $data = [];
    foreach ($results as $row) {
        $slId = $row['SL_ID'];
        $sIdList = explode(',', $row['S_ID_LIST']);
        $data[] = [
            "sl_id" => $slId,
            "s_id_list_all" => $sIdList,
        ];
    }

    // 输出为 JSON 格式
    echo json_encode($data);

    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    $result = [
        "error" => [
            "msg" => "查询失败",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];
    echo json_encode($result);
}

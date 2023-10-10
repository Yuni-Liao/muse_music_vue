<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $memid = $_GET['memid'];
    //$memid = 1;

    //SQL指令: 查詢會員專輯
    $sql = "select a.alb_id,a.alb_img, a.alb_name, a.mem_id, m.mem_name, a.upload_date , a.alb_intro
    from album a join member m on a.mem_id = m.mem_id
    where a.mem_id = $memid
    order by a.upload_date desc;";

    $alb = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($alb->rowCount() === 0) {
        echo "查無資料";
    } else {
        $result = $alb->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result); //送出json字串
    }
} catch (Exception $e) {
    $errorResponse = [
        "error" => [
            "message" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];

    echo json_encode($errorResponse);
}

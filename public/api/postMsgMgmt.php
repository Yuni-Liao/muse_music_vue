<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 

// 後台 - 檢舉留言管理 - 郭凱芸
try {
    require_once("./connectMusemusic.php");
    //取得檢舉留言相關資料
    $sql = "select 
    mr.msgrep_id,
    mr.rep_rsn,
    mr.mem_id,
    m.mem_name,
    mr.msg_id,
    mr.rep_date,
    msg.msg_con
    from msg_rep as mr
    join member as m on mr.mem_id = m.mem_id
    join msg on mr.msg_id = msg.msg_id
    order by 
    mr.rep_date desc;";
    $msg = $pdo->query($sql);

    if($msg->rowCount()===0){
        echo json_encode(["message" => "查無留言"]);
    }else{
        $msgData = $msg->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($msgData);
    }
} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>

<?php
try{
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    //SQL指令: 查詢mem
    $sql = "select mem_id, mem_pic from member
    order by fol_num desc
    limit 10";

    $mems = $pdo->query($sql);

    //如果找得資料，取回資料，送出json
    if ($mems->rowCount() === 0) {
        echo "查無資料";
    } else {
        $memRow = $mems->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memRow); //送出json字串
    }

} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
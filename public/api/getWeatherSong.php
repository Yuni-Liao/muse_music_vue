
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //執行sql指令並取得pdoStatement
    $mcatid = $_GET['mcatid'];
    $memid = $_GET['memid'];
    //$slid = 1;
    //SQL指令: 查詢歌單歌曲
    $sql = "select sc.s_id, mc.mcat_name,s.s_name,s.s_img,s.mem_id from song_cat sc join music_cat mc on sc.mcat_id = mc.mcat_id join song s on sc.s_id = s.s_id
    where( sc.mcat_id = $mcatid) and (s.mem_id =$memid) order by s.update_date limit 1;";

    $mcatsong = $pdo->query($sql);
    $result = $mcatsong->fetch(PDO::FETCH_ASSOC);
    echo json_encode($result); //送出json字串
    //如果找得資料，取回資料，送出json
    // if ($mcatsong->rowCount() === 0) {
    //     echo json_encode(["該會員無歌曲"]);
    // } else {
    //     $result = $mcatsong->fetch(PDO::FETCH_ASSOC);
    //     echo json_encode($result); //送出json字串
    // }
} catch (Exception $e) {
    $errorResponse = [
        "error" => [
            "msg" => "新增失敗",
            "line" => $e->getLine(),
            "details" => $e->getMessage(),
        ],
    ];

    echo json_encode($errorResponse);
}
?>
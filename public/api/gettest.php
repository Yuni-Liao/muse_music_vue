
<?php
try {
    //引入連線工作的檔案
    header('Access-Control-Allow-Origin:*');
    header("Content-Type:application/json;charset=utf-8");
    require_once("./connectMusemusic.php");

    //SQL指令: 查詢歌單歌曲
    $sql = "select  s_id,s_name,s_length,s_src
    from song;";

    $songlistSongs = $pdo->query($sql);
    $sRow = $songlistSongs->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($sRow); //送出json字串
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
?>
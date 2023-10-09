<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {
        //引入連線工作的檔案
        require_once("./connectMusemusic.php");

        //準備sql
        $sql = "
        INSERT INTO `song_list` (`sl_id`, `mem_id`, `sl_name`, `public`, `fol_num`, `share_num`, `song_count`, `update_date`) 
        VALUES 
        (NULL, :memid, :slName, :slPublic, '0', '0', '0', CURRENT_TIMESTAMP)
        ";
        $newSl = $pdo->prepare($sql);
        $newSl->bindValue(":memid", $_POST["memid"]);
        $newSl->bindValue(":slName", $_POST["slName"]);
        $newSl->bindValue(":slPublic", $_POST["slPublic"]);

        // 執行sql
        if ($newSl->execute()) {
                $successResponse = [
                        "message" => "新增成功",
                ];

                echo json_encode($successResponse);
        } else {
                // 如果執行失敗，可以生成一個錯誤響應
                $errorResponse = [
                        "error" => [
                                "message" => "新增失敗",
                                "details" => "無法執行 SQL 語句",
                        ],
                ];

                echo json_encode($errorResponse);
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

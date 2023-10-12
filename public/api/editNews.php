<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");


try {   
    
    
        require_once("./connectMusemusic.php");
        
        $sql = "update news set
                
                news_name = :news_name, 
                singer = :singer,
                news_date = :news_date,
                news_place = :news_place,
                news_update = :news_update,
                news_con = :news_con,
                
                news_area = :news_area
                WHERE news_id = :news_id";

        $editNews = $pdo->prepare($sql);
        
        $editNews->bindValue(":news_id", $_POST["news_id"]);
        $editNews->bindValue(":news_name", $_POST["news_name"]);
        $editNews->bindValue(":singer", $_POST["singer"]);
        $editNews->bindValue(":news_date", $_POST["news_date"]);
        $editNews->bindValue(":news_place", $_POST["news_place"]);
        $editNews->bindValue(":news_update", $_POST["news_update"]);
        $editNews->bindValue(":news_con", $_POST["news_con"]);
        //$editNews->bindValue(":news_pic", $filename);
        $editNews->bindValue(":news_area", $_POST["news_area"]);

        // 執行 SQL 更新
        $editNews->execute();

        $result =["error" => false, "msg" => "編輯成功"];
    }catch (PDOException $e) {
        $result = ["error" => true, "msg" => $e->getMessage()];
    }
    echo json_encode($result);
?>

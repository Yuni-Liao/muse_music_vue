<?php
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header("Access-Control-Allow-Origin: *");
    header("Content-Type:application/json;charset=utf-8");

    try {
            // 連線
            require_once("./connectMusemusic.php");
            
            // 準備 SQL
            $sql = "update product set 
            show_stat = :show_stat 
            where prod_id = :prod_id";

                $prodStat = $pdo->prepare($sql);
                $prodStat->bindValue(":prod_id", $_POST["prod_id"]);
                $prodStat->bindValue(":show_stat", $_POST["show_stat"]); 
                //執行sql
                $prodStat->execute();

                $result =["error" => false, "msg" => "編輯成功"];
    }catch (PDOException $e) {
        $result = ["error" => true, "msg" => $e->getMessage()];
    }
    echo json_encode($result);
?>
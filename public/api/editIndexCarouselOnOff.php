<?php
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header("Access-Control-Allow-Origin: *");
    header("Content-Type:application/json;charset=utf-8");

    try {
            // 連線
            require_once("./connectMusemusic.php");
    
            // 準備 SQL
            $sql = "update carousel set status = :status where car_id = :car_id";

                $carousel = $pdo->prepare($sql);
                $carousel->bindValue(":car_id", $_POST["car_id"]);
                $carousel->bindValue(":status", $_POST["status"]); 
                //執行sql
                $carousel->execute();

                $result =["error" => false, "msg" => "編輯成功"];
    }catch (PDOException $e) {
        $result = ["error" => true, "msg" => $e->getMessage()];
    }
    echo json_encode($result);
?>
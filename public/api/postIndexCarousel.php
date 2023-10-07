<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 

try {
    require_once("./connectMusemusic.php");

    // if(empty($data)){
        $sql = "select * from carousel";
        $carousel = $pdo->query($sql);
        $carousel = $carousel->fetchAll(PDO::FETCH_ASSOC);
        
    // }else{
    //     $sql = "select * from  where `car_id` = :car_id";
    //     $newStmt = $pdo->prepare($sql);
    //     $newStmt->bindValue(":car_id", $data->data->id);
    //     $newStmt->execute();
    //     $newsRow = $newStmt->fetch(PDO::FETCH_ASSOC);
    // }

    echo json_encode($newsRow);
    

} catch (PDOException $e) {
    // 返回 JSON 錯誤響應
    $errorResponse = ["message" => "新增失敗：" . $e->getMessage()];
    echo json_encode($errorResponse);
}
?>


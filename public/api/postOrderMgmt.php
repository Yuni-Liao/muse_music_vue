<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json"); 

    try {
        //引入連線工作的檔案
        require_once("./connectMusemusic.php");

        //SQL指令: 查詢faq
        $sql = "select orders.*, member.mem_name, member.mem_acc
        from orders
        join member on orders.mem_id = member.mem_id
        order by orders.ord_id;";

        $faqs = $pdo->query($sql);

        //如果找得資料，取回資料，送出json
        if ($faqs->rowCount() === 0) {
            echo "查無資料";
        } else {
            $faqRow = $faqs->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($faqRow); //送出json字串
        }
    } catch (PDOException $e) {
        $errorResponse = ["message" => "查詢失敗：" . $e->getMessage()];
        echo json_encode($errorResponse);
    }
?>
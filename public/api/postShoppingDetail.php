<?php
try {
    header('Access-Control-Allow-Origin:*');
    header("Content-Type: application/json;charset=utf-8");
    session_start();



    if (isset($_POST['ord_name'], $_POST['ord_tel'], $_POST['ord_add'], $_POST['ord_ship'], $_POST['ord_pay'], $_POST['mem_id'])) {
        require_once("./connectMusemusic.php");

        $ord_name = $_POST['ord_name'];
        $ord_tel = $_POST['ord_tel'];
        $ord_add = $_POST['ord_add'];
        $ord_ship = $_POST['ord_ship'];
        $ord_pay = $_POST['ord_pay'];
        $mem_id = $_POST['mem_id'];

        // SQL指令
        $sql = "INSERT INTO 
        orders (ord_id,ord_name, ord_tel, ord_add, ord_ship, ord_pay, mem_id) VALUES 
        (NULL,:ord_name, :ord_tel, :ord_add, :ord_ship, :ord_pay, :mem_id)";
        $checkout = $pdo->prepare($sql);

        // 綁定參數
        $checkout->bindValue(":ord_name", $ord_name);
        $checkout->bindValue(":ord_tel", $ord_tel);
        $checkout->bindValue(":ord_add",  $ord_add);
        $checkout->bindValue(":ord_ship", $ord_ship);
        $checkout->bindValue(":ord_pay", $ord_pay);
        $checkout->bindValue(":mem_id", $mem_id);

        // 執行SQL
        $checkout->execute();

        // 獲取訂單ID
        $ord_id = $pdo->lastInsertId();

        // 訂單成立
        $response = [
            'order_id' => $ord_id,
            'message' => '訂單成立!!',
        ];

        echo json_encode($response);
    } else {
        // 錯誤處理
        echo "缺少必要數據";
    }
} catch (Exception $e) {
    echo "錯誤：" . $e->getMessage();
}

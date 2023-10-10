<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// 後台 - 商品管理 - 編輯商品 - 郭凱芸
try {
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["img"])) {
        switch ($_FILES["img"]["error"]) {
            case UPLOAD_ERR_OK:
                $dir = "../dataimage/index/image/ShopImage";
                if (!file_exists($dir)) {
                    mkdir($dir);
                }

                $from = $_FILES["img"]["tmp_name"];
                $filename = basename($_FILES['img']['name']);
                $to = $dir . $filename;
                copy($from, $to);
                echo json_encode(["message" => "上傳成功"]);
                break;
            case UPLOAD_ERR_INI_SIZE:
                echo json_encode(["error" => "上傳檔案太大, 不得超過 " . ini_get("upload_max_filesize")]);
                break;
            case UPLOAD_ERR_FORM_SIZE:
                echo json_encode(["error" => "上傳檔案太大, 不得超過 " . $_POST["MAX_FILE_SIZE"] . " 位元組"]);
                break;
            case UPLOAD_ERR_PARTIAL:
                echo json_encode(["error" => "上傳檔案不完整, 請再試一次"]);
                break;
            case UPLOAD_ERR_NO_FILE:
                echo json_encode(["error" => "檔案未選"]);
                break;
        }

        // 連線
        require_once("./connectMusemusic.php");

        // 準備 SQL
        // $sql = "UPDATE product SET link = :link, name = :name, img = :img WHERE car_id = :car_id";
        $sql = "UPDATE product SET 
        prod_id = :prod_id,
        prod_type=:prod_type,
        prod_name=:prod_name,
        pron_singer=:pron_singer,
        prod_inf=:prod_inf,
        prod_int=:prod_int,
        prod_pic=:prod_pic,
        prod_price=:prod_price,
        prod_date=:prod_date,
        show_stat=:show_stat,
        chat_num=:chat_num";

        $data = json_decode(file_get_contents('php://input'), true);

        if (isset($data['prod_id'], $data['prod_type'], $data['prod_name'], $data['pron_singer'],$data['prod_inf'],$data['prod_int'],$data['prod_price'],$data['prod_date'],$data['show_stat'],$data['chat_num'],$filename)) {
            $carousel = $pdo->prepare($sql);
            $carousel->bindValue(":prod_id", $data["prod_id"]);
            $carousel->bindValue(":prod_type", $data["prod_type"]);
            $carousel->bindValue(":prod_name", $data["prod_name"]);
            $carousel->bindValue(":pron_singer", $data["pron_singer"]);
            $carousel->bindValue(":prod_inf", $data["prod_inf"]);
            $carousel->bindValue(":prod_int", $data["prod_int"]);
            $carousel->bindValue(":prod_price", $data["prod_price"]);
            $carousel->bindValue(":prod_date", $data["prod_date"]);
            $carousel->bindValue(":show_stat", $data["show_stat"]);
            $carousel->bindValue(":prod_date", $data["prod_date"]);
            $carousel->bindValue(":prod_pic", $filename);
            $carousel->execute();

            echo json_encode(["message" => "編輯成功"]);
        } else {
            echo json_encode(["error" => "缺少必要Data"]);
        }
    } else {
        echo json_encode(["error" => "未收到POST圖片"]);
        error_log(print_r($_FILES, true));
        error_log(print_r($_POST, true));
    }
} catch (PDOException $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}

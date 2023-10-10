<?php
    header('Access-Control-Allow-Origin: http://localhost:8080');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header("Access-Control-Allow-Origin: *");
    header("Content-Type:application/json;charset=utf-8");


    try {
        if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["img"])) {
            switch ($_FILES["img"]["error"]) {
                case UPLOAD_ERR_OK:
                    $dir = "../dataimage/index/carousel/";
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
            $sql = "UPDATE carousel SET link = :link, name = :name, img = :img WHERE car_id = :car_id";
    
            $data = json_decode(file_get_contents('php://input'), true);
    
            if (isset($data['car_id'], $data['link'], $data['name'], $filename)) {
                $carousel = $pdo->prepare($sql);
                $carousel->bindValue(":car_id", $data["car_id"]);
                $carousel->bindValue(":link", $data["link"]);
                $carousel->bindValue(":name", $data["name"]);
                $carousel->bindValue(":img", $filename);
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
?>
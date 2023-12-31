<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");


try {
    
    if(isset($_FILES["mem_pic"])){
        switch ($_FILES["mem_pic"]["error"]) {
            case UPLOAD_ERR_OK:
                $dir = "../dataimage/member/";
                if (!file_exists($dir)) {
                    mkdir($dir);
                }

                $from = $_FILES["mem_pic"]["tmp_name"];

                $filename = basename($_FILES['mem_pic']['name']);
            
                $to = $dir . basename($_FILES['mem_pic']['name']);
                copy($from, $to);
                echo json_encode("上傳成功");    
                break;

                // 可以參考去修改filename

                // $dir = "../dataimage/song/";
                // if (!file_exists($dir)) {
                //     mkdir($dir);
                // }

                // $from = $_FILES["s_img"]["tmp_name"];

                // //取得副檔名
                // $tempfrom = $_FILES["s_img"]["name"];
                // $tempfileInfo = pathinfo($tempfrom);
                // $fileExtension = $tempfileInfo['extension'];
                // //檔案命名:ID+副檔名
                // $imgfilename = $s_id . "." . $fileExtension;
                // $to = $dir . $imgfilename;

                // move_uploaded_file($from, $to);
                // break;

            case UPLOAD_ERR_INI_SIZE :
                echo json_encode("上傳檔案太大, 不得超過", ini_get("upload_max_filesize"));
                break;
            case UPLOAD_ERR_FORM_SIZE :
                echo json_encode("上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組");
                break;
            case UPLOAD_ERR_PARTIAL :
                echo json_encode("上傳檔案不完整, 請再試一次");
                break;
            case UPLOAD_ERR_NO_FILE :
                echo json_encode("檔案未選");
                break;
        }
    }
    else{
        $filename = $_POST["mem_pic"];
        echo json_encode("更新成功"); 
    }

    require_once("./connectMusemusic.php");

        // 準備 SQL
        $sql = $sql = "update member SET mem_pic = :mem_pic where mem_id = :mem_id";

        $editMemPic = $pdo->prepare($sql);

        $editMemPic->bindValue(":mem_pic", $filename);
        $editMemPic->bindValue(":mem_id", $_POST["mem_id"]);

        //執行sql
        $editMemPic->execute();

        // 如果更新成功
        $result =["error" => false, "msg" => "新增成功"];

} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
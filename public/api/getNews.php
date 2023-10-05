<?php
    try{
        //引入連線工作的檔案
        header('Access-Control-Allow-Origin:*');
        header("Content-Type:application/json;charset=utf-8");
        require_once("./connectMusemusic.php");

        //執行sql指令並取得pdoStatement
        $sql = "select * from news;";
        $news = $pdo->query($sql);
        $nRow = $news->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($nRow);
    } catch (Exception $e){
        echo "錯誤行號 : ", $e->getLine(), "<br>";
	    echo "錯誤原因 : ", $e->getMessage(), "<br>";
	    //echo "系統暫時不能正常運行，請稍後再試<br>";
    }

    

    
?>
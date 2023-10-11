<?php
    try{
        //引入連線工作的檔案
        header('Access-Control-Allow-Origin:*');
        header("Content-Type:application/json;charset=utf-8");
        require_once("./connectMusemusic.php");

        //執行sql指令並取得pdoStatement
       

        $sql = "select news_id,
                singer,
                news_name,
                YEAR(news_date) AS year,
                MONTH(news_date) AS month,
                CASE
                    WHEN MONTH(news_date) = 1 THEN 'JAN'
                    WHEN MONTH(news_date) = 2 THEN 'FEB'
                    WHEN MONTH(news_date) = 3 THEN 'MAR'
                    WHEN MONTH(news_date) = 4 THEN 'APR'
                    WHEN MONTH(news_date) = 5 THEN 'MAY'
                    WHEN MONTH(news_date) = 6 THEN 'JUN'
                    WHEN MONTH(news_date) = 7 THEN 'JUL'
                    WHEN MONTH(news_date) = 8 THEN 'AUG'
                    WHEN MONTH(news_date) = 9 THEN 'SEP'
                    WHEN MONTH(news_date) = 10 THEN 'OCT'
                    WHEN MONTH(news_date) = 11 THEN 'NOV'
                    WHEN MONTH(news_date) = 12 THEN 'DEC'
                END AS month_abbr,
                DAY(news_date) AS day,
                news_place,
                news_update,
                news_con,
                news_pic,
                news_area,
                CASE 
                WHEN DAYOFWEEK(news_date) = 1 THEN '日'
                WHEN DAYOFWEEK(news_date) = 2 THEN '一'
                WHEN DAYOFWEEK(news_date) = 3 THEN '二'
                WHEN DAYOFWEEK(news_date) = 4 THEN '三'
                WHEN DAYOFWEEK(news_date) = 5 THEN '四'
                WHEN DAYOFWEEK(news_date) = 6 THEN '五'
                WHEN DAYOFWEEK(news_date) = 7 THEN '六'
                END AS chinese_day_of_week 
                from news;";
        $news = $pdo->query($sql);
        $nRow = $news->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($nRow);
    } catch (Exception $e){
        echo "錯誤行號 : ", $e->getLine(), "<br>";
	    echo "錯誤原因 : ", $e->getMessage(), "<br>";
	    //echo "系統暫時不能正常運行，請稍後再試<br>";
    }

    

    
?>
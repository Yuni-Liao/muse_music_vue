
<?php
$dbname = "musemusic";
$user = "root";
$password = "";
// $dbname = "tibamefe_chd103g2";
  // $user = "tibamefe_since2021";
  // $password = "vwRBSb.j&K#E";
$port = 3306;

$dsn = "mysql:host=localhost;port=$port;dbname=$dbname;charset=UTF8";

$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION); //CASE_LOWER表示PHP撈資料回來一律小寫

//建立pdo物件
$pdo = new PDO($dsn, $user, $password, $options);
?>
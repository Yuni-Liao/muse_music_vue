
<?php
$dbname = "musemusic";
$user = "root";
$password = "";

$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";

$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE => PDO::CASE_LOWER); //CASE_LOWER表示PHP撈資料回來一律小寫

//建立pdo物件
$pdo = new PDO($dsn, $user, $password, $options); ?>
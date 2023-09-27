<?php
// 這頁是yuni測試

header("Access-Control-Allow-Origin:*");
session_start();
try{
  require_once("connectDemo.php");
  $sql = "select * from `member` where memId=:memId and memPsw=:memPsw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->bindValue(":memPsw", $_POST["memPsw"]);
  $member->execute();

  if ( $member->rowCount()=== 0) { //查無此人, 帳密錯誤
      echo "{}";
  } else { //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //登入成功寫入session
    $_SESSION["memId"] = $memRow["memId"];
    $_SESSION["memName"] = $memRow["memName"];
    $_SESSION["email"] = $memRow["email"];
    $_SESSION["tel"] = $memRow["tel"];

    //送出登入者的姓名資料
    $result = ["memId"=>$memRow["memId"], "memName"=>$memRow["memName"], "email"=>$memRow["email"] , "tel"=>$memRow["tel"]];
    
    echo json_encode($result);//送出json字串
  }
} catch (PDOException $e) {
  $result = ["msg"=>$e->getMessage()];
  echo json_encode($result);
}
?>


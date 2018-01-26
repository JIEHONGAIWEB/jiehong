
<?php

    header("content-type","text/html;charset=utf-8");
  // 一：接收前端数据
  $username = $_POST["username"];
  $password= $_POST["password"];

  
  //1、连接数据库，选择数据库（目的地）
    $mysqli = new mysqli("localhost", "root", "", "xiaomi");  
  //2.数据库的操作
     $mysqli->set_charset("utf8");
     //
     //select number from mivip where number = "18829012038" and password = '666666';
    $sql = "select * from mivip where  number = '".$username."' and password='".$password."'";
    //执行操作  
    $result = $mysqli->query($sql,1);  
    if($result){
    	echo "1";
    }else{
    	echo "0";
    }
/*    //影响的行数
  $rows = mysqli_num_rows($result);*/
  
      
    
  
    /* close connection */  
    $mysqli->close(); 



?>
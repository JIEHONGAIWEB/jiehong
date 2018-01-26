<?php

    header("content-type","text/html;charset=utf-8");
  // 一：接收前端数据
  $id = $_GET["id"];
  $name = $_GET["name"];
  $price = $_GET["price"];
  $number = $_GET["number"];
  $imgUrl = $GET["imgUrl  "];
  //二：进行处理
  //1、连接数据库，选择数据库（目的地）
    $mysqli = new mysqli("localhost", "root", "", "xiaomi");  
  //2.数据库的操作
     $mysqli->set_charset("utf8");
     //
    $sql = "insert into  goodsinfo (id,name,price,number) values('".$id."','".$name."','".$price."','".$number."')";
    //执行操作  
    $result =$mysqli->query($sql,1);  
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
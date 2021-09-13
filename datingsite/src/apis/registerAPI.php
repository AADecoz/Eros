<?php
require "db.php";

function post_data($email,$username,$password,$preferences,$sex,$age,$area,$minAge,$maxAge){
  global $db;
  $query = "insert into users (email,Username,Password,Preference,Sex,Age,Area,minAge,maxAge) values (?, ?, ?, ?, ?, ?,?,?,?);
";
  $stmt= $db->prepare($query);
  $stmt->execute([$email,$username,$password,$preferences,$sex,$age,$area,$minAge,$maxAge]);
    
}

if (isset($_POST['username'])) {
  $email=$_POST['email'];
  $user = $_POST['username'];
  $pass = $_POST['password'];
  $preferences= $_POST['preference'];
  $sex = $_POST['sex'];
  $age= $_POST['birthday'];
  $area= $_POST['area'];
  

  $minAge=date('Y-m-d',strtotime($age.' + 20 year'));
  $maxAge=date('Y-m-d',strtotime($age.' - 20 year'));

  post_data($email,$user, $pass,$preferences,$sex,$age,$area,$minAge,$maxAge);
  
}else {
  
}


<?php

require "db.php";

$userid = $_POST['userid'];
$username = $_POST['username'];
$password = $_POST['password'];
$preferences= $_POST['preference'];
$sex = $_POST['sex'];
$age= $_POST['age'];
$area= $_POST['area'];
$minage= $_POST['minage'];
$maxage= $_POST['maxage'];
$intro= $_POST['intro'];


function post_data($userid,$username,$preferences,$sex,$age,$area,$minage,$maxage,$intro){

  global $db;

  $query = "UPDATE users SET Username=?,Preference=?,Sex=?,Age=?,Area=?,minAge=?,maxAge=?,Intro=? WHERE UserID=?";
  $stmt= $db->prepare($query);

  $stmt->execute([$username,$preferences,$sex,$age,$area,$minage,$maxage,$intro,$userid]);

}

post_data($userid,$username,$preferences,$sex,$age,$area,$minage,$maxage,$intro);
<?php
require "db.php";

$userid= $_POST['userid'];
$matchid=$_POST['matchid'];
$matched=$_POST['matched'];


function logLike($userid,$matchid,$matched){
   global $db;
   $query="INSERT into matching values (?,?,?) ";
   $stmt = $db->prepare($query);
   $stmt->execute([$userid,$matchid,$matched]);
  

}

logLike($userid,$matchid,$matched);
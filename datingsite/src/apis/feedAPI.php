
<?php
require "db.php";

$id= $_POST['userid'];
$sex=$_POST['sex'];
$preference=$_POST['preference'];
$minAge=$_POST['minAge'];
$maxAge=$_POST['maxAge'];

$user = showFeed($id,$sex,$preference,$minAge,$maxAge);
if(empty($user)){
   response(200, "user not found", $user);
}else{
   response(200, "user found", $user);
}

function showFeed($id,$sex,$preference,$minAge,$maxAge){
    global $db;
    if($preference=="m"||$preference=="f"||$preference=="o"){
      
    $query= "select * from users where userID not in(select users.userID from users inner join matching on users.userId=matching.matchId where matching.UserId=?)&&preference=?&&sex=?&&userId!=?&&Age<?&&Age>?;";
    $stmt = $db->prepare($query);
    $stmt->execute([$id,$sex,$preference,$id,$minAge,$maxAge]);
    $data= $stmt->fetchAll();
    return $data;
    
 }else if($preference=="mf") {
     $query= "select * from users where userID not in(select users.userID from users inner join matching on users.userId=matching.matchId where matching.UserId=?)&&preference=?&&(sex='m'||sex='f')&&userId!=?&&Age<?&&Age>?;";
     $stmt = $db->prepare($query);
     $stmt->execute([$id,$sex,$id,$minAge,$maxAge]);
     $data= $stmt->fetchAll();
     return $data;
    }else if($preference=="mfo"){
     $query= "select * from users where userID not in(select users.userID from users inner join matching on users.userId=matching.matchId where matching.UserId=?)&&preference=?&&userId!=?&&Age<?&&Age>?;";
     $stmt = $db->prepare($query);
     $stmt->execute([$id,$sex,$id,$minAge,$maxAge]);
     $data= $stmt->fetchAll();
     return $data;
 
    }else if($preference=="mo"){
     $query= "select * from users where userID not in(select users.userID from users inner join matching on users.userId=matching.matchId where matching.UserId=?)&&preference=?&&(sex='m'||sex='o')&&userId!=?&&Age<?&&Age>?;";
     $stmt = $db->prepare($query);
     $stmt->execute([$id,$sex,$id,$minAge,$maxAge]);
     $data= $stmt->fetchAll();
     return $data;
    }else if($preference=="fo"){
     $query= "select * from users where userID not in(select users.userID from users inner join matching on users.userId=matching.matchId where matching.UserId=?)&&preference=?&&(sex='m'||sex='o')&&userId!=?&&Age<?&&Age>?;";
     $stmt = $db->prepare($query);
     $stmt->execute([$id,$sex,$id,$minAge,$maxAge]);
     $data= $stmt->fetchAll();
     return $data;
    }
    
 
}

function response($status, $status_message, $user)
{
    header("HTTP/1.1" . $status);
    $response['status'] = $status;
    $response['status_message'] = $status_message;
    $response['user'] = $user;
    $json_response = json_encode($response);
    echo $json_response;

}
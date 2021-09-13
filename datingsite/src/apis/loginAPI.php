<?php


require "db.php";

// $password = $_GET['password'];

$email = $_POST['email'];
$password = $_POST['password'];

$user = loginCheck($email);

if(empty($user)){
   response(200, "user not found", NULL);

} else{
   response(200, "user found", $user);

}

function loginCheck($email){
   global $db;

   $query="SELECT * from users where email= ? ";
   $stmt = $db->prepare($query);
   $stmt->execute([$email]);

   $data= $stmt->fetch();
   return $data;   
}

function response($status, $status_message, $user) {
    header("HTTP/1.1" . $status);

    $response['status'] = $status;
    $response['status_message'] = $status_message;
    $response['user'] = $user;

    $json_response = json_encode($response);
    echo $json_response;
}
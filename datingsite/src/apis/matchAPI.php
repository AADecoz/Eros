
<?php
require "db.php";


$id= $_POST['userid'];
$matches = showMatches($id);
if(empty($matches)){
   response(200, "matches not found", NULL);
}else{
   response(200, "matches", $matches);
}


function showMatches($id){
   global $db;
   $query= "SELECT * from matching as m1 inner join matching as m2 on m1.UserId=m2.matchId inner join users as u on m2.UserId=u.UserId  where m1.MatchId=m2.UserId&&m1.UserId=?&&m1.matched=1&&m2.matched=1 ;";
   $stmt = $db->prepare($query);
   $stmt->execute([$id]);
   $data= $stmt->fetchAll();
   return $data;
}


function response($status, $status_message, $matches)
{
    header("HTTP/1.1" . $status);
    $response['status'] = $status;
    $response['status_message'] = $status_message;
    $response['user'] = $matches;

    $json_response = json_encode($response);
    echo $json_response;

}
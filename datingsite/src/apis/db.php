<?php

header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-control-Allow-Methods: GET, POST, PUT, DELETE");
$_POST=json_decode(file_get_contents("php://input"),true);
 $db = new PDO("mysql: host=localhost;dbname=eros","root","");

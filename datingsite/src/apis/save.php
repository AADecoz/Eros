<?php
include "db.php";
$target_file=dirname(__DIR__,1)."/assets/userprofiles/". basename($_FILES["myFile"]["name"]);
move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);

?>
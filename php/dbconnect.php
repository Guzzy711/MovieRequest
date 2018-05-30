<?php
$server = "mysql6.unoeuro.com";
$username = "guzzy_dk";
$password = "tor123456";
$dbname = "guzzy_dk_db";
$mysqlConnect = mysqli_connect($server, $username, $password);
if (!$mysqlConnect) {
    echo "<script type='text/javascript'>alert('Kan ikke skabe en sikker forbindelse til databasen');</script>";
} else {
    mysqli_select_db($mysqlConnect, $dbname);
    //echo "<script type='text/javascript'>console.log('Kan godt skabe en sikker forbindelse til databasen');</script>";
}
?>
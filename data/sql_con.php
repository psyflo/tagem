<?php 
/* SQL Verbindung */
$mysqli = new mysqli("localhost", "USER", "PASSWORD_CHANGE", "DB");
if ($mysqli->connect_error) {
	exit();
}
?>
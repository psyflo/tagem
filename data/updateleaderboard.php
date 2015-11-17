<?php
require_once ('sql_con.php');



//$_POST['phpsessionid'];
//$vpn = $_POST['vpn'] ;

$userlfdn = isset($_POST['lfdn']) ? $_POST['lfdn'] : '';
$user = isset($_POST['user']) ? $_POST['user'] : '';
$score = isset($_POST['score']) ? $_POST['score'] : '';


echo $score;



$stmt = $mysqli->prepare("INSERT INTO `tagging`.`tagging3leaderboard` ( `lfdn`, `user`, `score`) VALUES (?, ?, ?)  ON DUPLICATE KEY UPDATE lfdn = VALUES(lfdn), user = VALUES(user), score = VALUES(score)");
$stmt->bind_param("ssi", $lfdn, $user, $score);
$stmt->execute();

echo "<br />\nAnzahl veränderter Datensätze: " . $stmt->affected_rows;
$stmt->close();


$mysqli->close();


?>

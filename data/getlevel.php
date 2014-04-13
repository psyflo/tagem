<?php
require_once ('sql_con.php');

$userlfdn = $_POST['lfdn'];
$username = $_POST['user'];



//$stmt = $mysqli->prepare("SELECT FROM `tagging`.`tagging3leaderboard` ( `lfdn`, `user`, `score`) VALUES (?, ?, ?)");

if ($stmt = $mysqli->prepare("SELECT lfdn, user, score FROM `tagging`.`tagging3leaderboard` ORDER BY score DESC")) {
$stmt->execute();

/* bind variables to prepared statement */
$stmt->bind_result($lfdn, $name, $score);

/* fetch values */
$rank = 1;
$aArray = array();
$i = 0;
while ($stmt->fetch()) {

$aArray[$i][0] = $score;
if ($lfdn == $userlfdn) {
        $aArray[$i][1] = "Sie";
        $aArray[$i][2] = "#12A1FF";

        $aArray[$i][3] = $rank;
        $aArray[$i][4] = $lfdn;
    }


$rank++;
$i++;


}
echo json_encode($aArray);

/* fetch values
while ($stmt->fetch()) {
printf("%s %s\n", $name, $score);
}*/

/* close statement */
$stmt->close();
}

/* close connection */
$mysqli->close();


?>
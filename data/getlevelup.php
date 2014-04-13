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

        /*prepare for new users*/
        $aArray[0][0] = "0";
        $aArray[0][1] = "Sie";
        $aArray[0][2] = "#12A1FF";

        $aArray[0][3] = 0;
        $aArray[0][4] = $lfdn;


$i = 0;
while ($stmt->fetch()) {


if ($lfdn == $userlfdn) {
        $aArray[0][0] = $score;
        $aArray[0][1] = "Sie";
        $aArray[0][2] = "#12A1FF";

        $aArray[0][3] = $rank;
        $aArray[0][4] = $lfdn;



    }


$rank++;


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
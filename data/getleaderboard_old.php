<?php
require_once ('sql_con.php');

$userlfdn = $_POST['lfdn'];
$username = $_POST['user'];
$userscore = $_POST['score'];

    /*

    <table>
    <tr>
        <td>Rank</td>
        <td>User</td>
        <td>Score</td>
        <td>lfdn</td>
    </tr>

    */

//$stmt = $mysqli->prepare("SELECT FROM `tagging`.`tagging3leaderboard` ( `lfdn`, `user`, `score`) VALUES (?, ?, ?)");

if ($stmt = $mysqli->prepare("SELECT lfdn, user, score FROM `tagging`.`tagging3leaderboard` ORDER BY score DESC")) {
    $stmt->execute();

    // bind variables to prepared statement
    $stmt->bind_result($lfdn, $name, $score);

    // fetch values
     $rank = 1;
     $aArray = array();
     $i = 0;
    while ($stmt->fetch()) {

          $aArray[$i][0] = $score;
          if ($lfdn == $userlfdn) {
            $aArray[$i][1] = "Sie";
            $aArray[$i][2] = "#12A1FF";
          } else {
            $aArray[$i][1] = $name;
            $aArray[$i][2] = "#2ba6cb";
          }
          
		    $aArray[$i][3] = $rank;
		    $aArray[$i][4] = $lfdn;


              /*  echo "<tr>
                		<td>{$rank}</td>
                      	<td>{$name}</td>
                      	<td>{$score}</td>
                      </tr>"; */

          $rank++;
          $i++;

     
    }   /*
        $aArray[0][0] = 10000;
        $aArray[0][1] = $name;
        $aArray[0][2] = "#2ba6cb";
        $aArray[1][0] = 6000;
        $aArray[1][2] = "#2ba6cb";
        $aArray[2][0] = 3000;
        $aArray[2][1] = 3000;
        $aArray[2][2] = "#2ba6cb";
        $aArray[3][0] = 1000;
        $aArray[3][1] = 1000;
        $aArray[3][2] = "#2ba6cb";
        $aArray[4][0] = $userscore;
        $aArray[4][1] = $userlfdn;
        $aArray[4][2] = "#12A1FF";
         */

       // $aArray[0][0] =  //score of number one

        function array_sort_by_column(&$arr, $col, $dir = SORT_DESC) {
        $sort_col = array();
        foreach ($arr as $key=> $row) {
        $sort_col[$key] = $row[$col];
        }

        array_multisort($sort_col, $dir, $arr);
        }


        array_sort_by_column($aArray, 0);

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

/*
if (!($res = $stmt->get_result())) {
    echo "Getting result set failed: (" . $stmt->errno . ") " . $stmt->error;
}

var_dump($res->fetch_all());


        //$result = mysql_query("SELECT user, score FROM tagging3leaderboard ORDER BY score DESC");
     $rank = 1;

        if (mysql_num_rows($result)) {
            while ($row = mysql_fetch_assoc($result)) {
                echo "<td>{$rank}</td>
                      <td>{$row['user']}</td>
                      <td>{$row['score']}</td>";

                $rank++;
            }
        } */
    ?>
<?php 
require_once ('sql_con.php');

$load_time = $_POST['load_time'];
$time = $_POST['time'];
$phpsessionid = $_POST['phpsessionid'];
$lfdn = $_POST['lfdn'];
$tic = $_POST['tic'];
$g = $_POST['g'];
$meaningFraming = $_POST['meaningFraming'];
$leaderboard = $_POST['leaderboard'];
$levelUp = $_POST['levelUp'];
$img_i = $_POST['img_i'];
$round_number = $_POST['round_number'];
$img_name = $_POST['img_name'];
$tag = $_POST['tag'];




/*
$load_time = 1358427223141;
$time = 1358427223141;
$phpsessionid = "1358427223141sessionid";
$lfdn = 999;
$tic = 999;
$g = 1;
$meaningFraming = 1;
$img_i = 1;
$round_number = 1;
$img_name = "abstracti_+2";
$tag = "test";
*/


//Test if it is a shared client
if (!empty($_SERVER['HTTP_CLIENT_IP'])){
  $ip=$_SERVER['HTTP_CLIENT_IP'];
//Is it a proxy address
}elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
  $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
}else{
  $ip=$_SERVER['REMOTE_ADDR'];
}

$user_agent = $_SERVER['HTTP_USER_AGENT'];


$tag = utf8_decode($tag);

//$tag_nr = $_POST['tag_nr'];

//echo $g;
//echo $img_i;
//echo $phpsessionid;
//$tag = "test";
/* BILDNummer!! & g */


//array_walk($tagarray, 'saveToDB');


//$result = mysql_query("INSERT INTO `tags`(tagstring) VALUES ('".implode("'),('", $tagarray)."')") or die(mysql_error());  
//function saveToDB ($item) {

/*
$query = "SELECT interests FROM signup WHERE username = '".mysql_real_escape_string($username)."'";
$result = mysql_query($query) or die ("no query");

$result_array = array();
while($row = mysql_fetch_assoc($result))
{
    $result_array[] = $row;
}
*/
/*
mysql_select_db("tagging", $con);

mysql_query("INSERT INTO `tagging`.`tagging` (`time`, `phpsessionid`, `vpn`, `gamified`, `img_i`, `tag`)
VALUES ('$time', '$phpsessionid', '$vpn', '$g', '$img_i', '$tag')");


mysql_close($con);
*/

$stmt = $mysqli->prepare("INSERT INTO `tagging`.`tagging3` ( `load_time`, `tag_time`, `phpsessionid`, `ip_address`, `user_agent`, `lfdn`, `tic`, `gamified`, `meaning_framing`,`leaderboard`,`levelUp`, `img_number`, `round_number`, `img_name`, `tag`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssiiiiiiss", $load_time, $time, $phpsessionid, $ip, $user_agent, $lfdn, $tic, $g, $meaningFraming, $leaderboard, $levelUp, $img_i, $round_number, $img_name, $tag);
$stmt->execute();

echo "<br />\nAnzahl veränderter Datensätze: " . $stmt->affected_rows;
$stmt->close();


$mysqli->close();


//}

?>
<?php
$round = isset($_POST['r']) ? $_POST['r'] : '';

/*
header('Content-type:application/javascript');

$imagesDir = '';
$images = glob($imagesDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);



//if (($handle = fopen('ABSTRACT_groundTruth.csv', 'r')) === false) {
if (($handle = fopen('ABSTRACT_groundTruth_only18.csv', 'r')) === false) {
    die('Error opening file');
}

$headers = fgetcsv($handle, 1024, ',');
$complete = array();

while ($row = fgetcsv($handle, 1024, ',')) {
    $complete[] = array_combine($headers, $row);
}

fclose($handle);

//echo json_encode($complete);

$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($complete));
fclose($fp);


echo json_encode($complete);

*/

$str_data = file_get_contents("results.json");
$data = json_encode($str_data);

echo $str_data;

//echo "window.messages = $complete";


?>

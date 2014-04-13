<?php

$userlfdn = $_POST['lfdn'];
$username = $_POST['user'];
$userscore = $_POST['score'];

        $aArray[0][0] = 10000;
        $aArray[0][1] = "verdandi";
        $aArray[0][2] = "#2ba6cb";
        $aArray[1][0] = 6000;
        $aArray[1][1] = "neo23";
        $aArray[1][2] = "#2ba6cb";
        $aArray[2][0] = 3000;
        $aArray[2][1] = "legolas";
        $aArray[2][2] = "#2ba6cb";
        $aArray[3][0] = 1000;
        $aArray[3][1] = "snork85";
        $aArray[3][2] = "#2ba6cb";
        $aArray[4][0] = $userscore;
        $aArray[4][1] = "Sie";
        $aArray[4][2] = "#12A1FF";
         

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

 
    ?>
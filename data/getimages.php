<?
//PHP SCRIPT: getimages.php
Header("content-type: application/x-javascript");

//This function gets the file names of all images in the current directory
//and ouputs them as a JavaScript array

 function returnimages($dirname="../images/tag_images/") {
    $pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
    $files = array();
    $curimage=0;
    if($handle = opendir($dirname)) {
        while(false !== ($file = readdir($handle))){
            if(eregi($pattern, $file)){ //if this file is a valid image
                //Output it as a JavaScript array element
                echo 'imagearray['.$curimage.']="'.$file .'";';
                $curimage++;
            }
        }

    closedir($handle);
    }
    return($files);
}

/*
$obj = new stdClass();
$obj->name = $arr;
$obj->filepath = array('birnen', 'kirschen');
$obj->tags = array();
*/




echo 'var imagearray=new Array();'; //Define array in JavaScript
//echo json_encode($arr);

?> 
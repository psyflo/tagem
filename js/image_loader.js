/**
 * Created with JetBrains WebStorm.
 * User: fbruehlmann
 * Date: 16.04.13
 * Time: 13:35
 * To change this template use File | Settings | File Templates.
 */

/** getImages function

 TYPE: ASYNC
 RETURN-TYPE: Array

 Gets the images via ajax and the getimages.php script. The getimages script returns a json encoded file with all the image names and their locations.




 */

function getImages() {
    //var imagesPerRound = 5;
    var imgArray = new Array();

    //$.ajaxSetup( { "async": false } );
    //$.getJSON("../images/tag_images/getimages.php", function(json) {
    $.ajax({
        url: "images/tag_images/getimages.php",
        dataType: 'json',
        //data: data,
        async: false,
        success: function(data) {
            for ( var i = 0; i < data.length; i++) {
                imgArray[i] = data[i].Name;
            };
            console.log("Images loaded :", imgArray.length);
        }
    });
    return imgArray;
}; // END getImages
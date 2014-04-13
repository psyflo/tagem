/**
 * Created with JetBrains WebStorm.
 * User: fbruehlmann
 * Date: 22.04.13
 * Time: 14:07
 * To change this template use File | Settings | File Templates.
 */


var getLevel = function(lfdn, user) {

    var levels = {
        Level1:500,
        Level2:1000,
        Level3:2500

    };

    $.ajax({
        type: 'POST',
        url: "data/getlevelup.php",
        data: {
            lfdn: lfdn,
            user: user
        },
        success: function(data) {


            var levelArray = JSON.parse(data);

            console.log(levelArray);

            $('#levelup_display').empty();

            $('#levelup_display').jqBarGraph({ data: levelArray, title: false, showValues: true, barSpace: 10, width: 300, height: 150 });
            //$('#levelup_display').css('margin-top', '30px');





            //$('#intro_display').append(data);

            /*for ( var i = 0; i < data.length; i++) {
             imgArray[i] = data[i].Name;
             };
             console.log("Images loaded :", imgArray.length); */
        }
    });

};

var updateLevel = function (id) {

};




/* Update Leaderboard
function updateLeaderboard() {
    //alert(round_number);
    //alert(trial_round);
    if(trial_round == false || trial_round == "false") {

        $.ajax({
            type: 'POST',
            url: 'data/updateleaderboard.php',
            scriptCharset: "utf-8" ,
            data: {
                lfdn: lfdn,
                user: user,
                score: score
            },
            success: function( resp ) {
                console.log( 'POST: ok', status );
            },
            error: function( req, status ) {
                console.log( 'something went wrong', status );
            }
        })
    }
};
 */
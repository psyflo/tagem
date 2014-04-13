/**
 * Created with JetBrains WebStorm.
 * User: fbruehlmann
 * Date: 16.04.13
 * Time: 14:25
 * To change this template use File | Settings | File Templates.
 */
/* selectImages function

 Parameters: imgArray, imgPerRound, startRound, totalRounds, roundLength, trialRound
 Param-Types: Array, int, int, int, int, boolean

 RETURN-TYPE: Array;

 A mysterious function...



 */

/* Fisher Yates Randomizer */

function fisherYates ( myArray ) {
    var iLen = myArray.length;
    if ( iLen == 0 ) return false;
    while ( --iLen ) {
        var j = Math.floor( Math.random() * ( iLen + 1 ) );
        var tempi = myArray[iLen];
        var tempj = myArray[j];
        myArray[iLen] = tempj;
        myArray[j] = tempi;
    }
    console.log("fisherYates: ok");
    return myArray;
}





function selectImages(imgArray, imgPerRound, startRound, totalRounds, roundLength, trialRound){

    //var div = Math.round(imgArray.length / totalRounds);
    //alert(div); 140
    //var upperBound = startRound * div;
    //alert(upperBound); 140
    //var lowerBound = upperBound - div;
    //alert(lowerBound); 0
    //var range = upperBound - lowerBound;
    //alert(range); 140
    var roundArray = new Array();


    for (var i = 1, m = 0; i<=totalRounds; i++, m++) {
        if (trialRound||i==1) { //true
            imgPerRound_temp = 3;
            trialStart = 0;
            trialRound = false;
        } else {
            imgPerRound_temp = roundLength;
            //alert(imgPerRound_temp); 280
            trialStart = 3;
        }

        roundArray[i] = new Array(); // creates 2 arrays (default)

        for (var j = 0; j<imgPerRound_temp-trialStart; j++) {
            //alert(j);
            var k = j + trialStart;
            console.log(k);
            //console.log("start Round", startRound);
            roundArray[i][j] = imgArray[k];
        }
        /* shuffle all arrays*/
        roundArray[i] = fisherYates(roundArray[i]);
    }


    //console.log("Round Array length: ", roundArray[round_number].length);
    //console.log("Round number 2", roundArray[2].length);
    return roundArray;


};


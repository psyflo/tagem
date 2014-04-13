/**
 * Created with JetBrains WebStorm.
 * User: fbruehlmann
 * Date: 16.04.13
 * Time: 14:31
 * To change this template use File | Settings | File Templates.
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
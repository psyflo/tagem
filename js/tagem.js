
            /* IE FIX for console logs etc. */
                
                if (!(window.console && console.log)) {
              (function() {
                var noop = function() {};
                var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
                var length = methods.length;
                var console = window.console = {};
                while (length--) {
                    console[methods[length]] = noop;
                }
              }());
            }
    
        /* Loading-Image file*/
                
                var loader = "<img class=\"loadimg\" style=\"position:fixed;left:50%;top:50%;\"src=\"load.gif\" class=\"load\" alt=\"Lädt…\" />";

        $(document).ready(function(){
        
        
        /* Loading-Image function*/
        
        $('.tagEm').hide();
        $('.container').append(loader);
        $(window).load( function() {
            $('.loadimg').hide();
            $('.tagEm').fadeIn('slow');
            
        /* Page loading time */
            
            var loading = new Date();
            load_time = loading.getTime();
            console.log(load_time);
        });
        
        
                
        
                /*  URL Parameter auslesen (GET) */
                
                $.extend({
                          getUrlVars: function(){
                                var vars = [], hash;
                                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                                for(var i = 0; i < hashes.length; i++)
                                {
                                  hash = hashes[i].split('=');
                                  vars.push(hash[0]);
                                  vars[hash[0]] = hash[1];
                                }
                                return vars;
                                },
                                getUrlVar: function(name){
                                return $.getUrlVars()[name];
                          }
                        });         
                        // Get object of URL parameters
                        //var allVars = $.getUrlVars();

                        // Getting URL var by its name
                        //var byName = $.getUrlVar('name');
                
                /* setVar function
                
                Makes URL Parameter beautiful
                
                Removes # from any variable and retruns it or
                if variable is undefined or empty sets it to a default value (999)
                */
                
                function setVar(urlVar, boolVar){
                    this.urlVar = urlVar;
                    this.boolVar = boolVar;
                    if(boolVar == true){
                            if (urlVar == undefined || urlVar == "") {
                            urlVar= "1";
                            }
                            
                            urlVar = urlVar.replace('#', '');
                            
                            /*
                            if ((urlVar != 0 && urlVar != 1 )|| (urlVar != "0" && urlVar != "1") ||(urlVar == undefined) || (urlVar == "")) {
                            urlVar= "1"; // GET Variable, kann entweder 1 = true oder 0 = false sein, Standard: 1 = true
                            }
                            */
                            
                            if ( urlVar == 0 || urlVar == "0") {
                            urlVar= "0";
                            }
                            
                        } else {
                            if(urlVar == undefined || (urlVar == "")) {
                            urlVar = 999;
                            } else {
                                urlVar = urlVar.replace('#','');
                                }
                            }
                    console.log("setVarValue: ", urlVar);
                    return urlVar;
                    }

                /* Gamified yes or no? */
                
                var g = $.getUrlVar('g');
                console.log("Gamified: "); 
                var g = setVar(g, true);
                $('.pointsPanel').hide(); //score_div

                /* Leaderboard yes or no?*/

                var l = $.getUrlVar('le');
                console.log("Leaderboard: ");
                l = setVar(l, true);
                $('.leaderboardPanel').hide(); //leaderboard


                /* LevelUP yes or no?*/

                var leup = $.getUrlVar('leup');
                console.log("Levelup: ");
                leup = setVar(leup, true);
                $('.levelupPanel').hide(); //leaderboard

                /* UNIPARK tic auslesen */
                
                var tic = $.getUrlVar('tic');
                console.log("tic: ");
                var tic = setVar(tic, false);
                
                /* Unipark lfdn */
                
                var lfdn = $.getUrlVar('lfdn'); // Versuchspersonennummer aus der URL lesen
                console.log("lfdn: ");
                var lfdn = setVar(lfdn, false);

                /*  time */

                var t = $.getUrlVar('t'); // Versuchspersonennummer aus der URL lesen
                if (t == undefined || (t == "") || t == 0 || t == "0") {
                    t = 5000;
                } else {
                t = t.replace('#','');
                }
                console.log("time: "+t+"ms");
                $('#time_info').text("Das Bild wird jeweils "+t/1000+" Sekunden angezeigt, bevor das Feld zur Eingabe erscheint.");
                /* Round Number*/

                var god_mode = $.getUrlVar('god_mode'); // Versuchspersonennummer aus der URL lesen
                if (god_mode == undefined || (god_mode == "") || god_mode == 0 || god_mode == "0") {
                    god_mode = false;
                } else {
                    god_mode = god_mode.replace('#','');
                    $(".god_mode").show();
                }
                console.log("god_mode:"+god_mode);


            var round_number = $.getUrlVar('r'); // Round NR
                console.log("round_number: ");
                var round_number = setVar(round_number, true);

                
                /*
                if (round_number == undefined || (round_number == "")) {
                round_number = 1;                   // Falls keine round_number gesetzt, gebe round_number = 1
                } else {
                round_number = round_number.replace('#','');
                }
                console.log("round_number: ",round_number);
                */
                
                /* Meaning Framing */                
                var meaningFraming = $.getUrlVar('h'); 
                console.log("meaningFraming: ");
                var meaningFraming = setVar(meaningFraming, true);
                
                
                /* Level/Round Info on/off */                
                var showLabel = $.getUrlVar('sl');
                
                if (showLabel == undefined || (showLabel == "") || showLabel == 0 || showLabel == "0") {
                showLabel = 0; 
                $('#level').remove();
                $('#round').remove();               
                $('#level_label').remove();             
                $('#round_label').remove();             
                } else {
                showLabel = showLabel.replace('#','');
                }
                console.log("showLabel: ",showLabel);

                function randomFromInterval(from,to)
                {
                    return Math.floor(Math.random()*(to-from+1)+from);
                }


                /* USER */
                var user = $.getUrlVar('u');
                if (user == undefined || (user == "") || user == 0 || user == "0") {
                    
                    user = window.prompt("Wie lautet ihr Nickname?","");
                    if (user == undefined || (user == "") || user == 0 || user == "0") {
                        user = "user"+ randomFromInterval(0,99);
                    }

                }



                
                // URL Parameter setup finished
                
                
                

           
        /* getLeaderboard function 
        

        */

        function getLeaderboard() { 
                            var imgArray = new Array();     
                            $.ajax({
                                type: 'POST',
                                async: false,
                                url: "data/getleaderboard.php",
                                data: {
                                lfdn: lfdn,
                                user: user,
                                score: score,
                                },
                                success: function(data) {

                                    //var arr = $.parseJSON(data);
                                    //alert(obj);
                                    //alert(data);

                                    var arrayOfData = JSON.parse(data);

                                    var myArrayOfData = [];



                                    for (var i = 0, lenArray = arrayOfData.length; i < lenArray; i++) {

                                        var foundMe = false;

                                        if (i < 5) {
                                            myArrayOfData.push(arrayOfData[i]);
                                            if (arrayOfData[i][4] == lfdn) foundMe = true;

                                        } else if (!foundMe && arrayOfData[i][4] == lfdn) {
                                                myArrayOfData.pop();
                                                myArrayOfData.push(arrayOfData[i]);
                                                //console.log(arrayOfData[i][4]);  // lfdn
                                                foundMe = true;

                                        }

                                        if (foundMe && i >= 5) break;

                                        //console.log(arrayOfData[i][3]);   // rank



                                    }

                                    console.log(myArrayOfData);

                                    $('#leaderboard_display').empty();

                                    $('#leaderboard_display').jqBarGraph({ data: myArrayOfData, barSpace: 10, width: 300, height: 150 });
                                    $('#leaderboard_display').css('margin-top', '30px');
                                    //$('#graphLabel4leaderboard_display').css('color', '#12A1FF');


                                    //$('#intro_display').append(data);

                                    /*for ( var i = 0; i < data.length; i++) {
                                        imgArray[i] = data[i].Name;
                                        }; 
                                        console.log("Images loaded :", imgArray.length); */
                                    }
                                });
                            //return imgArray;
                            }; // END getLeaderboard
                            
                /* call of the getLeaderboard function */
        
                getLeaderboard();


        /* Update Leaderboard */
        function updateLeaderboard() { 
            //alert(round_number);
            //alert(trial_round);
            if(trial_round == true || trial_round == "true") {
                score = 0;
            }

                $.ajax({
                            type: 'POST',
                            url: 'data/updateleaderboard.php',
                            async: false,
                            scriptCharset: "utf-8" ,
                            data: {
                                lfdn: lfdn,
                                user: user,
                                score: score 
                            },
                            success: function( resp ) {
                            console.log( 'POST: ok', status );

                                /* Load the new progress/level */
                                getLevel(lfdn, user);
                            },
                            error: function( req, status ) {
                            console.log( 'something went wrong', status );
                            }
                        })

        };

            //var intervalID = setInterval(getLeaderboard(), 600);


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
                
        /* GET IMAGES */    
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
                
        var imagesArray = getImages();
                //console.log(imagesArray);
                /* Randomize */ 
                //imagesArray = fisherYates(imagesArray);
                //console.log(imagesArray);


        function selectImages(imgArray, imgPerRound, startRound, totalRounds, roundLength, trialRound){
        
            var div = Math.round(imgArray.length / totalRounds);
            var upperBound = startRound * div;
            var lowerBound = upperBound - div;
            var range = upperBound - lowerBound;
            var roundArray = new Array();
                        
                        
                        for (var i = 1, m = 0; i<=totalRounds; i++, m++) {
                            if (trialRound||i==1) {
                            imgPerRound_temp = 3;
                            trialStart = 0;
                            trialRound = false;
                            } else {
                            imgPerRound_temp = roundLength;
                            trialStart = 3;   
                            }
                        
                        roundArray[i] = new Array();
                            for (var j = lowerBound; j<imgPerRound_temp; j++) {
                            //alert(j);
                            var k = j + trialStart;
                            //alert(k);
                            //console.log("start Round", startRound);
                            roundArray[i][j] = imgArray[k];
                            }
                        /* shuffle all arrays*/
                        roundArray[i] = fisherYates(roundArray[i]);
                        }
            
                
                console.log("Round Array length: ", roundArray[round_number].length);
                //console.log("Round number 1", roundArray[2].length);
        return roundArray;
        
        
        };


       /* prepare Array for round */
                var trial_round = true;
                var total_rounds = 2;
                var round_length = 15;
                
        var roundArray = selectImages(imagesArray, 15, 1, total_rounds, round_length, trial_round);
                
                
                
        //alert(imagesArray.length);
        


        /* endTheSession function */
        var endTheSession = function() {

            updateLeaderboard();

            
                var url = 'end.php';
                var form = $('<form style="display:none;" action="' + url + '" method="post">' +
                  '<input type="text" name="score" value="' + score + '" />' +
                  '<input type="text" name="lfdn" value="' + lfdn + '" />' +
                      '<input type="text" name="tic" value="' + tic + '" />' +
                      '<input type="text" name="h" value="' + meaningFraming + '" />' +
                  '<input type="text" name="g" value="' + g + '" />' +
                  '<input type="text" name="le" value="' + l + '" />' +
                  '<input type="text" name="leup" value="' + leup + '" />' +
                  '<input type="text" name="finalLevel" value="' + finalLevel + '" />' +
                  '<input type="text" name="img_i" value="' + img_i + '" />' +
                  '</form>');
                $('body').append(form);
                $(form).submit(); 
            };

           $("#god_mode_endthis").click( function () {endTheSession();});



            /* End Button function */
        
        if (trial_round) {
        
        $('.end_button').hide();
        
        }
        
        $('#JA').click(function(){ 
        
        //removeAndCalculate();
        //giveToDatabase();
        endTheSession();
        
        });
        
        
        
        
            
            /* IMAGES - BILDER Variablen */
            //var img_arr = ["http://placehold.it/375x500&text=[img0]", "http://placehold.it/375x500&text=[img1]", "http://placehold.it/375x500&text=[img2]", "http://placehold.it/375x500&text=[img3]"];
            
            var img_i = 0;
                        //console.log("Round number", round_number);
            img_arr = roundArray;
                        console.log(img_arr);
            var load_image = function(arg) {

                $('.image').first().remove();
                    //$(this).remove();


                                /*var length = 0;
                                        if (trial_round) { 
                                            length = 3;
                                            } else {
                                            length = img_arr[round_number].length;    
                                            }*/
                                if (arg < img_arr[round_number].length) {
                                       //var imgurl =  "images/tag_images/"+img_arr[round_number][arg];

                                    $('<img />',{
                                                src: "images/tag_images/"+img_arr[round_number][arg]
                                            })
                                            .addClass('image')
                                            .css({
                                            //zIndex:img_arr[round_number].length - arg,
                                            //background: 'url('+imgurl+') no-repeat left top',
                                            //position: "relative",
                                            //left: "0px",
                                            //top: "0px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            display: "block",

                                            height: "460px",



                                            }).appendTo('.img_container').fadeIn();

                                        $('<h6 />').append('<span />').text('Bild '+(img_i+1)).css({
                                                    position: 'absolute',
                                                    color: 'white',
                                                    //left: '235px',
                                                    //top: '235px',
                                                    background: 'rgb(0, 0, 0)',
                                                    background: 'rgba(0, 0, 0, 0.7)',
                                                    padding: '3px'
                                                }).fadeIn(3000).prependTo('.flipimage').fadeOut(1500);
                                            //$('.img_container').css('background-color', 'red');

                                            console.log("IMG NR: ", arg);
                                                                                    console.log("IMG NR: ", img_arr[round_number][arg]);
                                            img_i++;
                                            console.log("Next IMG NR: ", img_i);
                                                                                    console.log("Next IMG NR: ", img_arr[round_number][img_i]);

                                } else if (round_number < total_rounds) {
                                                                
                                                                round_number++;
                                                                img_i = 0;
                                                                //alert("The trial is over, this is the Round that counts", round_number);


                                                                setTimeout(function() {
                                                                if (meaningFraming == 1) {
                                                                    //leaderboard
                                                                    if (leup == 0 && l == 1 && g == 1) {$('#round1_reveal_leaderboard').trigger("click");}
                                                                    //levelup
                                                                    if (leup == 1 && l == 0 && g == 1) {$('#round1_reveal_levelup').trigger("click");}
                                                                    //points
                                                                    if (leup == 0 && l == 0 && g == 1) {$('#round1_reveal').trigger("click");}
                                                                    //KG
                                                                    if (leup == 0 && l == 0 && g == 0) {$('#round1_reveal').trigger("click");}

                                                                    //all on & rest
                                                                    if (leup == 1 && l == 1 && g == 1) {$('#round1_reveal').trigger("click");}
                                                                    if (leup == 0 && l == 1 && g == 0) {$('#round1_reveal').trigger("click");}
                                                                    if (leup == 1 && l == 0 && g == 0) {$('#round1_reveal').trigger("click");}

                                                                }
                                                                if (meaningFraming == 0) $('#round1_reveal_nohelp').trigger("click");
                                                                
                                                                /* Trial is over, show points if gamified */
                                                                    if (g == 1 || g == "1") {
                                                                        $('.pointsPanel').show();
                                                                        $('.gameInfo').show();
                                                                    } else {
                                                                        $('.gameInfo').hide();
                                                                    }

                                                                    if (l == 1 || l == "1") {
                                                                        $('.leaderboardPanel').show();
                                                                        $('.gameInfo').show();
                                                                    } else if ((l == 0 || l == "0") && (g == 0 || g == "0")) {
                                                                        $('.gameInfo').hide();
                                                                    }
                                                                    if (leup == 1 || leup == "1") {
                                                                        $('.levelupPanel').show();
                                                                        $('.gameInfo').show();
                                                                    } else if ((leup == 0 || leup == "0")&&(g == 0 || g == "0")) {
                                                                        $('.gameInfo').hide();
                                                                    }


                                                                    }, 1010); 
                                                                
                                                                
                                                                
                                                                //if (meaningFraming == 1) $('#round1_reveal').trigger("click");
                                                                //if (meaningFraming == 0) $('#round1_reveal_nohelp').trigger("click");
                                                                
                                                                load_image(img_i);
                                                                //alert("hello");
                                                                level = 1;
                                                                var scoreRound1 = score;
                                                               
                                                                var score = 0;
                                                                var points = 0;
                                                                $('#level').text(level);
                                                                $('#round').text(round_number);
                                                                $('#points').text(points);
                                                                
                                                                trial_round = false;
                                                                console.log('trial is over!');
                                                                
                                                                
                                                                // Display END Button
                                                                
                                                                $('.end_button').show();
                                                                


                                                                    
                                } else {                            // alle Bilder durch --> wechsle zu end.php
                                        console.log(score);
                                        endTheSession();
                                        
                                        //window.location.href = "/end.php?score="+score;
                                };
                    if(img_i!=1) imageFlip();

                            };
            load_image(img_i);
                                    

            /* MODAL, Reveal */
            
            var score = 0;
            
            $('.score-close').click( function() { 

                var processData = function (callback) {

                                /* Tags speichern */

                                tags = $("#tagField").tagit("assignedTags");

                                /* Beim Schliessen wird die alert-box aktualisiert */
            
                                $('#points').text(function (index, text) {return score;});
                                
                                $('#level').text(function (index, text) {return level;});   

                /* Behebt Problem mit Objekt Array*/

                if (!Object.keys) Object.keys = function(o) {
                                      if (o !== Object(o))
                                        throw new TypeError('Object.keys called on a non-object');
                                      var k=[],p;
                                      for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
                                      return k;
                                    }               
                                                                    
                /* Übergabe an die Datenbank */
                
                var giveToDatabase = function() {

                                    
                    for (var i=0, lenTimes = Object.keys(times).length; i < lenTimes; i++) {
                        var key = tags[i];
                        //console.log(key);
                        //console.log(times);
                        //tags.text( tag.text().replace('×', '') );
                        $.ajax({
                            type: 'POST',
                                                        async: false,
                            url: 'data/db_save.php',
                                                        scriptCharset: "utf-8" ,
                            data: {
                                load_time: load_time,
                                time: times[key + "×"],
                                phpsessionid: "<?php echo session_id();?>",
                                lfdn: lfdn,
                                tic: tic,
                                g: g,
                                meaningFraming: meaningFraming,
                                leaderboard: l,
                                levelUp: leup,
                                img_i: img_i,
                                round_number: round_number,
                                img_name: img_arr[round_number][img_i   -1], // weil img_1 bei 0 beginnt
                                tag: tags[i]
                            },
                            success: function( resp ) {
                            console.log( 'POST: ok', status );
                            },
                            error: function( req, status ) {
                            console.log( 'something went wrong', status );
                            }
                        })
                    };
                }
                console.log("The TIMES"+times);
                giveToDatabase();



            /*update the Leaderboard */
            updateLeaderboard();
            getLeaderboard();

            $("input.ui-widget-content.ui-autocomplete-input").focus();

            callback();

            }; // END processData


            processData(function(){
                                    removeAndCalculate = function(callback) {

                    //$(".flipimage").revertFlip();
                    revertImageFlip();
                     $("#tagField").tagit("removeAll");

                    $('.results').empty();
                    callback();
                }
                removeAndCalculate( function() {
                 //  $('.img_container').fadeOut('slow').remove();

                 //   load_image(img_i);
                    setTimeout(function() {

                        console.log('load new image!');
                        load_image(img_i);

                    }, 1500);
                });

                });

            }); //END score close click





            var string = "<div class='twelve columns god_mode' id='tag_container'> \
                            <p>Bitte schreiben Sie in das Feld so viele <b>Stichworte</b> hinein wie Ihnen zur Stimmung im jeweiligen Bild in den Sinn kommen.</br>  \
                                Einzelne Stichworte können Sie mit <b>LEERTASTE</b> oder mit <b>ENTER</b> trennen.</p> \
                            <p>Wenn Sie fertig sind, klicken Sie auf <em>Nächstes Bild</em>.</p>  \
                            <form>      \
                                <input name='tags' id='tagField' value=''>   \
                                    <div class='row'>                         \
                                        <div class='ten columns'>              \
                                            <p class='next_button'><a href='#' class='button' id='next' >Nächstes Bild &rarr;</a></p>    \
                                        </div>  \                                                       \
                                    </div>       \
                            </form>               \
                        </div>";
            //var string = $('#tag_container').remove();


            $("#hiddenElements").append(string);

            $("#tag_container").css({'margin-top': '-525px', 'margin-left':'40px','width':'480px'}).hide();

            //$('.tag_wrapper').hide()
            $('#tagField').css('box-shadow', 'none');
        





            //times = new Array();

            var times = {};
            var tags;

            /* TAG Funktionalität */

            $('#tagField').css('box-shadow', 'none');

            var sampleTags = []; // no sample tags

            $('#tagField').tagit({
                availableTags: sampleTags,
                allowSpaces: false,
                removeConfirmation: true
            });



            /* Zeit speichern */


            $("#tagField").tagit({
                onTagAdded: function(event, tag) {
                    console.log("added tag: ", tag.text());
                    var now = new Date();
                    times[tag.text()] = now.getTime();
                }
            });
            
            $("#tagField").tagit({
                onTagRemoved: function(event, tag) {
                    //console.log("removed tag: ", tag.text());
                    delete times[tag.text()];

                }
            }); // Zeit speichern ENDE



            addClickButton();


            /* Flipbox mit timeout */

            function imageFlip() {
                console.log('imageFlip initialized');
                    setTimeout(function() {
                                $(".flipimage").flip({
                                    direction:'lr',
                                    content: " ",
                                    onBefore: function() {

                                    },

                                            //onAnimation: $('tag_container').show(),
                                    onEnd: function () {

                                        $("#tag_container").show();
                                        $(".tagit").height("250px");        
                                        //$(".flipimage").css('background-color', '#f2f2f2');
                                        $(".flipimage").animate({ backgroundColor: "#f2f2f2" }, 'slow');

                                        $("input.ui-widget-content.ui-autocomplete-input").focus();


                                    }
                                   })

                    }, t);

            }; //END imageFlip

            $('.flipStarter').click(function() {imageFlip();});

            function revertImageFlip() {
                $(".flipimage").flip({
                    direction:'rl',
                    color:'#f2f2f2',
                    content: function() {

                        $('<p />').addClass('img_container').appendTo(".flipimage");

                    },
                    onBefore: function(){
                        $(".flipimage").children().remove(); 
                        console.log('before starting the animation');
                        $("#tag_container").hide();
                    },
                    onEnd: function(){
                        console.log('after finishing the animation');
                    }
                })
            };

            var finalLevel;
            var getLevel = function(lfdn, user) {

                var levels = [
                    {key: 0, value: 0},
                    {key: 1, value: 1000},
                    {key: 2, value: 3000},
                    {key: 3, value: 6000},
                    {key: 4, value: 10000},
                    {key: 5, value: 15000}
                ];

                function returnStars (starLevel) {

                    var stars;

                    switch (starLevel)
                    {
                        case 0:
                            stars =  "";
                            break;
                        case 1:
                            stars =  "Rang *";
                            break;
                        case 2:
                            stars =  "Rang **";
                            break;
                        case 3:
                            stars =  "Rang ***";
                            break;
                        case 4:
                            stars =  "Rang ****";
                            break;
                        case 5:
                            stars =  "Rang *****";
                            break;
                        default:
                            stars = "";
                            break;
                    }

                    return stars;
                }

                var currentLevel;

                function nextLevel(level_score) {

                    console.log("nextLevel function called");
                    console.log("Input: ", level_score);



                    //console.log(levels[0].value);
                    //console.log(next(levels, 2));

                    //return Math.exp(minv + scale*(level_score-minp));

                    var nextLevelScore;

                    $.each( levels, function( index, object ) {

                        //if (level_score == 0)   nextLevelScore = levels[index+1].value;

                        if((object.value <= level_score) && (level_score <= levels[index+1].value))  {

                            nextLevelScore = levels[index+1].value;
                            console.log("currentlevel",currentLevel);
                            currentLevel = object.key;

                        }



                        //alert( key + ": " + value );
                    });
                    console.log("Output: ", nextLevelScore);
                    return nextLevelScore;

                } // nextlevel


                $.ajax({
                    type: 'POST',
                    async: false,
                    url: "data/getlevelup.php",
                    data: {
                        lfdn: lfdn,
                        user: user
                    },
                    success: function(data) {


                        var levelArray = JSON.parse(data);
                        var levelScore = levelArray[0][0]

                        console.log("Level Array", levelArray);

                        $('#levelup_display').empty();


                        $('#levelup_display').append('<div class="nextLevelLabel" style="margin-bottom:5px">Nächster Rang: '+nextLevel(levelScore)+' Punkte</div>');
                        $('#levelup_display').append('<div class="progressbar"></div>');

                        $('#levelup_display').append('<div class="nextLevelLabel" style="position:absolute;float: right;bottom: 40px;left: 165px;"><h5>'+returnStars(currentLevel)+'</h5></div>');


                        console.log("bar height %: ",levelScore/nextLevel(levelScore) * 100);

                        $( ".progressbar").progressbarVertical({
                            value: 0,
                            width: 300,
                            height: 150
                        })


                        //$('#levelup_display').jqBarGraph({ data: levelArray, title: false, showValues: true, animate: true, barSpace: 10, width: 300, height: 150 });

                        //$('#levelup_display').css({'margin-top': '30px'});


                        $('.ui-progressbar-value').css({'background': '#12A1FF', 'margin': '0'});
                        $('.ui-progressbar-value').css({'height': 0});
                        $('.ui-progressbar-value').animate({'height': levelScore/nextLevel(levelScore) * 150}, 1000);
                        //$('#graphFieldBar1levelup_display').css({'background-color': 'transparent'} );
                        //$('#graphFieldBar1levelup_display').append('<p style="height: 122px; border: 1px solid;"></p>')
                        //$('#graphLabellevelup_display').css({'background-color': 'transparent' } );
                        //$('#graphLabel1levelup_display').css({'position': 'absolute', 'top': '-20px' } );

                        //$('#graphField0levelup_display').css({'width': '290px'} );
                        //$('#graphField1levelup_display').css({'width': '290px'} );
                        //$('#graphValue1levelup_display').css({'border-bottom': '1px solid' } );


                        //$('#intro_display').append(data);

                        /*for ( var i = 0; i < data.length; i++) {
                         imgArray[i] = data[i].Name;
                         };
                         console.log("Images loaded :", imgArray.length); */
                    }
                });
                finalLevel = currentLevel;

            };
            getLevel(lfdn, user);




          function addClickButton(){
            
            var level = 1;
                        
            /* Ausgabe + Zählen  */

          $('#next').click(function(){
                            
                                /* Disable Button for 3 seconds*/
                                
                                        $('#next').attr('id','unclickable');

                                                    
                                $("#score_display").reveal({
                                        opened: function(){
                                            setTimeout(function() {
                                                              $('#score_display').trigger('reveal:close');
                                                              $('#close').trigger("click");
                                                            }, 1500);
                                        
                                                        
                                        }
                                        });
                                
                var tags = $("#tagField").tagit("assignedTags"); 
                var cList = $('.results');
                g = g.replace('#', '');
                                
                                var total = $('.tagit-choice').size() * 100;
                                
                                tmp_score = $('.tagit-choice').size() * 100;
                                
                                score = score + tmp_score;
                //score = score + total;
                console.log("Score:" ,score);
                console.log("Total this round:", total);
                                level++;
                                
                                if (total <1 && g == "1" && !trial_round) {
                                $('#total').text('Total: 0 Punkte');
                                                                        
                                }
                                
                $.each(tags, function(i)
                {
                    var row = $('<div/>')
                        .addClass('row')
                        .appendTo(cList);
                    var col = $('<div/>')
                        .addClass('six columns')
                        .appendTo(row); 
                    var tag_results = $('<p/>')
                        .addClass('tag_results')
                        .text(tags[i])
                        .appendTo(col);
                        
                    if ( g == "1" && trial_round == false) {  // dont display scores in trial round
                        console.log('trial over & g = 1');
                        var pan_val = $('<div/>')
                            .addClass('score_div')
                            .appendTo(row);
                        var val = $('<p/>')
                            .addClass('score')
                                                        .addClass('points_display') //points_display
                                                        
                            .append(100)
                            .appendTo(pan_val);
                                
                                                $('#total').text(function() { 
                                                //total = $('.tagit-choice').size() * 100; // Punkte x100
                          
                                                return 'Total: ' + total + ' Punkte';
                                                                
                                                });
 
                                                    
                                                };
                i++;    
                               
                }
                );
                
                if ( g == "0"){
                    //alert("ohoooo");
                    $('#score_display > h2').text("");
                    
                    };  

                        //$('#close').delay(20000).trigger('click');
                        //$('#close').trigger("click");
                        //$('#score_display').trigger('reveal:close');
                        total = 0;
                        /*setTimeout(function() {
                                      $('close').click();
                                    }, 1000);*/



            });
        }
            /*$(".round1_close").reveal({
                                        : function(){
                                            setTimeout(function() {
                                                              $('#score_display').trigger('reveal:close');
                                                            }, 1000); 
                                                        
                                        }
                                        });*/
                        if ( g == 0 || g == "0") {
                            $(".gameInfo").hide();
                        }
                        if ( l == 0 || l == "0") {
                            $(".leaderboardPanel").hide();
                        }
                        if ( leup == 0 || leup == "0") {
                            $(".levelupPanel").hide();
                        }
                        
                        $("#intro_display").reveal(); 
                    
        
            
        }); // Document ready END

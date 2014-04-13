<?php
session_start();

$phpsessionid = session_id();
//$_POST['phpsessionid'];
//$vpn = $_POST['vpn'] ;
$score = $_POST['score'];
$lfdn = $_POST['lfdn'];
$tic = $_POST['tic'];
//echo $vpn;
$g = $_POST['g'];
$h = $_POST['h'];
$le = $_POST['le'];
$leup = $_POST['leup'];
$level = $_POST['finalLevel'];
$img_i = $_POST['img_i'];
?>
<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>MMI | Bilderannotation </title>

  <!-- Included CSS Files (Uncompressed) -->
  <!--
  <link rel="stylesheet" href="stylesheets/foundation.css">
  -->
  
  <!-- Included CSS Files (Compressed) -->
  <link rel="stylesheet" href="stylesheets/foundation.min.css">
  <link rel="stylesheet" href="stylesheets/app.css">


  <script src="javascripts/modernizr.foundation.js"></script>

  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  
    <!-- Included JS Files (Compressed) -->
  <script src="javascripts/jquery.js"></script>
  <script src="javascripts/foundation.min.js"></script>
  
  <!-- Initialize JS Plugins -->
  <script src="javascripts/app.js"></script>
    <script src="js/jqBarGraph.1.1.js" type="text/javascript" charset="utf-8"></script>



    <script>

        var lfdn = <?php echo $lfdn; ?>;
        var user = <?php echo $lfdn; ?>;
        var score = <?php echo $score; ?>;

  function getLeaderboard() { 
                            var imgArray = new Array();     
                            $.ajax({
                                url: "data/getleaderboard.php",
                                type: "POST",
                                data: {
                                    lfdn: lfdn,
                                    user: user,
                                    score: score
                                },
                                success: function(data) {



                                    //$('.gamified').append(data);

                                    var arrayOfData = JSON.parse(data);

                                    var myArrayOfData = [];



                                    for (var i = 0; i < arrayOfData.length; i++) {

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


                                    $('#leaderboardDisplay').jqBarGraph({ data: myArrayOfData, barSpace: 10, width: 300, height: 150 });
                                    $('#graphLabel4leaderboard_display').css('color', '#12A1FF');


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
	
	</script>

</head>
<body>
<div class="container">
	<div class="tagEm">
  <!-- Nav and Banner -->
	<div class="row"> 
	
		<div class="three columns">
			<h1><img src="images/logo_preview.png" /></h1>
		</div>
	</div>
  <!-- End Nav and Banner -->


  <!-- Main Content Section -->

  <div class="row">
	<div class="twelve columns">
<?php  

if ( $g == "1") {
    if ($h == "0") {
        
	echo '
	<div class="gamified">
      <h3>Ihr Punktestand:</h3>
      <h1>Sie haben '; echo $score; echo' Punkte erreicht.</h1>
      <p>Vielen Dank für Ihren Beitrag. Nun möchten wir Ihnen noch einige Fragen stellen.</p>
		<div class="row">
				<div class="twelve columns">
				<p><a href="http://ww2.unipark.de/uc/bilderstudie2013/ospe.php?return_tic='; echo $tic; echo '&c_0001='; echo $score; echo ' " class="button" id="end" >Weiter &rarr;</a></p>
				</div>
			</div>
	</div> ';
        }
    if($h == "1") {
        	echo '
	<div class="gamified">
      <h3>Ihr Punktestand:</h3>
      <h1>Sie haben '; echo $score; echo' Punkte erreicht.</h1>
        <h2 id="level"';   if ($leup == "0" || $leup == 0) echo "style='display: none;'"; echo'>Damit haben Sie Rang '; 

        if ($level == 0) {
          echo "0";
        }
        else {
          echo str_repeat("*", $level);
        }


        echo ' erreicht!</h2>
        <div id="leaderboardDisplay"';   if ($le == "0" || $le == 0) echo "style='display: none;'"; echo'></div>
        </br>
        </ br>
        <div id="nickname" class="four columns"';   if ($le == "0" || $le == 0) echo "style='display: none;'"; echo'>
        <label>Hier können Sie ein Pseudonym eingeben (optional):</label>
                <input type="text" placeholder="">
        </div></ br>
        <div class="row"></div>
          <p>Vielen Dank für Ihren Beitrag. Nun möchten wir Ihnen noch einige Fragen stellen.</p>
		<div class="row">
				<div class="twelve columns">
				<p><a href="http://ww2.unipark.de/uc/bilderstudie2013/ospe.php?return_tic='; echo $tic; echo '&c_0001='; echo $score; echo ' " class="button" id="end" >Weiter &rarr;</a></p>
				</div>
			</div>
	</div> ';
        
        
        }
} else if ($g == "0") {
    
            if($h == "0") {
                   echo '
                            <div class="notgamified">
                          <p>Vielen Dank für Ihren Beitrag. Nun möchten wir Ihnen noch einige Fragen stellen.</p>
                                    <div class="row">
				<div class="twelve columns">
				<p><a href="http://ww2.unipark.de/uc/bilderstudie2013/ospe.php?return_tic='; echo $tic; echo '&c_0001='; echo $score; echo ' " class="button" id="end" >Weiter &rarr;</a></p>
				</div>
		</div>
	  
	</div>'; 
                    
                    
                    }
            if($h == "1") {
                            echo '
                    <div class="gamified">
                    <p>Vielen Dank für Ihren Beitrag. Nun möchten wir Ihnen noch einige Fragen stellen.</p>
                            <div class="row">
                                            <div class="twelve columns">
                                            <p><a href="http://ww2.unipark.de/uc/bilderstudie2013/ospe.php?return_tic='; echo $tic; echo '&c_0001='; echo $score; echo ' " class="button" id="end" >Weiter &rarr;</a></p>
                                            </div>
                                    </div>
                    </div> ';
                    
                    
                    }
	
}
?>


 </div>

  </div>
  
  <!-- Footer -->

  <footer class="row">
    <div class="twelve columns">
      <hr />
      <div class="row">
        <div class="six columns">
        </div>
      </div>
    </div>
  </footer>

  </div>
</div> 
</body>
</html>

<?php
/*
Please read the enclosed README.md and LICENSE carefully. This software is licensed under The MIT License (MIT). 


*/
session_start();

$phpsessionid = session_id();

$round = 1;

if (isset($_COOKIE['RoundCookie'])) {

    $round = $_COOKIE['RoundCookie'];

} else {
    setcookie("RoundCookie", $round, time()+3600*12);  /* verfällt in 12 Stunden */
}

//$score = $_POST['score'];
$lfdn = $_GET['lfdn'];
$tic = $_GET['tic'];
$g = $_GET['g'];
$h = $_GET['h'];
$round = $_GET['r'];
$showLabel = $_GET['l'];
$time = $_GET['t'];
?>
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>MMI | Bilderannotation </title>

  <!-- Included CSS Files (Uncompressed) -->
  <!--
  <link rel="stylesheet" href="css/foundation.css">
  -->
  
  <!-- Included CSS Files (Compressed) -->
  <link rel="stylesheet" href="css/foundation.min.css">
  <link rel="stylesheet" href="css/app.css">


  <script src="js/modernizr.foundation.js"></script>

  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

    <!-- Included JS Files (Compressed) -->

  <script src="js/foundation.min.js"></script>

  <!-- Initialize JS Plugins -->
  <script src="js/app.js"></script>
  
  <!-- Tag functions and styles -->
  
	<!-- These 2 CSS files are required: any 1 jQuery UI theme CSS, plus the Tag-it base CSS. -->
    <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/flick/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="css/jquery.tagit.css">

    <!-- This is an optional CSS theme that only applies to this widget. Use it in addition to the jQuery UI theme. -->
    <link href="css/tagit.ui-zendesk.css" rel="stylesheet" type="text/css">
	
    <link rel="stylesheet" href="css/custom.css">


    <!-- jQuery and jQuery UI are required dependencies. -->

    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js" type="text/javascript" charset="utf-8"></script>

    <!-- The real deal -->
    <script src="js/tag-it.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/jqBarGraph.1.1.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/jquery.flip.js" type="text/javascript" charset="utf-8"></script>
    <!--<script src="js/image_loader.js" type="text/javascript"></script>
    <script src="js/select_images.js" type="text/javascript"></script>-->
    <script src="js/levelUp.js" type="text/javascript"></script>
    <script src="js/ui.progressbarVertical_1.0.0.js" type="text/javascript"></script>
    <script src="js/tagem.js" type="text/javascript"></script>

</head>
<body>
<div class="container">
	<div class="tagEm" style="min-width: 1000px;">
  <!-- Nav and Banner -->
	<div class="row"> 
		<div class="three columns">
			<h1><img src="images/logo_preview.png" alt="mmi logo"></h1>
		</div>
    </div>
    <div class="row">
        <div class="twelve columns">

                <div class="large seven columns" >
                    <div class="panel flipimage" style="height:500px;vertical-align: middle;">
                        <p class="img_container" style=""></p>
                    </div>

                </div>

                <div class="large five columns">
                    <div class="panel pointsPanel">
                        <?php
                            //if($g==1){
                            if(true){

                                 echo '
                                            <div class="alert-box points_display" style="margin-left:auto;height:30px;width:130px;">
                                        <div><div style="float:left;clear:right;" id="points_label">Punkte: </div><div id="points" style="float:right;">0</div></div>
                                        ';
                                        if ($showLabel == 1) {
                                        echo '<div style="float:left;clear:right;" id="level_label">Level: </div><div id="level" style="float:right;">1</div>
                                        <div style="float:left;clear:right;" id="round_label">Runde: </div><div id="round" style="float:right;">';
                                        if (isset($round)) {echo $round;}
                                        else {echo '1';}
                                        echo ' </div>';
                                        }
                                        echo '
                                    </div>
                                    ';
                                    }
                        ?>
                    </div>


                    <div class="panel leaderboardPanel">
                        <div id="leaderboard_display" ></div>
                    </div>
                    <div class="panel levelupPanel">
                        <div id="levelup_display" ></div>
                    </div>
                </div>
		</div></div>

  <!-- End Nav and Banner -->


  <!-- Main Content Section -->

  <div class="row" id="hiddenElements">

    <a id="round1_reveal" href="#" class="round1_reveal" style="display:none" data-reveal-id="round1_display" >Info</a>
    <a id="round1_reveal_leaderboard" href="#" class="round1_reveal" style="display:none" data-reveal-id="round1_display_leaderboard" >Info</a>
    <a id="round1_reveal_levelup" href="#" class="round1_reveal" style="display:none" data-reveal-id="round1_display_levelup" >Info</a>
    <a id="round1_reveal_nohelp" href="#" class="round1_reveal_nohelp" style="display:none" data-reveal-id="round1_display_nohelp" >Info2</a>


      <p><a href="#" class="button god_mode" id="god_mode_endthis" style="display: none;">Give me the end page!</a></p>

  

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

  <div id="score_display" class="reveal-modal" >
    <h2></h2>
    <h4>Stichworte:</h4>
	<div class="results"></div>
		<p id="total" class="points_display"><b></b></p>
                <p id="save" style="float:right;">wird gespeichert...<img src="load.gif" style="height:20px;float:right;" alt="save..."></p>
		<p><a href="#" class="button close-reveal-modal score-close " style="display:none;float:right;position:relative;color:#FFFFFF;text-shadow:none;font-size:14px;font-weight:bold;" id="close" >Weiter</a></p>
  </div>


 <div id="intro_display" class="reveal-modal large">
  <p class="lead">Start</p>
  <p>Die nächsten <b>3</b> Bilder dienen als Testlauf, damit Sie sich mit dem Ablauf vertraut machen können. </p>
  <p>Beschreiben Sie die Stimmung, die das jeweilige Bild für Sie darstellt. Verwenden Sie dazu beliebig viele Stichwörter und schreiben Sie diese ins Eingabefeld.</p>
  <p id="time_info"></p>
  <h4 class="helpInfo"></h4>
  <p>Klicken Sie auf <em>Weiter</em>, wenn Sie bereit sind.</p>
  <p><a href="#" class="button close-reveal-modal intro_close flipStarter" style="float:right;position:relative;color:#FFFFFF;text-shadow:none;font-size:14px;font-weight:bold;" id="intro_close" >Weiter</a></p>
  <a class="close-reveal-modal intro_close flipStarter">&#215;</a>
</div>

<div id="round1_display" class="reveal-modal large">
  <p class="lead">Der Testlauf ist jetzt vorbei. Für die nächsten 15 Bilder fliessen Ihre Stichworte in die Analyse ein.</p>
  <p class="gameInfo">Für jedes eingegebene <b>Stichwort</b> erhalten Sie <b>100 Punkte</b>. So erfahren Sie am Schluss, wieviel Sie zur Studie beigetragen haben.</p>
  <p>Klicken Sie auf <em>Weiter</em>, wenn Sie bereit sind.</p>
  <p><a href="#" class="button close-reveal-modal round1_close flipStarter" style="float:right;position:relative;color:#FFFFFF;text-shadow:none;font-size:14px;font-weight:bold;" id="close_round1_display" >Weiter</a></p>
  <a class="close-reveal-modal round1_close flipStarter">&#215;</a>
</div>

<div id="round1_display_leaderboard" class="reveal-modal large">
    <p class="lead">Der Testlauf ist jetzt vorbei. Für die nächsten 15 Bilder fliessen Ihre Stichworte in die Analyse ein.</p>
    <p class="gameInfo">Für jedes eingegebene <b>Stichwort</b> erhalten Sie <b>100 Punkte</b>. So erfahren Sie am Schluss, wieviel Sie zur Studie beigetragen haben.</p>
    <p class="leaderboardInfo">Auf der rechten Seite, können Sie Ihren Punktestand mit dem von anderen Studien-Teilnehmern vergleichen.</p>
    <p>Klicken Sie auf <em>Weiter</em>, wenn Sie bereit sind.</p>
    <p><a href="#" class="button close-reveal-modal round1_close flipStarter" style="float:right;position:relative;color:#FFFFFF;text-shadow:none;font-size:14px;font-weight:bold;" id="close_round1_display_leaderboard" >Weiter</a></p>
    <a class="close-reveal-modal round1_close flipStarter">&#215;</a>
</div>
    <div id="round1_display_levelup" class="reveal-modal large">
    <p class="lead">Der Testlauf ist jetzt vorbei. Für die nächsten 15 Bilder fliessen Ihre Stichworte in die Analyse ein.</p>
    <p class="gameInfo levelInfo">Für jedes eingegebene <b>Stichwort</b> erhalten Sie <b>100 Punkte</b>. Auf der rechten Seite ist Ihr "Rang" dargestellt. So sehen Sie am Schluss, wie viel Sie zur Studie beigetragen haben.    </p>
    <p>Klicken Sie auf <em>Weiter</em>, wenn Sie bereit sind.</p>
    <p><a href="#" class="button close-reveal-modal round1_close flipStarter" style="float:right;position:relative;color:#FFFFFF;text-shadow:none;font-size:14px;font-weight:bold;" id="close_round1_display_levelup" >Weiter</a></p>
    <a class="close-reveal-modal round1_close flipStarter">&#215;</a>
</div>


<div id="round1_display_nohelp" class="reveal-modal large">
  <p class="lead">Der Testlauf ist jetzt vorbei. Für die nächsten 15 Bilder fliessen Ihre Stichworte in die Analyse ein.</p>
    <p class="gameInfo">Für jedes eingegebene <b>Stichwort</b> erhalten Sie <b>100 Punkte</b>. So erfahren Sie am Schluss, wieviel Sie zum Projekt beigetragen haben.</p>
  <p>Klicken Sie auf <em>Weiter</em>, wenn Sie bereit sind.</p>
  <p><a href="#" class="button close-reveal-modal round1_close flipStarter" style="float:right;position:relative;color:#FFFFFF;text-shadow:none;font-size:14px;font-weight:bold;" id="close_round1_display_nohelp" >Weiter</a></p>
  <a class="close-reveal-modal round1_close flipStarter">&#215;</a>
</div>

  </div>
</div> 
</body>
</html>

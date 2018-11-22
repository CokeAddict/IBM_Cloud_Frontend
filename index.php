<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-sclae=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!--bootstrap integration-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <!--other css integration-->
    <link rel="stylesheet" href="rowStyle.css">

    <title>Dashboard</title>
</head>
<body>


<?php

// TODO: create modal for detailed inspect of a sensor
// TODO: only display newest values for every sensor
// TODO: connect to cloud data rather then local test data

$file = "testData.json";
$json = json_decode(file_get_contents($file), true);
$i = 0;
$sensorArray = array();
//$sensorArray = array_merge($sensorArray, $json[0]);

usort($json, function ($a, $b){
    return $a['sensor'] <=> $b['sensor'];
});

//echo("<script>console.log('PHP: ".$sensorArray."');</script>");

// dynamically create cards with values
echo "<main class='container-fluid'>";
foreach ($json as $item) {

    if ($i % 4 == 0 || $i == 0) {
        if ($i % 4 == 0) {
            echo "</div>";
        }
        echo "<div class='row'>";
    }

    echo "<div class='col-3'>";
    echo "<div class='card' id='card_" . $i . "'>";
    echo "<div class='card-header'>";
    echo "<span>Sensor " . $item['sensor'] . "</span>";
    echo "</div>";
    echo "<div class='card-body'>";
    echo "<div class='row'>";
    echo "<div class='col-4'>";
    echo "<label for='tempField'>Temperature</label>";
    echo "</div>";
    echo "<div class='col-2'>";
    echo "<span id='tempField'>" . $item['temperature'] . "</span>";
    echo "</div>";
    echo "<div class='col-4'>";
    echo "<label for='distField'>Distance</label>";
    echo "</div>";
    echo "<div class='col-2'>";
    echo "<span id='distField'>" . $item['distance'] . "</span>";
    echo "</div>";
    echo "</div>";
    echo "<div class='row'>";
    echo "<div class='col-4'>";
    echo "<label for='humiField'>Humidity</label>";
    echo "</div>";
    echo "<div class='col-2'>";
    echo "<span id='humiField'>" . $item['humidity'] . "</span>";
    echo "</div>";
    echo "<div class='col-4'>";
    echo "<label for='lumiField'>Luminosity</label>";
    echo "</div>";
    echo "<div class='col-2'>";
    echo "<span id='lumiField'>" . $item['luminosity'] . "</span>";
    echo "</div>";
    echo "</div>";
    echo "</div>";
    echo "<div class='card-footer'>";
    echo "<span>" . $item['date'] . "</span>";
    echo "</div>";
    echo "</div>";
    echo "</div>";

    $i++;
}
echo "</main>";

?>


<!--scripting-->
<!--jquery integration-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>

</body>
</html>


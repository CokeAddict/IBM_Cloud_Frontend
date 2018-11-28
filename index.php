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

// TODO: create modal for detailed inspection of a sensor
// TODO: connect to cloud data rather then local test data

$file = "testData.json";
$json = json_decode(file_get_contents($file), true);


// sorting logic
// first: sort everything by sensor id
// then: get newest entry of every sensor
// return: $sensorArray with newest entry of every sensor
$sensorArray = array($json[0]);
$j = 0;
$l = 0;

usort($json, function ($a, $b) {
    return $a['sensor'] <=> $b['sensor'];
});

for ($i = 0; $i < sizeof($json) - 1; $i++) {

    if ($json[$i]['sensor'] == $json[$i + 1]['sensor'] && $json[$i + 1] != end($json)) {
        $j++;
    } elseif ($json[$i + 1] != end($json)) {
        for ($k = $i - $j; $k < $i; $k++) {
            if ($json[$k]['date'] > $sensorArray[$l]['date']) {
                $sensorArray[$l] = $json[$k];
            }
        }

        $sensorArray[] = $json[$i];
        $j = 0;
        $l++;
    } else {
        for ($k = $i - $j; $k < $i; $k++) {
            if ($json[$k]['date'] > $sensorArray[$l]['date']) {
                $sensorArray[$l] = $json[$k];
            }
        }
    }
}


// dynamically create cards and modals for every sensor
// TODO: adapt responsive design
echo "<main class='container-fluid'>";

for ($i = 0; $i < sizeof($sensorArray); $i++) {

    if ($i % 4 == 0 || $i == 0) {

        echo "<div class='row'>";
    }

    echo "<div class='col-3'>
            <div class='card' id='card_" . $i . "'>
                <div class='card-header'>
                    <span>Sensor " . $sensorArray[$i]['sensor'] . "</span>
                </div>
                <div class='card-body'>
                    <div class='row'>
                        <div class='col-4'>
                            <label for='tempField'>Temperature</label>
                        </div>
                        <div class='col-2'>
                            <span id='tempField'>" . $sensorArray[$i]['temperature'] . "</span>
                        </div>
                        <div class='col-4'>
                            <label for='distField'>Distance</label>
                        </div>
                        <div class='col-2'>
                            <span id='distField'>" . $sensorArray[$i]['distance'] . "</span>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-4'>
                            <label for='humiField'>Humidity</label>
                        </div>
                        <div class='col-2'>
                            <span id='humiField'>" . $sensorArray[$i]['humidity'] . "</span>
                        </div>
                        <div class='col-4'>
                            <label for='lumiField'>Luminosity</label>
                        </div>
                        <div class='col-2'>
                            <span id='lumiField'>" . $sensorArray[$i]['luminosity'] . "</span>
                        </div>
                    </div>
                </div>
                <div class='card-footer'>
                    <span>" . $sensorArray[$i]['date'] . "</span>
                </div>
            </div>
    </div>";

    if ($i % 4 == 3 || $i == sizeof($sensorArray) - 1) {
        echo "</div>";
    }
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

<script>
    var cards = document.getElementsByClassName('card');

    $(document).ready(function () {
        $(cards).click(function () {
            console.log('Card ' + this.id + ' has been clicked!');
        });
    });

</script>

</body>
</html>
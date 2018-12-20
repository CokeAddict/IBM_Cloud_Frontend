function PlotValues(array, sensor, sensorString, dateString, temperatureString, distanceString, humidityString, luminosityString) {
    //arrays to store values for the selected sensor
    let temperature = [];
    let humidity = [];
    let distance = [];
    let luminosity = [];
    let date = [];

    let x = [];
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i][sensorString] === sensor) {
            temperature.push(array[i][temperatureString]);
            humidity.push(array[i][humidityString]);
            distance.push(array[i][distanceString]);
            luminosity.push(array[i][luminosityString]);
            date.push(array[i][dateString]);

            x.push(j);
            j++;

        }
    }

    //build plots using plotly.js
    let tempTrace = {
        y: temperature,
        mode: 'lines',
        text: date,
        marker: {
            color: 'rgb(219, 64, 82)'
        }
    };
    let humiTrace = {
        y: humidity,
        mode: 'lines',
        text: date,
        marker: {
            color: 'rgb(59, 147, 247)'
        }
    };
    let distTrace = {
        y: distance,
        mode: 'lines',
        text: date,
        marker: {
            color: 'rgb(124, 204, 67)'
        }
    };
    let lumiTrace = {
        y: luminosity,
        mode: 'lines',
        text: date,
        marker: {
            color: 'rgb(252, 228, 50)'
        }
    };

    let tempData = [tempTrace];
    let humiData = [humiTrace];
    let distData = [distTrace];
    let lumiData = [lumiTrace];

    Plotly.newPlot('tempPlot', tempData, {width: 800});
    Plotly.newPlot('humiPlot', humiData, {width: 800});
    Plotly.newPlot('distPlot', distData, {width: 800});
    Plotly.newPlot('lumiPlot', lumiData, {width: 800});
}

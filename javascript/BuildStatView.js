/**
 * @return {string}
 */
function BuildStatView(array, sensor, sensorString, temperatureString, distanceString, humidityString, luminosityString) {
    if (Array.isArray(array)) {
        let htmlString = "";

        //arrays to store values for the selected sensor
        let temperature = [];
        let humidity = [];
        let distance = [];
        let luminosity = [];

        //averages for later use
        let tempAvg = 0;
        let humiAvg = 0;
        let distAvg = 0;
        let lumiAvg = 0;

        //get all values for the selected sensor
        for (let i = 0; i < array.length; i++) {
            if (array[i][sensorString] === sensor) {
                temperature.push(array[i][temperatureString]);
                humidity.push(array[i][humidityString]);
                distance.push(array[i][distanceString]);
                luminosity.push(array[i][luminosityString]);

                tempAvg = tempAvg + array[i][temperatureString];
                humiAvg = humiAvg + array[i][humidityString];
                distAvg = distAvg + array[i][distanceString];
                lumiAvg = lumiAvg + array[i][luminosityString];
            }
        }

        //calculate averages
        tempAvg = tempAvg / temperature.length;
        humiAvg = humiAvg / humidity.length;
        distAvg = distAvg / distance.length;
        lumiAvg = lumiAvg / luminosity.length;

        /*
                    //4 rows with 1 value each
                    htmlString += "<div class='container-fluid text-center'>" +
                        "   <div class='row'>" +
                        "       <div class='col-12'" +
                        "           <h5 id='tempTitle'>Temperature</h5>" +
                        "           <div class='row' id='tempPlot'></div>" +
                        "           <div class='row'>" +
                        "               <div class='col-4'>" +
                        "                   <span id='tempMin'>Minimum: " + Math.min.apply(Math, temperature).toFixed(2) + "</span>" +
                        "               </div>" +
                        "               <div class='col-4'>" +
                        "                   <span id='tempAvg'>Average: " + tempAvg.toFixed(2) + "</span>" +
                        "               </div>" +
                        "              <div class='col-4'>" +
                        "                   <span id='tempMax'>Maximum: " + Math.max.apply(Math, temperature).toFixed(2) + "</span>" +
                        "               </div>" +
                        "           </div>" +
                        "       </div>" +
                        "   </div>" +

                        "   <div class='row'>" +
                        "       <div class='col-12 text-center'" +
                        "           <h5 id='distTitle'>Distance</h5>" +
                        "           <div class='row' id='distPlot'></div>" +
                        "           <div class='row'>" +
                        "               <div class='col-4'>" +
                        "                   <span id='distMin'>Minimum: " + Math.min.apply(Math, distance).toFixed(2) + "</span>" +
                        "               </div>" +
                        "               <div class='col-4'>" +
                        "                   <span id='distAvg'>Average: " + distAvg.toFixed(2) + "</span>" +
                        "               </div>" +
                        "              <div class='col-4'>" +
                        "                   <span id='distMax'>Maximum: " + Math.max.apply(Math, distance).toFixed(2) + "</span>" +
                        "               </div>" +
                        "           </div>" +
                        "       </div>" +
                        "   </div>" +

                        "   <div class='row'>" +
                        "       <div class='col-12 text-center'" +
                        "           <h5 id='humiTitle'>Humidity</h5>" +
                        "           <div class='row' id='humiPlot'></div>" +
                        "           <div class='row'>" +
                        "               <div class='col-4'>" +
                        "                   <span id='humiMin'>Minimum: " + Math.min.apply(Math, humidity).toFixed(2) + "</span>" +
                        "               </div>" +
                        "               <div class='col-4'>" +
                        "                   <span id='humiAvg'>Average: " + humiAvg.toFixed(2) + "</span>" +
                        "               </div>" +
                        "              <div class='col-4'>" +
                        "                   <span id='humiMax'>Maximum: " + Math.max.apply(Math, humidity).toFixed(2) + "</span>" +
                        "               </div>" +
                        "           </div>" +
                        "       </div>" +
                        "   </div>" +

                        "   <div class='row'>" +
                        "       <div class='col-12 text-center'" +
                        "           <h5 id='lumiTitle'>Luminosity</h5>" +
                        "           <div class='row' id='lumiPlot'></div>" +
                        "           <div class='row'>" +
                        "               <div class='col-4'>" +
                        "                   <span id='lumiMin'>Minimum: " + Math.min.apply(Math, luminosity).toFixed(2) + "</span>" +
                        "               </div>" +
                        "               <div class='col-4'>" +
                        "                   <span id='lumiAvg'>Average: " + lumiAvg.toFixed(2) + "</span>" +
                        "               </div>" +
                        "              <div class='col-4'>" +
                        "                   <span id='lumiMax'>Maximum: " + Math.max.apply(Math, luminosity).toFixed(2) + "</span>" +
                        "               </div>" +
                        "           </div>" +
                        "       </div>" +
                        "   </div>";
        */

        //2 rows with 2 values each
        htmlString += "<div class='container-fluid text-center'>" +
            "   <div class='row'>" +
            "       <div class='col-6'" +
            "           <span class='stats-title' id='tempTitle'>Temperature</span>" +
            "           <div class='row' id='tempPlot'></div>" +
            "           <div class='row stats-footer'>" +
            "               <div class='col-4'>" +
            "                   <span id='tempMin'>Minimum: " + Math.min.apply(Math, temperature).toFixed(2) + "</span>" +
            "               </div>" +
            "               <div class='col-4'>" +
            "                   <span id='tempAvg'>Average: " + tempAvg.toFixed(2) + "</span>" +
            "               </div>" +
            "              <div class='col-4'>" +
            "                   <span id='tempMax'>Maximum: " + Math.max.apply(Math, temperature).toFixed(2) + "</span>" +
            "               </div>" +
            "           </div>" +
            "       </div>" +

            "       <div class='col-6'" +
            "           <span class='stats-title' id='distTitle'>Distance</span>" +
            "           <div class='row' id='distPlot'></div>" +
            "           <div class='row stats-footer'>" +
            "               <div class='col-4'>" +
            "                   <span id='distMin'>Minimum: " + Math.min.apply(Math, distance).toFixed(2) + "</span>" +
            "               </div>" +
            "               <div class='col-4'>" +
            "                   <span id='distAvg'>Average: " + distAvg.toFixed(2) + "</span>" +
            "               </div>" +
            "              <div class='col-4'>" +
            "                   <span id='distMax'>Maximum: " + Math.max.apply(Math, distance).toFixed(2) + "</span>" +
            "               </div>" +
            "           </div>" +
            "       </div>" +
            "   </div>" +

            "   <div class='row'>" +
            "       <div class='col-6'" +
            "           <span class='stats-title' id='humiTitle'>Humidity</span>" +
            "           <div class='row' id='humiPlot'></div>" +
            "           <div class='row'>" +
            "               <div class='col-4'>" +
            "                   <span id='humiMin'>Minimum: " + Math.min.apply(Math, humidity).toFixed(2) + "</span>" +
            "               </div>" +
            "               <div class='col-4'>" +
            "                   <span id='humiAvg'>Average: " + humiAvg.toFixed(2) + "</span>" +
            "               </div>" +
            "              <div class='col-4'>" +
            "                   <span id='humiMax'>Maximum: " + Math.max.apply(Math, humidity).toFixed(2) + "</span>" +
            "               </div>" +
            "           </div>" +
            "       </div>" +

            "       <div class='col-6'" +
            "           <span class='stats-title' id='lumiTitle'>Luminosity</span>" +
            "           <div class='row' id='lumiPlot'></div>" +
            "           <div class='row'>" +
            "               <div class='col-4'>" +
            "                   <span id='lumiMin'>Minimum: " + Math.min.apply(Math, luminosity).toFixed(2) + "</span>" +
            "               </div>" +
            "               <div class='col-4'>" +
            "                   <span id='lumiAvg'>Average: " + lumiAvg.toFixed(2) + "</span>" +
            "               </div>" +
            "              <div class='col-4'>" +
            "                   <span id='lumiMax'>Maximum: " + Math.max.apply(Math, luminosity).toFixed(2) + "</span>" +
            "               </div>" +
            "           </div>" +
            "       </div>" +
            "   </div>";
        ;

        return htmlString;
    }
}
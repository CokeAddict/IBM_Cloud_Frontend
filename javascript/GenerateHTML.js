/**
 * @return {string}
 */
function GenerateHTML(array, sensor, date, temperature, distance, humidity, luminosity) {
    if (Array.isArray(array)) {
        let htmlString = "";

        for (let i = 0; i < array.length; i++) {
            if (i % 4 === 0 || i === 0) {
                htmlString += "<div class='row'>";
            }

            htmlString += "<div class='col-3'>" +
                "   <div class='card' id='card_" + i + "' data-sensor='" + array[i][sensor] + "'>" +
                "       <div class='card-header'>" +
                "           <span>Sensor " + array[i][sensor] + "</span>" +
                "       </div> " +
                "       <div class='card-body'>" +
                "           <div class='row'>" +
                "               <div class='col-3'>" +
                "                   <label for='tempField'>Temperature</label>" +
                "               </div>" +
                "               <div class='col-3'>";

            if (array[i][temperature] == null) {
                htmlString += "<span id='tempField'>N/A</span>";
            } else {
                htmlString += "<span id='tempField'>" + array[i][temperature].toFixed(2) + "</span>";
            }

            htmlString += "     </div>" +
                "               <div class='col-3'>" +
                "                   <label for='distField'>Distance</label>" +
                "               </div>" +
                "               <div class='col-3'>";

            if (array[i][distance] == null) {
                htmlString += "<span id='tempField'>N/A</span>";
            } else {
                htmlString += "<span id='tempField'>" + array[i][distance].toFixed(2) + "</span>";
            }

            htmlString += "     </div>" +
                "           </div>" +
                "           <div class='row'>" +
                "               <div class='col-3'>" +
                "                   <label for='humiField'>Humidity</label>" +
                "               </div>" +
                "               <div class='col-3'>";

            if (array[i][humidity] == null) {
                htmlString += "<span id='tempField'>N/A</span>";
            } else {
                htmlString += "<span id='tempField'>" + array[i][humidity].toFixed(2) + "</span>";
            }

            htmlString += "     </div>" +
                "               <div class='col-3'>" +
                "                   <label for='lumiField'>Luminosity</label>" +
                "               </div>" +
                "               <div class='col-3'>";

            if (array[i][luminosity] == null) {
                htmlString += "<span id='tempField'>N/A</span>";
            } else {
                htmlString += "<span id='tempField'>" + array[i][luminosity].toFixed(2) + "</span>";
            }

            htmlString += "     </div>" +
                "           </div>" +
                "       </div>" +
                "       <div class='card-footer'>" +
                "           <span>" + array[i][date] + "</span>" +
                "       </div>" +
                "   </div> " +
                "</div>";

            if (i % 4 === 3 || i === array.length - 1) {
                htmlString += "</div>";
            }
        }

        return htmlString;
    }
}
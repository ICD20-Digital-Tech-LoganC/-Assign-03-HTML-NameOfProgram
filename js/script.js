// script.js
/* Function to convert kilos to pounds */
function convertKilosToPounds() {
    // Get input value
    var kilos = parseFloat(document.getElementById("inputKilos").value);

    // Check if input is a valid number
    if (!isNaN(kilos)) {
        // Perform conversion
        var pounds = kilos * 2.20462;
        // Round to 2 decimal places
        pounds = Math.round(pounds * 100) / 100;
        // Display result
        document.getElementById("result").innerHTML = "Result: " + kilos + " kilos is approximately " + pounds + " pounds.";
    } else {
        // Display error message if input is not a number
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
}

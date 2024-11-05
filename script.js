document.getElementById("convertBtn").addEventListener("click", convertTemperature);

function convertTemperature() {
    const tempInput = document.getElementById("temperature").value.trim();
    const unit = document.getElementById("unit").value;
    const errorMessage = document.getElementById("error-message");
    const resultDisplay = document.getElementById("result");

    // Clear previous error messages and results
    errorMessage.textContent = "";
    resultDisplay.innerHTML = "";

    // Validate input
    if (tempInput === "" || isNaN(tempInput)) {
        errorMessage.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(tempInput);
    let result = "";

    // Perform the temperature conversion based on the input unit
    if (unit === "C") {
        result = `
            <p><strong>Fahrenheit:</strong> ${(temperature * 9 / 5 + 32).toFixed(2)} °F</p>
            <p><strong>Kelvin:</strong> ${(temperature + 273.15).toFixed(2)} K</p>
        `;
    } else if (unit === "F") {
        result = `
            <p><strong>Celsius:</strong> ${((temperature - 32) * 5 / 9).toFixed(2)} °C</p>
            <p><strong>Kelvin:</strong> ${((temperature - 32) * 5 / 9 + 273.15).toFixed(2)} K</p>
        `;
    } else if (unit === "K") {
        result = `
            <p><strong>Celsius:</strong> ${(temperature - 273.15).toFixed(2)} °C</p>
            <p><strong>Fahrenheit:</strong> ${((temperature - 273.15) * 9 / 5 + 32).toFixed(2)} °F</p>
        `;
    }

    // Display the converted temperature results
    resultDisplay.innerHTML = result;
}
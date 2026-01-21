// Static values for temperature and wind speed
const temperature = 28; // °C (typical temperature in Caracas)
const windSpeed = 12;   // km/h

// Function to calculate the wind chill factor
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Function to display the wind chill in the "Weather" section
function displayWindChill() {
    const windChillElement = document.getElementById('wind-chill');
    
    // Only calculate if the conditions are valid (temperature <= 10°C and wind > 4.8 km/h)
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Function to display the current year in the footer
function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}

// Function to display the last modified date of the document
function displayLastModified() {
    document.getElementById("lastModified").textContent = document.lastModified;
}

// Function to display temperature and wind speed in the "Weather" section
function displayWeatherValues() {
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("wind-speed").textContent = windSpeed;
}

// Execute all functions when the page loads
window.addEventListener('DOMContentLoaded', () => {
    displayWeatherValues();
    displayWindChill();
    displayCurrentYear();
    displayLastModified();
});

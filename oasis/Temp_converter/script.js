const celsiusField = document.querySelector("#celsius");
const kelvinField = document.querySelector("#kelvin");
const fahrenheitField = document.querySelector("#fahrenheit");
const degree = document.querySelector("#degree");
const tempType = document.querySelector("#temp-type");
const convertBtn = document.querySelector("#converter-btn");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
    kelvinField.innerHTML = "";
    fahrenheitField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTemperature();
});

function convertToKelvin(celsius) {
    return celsius + 273.15;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertTemperature() {
    let inputValue = parseFloat(degree.value);

    let celsius = inputValue;
    let kelvin = convertToKelvin(celsius);
    let fahrenheit = convertToFahrenheit(celsius);

    celsiusField.innerHTML = `${celsius.toFixed(2)}&deg;C`;
    kelvinField.innerHTML = `${kelvin.toFixed(2)}K`;
    fahrenheitField.innerHTML = `${fahrenheit.toFixed(2)}&deg;F`;
}

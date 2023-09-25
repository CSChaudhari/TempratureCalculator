document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit");
    const fahrenheitToCelsiusButton = document.getElementById("fahrenheitToCelsius");

    celsiusToFahrenheitButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    });

    fahrenheitToCelsiusButton.addEventListener("click", function () {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
    });
});

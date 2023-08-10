const convertToFahrenheitBtn = document.getElementById("convertToFahrenheit");
const celsiusToFahrenheitInput = document.getElementById("celsiusToFahrenheit");
const resultFahrenheitElement = document.getElementById("resultFahrenheit");

const convertToKelvinBtn = document.getElementById("convertToKelvin");
const celsiusToKelvinInput = document.getElementById("celsiusToKelvin");
const resultKelvinElement = document.getElementById("resultKelvin");

convertToFahrenheitBtn.addEventListener("click", () => {
  const celsius = parseFloat(celsiusToFahrenheitInput.value);

  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    resultFahrenheitElement.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  } else {
    resultFahrenheitElement.textContent = "Please enter a valid number";
  }
});

convertToKelvinBtn.addEventListener("click", () => {
  const celsius = parseFloat(celsiusToKelvinInput.value);

  if (!isNaN(celsius)) {
    const kelvin = celsius + 273.15;
    resultKelvinElement.textContent = `${celsius}°C is ${kelvin.toFixed(2)} K`;
  } else {
    resultKelvinElement.textContent = "Please enter a valid number";
  }
});

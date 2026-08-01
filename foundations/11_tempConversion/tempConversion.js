const convertToCelsius = function(temperature) {
    const temperatureInCelsius = (temperature - 32) * 5 / 9;
    return temperatureInCelsius === 0 ? temperatureInCelsius : 
        Number(temperatureInCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
    const temperatureInFahrenheit = (temperature * 9 / 5 + 32);
    return temperatureInFahrenheit === 0 ? temperatureInFahrenheit : 
        Number(temperatureInFahrenheit.toFixed(1));
};

convertToCelsius(-100);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

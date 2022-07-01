import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`fahrenheit`);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return (props.fahrenheit - 32) * 0.5556;
  }

  if (unit === `fahrenheit`) {
    return (
      <span className="weatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let celsius = (props.fahrenheit - 32) * 0.5556;
    return (
      <span className="weatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
          | °C{" "}
        </span>
      </span>
    );
  }
}

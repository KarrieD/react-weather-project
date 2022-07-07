import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <span className="WeatherForecast-temperatures-max">104°</span>
          <span className="WeatherForecast-temperatures-min">82°</span>
        </div>
      </div>
    </div>
  );
}

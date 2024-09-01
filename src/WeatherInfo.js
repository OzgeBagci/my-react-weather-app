import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row align-items-center">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <span className="col-6">
            <li>{props.data.description}</li>
            <img
              src={props.data.icon_url}
              className="main-forecast-icon"
              alt="main-forecast-icon"
            />
          </span>
          <WeatherTemperature
            celsius={props.data.temperature}
            unit={props.unit}
            onUnitChange={props.onUnitChange}
          />
        </ul>
      </div>
      <div className="col-6 justify-content-end mt-5">
        <span>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <span className="col-6">
          <li>{props.data.description}</li>
          <img src={props.data.icon_url} alt="forecast-icon" />
        </span>
        <WeatherTemperature
          celsius={props.data.temperature}
          unit={props.unit}
          onUnitChange={props.onUnitChange}
        />
      </ul>
      <span>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </span>
    </div>
  );
}

import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormatedDate from "./FormatedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
        <img src={props.data.icon_url} alt="forecast-icon" />
        <WeatherTemperature
          celsius={props.data.temperature}
          unit={props.unit}
          onUnitChange={props.onUnitChange}
        />
      </ul>
      <div className="row mt-3">
        <div>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

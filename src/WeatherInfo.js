import React from "react";
import FormatedDate from "./FormatedDate";
import Weather from "./Weather";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <img src={props.data.icon_url} alt={props.data.description} />{" "}
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul className="condition">
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "1494f5f7ob4a4dtd10b403df6ba9a052";
  let longitude = props.coordinate.lon;
  let latitude = props.coordinate.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherIcon">
            <img
              src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
              alt={props.data.condition.description}
            />
          </div>
        </div>
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">19°</span>
          <span className="WeatherForecast-temperature-min">10°</span>
        </div>
      </div>
    </div>
  );
}

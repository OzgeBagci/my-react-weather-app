import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.main.temp,
      name: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Sunday 08:00</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-2">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              className="weather-image"
            />{" "}
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {weatherData.wind} </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1494f5f7ob4a4dtd10b403df6ba9a052";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

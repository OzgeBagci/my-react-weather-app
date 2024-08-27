import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  const [unit, setUnit] = useState("celsius");

  function handleUnitChange(newUnit) {
    setUnit(newUnit);
  }

  return (
    <div className="App">
      <div className="container">
        <Weather
          defaultCity="New York"
          unit={unit}
          onUnitChange={handleUnitChange}
        />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/OzgeBagci"
            target="_blank"
            rel="noopener noreferrer"
          >
            Øzge Bagci
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/OzgeBagci/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://weatherapp-reactproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>{" "}
          © 2024
        </footer>
      </div>
    </div>
  );
}

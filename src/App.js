import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/KarrieD" target="_blank" rel="noreferrer">
            Karrie Brooks
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KarrieD/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}

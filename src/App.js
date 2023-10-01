// require("dotenv").config();
import React, { useState } from "react";
import MainNav from "./components/MainNav";
import TemperatureButton from "./components/TemperatureButtons";
import DailyWeatherDetailsCard from "./components/DailyWeatherDetailsCard";
import TodayHighlightCard from "./components/TodayHighlightCard";
import useGetWeatherRequest from "./Hook/useGetWeatherRequest";
import LoadingScreen from "./components/LoadingScreen";
import FiveDaysForecastSection from "./components/FiveDaysForecastSection";
import TodayHighlightSection from "./components/TodayHilightSection";

function App() {
  let [weather_details, setWeatherDetails] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  // get weather details base on user location
  useGetWeatherRequest(weather_details, setWeatherDetails, setIsLoading);

  // conditionally render loading screen or main content
  let content;
  if (isLoading === true) {
    content = <LoadingScreen />;
  } else {
    content = (
      <div className="container-fluid" id="main-container">
        <div className="row h-100">
          {/* aside */}
          <MainNav weather_details={weather_details} />

          {/* main area */}
          <main
            className="col-lg-8 d-flex flex-column  align-items-center"
            id="main-area"
          >
            <TemperatureButton />
            <FiveDaysForecastSection weather_details={weather_details} />
            <TodayHighlightSection />

            <footer className="my-4 text-center text-white fw-light">
              Developed by: Boakai Dorbor Kamara
            </footer>
          </main>
        </div>
      </div>
    );
  }

  return content;
}

export default App;

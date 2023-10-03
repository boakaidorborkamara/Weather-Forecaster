// require("dotenv").config();
import React, { useState } from "react";
import MainNav from "./components/MainNav";
import TemperatureButton from "./components/TemperatureButtons";
import useGetWeatherRequest from "./Hook/useGetWeatherRequest";
import LoadingScreen from "./components/LoadingScreen";
import FiveDaysForecastSection from "./components/FiveDaysForecastSection";
import TodayHighlightSection from "./components/TodayHilightSection";
import Footer from "./components/Footer";

function App() {
  let [weather_details, setWeatherDetails] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [countryToSearch, setCountryToSearch] = useState("");

  // get weather details base on user location
  useGetWeatherRequest(weather_details, setWeatherDetails, setIsLoading);

  function handleInput(e) {
    console.log("typing....");
    let userInput = e.target.value;
    setCountryToSearch(userInput);
    console.log("country to search", countryToSearch);
    console.log(userInput);
  }

  function handleSearch(countryToSearch) {
    alert("REF", countryToSearch);
  }

  // conditionally render loading screen or main content
  let content;
  if (isLoading === true) {
    content = <LoadingScreen />;
  } else {
    content = (
      <div className="container-fluid" id="main-container">
        <div className="row h-100">
          {/* aside */}
          <MainNav
            weather_details={weather_details}
            handleInput={handleInput}
            handleSearch={handleSearch}
          />
          {/* main area */}
          <main
            className="col-lg-8 d-flex flex-column  align-items-center"
            id="main-area"
          >
            <TemperatureButton />
            <FiveDaysForecastSection weather_details={weather_details} />
            <TodayHighlightSection weather_details={weather_details} />
            <Footer />
          </main>
        </div>
      </div>
    );
  }

  return content;
}

export default App;

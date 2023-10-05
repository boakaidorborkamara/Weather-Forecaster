// require("dotenv").config();
import React, { useState } from "react";
import getUserCurrentLocation from "./Helper/getUserCurrentLocation";
import MainNav from "./components/MainNav";
import TemperatureButton from "./components/TemperatureButtons";
import useGetWeatherRequest from "./Hook/useGetWeatherRequest";
import LoadingScreen from "./components/LoadingScreen";
import FiveDaysForecastSection from "./components/FiveDaysForecastSection";
import TodayHighlightSection from "./components/TodayHilightSection";
import Footer from "./components/Footer";

function App() {
  const [weather_details, setWeatherDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countryToSearch, setCountryToSearch] = useState("Liberia");
  const [userLocation, setUserLocation] = useState("");

  // get weather details base on user location
  useGetWeatherRequest(
    weather_details,
    setWeatherDetails,
    setIsLoading,
    countryToSearch
  );

  // setCountryToSearch("countryName");
  console.log("country to search", countryToSearch);

  function getSearchedResult() {}

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
            setCountryToSearch={setCountryToSearch}
            countryToSearch={countryToSearch}
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

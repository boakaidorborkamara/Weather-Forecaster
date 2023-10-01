// require("dotenv").config();
import React, { useState } from "react";
import MainNav from "./components/MainNav";
import TemperatureButton from "./components/TemperatureButtons";
import DailyWeatherDetailsCard from "./components/DailyWeatherDetailsCard";
import TodayHighlightCard from "./components/TodayHighlightCard";
import useGetWeatherRequest from "./Hook/useGetWeatherRequest";
import LoadingScreen from "./components/LoadingScreen";

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

            {/* week days weather details cards container  */}
            <section className=" w-75 d-flex flex-wrap justify-content-center  text-center text-white ">
              {weather_details.days.map((day) => {
                let day_index = weather_details.days.indexOf(day);

                // exclude the first element
                if (day_index !== 0) {
                  return <DailyWeatherDetailsCard day_details={day} />;
                }
              })}
            </section>

            {/* today weather highlight details cards container */}
            <section className="w-75 d-flex flex-column text-center text-white">
              <div className="d-flex flex-wrap justify-content-center ">
                {/* section header  */}
                <h4 className=" col-10 pt-5 m-2 text-start">
                  Today's Highlights
                </h4>

                {/*  today's hightlight cards  */}
                <TodayHighlightCard />
                <TodayHighlightCard />
                <TodayHighlightCard />
                <TodayHighlightCard />
              </div>
            </section>

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

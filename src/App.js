// require("dotenv").config();
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MainNav from "./components/MainNav";
import DailyWeatherDetailsCard from "./components/DailyWeatherDetailsCard";
import TodayHighlightCard from "./components/TodayHighlightCard";
import useGetWeatherRequest from "./Hook/useGetWeatherRequest";

function App() {
  let [weather_details, setWeatherDetails] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  // get weather details base on user location
  useGetWeatherRequest(weather_details, setWeatherDetails, setIsLoading);

  let content;

  if (isLoading === true) {
    content = (
      <div
        className=" d-flex justify-content-center align-items-center"
        id="loading-msg-container"
      >
        <button className="btn btn-dark" type="button" disabled>
          <span
            class="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    );
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
            {/* tempeture buttons section  */}
            <section className="py-5  w-75 d-flex  justify-content-lg-end  justify-content-sm-center">
              <div className="px-2">
                <Button variant="secondary ">°C</Button>
              </div>
              <div className="px-2">
                <Button variant="secondary">°F</Button>
              </div>
            </section>

            {/* week days weather details cards container  */}
            <section className=" w-75 d-flex flex-wrap justify-content-center  text-center text-white ">
              {console.log(weather_details.days)}
              {weather_details.days.map((day) => {
                let day_index = weather_details.days.indexOf(day);

                if (day_index !== 0) {
                  return <DailyWeatherDetailsCard day_details={day} />;
                  console.log(day.datetime, day.icon, day.tempmin, day.tempmax);
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

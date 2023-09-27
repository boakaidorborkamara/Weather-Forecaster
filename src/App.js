import React, { useEffect, useState } from "react";
import { Button, Accordion } from "react-bootstrap";
import MainNav from "./components/MainNav";
import DailyWeatherDetailsCard from "./components/DailyWeatherDetailsCard";
import TodayHighlightCard from "./components/TodayHighlightCard";

let BaseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
let api_key = "";

function App() {
  let [weather_details, setWeatherDetails] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  async function getUserCurrentLocationCoordinates() {
    // get and return the position of the user
    return new Promise((resolve, reject) => {
      function success(position) {
        let location_detials = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(location_detials);
      }

      function errorCallback() {
        console.log("Error occured");
      }

      // get position if geolocation is supported on user brower
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(success, errorCallback);
      } else {
        console.log("Geolocation doesn't esist");
        return { code: 1, msg: "Geolocation doesn't esist" };
      }
    });
  }

  async function getWeatherDetails(latitude, longitude) {
    let user_geo_location = { latitude, longitude };

    try {
      const response = await fetch(
        `${BaseUrl}/${latitude},${longitude}Crown%20Hill%2C%20LR/next5days?unitGroup=metric&include=days%2Ccurrent&key=${api_key}&contentType=json`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log("DATA", data);
      return data;
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    (async () => {
      let current_location_coordinates =
        await getUserCurrentLocationCoordinates();
      console.log(current_location_coordinates);

      let details = await getWeatherDetails(
        current_location_coordinates.latitude,
        current_location_coordinates.longitude
      );

      setWeatherDetails(...weather_details, details);

      setIsLoading(false);

      console.log("WEATHER DETAILS", weather_details);
    })();
  }, []);

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

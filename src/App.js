import React, { useEffect, useState } from "react";
import { Button, Accordion } from "react-bootstrap";
import MainNav from "./components/MainNav";
import DailyWeatherDetailsCard from "./components/DailyWeatherDetailsCard";
import TodayHighlightCard from "./components/TodayHighlightCard";

function App() {
  let [weather_details, setWeatherDetails] = useState([]);

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

  async function getWeatherDetailsBasedOnsCoordinates(latitude, longitude) {
    console.log("geting lon and lat.....");
    let user_geo_location = { latitude, longitude };
    console.log("user geo loc", user_geo_location);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${user_geo_location.latitude}&lon=${user_geo_location.longitude}&appid=`;

    try {
      const response = await fetch(url, {
        method: "GET",
      });

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
    let current_location_coordinates = (async () => {
      await getUserCurrentLocationCoordinates();
    })();

    console.log("Current location coordinates", current_location_coordinates);

    console.log("ABout to call getweather fnx");
    (async () => {
      getWeatherDetailsBasedOnsCoordinates(
        current_location_coordinates.latitude,
        current_location_coordinates.longitude
      );
    })();
    // console.log(weather_details);

    console.log("use effect");
  }, []);

  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100">
        {/* aside */}
        <MainNav />

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
            <DailyWeatherDetailsCard />
            <DailyWeatherDetailsCard />
            <DailyWeatherDetailsCard />
            <DailyWeatherDetailsCard />
            <DailyWeatherDetailsCard />
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

export default App;

import React from "react";
import { Button, Accordion } from "react-bootstrap";
import MainNav from "./components/MainNav";
import DailyWeatherDetailsCard from "./components/DailyWeatherDetailsCard";
import TodayHighlightCard from "./components/TodayHighlightCard";

function App() {
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

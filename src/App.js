import React from "react";
import { Button, Accordion } from "react-bootstrap";
import circle from "./circle.png";
import cloud from "./cloud.png";

function App() {
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100">
        {/* aside */}
        <div className="col-lg-4 px-5  " id="aside">
          <div className="py-5">
            <Button variant="secondary">Search for places</Button>
          </div>
          <div className="text-center  p-4 d-flex align-items-center justify-content-center">
            <div className="text-white ">
              <div>
                <div className="mb-5">
                  <img src={circle} />
                </div>
                <h1 id="tempeture-text">14℃</h1>
                <p className="fs-2 my-5">few clouds</p>
              </div>
              <div>
                <p className="my-5 fw-ligter">
                  Today <span className="mx-4">•</span> Wed, 13 Sep
                </p>
                <p>
                  <i class="bi bi-geo-alt-fill"></i> Liberia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* main area */}
        <div
          className="col-lg-8 d-flex flex-column  align-items-center"
          id="main-area"
        >
          {/* tempeture section  */}
          <div className="py-5  w-75 d-flex  justify-content-end">
            <Button variant="secondary">Search for places</Button>
          </div>

          {/* cards container  */}
          <div className=" w-75 d-flex  text-center text-white ">
            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

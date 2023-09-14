import React from "react";
import { Button, Accordion } from "react-bootstrap";
import circle from "./circle.png";
import cloud from "./cloud.png";

function App() {
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100">
        {/* aside */}
        <div className="col-lg-4 p-3  " id="aside">
          <div className="p-2">
            <Button variant="secondary">Search for places</Button>
          </div>
          <div
            className="text-center mt-5 p-4 d-flex align-items-center justify-content-center"
            // style={container_height_style}
          >
            <div className="text-white mt-5">
              <div>
                <div className="mb-5">
                  <img src={circle} />
                </div>
                <h1 id="tempeture-text">14℃</h1>
                <p className="fs-1 my-5">few clouds</p>
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
        <div className="col-lg-8" id="main-area">
          col-8
          <div className=" d-flex justify-content-center flex-md-wrap-reverse text-center w-75 text-white bg-danger  ">
            {/* weather detais card  */}
            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>

            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>

            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>

            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>

            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>

            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>
            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>

            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>
            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
                <p>78°C</p>
              </div>
            </div>

            <div className="weather-details-card p-4 m-1">
              <p>Friday</p>
              <div className="py-4">
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center mt-3">
                <p>31°C</p>
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

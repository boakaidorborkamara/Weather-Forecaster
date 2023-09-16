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
          {/* tempeture buttons section  */}
          <div className="py-5  w-75 d-flex  justify-content-end">
            <Button variant="secondary">Search for places</Button>
          </div>

          {/* week days weather details cards container  */}
          <div className=" w-75 d-flex flex-wrap justify-content-center  text-center text-white ">
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

          {/* today weather highlight details cards container */}
          <div className="w-75 d-flex flex-column text-center text-white">
            <div className="d-flex flex-wrap justify-content-center ">
              {/* section header  */}
              <h4 className=" col-10 pt-5 m-2 text-start">
                Today's Highlights
              </h4>

              {/*  today's hightlight cards  */}
              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div>
                  <h2 className="fs-1">
                    7<span className="fs-3">mph</span>
                  </h2>
                </div>
                <div>
                  <p>wsw</p>
                </div>
              </div>

              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div className="">
                  <h2>
                    7<span>mph</span>
                  </h2>
                </div>
                <div>
                  <p>wsw</p>
                </div>
              </div>

              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div>
                  <h2 className="fs-1">
                    7<span className="fs-3">mph</span>
                  </h2>
                </div>
              </div>

              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div className="">
                  <h2>
                    7<span>mph</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-white fw-light">
            Developed by: Boakai Dorbor Kamara
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

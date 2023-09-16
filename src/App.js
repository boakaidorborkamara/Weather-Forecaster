import React from "react";
import { Button, Accordion } from "react-bootstrap";
import circle from "./circle.png";
import cloud from "./cloud.png";
import CloudBackground from "./CloudBackground.png";

function App() {
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100">
        {/* aside */}
        <div className="col-lg-4 px-5  " id="aside">
          <div className="py-5">
            <Button variant="secondary">Search for places</Button>
          </div>
          <div
            className="text-center  p-4 d-flex flex-column align-items-center justify-content-center"
            id="aside-sub-container"
          >
            {/* background image  */}
            <img src={CloudBackground} id="aside-background-image" />
            <div className="text-white " id="aside-text-container">
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

        {/* search section  */}
        <div className="col-lg-4 px-5  " id="aside">
          <div className="text-white py-5 d-flex justify-content-end">
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
            ></button>
          </div>
          <div>
            <form className="form-inline my-2 my-lg-0 d-flex">
              <input
                className="form-control mr-sm-2 rounded-0"
                type="search"
                placeholder="Search location"
              />
              <button
                class="btn rounded-0 btn-secondary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* default countries  */}
          {/* <ul className="bg-danger">
            <li>Liberia</li>
            <li>Ghana</li>
            <li>Nigeria</li>
          </ul> */}

          <ul className="list-group list-group-flush mt-5 ">
            <li className="list-group-item my-3 text-white ">Liberia</li>
            <li className="list-group-item my-3 text-white ">Ghana</li>
            <li className="list-group-item my-3 text-white">Guinea</li>
          </ul>
        </div>

        {/* main area */}
        <div
          className="col-lg-8 d-flex flex-column  align-items-center"
          id="main-area"
        >
          {/* tempeture buttons section  */}
          <div className="py-5  w-75 d-flex  justify-content-lg-end  justify-content-sm-center">
            <div className="px-2">
              <Button variant="secondary ">°C</Button>
            </div>
            <div className="px-2">
              <Button variant="secondary">°F</Button>
            </div>
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

          <div className="my-4 text-center text-white fw-light">
            Developed by: Boakai Dorbor Kamara
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

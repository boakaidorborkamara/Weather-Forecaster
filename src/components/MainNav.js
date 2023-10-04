import React from "react";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import icon from "../assests/icon.png";
import CloudBackground from "../assests/CloudBackground.png";
import formatDate from "../Helper/formatDate";

function MainNav({ weather_details, setCountryToSearch, countryToSearch }) {
  const [display_main_nav, setDisplayMainNav] = useState(true);
  const searchedCountryRef = useRef();

  // hide search section when the close button is clicked
  const handleClose = () => {
    setDisplayMainNav(true);
  };

  // send signal that search area template should display
  const displaySearchAreaTemplate = () => {
    setDisplayMainNav(false);
  };

  // converts date from milliseconds to readable format
  function convertDate(epoch_timestamp) {
    let today = new Date(epoch_timestamp * 1000).toLocaleDateString();
    return today;
  }

  function handleSearch(countryName) {
    setCountryToSearch(countryName);
    console.log("REF", countryName);
    setDisplayMainNav(true);

    console.log("country to search", countryToSearch);
  }

  // contains main navigation and weather overview
  const main_navigation_template = (
    <div className="col-lg-4 px-5  pb-sm-5 " id="aside">
      <div className=" d-flex justify-content-between py-5">
        <div>
          <Button variant="secondary" onClick={displaySearchAreaTemplate}>
            Search for places
          </Button>
        </div>
        <div className=" d-flex justify-content-center align-items-center p-2 bg-secondary rounded-circle">
          <img src={icon} id="location-icon" />
        </div>
      </div>
      <div
        className="text-center  p-4 d-flex flex-column align-items-center justify-content-center"
        id="aside-sub-container"
      >
        {/* background image  */}
        <img src={CloudBackground} id="aside-background-image" />

        {/* today's weather details  */}
        <div className="text-white " id="aside-text-container">
          <div>
            <div className="mb-5 pb-5">
              <img
                src={require(`../assests/${weather_details.currentConditions.icon}.svg`)}
                id="current-day-weather-icon"
              />
            </div>
            <h1 id="tempeture-text" className="mt-5 pt-5">
              {weather_details.currentConditions.feelslike}℃
            </h1>
            <p className="fs-2 my-5">
              {weather_details.currentConditions.conditions}
            </p>
          </div>
          <div>
            <p className="my-5 fw-ligter">
              Today <span className="mx-4">•</span>{" "}
              {formatDate(
                convertDate(weather_details.currentConditions.datetimeEpoch)
              )}
            </p>
            <p>
              <i className="bi bi-geo-alt-fill"></i>{" "}
              {weather_details.resolvedAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // contains search bar and button
  const search_area_template = (
    <div className="col-lg-4 px-5  " id="aside">
      {/* close button  */}
      <div className="text-white py-5 d-flex justify-content-end">
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={handleClose}
        ></button>
      </div>

      {/* search box  */}
      <div>
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input
            className="form-control mr-sm-2 rounded-0"
            type="text"
            ref={searchedCountryRef}
            placeholder="Search location"
          />
          <button
            className="btn rounded-0 btn-secondary my-2 my-sm-0"
            type="button"
            onClick={() => {
              let input_text = searchedCountryRef.current.value;

              handleSearch(input_text);
            }}
          >
            Search
          </button>
        </form>
      </div>

      {/* default countries  */}
      <ul className="list-group list-group-flush mt-5 ">
        <li className="list-group-item my-3 text-white ">Liberia</li>
        <li className="list-group-item my-3 text-white ">Ghana</li>
        <li className="list-group-item my-3 text-white">Guinea</li>
      </ul>
    </div>
  );

  // condititonally render main_navigation_template or search_area_template
  return display_main_nav ? main_navigation_template : search_area_template;
}

export default MainNav;

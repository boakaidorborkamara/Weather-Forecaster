import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import icon from "../icon.png";
import TodayWeatherDetails from "./TodayWeatherDetails";

function MainNav() {
  const [display_main_nav, setDisplayMainNav] = useState(true);

  const displaySearchAreaTemplate = () => {
    setDisplayMainNav(!display_main_nav);
  };

  const handleClose = () => {
    setDisplayMainNav(true);
  };

  // contains main navigation
  const main_navigation_template = (
    <div className="col-lg-4 px-5  " id="aside">
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
      <TodayWeatherDetails />
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
      <ul className="list-group list-group-flush mt-5 ">
        <li className="list-group-item my-3 text-white ">Liberia</li>
        <li className="list-group-item my-3 text-white ">Ghana</li>
        <li className="list-group-item my-3 text-white">Guinea</li>
      </ul>
    </div>
  );

  return display_main_nav ? main_navigation_template : search_area_template;
}

export default MainNav;

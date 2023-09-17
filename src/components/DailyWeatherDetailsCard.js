import React from "react";
import cloud from "../cloud.png";

function DailyWeatherDetailsCard() {
  return (
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
  );
}

export default DailyWeatherDetailsCard;

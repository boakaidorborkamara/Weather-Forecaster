import React from "react";
import cloud from "../assests/cloud.png";

function DailyWeatherDetailsCard({ day_details }) {
  return (
    <div className="weather-details-card py-4 m-2">
      <div className="">
        <p>{day_details.datetime}</p>
        <img src={`../assets/rain.png`} className="card-image" />
      </div>
      <div className="d-flex text-center align-item-center justify-content-center mt-5">
        <p>{day_details.tempmin}°C</p>
        <span className="mx-3"></span>
        <p>{day_details.tempmax}°C</p>
      </div>
    </div>
  );
}

export default DailyWeatherDetailsCard;

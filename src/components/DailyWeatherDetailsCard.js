import React from "react";
import formatDate from "../Helper/formatDate";

function DailyWeatherDetailsCard({ day_details }) {
  return (
    <div className="d-flex flex-column weather-details-card p-3   m-2">
      <p className="card-date ">{formatDate(day_details.datetime)}</p>
      <div className="card-img-container  d-flex align-items-center justify-content-center">
        <img
          src={require(`../assests/${day_details.icon}.svg`)}
          className="card-image"
        />
      </div>
      <div className="card-temperatature d-flex text-center align-item-center justify-content-between mt-4">
        <p>{day_details.tempmin}°C</p>
        <span className="mx-3"></span>
        <p>{day_details.tempmax}°C</p>
      </div>
    </div>
  );
}

export default DailyWeatherDetailsCard;

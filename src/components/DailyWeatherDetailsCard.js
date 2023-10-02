import React from "react";
import formatDate from "../Helper/formatDate";

function DailyWeatherDetailsCard({ day_details }) {
  return (
    <div className="weather-details-card col-md-4 col-lg-2  m-2 pt-4">
      <div className="">
        <p>{formatDate(day_details.datetime)}</p>
        <div>
          <img
            src={require(`../assests/${day_details.icon}.svg`)}
            className="card-image"
          />
        </div>
      </div>
      <div className="d-flex text-center align-item-center justify-content-between mt-4">
        <p>{day_details.tempmin}°C</p>
        {/* <span className="mx-3"></span> */}
        <p>{day_details.tempmax}°C</p>
      </div>
    </div>
  );
}

export default DailyWeatherDetailsCard;

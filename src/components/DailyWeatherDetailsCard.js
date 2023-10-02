import React from "react";
import formatDate from "../Helper/formatDate";

function DailyWeatherDetailsCard({ day_details }) {
  // function setIcon(image_name){
  //   import image_name from "../assests/rain.png";

  // }

  return (
    <div className="weather-details-card py-2 m-2">
      <div className="">
        <p>{formatDate(day_details.datetime)}</p>
        <div>
          <img
            src={require(`../assests/${day_details.icon}.svg`)}
            className="card-image"
          />
        </div>
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

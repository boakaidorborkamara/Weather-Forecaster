import React from "react";
import cloud from "../assests/cloud.png";
import rain from "../assests/rain.png";

function DailyWeatherDetailsCard({ day_details }) {
  // function setIcon(image_name){
  //   import image_name from "../assests/rain.png";

  // }

  return (
    <div className="weather-details-card py-4 m-2">
      <div className="">
        <p>{day_details.datetime}</p>
        <img src={require("../assests/rain.png")} className="card-image" />
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

import React from "react";
import CloudBackground from "../CloudBackground.png";
import circle from "../circle.png";

function TodayWeatherDetails() {
  return (
    <div
      className="text-center  p-4 d-flex flex-column align-items-center justify-content-center"
      id="aside-sub-container"
    >
      {/* background image  */}
      <img src={CloudBackground} id="aside-background-image" />

      {/* today's weather details  */}
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
  );
}

export default TodayWeatherDetails;

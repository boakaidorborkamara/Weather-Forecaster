import React from "react";

function TodayHighlightCard() {
  return (
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
  );
}

export default TodayHighlightCard;

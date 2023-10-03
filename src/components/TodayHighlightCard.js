import React from "react";

function TodayHighlightCard({ card_name, value, measurement }) {
  return (
    <div className="weather-details-card py-4 m-2  col-5">
      <div>
        <p>{card_name}</p>
      </div>
      <div>
        <h2 className="fs-1">
          {value}
          <span className="fs-3">{measurement}</span>
        </h2>
      </div>
    </div>
  );
}

export default TodayHighlightCard;

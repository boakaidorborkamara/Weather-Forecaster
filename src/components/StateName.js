import React from "react";
import { Col } from "react-bootstrap";

function StateName({ weather_info }) {
  // const [state_name] = state_name;
  return (
    <Col lg="6">
      <h2>
        {weather_info.name},{weather_info.sys["country"]}
        {weather_info
          ? `${(weather_info.name, weather_info.sys["country"])}`
          : "none"}
      </h2>
    </Col>
  );
}

export default StateName;

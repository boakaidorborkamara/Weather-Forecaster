import React from "react";
import { Col } from "react-bootstrap";

function StateName({ weather_info }) {
  // const [state_name] = state_name;
  return (
    <Col lg="6">
      <h2>
        {weather_info.name},{weather_info.sys["country"]}
      </h2>
    </Col>
  );
}

export default StateName;

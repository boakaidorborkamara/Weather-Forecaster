import React from "react";
import { Row, Col } from "react-bootstrap";

function TempertureArea() {
  return (
    <Col xs={12} md={6}>
      <h5>Right Now</h5>
      <p>Wednesday, 12/12/2021</p>
      <Row>
        <Col>
          <img src={""} alt="Weather icon"></img>
        </Col>
        <Col>
          <h1 className="fs-1 text">29.1 f</h1>
          <p>Feels liek 209.1</p>
        </Col>
      </Row>
    </Col>
  );
}

export default TempertureArea;

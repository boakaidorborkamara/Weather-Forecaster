import React from "react";
import { Card, Col } from "react-bootstrap";

function DailyCards() {
  return (
    <Col>
      <Card className="p-3 text-center" style={{ width: "18rem" }}>
        <p className="text-center">Today</p>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>Mix Snow/Rain</Card.Text>
          <Card.Text>37.7</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DailyCards;

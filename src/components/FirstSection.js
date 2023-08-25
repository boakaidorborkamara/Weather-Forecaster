import React from "react";
import DetailTable from "./components/DetailsTable";
import TempertureArea from "./components/TempertureArea";
import StateName from "./components/StateName";
import { Row } from "react-bootstrap";

function FirstSection() {
  return (
    <div className="border p-5 bg-white mt-5 rounded-2">
      {/* city name */}
      <Row className="text-end pb-4">
        <StateName />
      </Row>
      {/* right side */}
      <Row>
        <TempertureArea />
        <DetailTable />
      </Row>
    </div>
  );
}

export default FirstSection;

import React from "react";
import { Button } from "react-bootstrap";
import icon from "../icon.png";

function MainNav() {
  return (
    <div className=" d-flex justify-content-between py-5">
      <div>
        <Button variant="secondary">Search for places</Button>
      </div>
      <div className=" d-flex justify-content-center align-items-center p-2 bg-secondary rounded-circle">
        <img src={icon} id="location-icon" />
      </div>
    </div>
  );
}

export default MainNav;

import React from "react";
import { Button, Accordion } from "react-bootstrap";

function App() {
  let container_height_style = { height: "100vh" };
  return (
    <div className="container-fluid h-100" style={container_height_style}>
      <div className="row">
        {/* aside */}
        <div className="col-lg-4 p-3  " id="aside">
          <div>
            <Button variant="secondary">Search for places</Button>
          </div>
          <div
            className="text-center mt-5 p-4 d-flex align-items-center justify-content-center"
            style={container_height_style}
          >
            <div className=" bg-primary">
              <div>
                <div>
                  <img src="..." class="img-thumbnail" alt="..." />
                </div>
                <h1>14℃</h1>
                <p>broken clouds</p>
              </div>
              <div>
                <p>Today • Wed, 13 Sep</p>
                <p>Kharkiv</p>
              </div>
            </div>
          </div>
        </div>

        {/* main area */}
        <div className="col-lg-8" id="main-area">
          col-8
        </div>
      </div>
    </div>
  );
}

export default App;

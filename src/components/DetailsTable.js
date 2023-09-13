import React from "react";
import { Table, Col } from "react-bootstrap";

function DetailTable({ weather_info }) {
  return (
    <Col>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Sunrise </td>
            <td>{weather_info.sys.sunrise}</td>
          </tr>
          <tr>
            <td>Sunset </td>
            <td>{weather_info.sys.sunset}</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{weather_info.main.humidity}</td>
          </tr>
          <tr>
            <td>Wind Speed</td>
            <td>{weather_info.wind.speed}</td>
          </tr>
          <tr>
            <td>Latitude/Longitude</td>
            <td>
              {weather_info.coord.lat} / {weather_info.coord.lon}
            </td>
          </tr>
          <tr>
            <td>As of</td>
            <td>{weather_info.coord["dt"]}</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}

export default DetailTable;

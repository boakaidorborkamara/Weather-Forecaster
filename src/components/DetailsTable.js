import React from "react";
import { Table, Col } from "react-bootstrap";

function DetailTable() {
  return (
    <Col>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Sunrise / Sunset </td>
            <td>7:00</td>
          </tr>
          <tr>
            <td>Air Quality</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>UV Index</td>
            <td>Jacob</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}

export default DetailTable;

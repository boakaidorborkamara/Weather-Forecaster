import React from "react";
import { Form, Col, Button, Row } from "react-bootstrap";

function Search() {
  return (
    <Col>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default Search;

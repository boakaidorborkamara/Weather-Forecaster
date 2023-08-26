import React from "react";
import { Form, Col, Button, Row } from "react-bootstrap";

function Search() {
  function handleSearch(e) {
    e.preventDefault();
    console.log(e.target);
    return "Working";
  }

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
            <Button type="submit" onClick={handleSearch}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default Search;

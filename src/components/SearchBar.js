import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

function SearchBar() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="fw-bold" href="#home">
          WEATHER-FORECASTER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          {/* <Form inline>
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
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SearchBar;

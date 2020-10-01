import React from "react";
import {
  Col,
  Row,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
} from "react-bootstrap";

function EighthSection(props) {
  return (
    <React.Fragment>
      <Row
        style={{
          marginTop: "40px",
          borderBottom: "2px",
          borderBottomColor: "grey",
        }}
      >
        <Col>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">React Book</Navbar.Brand>

            <Nav className="mr-auto">
              <Nav.Link href="#home">Compnay</Nav.Link>
              <Nav.Link href="#features">ERPNext</Nav.Link>
              <Nav.Link href="#pricing">Team</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <img
                src="https://frappebooks.com/files/facebooka6675a.svg"
                style={{ height: "24px", width: "24px" }}
              />
              <img
                src="https://frappebooks.com/files/twitter.svg"
                style={{ height: "24px", width: "24px", marginLeft: "10px" }}
              />
              <img
                src="https://frappebooks.com/files/medium.svg"
                style={{ height: "24px", width: "24px", marginLeft: "10px" }}
              />
              <img
                src="https://frappebooks.com/files/github.svg"
                style={{ height: "24px", width: "24px", marginLeft: "10px" }}
              />
            </Form>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" style={{ fontSize: "14px" }}>
              {" "}
              © Frappe. Content licensed under CC-BY-SA 3.0. +91 22 4897 0555 -
              hello@frappe.io
            </Navbar.Brand>

            <Nav className="mr-auto"></Nav>
            <Form inline>
              <Nav.Link href="#home">Built on Frappe</Nav.Link>
            </Form>
          </Navbar>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default EighthSection;

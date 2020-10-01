import React from "react";
import {
  Col,
  Row,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Book</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Docs</Nav.Link>
          <Nav.Link href="#link">Github</Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

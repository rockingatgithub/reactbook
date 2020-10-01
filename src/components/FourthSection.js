import React from "react";
import { Col, Row, Nav } from "react-bootstrap";

function FourthSection(props) {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <h1>Everything You Need</h1>
          <p>
            Create professional invoices, generate beautiful PDFs and send them
            to your customers.
          </p>
        </Col>
      </Row>
      <Row>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">DashBoard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Invoicing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Payment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Financial Reports</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Ledger</Nav.Link>
          </Nav.Item>
        </Nav>
        <img
          src="https://frappebooks.com/files/books-dashboarda2ada9.png"
          alt="dashboard-image"
          style={{ maxWidth: "auto", marginTop: "30px" }}
        />
      </Row>
    </React.Fragment>
  );
}

export default FourthSection;

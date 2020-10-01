import React from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";

function FirstSection(props) {
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col>
        <Jumbotron style={{ backgroundColor: "#ffffff" }}>
          <h1>Free, Modern Desktop Accounting </h1>
          <p>
            Simple, well designed, desktop accounting software for freelancers
            and small businesses. Free and Open Source.
          </p>
          <p>
            <Button variant="primary">Download</Button>
            <Button variant="secondary" style={{ marginLeft: "10px" }}>
              GitHub
            </Button>
          </p>
        </Jumbotron>
      </Col>
      <Col>
        <img
          src="https://frappebooks.com/files/frappebooks-hero.png"
          alt="intro-image"
          style={{ height: "400px" }}
        />
      </Col>
    </Row>
  );
}

export default FirstSection;

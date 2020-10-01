import React from "react";
import { Col, Row } from "react-bootstrap";

function SecondSection(props) {
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col>
        <img
          src="https://frappebooks.com/files/books-comic-homepage.jpeg"
          alt="comic-image"
          style={{ maxWidth: "100%", height: "auto !important" }}
        />
      </Col>
    </Row>
  );
}

export default SecondSection;

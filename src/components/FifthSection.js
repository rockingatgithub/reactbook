import React from "react";
import { Row, Col } from "react-bootstrap";

function FifthSection(props) {
  return (
    <Row style={{ backgroundColor: "#f9fafa", marginTop: "40px" }}>
      <Col>
        <h3>From the Team Behind ERPNext</h3>
        <p>
          We have been building business software for over a decade now.
          Learning from our mistakes and picking the best parts of our flagship
          product ERPNext, we came up with a simple app that does one thing
          well, Accounting.
        </p>
        <img
          src="https://frappebooks.com/files/frappe-team-mussoorie.webp"
          alt="team-image"
          style={{
            maxWidth: "100%",
            marginTop: "30px",
            height: "auto !important",
          }}
        />
      </Col>
    </Row>
  );
}

export default FifthSection;

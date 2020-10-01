import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

function SeventhSection(props) {
  return (
    <Row style={{ marginTop: "40px" }}>
      <Col>
        <Card
          className="text-center"
          style={{ backgroundColor: "#ecf5fe", height: "270px" }}
        >
          <Card.Body>
            <h3>Free Desktop Accounting Software for Small Businesses</h3>
            <Card.Text>
              Frappe Books simplifies invoicing, billing, and accounting for
              freelancers and small business owners.
            </Card.Text>
            <Button variant="primary">Download for Free</Button>
            <Card.Text style={{ fontSize: "12px" }}>
              Available for macOS, Linux and Windows{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default SeventhSection;

import React from "react";
import { Col, Row, Button, Card } from "react-bootstrap";

function ThirdSection(props) {
  return (
    <React.Fragment>
      <Row style={{ marginTop: "40px" }}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Small Business Accounting</Card.Title>
              <Card.Text>
                Everything you need from a small, simple small business
                accounting tool. Billing, Payments, Ledgers, Invoices,
                Reporting. A fully featured replacement for tools like GNU Cash
                and Tally.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>No Cloud</Card.Title>
              <Card.Text>
                Cloud apps make you dependent on service provider. A service
                like that is never truly free, and it does not have to be like
                that. With desktop apps, you have much more control over your
                data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "40px" }}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Free and Open Source</Card.Title>
              <Card.Text>
                Frappe Books is free software. This means it comes with the four
                essential freedoms. You are allowed to run it as you wish, you
                can look at its source code and modify it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Modern Web Friendly UI</Card.Title>
              <Card.Text>
                Frappe Books is built with our homegrown framework FrappeJS
                which is based on NodeJS and bundled with Electron. But it is
                still designed in a way how a desktop software functions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ThirdSection;

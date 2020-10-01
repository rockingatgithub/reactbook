import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function SixthSection(props) {
  return (
    <React.Fragment>
      <Row style={{ marginTop: "40px" }}>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Journel Enteries</Card.Title>
              <Card.Text>
                Record ad-hoc accounting entries for entering expenses, opening
                entires, and bank payments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Invoice Templates</Card.Title>
              <Card.Text>
                Beautiful Invoice templates that you can further customize with
                the color and logo of your brand.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Works Offline</Card.Title>
              <Card.Text>
                Frappe Books uses a local file from your computer and when you
                create invoices, it saves them on your local machine.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Open Source</Card.Title>
              <Card.Text>
                Frappe Books is free and open-source software. Help us improve
                it by reporting issues or fixing them on GitHub.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "40px" }}>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Privacy by Default</Card.Title>
              <Card.Text>
                Frappe Books data is never uploaded to a cloud, which means you
                never compromise your ownership and privacy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Portable</Card.Title>
              <Card.Text>
                Frappe Books uses the lightweight SQLite database which uses
                simple files to store their data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Financial Reports</Card.Title>
              <Card.Text>
                Frappe Books comes with standard financial reports like Profit
                and Loss Statement, Trial Balance and Balance Sheet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Body>
              <Card.Title>Multi-currency</Card.Title>
              <Card.Text>
                Record your invoices in your customer’s currency and Frappe
                Books will convert them in your currency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default SixthSection;

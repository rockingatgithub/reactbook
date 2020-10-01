import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import Header from "./Header";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import EighthSection from "./EighthSection";
class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Header />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EighthSection />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
